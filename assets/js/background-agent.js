/**
 * Narratum.io Background Agent
 * Continuous Website Optimization & Monitoring System
 * 
 * This agent runs in the background to:
 * - Monitor website performance and user engagement
 * - Analyze design effectiveness and suggest improvements
 * - Track content freshness and relevance
 * - Competitive intelligence gathering
 * - Automated A/B test suggestions
 * - SEO optimization recommendations
 */

class NarratumBackgroundAgent {
    constructor() {
        this.version = '1.0.0';
        this.isActive = false;
        this.monitoringInterval = 30000; // 30 seconds
        this.analysisData = {
            performance: {},
            userBehavior: {},
            contentMetrics: {},
            designEffectiveness: {},
            competitiveIntel: {},
            seoHealth: {}
        };
        this.optimizationQueue = [];
        this.lastAnalysis = null;
        
        console.log('[Background Agent] Narratum.io optimization agent initialized');
        this.initialize();
    }

    async initialize() {
        try {
            // Wait for page to be fully loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.start());
            } else {
                this.start();
            }
        } catch (error) {
            console.error('[Background Agent] Initialization error:', error);
        }
    }

    start() {
        if (this.isActive) return;
        
        this.isActive = true;
        console.log('[Background Agent] Starting continuous optimization monitoring...');
        
        // Initial analysis
        this.runComprehensiveAnalysis();
        
        // Set up monitoring intervals
        this.setupMonitoring();
        
        // Initialize user behavior tracking
        this.initializeUserTracking();
        
        // Set up performance observers
        this.setupPerformanceMonitoring();
        
        // Start competitive intelligence
        this.initializeCompetitiveIntel();
    }

    stop() {
        this.isActive = false;
        console.log('[Background Agent] Stopping optimization monitoring...');
        
        if (this.monitoringTimer) {
            clearInterval(this.monitoringTimer);
        }
    }

    // === CORE MONITORING SYSTEMS ===

    setupMonitoring() {
        this.monitoringTimer = setInterval(() => {
            if (this.isActive) {
                this.runPerformanceCheck();
                this.analyzeUserEngagement();
                this.checkContentFreshness();
                this.evaluateDesignEffectiveness();
                this.generateOptimizationSuggestions();
            }
        }, this.monitoringInterval);
    }

    async runComprehensiveAnalysis() {
        console.log('[Background Agent] Running comprehensive analysis...');
        
        try {
            await Promise.all([
                this.analyzePageStructure(),
                this.assessVisualHierarchy(),
                this.evaluateUserFlow(),
                this.checkAccessibility(),
                this.analyzeSEOHealth(),
                this.monitorLoadingPerformance()
            ]);
            
            this.lastAnalysis = new Date();
            this.reportFindings();
            
        } catch (error) {
            console.error('[Background Agent] Analysis error:', error);
        }
    }

    // === PERFORMANCE MONITORING ===

    setupPerformanceMonitoring() {
        if ('PerformanceObserver' in window) {
            // Monitor Core Web Vitals
            const vitalsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.recordVital(entry);
                }
            });
            
            vitalsObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });
            
            // Monitor resource loading
            const resourceObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.analyzeResourceLoading(entry);
                }
            });
            
            resourceObserver.observe({ entryTypes: ['resource'] });
        }
    }

    runPerformanceCheck() {
        const performance = window.performance;
        const timing = performance.timing;
        
        this.analysisData.performance = {
            timestamp: new Date(),
            loadTime: timing.loadEventEnd - timing.navigationStart,
            domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
            firstPaint: this.getFirstPaint(),
            resourceCount: performance.getEntriesByType('resource').length,
            memoryUsage: this.getMemoryUsage(),
            connectionType: this.getConnectionInfo()
        };
        
        this.evaluatePerformanceThresholds();
    }

    recordVital(entry) {
        const vitals = this.analysisData.performance.vitals || {};
        
        switch (entry.entryType) {
            case 'paint':
                if (entry.name === 'first-contentful-paint') {
                    vitals.fcp = entry.startTime;
                    this.assessFCPOptimization(entry.startTime);
                }
                break;
            case 'largest-contentful-paint':
                vitals.lcp = entry.startTime;
                this.assessLCPOptimization(entry.startTime);
                break;
            case 'layout-shift':
                vitals.cls = (vitals.cls || 0) + entry.value;
                break;
        }
        
        this.analysisData.performance.vitals = vitals;
    }

    // === USER BEHAVIOR ANALYSIS ===

    initializeUserTracking() {
        this.userSession = {
            startTime: new Date(),
            interactions: [],
            scrollDepth: 0,
            timeOnSections: {},
            clickHeatmap: {},
            deviceInfo: this.getDeviceInfo()
        };
        
        this.setupUserEventListeners();
    }

    setupUserEventListeners() {
        // Scroll depth tracking
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                this.userSession.scrollDepth = Math.round(scrollPercent);
            }
            this.trackSectionViewing();
        });
        
        // Click tracking
        document.addEventListener('click', (e) => {
            this.recordClick(e);
        });
        
        // Form interaction tracking
        document.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('focus', (e) => {
                this.recordFormInteraction('focus', e.target);
            });
            
            field.addEventListener('blur', (e) => {
                this.recordFormInteraction('blur', e.target);
            });
        });
        
        // Symbol interaction tracking
        document.querySelectorAll('.symbol-item').forEach(symbol => {
            symbol.addEventListener('click', (e) => {
                this.recordSymbolInteraction(symbol.getAttribute('data-symbol'));
            });
        });
        
        // Navigation pattern tracking
        document.querySelectorAll('.nav-dot, .anchor-link').forEach(nav => {
            nav.addEventListener('click', (e) => {
                this.recordNavigationPattern(nav.getAttribute('data-section'));
            });
        });
    }

    analyzeUserEngagement() {
        const currentTime = new Date();
        const sessionDuration = currentTime - this.userSession.startTime;
        
        this.analysisData.userBehavior = {
            timestamp: currentTime,
            sessionDuration: sessionDuration,
            scrollDepth: this.userSession.scrollDepth,
            interactionCount: this.userSession.interactions.length,
            timeOnSections: this.userSession.timeOnSections,
            engagementScore: this.calculateEngagementScore(),
            userFlow: this.analyzeUserFlow(),
            dropOffPoints: this.identifyDropOffPoints()
        };
        
        this.suggestEngagementImprovements();
    }

    // === DESIGN EFFECTIVENESS ANALYSIS ===

    async analyzePageStructure() {
        const structure = {
            sectionCount: document.querySelectorAll('.section').length,
            navigationElements: document.querySelectorAll('nav, .nav-dot, .anchor-link').length,
            interactiveElements: document.querySelectorAll('button, .symbol-item, form').length,
            visualElements: document.querySelectorAll('svg, .animation, .effect').length,
            contentBlocks: document.querySelectorAll('p, h1, h2, h3, li').length
        };
        
        this.analysisData.designEffectiveness.structure = structure;
        this.evaluateStructuralOptimizations(structure);
    }

    assessVisualHierarchy() {
        const hierarchy = {
            h1Count: document.querySelectorAll('h1').length,
            h2Count: document.querySelectorAll('h2').length,
            h3Count: document.querySelectorAll('h3').length,
            ctaElements: document.querySelectorAll('.submit-button, .contact-email, .highlight-text').length,
            visualWeight: this.calculateVisualWeight(),
            readingFlow: this.assessReadingFlow()
        };
        
        this.analysisData.designEffectiveness.hierarchy = hierarchy;
        this.suggestHierarchyImprovements(hierarchy);
    }

    evaluateUserFlow() {
        const flowAnalysis = {
            entryPoints: this.identifyEntryPoints(),
            conversionPaths: this.mapConversionPaths(),
            exitPoints: this.identifyExitPoints(),
            navigationPatterns: this.analyzeNavigationPatterns(),
            frictionPoints: this.identifyFrictionPoints()
        };
        
        this.analysisData.designEffectiveness.userFlow = flowAnalysis;
        return flowAnalysis;
    }

    // === CONTENT ANALYSIS ===

    checkContentFreshness() {
        const content = {
            lastUpdated: this.getLastModified(),
            dynamicElements: document.querySelectorAll('[data-dynamic]').length,
            staticContent: this.analyzeStaticContent(),
            interactiveContent: this.analyzeInteractiveContent(),
            mediaElements: this.analyzeMediaContent()
        };
        
        this.analysisData.contentMetrics = content;
        this.suggestContentUpdates(content);
    }

    analyzeStaticContent() {
        const textElements = document.querySelectorAll('p, h1, h2, h3, li, span');
        let totalWords = 0;
        let readabilityScore = 0;
        
        textElements.forEach(element => {
            const text = element.textContent.trim();
            const wordCount = text.split(/\s+/).length;
            totalWords += wordCount;
        });
        
        return {
            totalWords,
            estimatedReadingTime: Math.ceil(totalWords / 200), // 200 WPM average
            readabilityScore: this.calculateReadabilityScore(),
            keywordDensity: this.analyzeKeywordDensity()
        };
    }

    // === SEO HEALTH MONITORING ===

    analyzeSEOHealth() {
        const seo = {
            titleOptimization: this.analyzeTitleTags(),
            metaDescriptions: this.analyzeMetaDescriptions(),
            headingStructure: this.analyzeHeadingStructure(),
            imageOptimization: this.analyzeImageSEO(),
            internalLinking: this.analyzeInternalLinks(),
            schemaMarkup: this.analyzeSchemaMarkup(),
            loadingSpeed: this.analysisData.performance.loadTime
        };
        
        this.analysisData.seoHealth = seo;
        this.suggestSEOImprovements(seo);
    }

    // === COMPETITIVE INTELLIGENCE ===

    initializeCompetitiveIntel() {
        // Note: This would typically connect to external APIs
        // For privacy and security, we'll focus on internal metrics
        this.competitiveMetrics = {
            industryBenchmarks: this.getIndustryBenchmarks(),
            designTrends: this.analyzeCurrentDesignTrends(),
            performanceStandards: this.getPerformanceStandards()
        };
    }

    // === OPTIMIZATION SUGGESTIONS ===

    generateOptimizationSuggestions() {
        const suggestions = [];
        
        // Performance optimizations
        if (this.analysisData.performance.loadTime > 3000) {
            suggestions.push({
                type: 'performance',
                priority: 'high',
                title: 'Optimize Loading Performance',
                description: 'Page load time exceeds 3 seconds. Consider image optimization, code splitting, or CDN implementation.',
                impact: 'User engagement and SEO rankings',
                implementation: 'Medium effort - 2-4 hours'
            });
        }
        
        // User engagement optimizations
        if (this.analysisData.userBehavior.scrollDepth < 60) {
            suggestions.push({
                type: 'engagement',
                priority: 'medium',
                title: 'Improve Content Engagement',
                description: 'Users are not scrolling past 60% of the page. Consider content restructuring or visual improvements.',
                impact: 'Increased time on site and conversion rates',
                implementation: 'High effort - 1-2 days'
            });
        }
        
        // Design effectiveness optimizations
        if (this.analysisData.userBehavior.interactionCount < 3) {
            suggestions.push({
                type: 'design',
                priority: 'medium',
                title: 'Enhance Interactive Elements',
                description: 'Low interaction rates suggest need for more engaging interactive elements.',
                impact: 'Better user engagement and lead qualification',
                implementation: 'Medium effort - 4-8 hours'
            });
        }
        
        // Content freshness
        const daysSinceUpdate = this.getDaysSinceLastUpdate();
        if (daysSinceUpdate > 30) {
            suggestions.push({
                type: 'content',
                priority: 'low',
                title: 'Update Content Freshness',
                description: 'Content hasn\'t been updated in over 30 days. Consider adding new case studies or insights.',
                impact: 'SEO and thought leadership positioning',
                implementation: 'Low effort - 1-2 hours'
            });
        }
        
        this.optimizationQueue = suggestions;
        this.prioritizeOptimizations();
    }

    prioritizeOptimizations() {
        this.optimizationQueue.sort((a, b) => {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    }

    // === REPORTING & NOTIFICATIONS ===

    reportFindings() {
        const report = {
            timestamp: new Date(),
            performanceScore: this.calculatePerformanceScore(),
            engagementScore: this.calculateEngagementScore(),
            seoScore: this.calculateSEOScore(),
            optimizationOpportunities: this.optimizationQueue.length,
            criticalIssues: this.optimizationQueue.filter(item => item.priority === 'high').length,
            recommendations: this.getTopRecommendations()
        };
        
        console.log('[Background Agent] Analysis Report:', report);
        
        // Store report for dashboard
        if (window.localStorage) {
            localStorage.setItem('narratum_agent_report', JSON.stringify(report));
        }
        
        // Trigger notifications for critical issues
        if (report.criticalIssues > 0) {
            this.notifyCriticalIssues(report);
        }
        
        return report;
    }

    notifyCriticalIssues(report) {
        const criticalItems = this.optimizationQueue.filter(item => item.priority === 'high');
        
        console.warn('[Background Agent] Critical Issues Detected:', {
            count: criticalItems.length,
            issues: criticalItems.map(item => item.title)
        });
        
        // Could integrate with notification systems
        // this.sendEmailAlert(criticalItems);
        // this.sendSlackNotification(criticalItems);
    }

    // === UTILITY FUNCTIONS ===

    calculateEngagementScore() {
        let score = 0;
        
        // Time on site (max 30 points)
        const sessionMinutes = (new Date() - this.userSession.startTime) / 60000;
        score += Math.min(sessionMinutes * 2, 30);
        
        // Scroll depth (max 25 points)
        score += (this.userSession.scrollDepth / 100) * 25;
        
        // Interactions (max 25 points)
        score += Math.min(this.userSession.interactions.length * 5, 25);
        
        // Section viewing (max 20 points)
        const sectionsViewed = Object.keys(this.userSession.timeOnSections).length;
        score += Math.min(sectionsViewed * 3, 20);
        
        return Math.round(score);
    }

    calculatePerformanceScore() {
        let score = 100;
        
        // Load time penalties
        const loadTime = this.analysisData.performance.loadTime || 0;
        if (loadTime > 1000) score -= 10;
        if (loadTime > 2000) score -= 15;
        if (loadTime > 3000) score -= 20;
        
        // Core Web Vitals
        const vitals = this.analysisData.performance.vitals || {};
        if (vitals.fcp > 1800) score -= 10;
        if (vitals.lcp > 2500) score -= 15;
        if (vitals.cls > 0.1) score -= 10;
        
        return Math.max(score, 0);
    }

    calculateSEOScore() {
        let score = 100;
        const seo = this.analysisData.seoHealth || {};
        
        // Basic SEO elements
        if (!seo.titleOptimization?.isOptimal) score -= 15;
        if (!seo.metaDescriptions?.isComplete) score -= 10;
        if (!seo.headingStructure?.isProper) score -= 10;
        if (!seo.imageOptimization?.hasAltTags) score -= 10;
        
        // Performance impact on SEO
        if (this.analysisData.performance.loadTime > 3000) score -= 20;
        
        return Math.max(score, 0);
    }

    getTopRecommendations() {
        return this.optimizationQueue.slice(0, 3).map(item => ({
            title: item.title,
            impact: item.impact,
            priority: item.priority
        }));
    }

    // === EVENT TRACKING HELPERS ===

    recordClick(event) {
        const element = event.target;
        const clickData = {
            timestamp: new Date(),
            element: element.tagName,
            className: element.className,
            id: element.id,
            coordinates: { x: event.clientX, y: event.clientY },
            text: element.textContent?.slice(0, 50)
        };
        
        this.userSession.interactions.push({
            type: 'click',
            data: clickData
        });
        
        // Update click heatmap
        const key = `${Math.floor(event.clientX / 50)}-${Math.floor(event.clientY / 50)}`;
        this.userSession.clickHeatmap[key] = (this.userSession.clickHeatmap[key] || 0) + 1;
    }

    recordFormInteraction(type, field) {
        this.userSession.interactions.push({
            type: 'form',
            data: {
                timestamp: new Date(),
                action: type,
                field: field.name || field.id,
                fieldType: field.type
            }
        });
    }

    recordSymbolInteraction(symbol) {
        this.userSession.interactions.push({
            type: 'symbol',
            data: {
                timestamp: new Date(),
                symbol: symbol,
                section: 'approach'
            }
        });
    }

    recordNavigationPattern(section) {
        this.userSession.interactions.push({
            type: 'navigation',
            data: {
                timestamp: new Date(),
                target: section,
                source: window.location.hash
            }
        });
    }

    trackSectionViewing() {
        const sections = document.querySelectorAll('.section');
        const viewportCenter = window.scrollY + (window.innerHeight / 2);
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionBottom = sectionTop + rect.height;
            
            if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
                const sectionId = section.id;
                if (!this.userSession.timeOnSections[sectionId]) {
                    this.userSession.timeOnSections[sectionId] = {
                        startTime: new Date(),
                        totalTime: 0
                    };
                }
            }
        });
    }

    // === ANALYSIS HELPERS ===

    getFirstPaint() {
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        return fcp ? fcp.startTime : null;
    }

    getMemoryUsage() {
        if (performance.memory) {
            return {
                used: performance.memory.usedJSHeapSize,
                total: performance.memory.totalJSHeapSize,
                limit: performance.memory.jsHeapSizeLimit
            };
        }
        return null;
    }

    getConnectionInfo() {
        if (navigator.connection) {
            return {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            };
        }
        return null;
    }

    getDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            screen: {
                width: screen.width,
                height: screen.height
            },
            pixelRatio: window.devicePixelRatio || 1,
            touchEnabled: 'ontouchstart' in window
        };
    }

    // === PUBLIC API ===

    getAnalysisData() {
        return { ...this.analysisData };
    }

    getOptimizationQueue() {
        return [...this.optimizationQueue];
    }

    getLatestReport() {
        if (window.localStorage) {
            const stored = localStorage.getItem('narratum_agent_report');
            return stored ? JSON.parse(stored) : null;
        }
        return null;
    }

    // Manual trigger for immediate analysis
    triggerAnalysis() {
        console.log('[Background Agent] Manual analysis triggered...');
        return this.runComprehensiveAnalysis();
    }

    // Get real-time recommendations
    getRecommendations() {
        this.generateOptimizationSuggestions();
        return this.getTopRecommendations();
    }
}

