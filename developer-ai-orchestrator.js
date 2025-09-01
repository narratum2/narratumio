/*
 * Developer AI Orchestrator for Narratum.io
 * Purpose: Continuous monitoring across SEO, Performance, Accessibility, Links, Uptime, Security
 * Features: Plugin agents, adaptive scheduling, localStorage persistence, lightweight dashboard overlay
 */

(function () {
    'use strict';

    // Configuration
    const DEFAULT_CONFIG = {
        enabled: true,
        overlay: {
            enabled: true,
            startHidden: true,
        },
        scheduling: {
            tickMs: 15000,
            backoffMultiplier: 1.5,
            minIntervalMs: 30000,
            maxIntervalMs: 3600 * 1000,
            adaptiveness: 0.5
        },
        consent: {
            sendTelemetry: false
        }
    };

    // Utilities
    function nowIso() {
        return new Date().toISOString();
    }

    function safeJsonParse(str, fallback) {
        try { return JSON.parse(str); } catch { return fallback; }
    }

    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    function bySeverityScore(findings) {
        if (!findings || !findings.length) return 0;
        let score = 0;
        for (const f of findings) {
            if (!f || !f.severity) continue;
            if (f.severity === 'error') score += 2;
            else if (f.severity === 'warn') score += 1;
        }
        return score;
    }

    function el(tag, attrs, children) {
        const node = document.createElement(tag);
        if (attrs) {
            for (const [k, v] of Object.entries(attrs)) {
                if (k === 'style' && typeof v === 'object') {
                    for (const [sk, sv] of Object.entries(v)) node.style[sk] = sv;
                } else if (k === 'class') {
                    node.className = v;
                } else {
                    node.setAttribute(k, v);
                }
            }
        }
        if (children) {
            for (const child of children) {
                if (typeof child === 'string') node.appendChild(document.createTextNode(child));
                else if (child) node.appendChild(child);
            }
        }
        return node;
    }

    function tryFetch(url, options) {
        try { return fetch(url, options); } catch (e) { return Promise.reject(e); }
    }

    // Persistent store
    const STORE_KEY = 'aiTeam.store.v1';
    const DEFAULT_STORE = {
        agentRuns: {},
        agentIntervals: {},
        overlayVisible: null,
    };

    function loadStore() {
        const raw = localStorage.getItem(STORE_KEY);
        const data = safeJsonParse(raw, DEFAULT_STORE);
        return Object.assign({}, DEFAULT_STORE, data);
    }

    function saveStore(store) {
        localStorage.setItem(STORE_KEY, JSON.stringify(store));
    }

    // Orchestrator
    class AIOrchestrator {
        constructor(config) {
            this.config = Object.assign({}, DEFAULT_CONFIG, config || {});
            this.store = loadStore();
            this.agents = new Map();
            this.overlay = null;
            this.timer = null;
            this.ticking = false;
        }

        registerAgent(agent) {
            if (!agent || !agent.id || typeof agent.run !== 'function') return;
            const baseIntervalMs = clamp((agent.baseIntervalMinutes || 30) * 60 * 1000, this.config.scheduling.minIntervalMs, this.config.scheduling.maxIntervalMs);
            const lastInterval = this.store.agentIntervals[agent.id];
            const intervalMs = typeof lastInterval === 'number' ? lastInterval : baseIntervalMs;
            this.agents.set(agent.id, {
                meta: agent,
                state: {
                    lastRunAt: null,
                    lastStatus: 'idle',
                    lastFindings: [],
                    intervalMs,
                    baseIntervalMs
                }
            });
        }

        init() {
            if (!this.config.enabled) return;
            if (this.config.overlay.enabled) this.#ensureOverlay();
            this.#bindOnlineOffline();
            this.start();
            window.NarratumAI = {
                runAll: () => this.runAll('manual'),
                run: (id) => this.runAgentById(id, 'manual'),
                toggleOverlay: (visible) => this.#toggleOverlay(visible),
                setConfig: (cfg) => Object.assign(this.config, cfg || {}),
                dump: () => ({ config: this.config, store: this.store })
            };
        }

        start() {
            if (this.timer) clearInterval(this.timer);
            this.timer = setInterval(() => this.#tick(), this.config.scheduling.tickMs);
            // Kick off once after a short delay to avoid competing with main thread at load
            setTimeout(() => this.runAll('startup'), 3000);
        }

        runAll(trigger) {
            for (const id of this.agents.keys()) this.runAgentById(id, trigger);
        }

        async runAgentById(id, trigger) {
            const record = this.agents.get(id);
            if (!record) return;
            const { meta, state } = record;
            state.lastStatus = 'running';
            this.#refreshOverlay();
            const startedAt = Date.now();
            let result = null;
            try {
                result = await Promise.race([
                    Promise.resolve(meta.run(this.#createContext(meta), trigger)),
                    new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), meta.timeoutMs || 6000))
                ]);
            } catch (e) {
                result = { status: 'error', findings: [{ severity: 'error', message: String(e && e.message || e) }] };
            }
            const durationMs = Date.now() - startedAt;
            const findings = (result && result.findings) || [];
            const status = result && result.status || (findings.some(f => f.severity === 'error') ? 'error' : findings.length ? 'warn' : 'ok');
            const score = bySeverityScore(findings);

            // Adaptive scheduling
            const base = state.baseIntervalMs;
            const adaptiveness = clamp(this.config.scheduling.adaptiveness, 0, 1);
            const factor = clamp(1 - adaptiveness * Math.tanh(score / 3), 0.25, 2);
            state.intervalMs = clamp(Math.round(base * factor), this.config.scheduling.minIntervalMs, this.config.scheduling.maxIntervalMs);
            this.store.agentIntervals[id] = state.intervalMs;

            state.lastRunAt = nowIso();
            state.lastStatus = status;
            state.lastFindings = findings;
            this.store.agentRuns[id] = this.store.agentRuns[id] || [];
            this.store.agentRuns[id].push({ at: state.lastRunAt, status, durationMs, findings: findings.slice(0, 10) });
            if (this.store.agentRuns[id].length > 40) this.store.agentRuns[id].shift();
            saveStore(this.store);
            this.#refreshOverlay();
            if (this.config.consent.sendTelemetry && typeof navigator.sendBeacon === 'function') {
                try { navigator.sendBeacon('/ai-telemetry', JSON.stringify({ id, status, durationMs })); } catch {}
            }
        }

        #createContext(meta) {
            return {
                document,
                window,
                config: this.config,
                meta,
                disableHeavyAnimations: () => {
                    document.documentElement.setAttribute('data-reduced-animations', '1');
                    const stars = document.querySelector('.gentle-stars');
                    if (stars) stars.remove();
                }
            };
        }

        #tick() {
            if (this.ticking) return;
            this.ticking = true;
            try {
                const nowMs = Date.now();
                for (const [id, record] of this.agents.entries()) {
                    const lastAt = record.state.lastRunAt ? Date.parse(record.state.lastRunAt) : 0;
                    const due = nowMs - lastAt >= record.state.intervalMs;
                    if (due) this.runAgentById(id, 'schedule');
                }
            } finally {
                this.ticking = false;
            }
        }

        #bindOnlineOffline() {
            window.addEventListener('online', () => this.#refreshOverlay());
            window.addEventListener('offline', () => this.#refreshOverlay());
        }

        #ensureOverlay() {
            if (document.getElementById('ai-team-overlay')) return;
            const startHidden = this.store.overlayVisible === null ? this.config.overlay.startHidden : !this.store.overlayVisible;

            const button = el('button', { id: 'ai-team-fab', 'aria-label': 'Open AI Team', title: 'AI Team' });
            Object.assign(button.style, {
                position: 'fixed', right: '16px', bottom: '16px', zIndex: 9999,
                width: '44px', height: '44px', borderRadius: '22px', border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(10,21,32,0.8)', color: '#ffd36b', cursor: 'pointer', backdropFilter: 'blur(6px)'
            });
            button.textContent = 'AI';

            const panel = el('div', { id: 'ai-team-overlay', role: 'dialog', 'aria-modal': 'false' });
            Object.assign(panel.style, {
                position: 'fixed', right: '16px', bottom: '72px', zIndex: 9999,
                width: '320px', maxHeight: '60vh', overflow: 'auto', padding: '12px 12px 6px 12px',
                borderRadius: '10px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(10,21,32,0.9)',
                color: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.35)', display: startHidden ? 'none' : 'block'
            });

            const header = el('div', { class: 'ai-team-header' }, [
                el('div', { class: 'ai-team-title' }, ['Developer AI Team']),
                el('div', { style: { display: 'flex', gap: '8px', alignItems: 'center' } }, [
                    (function(){
                        const statusDot = el('span', { id: 'ai-team-net', title: 'Network status' });
                        Object.assign(statusDot.style, { width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' });
                        return statusDot;
                    })(),
                    (function(){
                        const closeBtn = el('button', { 'aria-label': 'Close' }, ['×']);
                        Object.assign(closeBtn.style, { background: 'transparent', color: '#fff', border: 'none', fontSize: '18px', cursor: 'pointer' });
                        closeBtn.addEventListener('click', () => this.#toggleOverlay(false));
                        return closeBtn;
                    }).call(this)
                ])
            ]);

            const list = el('div', { id: 'ai-team-list' });
            list.style.marginTop = '8px';

            panel.appendChild(header);
            panel.appendChild(list);
            document.body.appendChild(button);
            document.body.appendChild(panel);

            button.addEventListener('click', () => this.#toggleOverlay());
            this.overlay = { button, panel, list };
            this.#refreshOverlay();
        }

        #toggleOverlay(forceVisible) {
            if (!this.overlay) return;
            const isVisible = this.overlay.panel.style.display !== 'none';
            const next = forceVisible === undefined ? !isVisible : !!forceVisible;
            this.overlay.panel.style.display = next ? 'block' : 'none';
            this.store.overlayVisible = next;
            saveStore(this.store);
        }

        #statusColor(status) {
            if (status === 'ok') return '#31c48d';
            if (status === 'warn') return '#fbbf24';
            if (status === 'running') return '#60a5fa';
            if (status === 'error') return '#f87171';
            return '#9ca3af';
        }

        #refreshOverlay() {
            if (!this.overlay) return;
            const { list } = this.overlay;
            list.innerHTML = '';
            const net = document.getElementById('ai-team-net');
            if (net) net.style.background = navigator.onLine ? '#31c48d' : '#f87171';

            for (const [id, record] of this.agents.entries()) {
                const { meta, state } = record;
                const row = el('div', { class: 'ai-row' });
                Object.assign(row.style, { display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 4px', borderBottom: '1px solid rgba(255,255,255,0.06)' });
                const dot = el('span', {});
                Object.assign(dot.style, { width: '8px', height: '8px', borderRadius: '50%', background: this.#statusColor(state.lastStatus) });
                const name = el('div', { style: { flex: '1 1 auto', fontSize: '13px' } }, [meta.title || id]);
                const info = el('div', { style: { fontSize: '11px', color: 'rgba(255,255,255,0.7)' } }, [
                    state.lastRunAt ? new Date(state.lastRunAt).toLocaleTimeString() : '—',
                    ' · ', Math.round(state.intervalMs / 60000) + 'm'
                ]);
                const btn = el('button', { 'aria-label': 'Run now' }, ['Run']);
                Object.assign(btn.style, { background: '#15212e', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', fontSize: '11px', padding: '4px 8px', cursor: 'pointer' });
                btn.addEventListener('click', () => this.runAgentById(id, 'manual'));
                row.appendChild(dot); row.appendChild(name); row.appendChild(info); row.appendChild(btn);

                // Show last finding (first line) if warning/error
                const f = (state.lastFindings || []).find(x => x && x.message);
                if (f) {
                    const msg = el('div', { style: { marginTop: '4px', fontSize: '11px', color: 'rgba(255,255,255,0.85)' } }, [
                        (f.severity ? '[' + f.severity + '] ' : '' ) + f.message
                    ]);
                    row.appendChild(el('div', { style: { flexBasis: '100%' } }));
                    row.appendChild(msg);
                }

                list.appendChild(row);
            }
        }
    }

    // AGENTS
    const SEOAgent = {
        id: 'seo',
        title: 'SEO',
        baseIntervalMinutes: 60,
        timeoutMs: 5000,
        run(ctx) {
            const findings = [];
            const d = ctx.document;
            const head = d.querySelector('head');
            const title = d.querySelector('title');
            const metaDesc = d.querySelector('meta[name="description"]');
            const canonical = d.querySelector('link[rel="canonical"]');
            const h1 = d.querySelector('h1');

            // Checks
            if (!title || !title.textContent || title.textContent.trim().length < 10) findings.push({ severity: 'warn', message: 'Title missing or too short.' });
            if (!metaDesc || !metaDesc.getAttribute('content') || metaDesc.getAttribute('content').length < 50) findings.push({ severity: 'warn', message: 'Meta description missing or too short.' });
            if (!canonical) findings.push({ severity: 'warn', message: 'Canonical link missing.' });
            if (!h1) findings.push({ severity: 'warn', message: 'No H1 on page.' });
            if (!d.querySelector('meta[property="og:title"]')) findings.push({ severity: 'warn', message: 'Open Graph tags missing.' });
            if (!d.querySelector('meta[property="twitter:card"]')) findings.push({ severity: 'warn', message: 'Twitter card tags missing.' });

            // Structured data injection (idempotent)
            const jsonldId = 'ai-jsonld';
            if (!d.getElementById(jsonldId) && head) {
                const jsonld = {
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'Narratum',
                    url: d.location.origin + '/',
                    sameAs: [
                        'https://instagram.com/narratum_io',
                        'https://x.com/narratum_io'
                    ]
                };
                const script = d.createElement('script');
                script.type = 'application/ld+json';
                script.id = jsonldId;
                script.textContent = JSON.stringify(jsonld);
                head.appendChild(script);
            }

            return { status: findings.length ? 'warn' : 'ok', findings };
        }
    };

    const PerformanceAgent = {
        id: 'perf',
        title: 'Performance',
        baseIntervalMinutes: 30,
        timeoutMs: 5000,
        run(ctx) {
            const findings = [];
            const nav = performance.getEntriesByType('navigation')[0];
            const paints = performance.getEntriesByType('paint');
            const fcpEntry = paints.find(p => p.name === 'first-contentful-paint');
            const fcp = fcpEntry ? fcpEntry.startTime : null;
            const dcl = nav ? nav.domContentLoadedEventEnd : null;
            const load = nav ? nav.loadEventEnd : null;

            if (fcp && fcp > 2000) findings.push({ severity: 'warn', message: 'FCP > 2s. Consider reducing above-the-fold work.' });
            if (dcl && dcl > 2500) findings.push({ severity: 'warn', message: 'DOMContentLoaded > 2.5s. Heavy scripts or rendering.' });
            if (load && load > 4000) findings.push({ severity: 'warn', message: 'Load > 4s. Consider deferring non-critical assets.' });

            // Heuristic: reduce heavy visuals on mobile if slow
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile && ((fcp && fcp > 2500) || (load && load > 5000))) {
                ctx.disableHeavyAnimations();
                findings.push({ severity: 'warn', message: 'Reduced heavy animations on mobile due to slow metrics.' });
            }

            return { status: findings.length ? 'warn' : 'ok', findings, metrics: { fcp, dcl, load } };
        }
    };

    const AccessibilityAgent = {
        id: 'a11y',
        title: 'Accessibility',
        baseIntervalMinutes: 90,
        timeoutMs: 5000,
        run(ctx) {
            const findings = [];
            const d = ctx.document;
            // Images without alt
            const imgs = Array.from(d.querySelectorAll('img'));
            const imgsMissingAlt = imgs.filter(img => !img.hasAttribute('alt') || img.getAttribute('alt').trim() === '');
            if (imgsMissingAlt.length) findings.push({ severity: 'warn', message: `${imgsMissingAlt.length} image(s) missing alt.` });

            // Links without accessible name
            const anchors = Array.from(d.querySelectorAll('a'));
            const anchorsNoName = anchors.filter(a => !(a.textContent && a.textContent.trim()) && !a.getAttribute('aria-label'));
            if (anchorsNoName.length) findings.push({ severity: 'warn', message: `${anchorsNoName.length} link(s) lack accessible name.` });

            // Form inputs with no labels
            const inputs = Array.from(d.querySelectorAll('input, select, textarea'));
            const inputsNoLabel = inputs.filter(el => {
                if (el.type === 'hidden') return false;
                const id = el.id;
                if (id && d.querySelector(`label[for="${id}"]`)) return false;
                if (el.closest('label')) return false;
                return true;
            });
            if (inputsNoLabel.length) findings.push({ severity: 'warn', message: `${inputsNoLabel.length} form control(s) without label.` });

            return { status: findings.length ? 'warn' : 'ok', findings };
        }
    };

    const LinksAgent = {
        id: 'links',
        title: 'Links',
        baseIntervalMinutes: 120,
        timeoutMs: 6000,
        async run(ctx) {
            const findings = [];
            const d = ctx.document;
            const anchors = Array.from(d.querySelectorAll('a[href]'));
            const relative = anchors.filter(a => /^([#.])|^(\/|\.\/|\.\.\/)/.test(a.getAttribute('href')));
            // Check relative links with HEAD (best-effort; may be blocked by CORS in some setups)
            const checks = relative.slice(0, 10).map(async a => {
                const href = a.getAttribute('href');
                if (!href || href.startsWith('#')) return;
                try {
                    const res = await tryFetch(href, { method: 'HEAD', cache: 'no-cache' });
                    if (!res.ok) findings.push({ severity: 'warn', message: `Broken link: ${href} (${res.status})` });
                } catch (e) {
                    // Network errors could be CORS-related; skip marking as broken
                }
            });
            await Promise.allSettled(checks);
            return { status: findings.length ? 'warn' : 'ok', findings };
        }
    };

    const UptimeAgent = {
        id: 'uptime',
        title: 'Uptime',
        baseIntervalMinutes: 5,
        timeoutMs: 4000,
        async run() {
            const findings = [];
            if (!navigator.onLine) findings.push({ severity: 'error', message: 'Offline (navigator.onLine=false)' });
            // Best-effort ping
            try {
                const res = await tryFetch('/', { method: 'HEAD', cache: 'no-cache' });
                if (!res.ok) findings.push({ severity: 'warn', message: `Ping failed: ${res.status}` });
            } catch (e) {
                // Ignore network/CORS errors; navigator.onLine should suffice
            }
            return { status: findings.some(f => f.severity === 'error') ? 'error' : findings.length ? 'warn' : 'ok', findings };
        }
    };

    const SecurityAgent = {
        id: 'security',
        title: 'Security',
        baseIntervalMinutes: 180,
        timeoutMs: 5000,
        run(ctx) {
            const findings = [];
            const d = ctx.document;
            // External target=_blank should include rel=noopener
            const externalBlank = Array.from(d.querySelectorAll('a[target="_blank"]')).filter(a => {
                const href = a.getAttribute('href') || '';
                return /^https?:\/\//i.test(href);
            });
            for (const a of externalBlank) {
                const rel = (a.getAttribute('rel') || '').toLowerCase();
                if (!/noopener/.test(rel)) findings.push({ severity: 'warn', message: 'Add rel="noopener" to external target=_blank link.' });
            }

            // Forms must submit over HTTPS
            const forms = Array.from(d.querySelectorAll('form[action]'));
            for (const f of forms) {
                const action = f.getAttribute('action');
                if (/^http:\/\//i.test(action)) findings.push({ severity: 'error', message: 'Form action uses http. Use https.' });
            }

            return { status: findings.some(f => f.severity === 'error') ? 'error' : findings.length ? 'warn' : 'ok', findings };
        }
    };

    const LegalAgent = {
        id: 'legal',
        title: 'Legal/Consent',
        baseIntervalMinutes: 180,
        timeoutMs: 4000,
        run() {
            const findings = [];
            if (!window.legalContent) findings.push({ severity: 'warn', message: 'Legal content not loaded.' });
            const prefs = safeJsonParse(localStorage.getItem('cookiePreferences'), null);
            if (!prefs) findings.push({ severity: 'warn', message: 'Cookie preferences not set.' });
            return { status: findings.length ? 'warn' : 'ok', findings };
        }
    };

    // Bootstrap orchestrator
    function bootstrap() {
        try {
            const orchestrator = new AIOrchestrator(window.NARRATUM_AI_CONFIG || {});
            orchestrator.registerAgent(SEOAgent);
            orchestrator.registerAgent(PerformanceAgent);
            orchestrator.registerAgent(AccessibilityAgent);
            orchestrator.registerAgent(LinksAgent);
            orchestrator.registerAgent(UptimeAgent);
            orchestrator.registerAgent(SecurityAgent);
            orchestrator.registerAgent(LegalAgent);
            orchestrator.init();
            // Expose for debugging
            window.__NarratumAIOrchestrator = orchestrator;
        } catch (e) {
            // Do not break the site
            console.warn('[AI Orchestrator] Failed to initialize:', e);
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootstrap);
    else bootstrap();
})();