// === DASHBOARD INTEGRATION ===

// The AgentDashboard is now handled by the developer-ai-orchestrator.
// The code below is deprecated and will be removed in a future version.
/*
class AgentDashboard {
    constructor(agent) {
        this.agent = agent;
        this.createDashboard();
    }

    createDashboard() {
        // Create floating dashboard button
        const dashboardToggle = document.createElement('button');
        dashboardToggle.innerHTML = '📊';
        dashboardToggle.style.cssText = `
            position: fixed;
            bottom: 80px;
            left: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(251, 191, 36, 0.9);
            border: none;
            font-size: 24px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        dashboardToggle.addEventListener('click', () => this.toggleDashboard());
        document.body.appendChild(dashboardToggle);
        
        // Create dashboard panel
        this.createDashboardPanel();
    }

    createDashboardPanel() {
        const panel = document.createElement('div');
        panel.id = 'agent-dashboard';
        panel.style.cssText = `
            position: fixed;
            bottom: 140px;
            left: 20px;
            width: 350px;
            max-height: 400px;
            background: rgba(10, 21, 32, 0.95);
            border: 1px solid rgba(251, 191, 36, 0.3);
            border-radius: 12px;
            padding: 20px;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-size: 14px;
            z-index: 999;
            transform: translateX(-400px);
            transition: transform 0.3s ease;
            overflow-y: auto;
        `;
        
        document.body.appendChild(panel);
        this.panel = panel;
        this.updateDashboard();
        
        // Auto-update every 30 seconds
        setInterval(() => this.updateDashboard(), 30000);
    }

    updateDashboard() {
        if (!this.panel) return;
        
        const report = this.agent.getLatestReport() || {};
        const recommendations = this.agent.getRecommendations();
        
        this.panel.innerHTML = `
            <div style="border-bottom: 1px solid rgba(251, 191, 36, 0.3); padding-bottom: 10px; margin-bottom: 15px;">
                <h3 style="margin: 0; color: #fbbf24;">Narratum Agent</h3>
                <small style="color: #888;">Last updated: ${new Date().toLocaleTimeString()}</small>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                <div style="text-align: center;">
                    <div style="font-size: 24px; color: #fbbf24;">${report.performanceScore || 0}</div>
                    <div style="font-size: 11px; color: #888;">Performance</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 24px; color: #fbbf24;">${report.engagementScore || 0}</div>
                    <div style="font-size: 11px; color: #888;">Engagement</div>
                </div>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h4 style="margin: 0 0 8px 0; color: #fbbf24; font-size: 12px;">TOP RECOMMENDATIONS</h4>
                ${recommendations.map(rec => `
                    <div style="margin-bottom: 8px; padding: 8px; background: rgba(255,255,255,0.05); border-radius: 6px;">
                        <div style="font-weight: bold; font-size: 12px;">${rec.title}</div>
                        <div style="font-size: 11px; color: #888;">${rec.impact}</div>
                    </div>
                `).join('')}
            </div>
            
            <div style="text-align: center;">
                <button onclick="window.narratumAgent.triggerAnalysis()" style="
                    background: transparent;
                    border: 1px solid #fbbf24;
                    color: #fbbf24;
                    padding: 6px 12px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 11px;
                ">Run Analysis</button>
            </div>
        `;
    }

    toggleDashboard() {
        const isVisible = this.panel.style.transform === 'translateX(0px)';
        this.panel.style.transform = isVisible ? 'translateX(-400px)' : 'translateX(0px)';
    }
}
*/

// === AUTO-INITIALIZATION ===

// Initialize the background agent when the page loads
if (typeof window !== 'undefined') {
    // Wait for the page to be interactive
    const initializeAgent = () => {
        if (!window.narratumAgent) {
            window.narratumAgent = new NarratumBackgroundAgent();
            console.log('[Background Agent] Narratum.io optimization agent is now running');
            console.log('[Background Agent] Access via window.narratumAgent for manual controls');
        }
        // The dashboard is now managed by the orchestrator, so we don't initialize it here.
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAgent);
    } else {
        initializeAgent();
    }
}

// === EXPORT FOR MODULE SYSTEMS ===
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NarratumBackgroundAgent, AgentDashboard };
}
