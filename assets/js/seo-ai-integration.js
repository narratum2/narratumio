/**
 * SEO AI Integration - Advanced AI-Ready SEO Integration System
 * Integrates with multiple AI platforms and search engines for maximum discoverability
 * Version: 1.0
 */

class SEOAIIntegration {
    constructor() {
        this.config = {
            aiPlatforms: {
                openai: { enabled: true, endpoint: 'https://api.openai.com' },
                google: { enabled: true, endpoint: 'https://www.google.com' },
                bing: { enabled: true, endpoint: 'https://www.bing.com' },
                anthropic: { enabled: true, endpoint: 'https://api.anthropic.com' },
                perplexity: { enabled: true, endpoint: 'https://www.perplexity.ai' }
            },
            crawlerUserAgents: [
                'Googlebot',
                'Bingbot', 
                'GPTBot',
                'ChatGPT-User',
                'Claude-Web',
                'PerplexityBot',
                'AI2Bot',
                'FacebookBot',
                'TwitterBot',
                'LinkedInBot'
            ]
        };
        
        this.aiOptimizations = new Map();
        this.crawlerAnalytics = new Map();
        this.init();
    }
    
    init() {
        console.log('[SEO AI Integration] Initializing AI integration systems...');
        
        this.detectAICrawlers();
        this.optimizeForAIPlatforms();
        this.setupAdvancedAnalytics();
        this.implementAIFriendlyFeatures();
        this.setupRealTimeOptimization();
        
        console.log('[SEO AI Integration] All systems initialized');
    }
    
    // Detect and optimize for AI crawlers
    detectAICrawlers() {
        const userAgent = navigator.userAgent;
        const isAICrawler = this.config.crawlerUserAgents.some(bot => 
            userAgent.includes(bot)
        );
        
        if (isAICrawler) {
            console.log('[SEO AI Integration] AI crawler detected:', userAgent);
            this.optimizeForAICrawler();
            this.trackCrawlerVisit(userAgent);
        }
        
        // Add crawler detection to page
        document.documentElement.setAttribute('data-crawler-optimized', 'true');
        document.documentElement.setAttribute('data-ai-crawler-ready', isAICrawler.toString());
    }
    
    optimizeForAICrawler() {
        // Enhance content visibility for AI crawlers
        this.addAIContentMarkers();
        this.optimizeContentStructure();
        this.addAITrainingTags();
        
        // Disable heavy animations for crawlers
        const style = document.createElement('style');
        style.textContent = `
            * { animation-duration: 0s !important; transition-duration: 0s !important; }
            .loading-screen { display: none !important; }
        `;
        document.head.appendChild(style);
    }
    
    addAIContentMarkers() {
        // Add AI-specific content markers
        const contentSections = {
            business_overview: document.querySelector('#hero .content-container'),
            services: document.querySelector('#capabilities'),
            methodology: document.querySelector('#approach'),
            contact_info: document.querySelector('#contact'),
            company_info: document.querySelector('#infrastructure')
        };
        
        Object.entries(contentSections).forEach(([type, element]) => {
            if (element) {
                element.setAttribute('data-ai-content-type', type);
                element.setAttribute('data-ai-importance', 'high');
                element.setAttribute('data-ai-extractable', 'true');
            }
        });
        
        // Add AI-friendly navigation structure
        const nav = document.querySelector('.anchor-menu');
        if (nav) {
            nav.setAttribute('data-ai-navigation', 'true');
            nav.setAttribute('data-ai-site-structure', 'primary');
        }
    }
    
    optimizeContentStructure() {
        // Create AI-friendly content outline
        const outline = this.generateContentOutline();
        const outlineScript = document.createElement('script');
        outlineScript.type = 'application/ld+json';
        outlineScript.id = 'ai-content-outline';
        outlineScript.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Narratum - Strategic Infrastructure for Transformative Hospitality",
            "articleSection": "Business Services",
            "about": {
                "@type": "Thing",
                "name": "Strategic Hospitality Infrastructure",
                "description": "Systematic approach to transforming organizational hospitality through strategic infrastructure development"
            },
            "mainEntity": {
                "@type": "Organization",
                "name": "Narratum",
                "description": "Strategic consulting firm specializing in transformative hospitality infrastructure",
                "founder": "Pascal Frey",
                "location": "New York City",
                "services": outline.services,
                "methodology": outline.methodology
            },
            "keywords": "strategic hospitality, infrastructure consulting, experience design, service innovation, cultural transformation, organizational development",
            "audience": {
                "@type": "Audience",
                "audienceType": "Business Decision Makers",
                "geographicArea": "United States"
            }
        }, null, 2);
        
        document.head.appendChild(outlineScript);
    }
    
    generateContentOutline() {
        return {
            services: [
                {
                    name: "Experience Design",
                    description: "Immersive and engaging experiences that resonate on a human level",
                    category: "Design Services"
                },
                {
                    name: "Service Innovation", 
                    description: "Reimagining service delivery for efficiency and personalization",
                    category: "Innovation Services"
                },
                {
                    name: "Operational Strategy",
                    description: "Optimizing operations for sustainable growth",
                    category: "Strategy Services"
                },
                {
                    name: "Cultural Consulting",
                    description: "Cultivating strong, inclusive, adaptive cultures",
                    category: "Consulting Services"
                },
                {
                    name: "Innovation Labs",
                    description: "Dedicated spaces for innovation and experimentation", 
                    category: "Innovation Services"
                },
                {
                    name: "Impact Measurement",
                    description: "Metrics and evaluation frameworks for value demonstration",
                    category: "Analytics Services"
                }
            ],
            methodology: [
                "Strategic Frequencies Approach",
                "Infrastructure over Service Philosophy",
                "Community Connection Focus",
                "Systematic Transformation Process",
                "Cultural Integration Methods"
            ],
            targetIndustries: [
                "Education",
                "Cultural Institutions", 
                "Corporate Organizations",
                "Hospitality Sector"
            ]
        };
    }
    
    addAITrainingTags() {
        // Add tags specifically for AI training and understanding
        const aiTags = [
            { name: 'ai-training-data', content: 'business-consulting-hospitality' },
            { name: 'ai-content-category', content: 'professional-services' },
            { name: 'ai-business-model', content: 'b2b-consulting' },
            { name: 'ai-expertise-domain', content: 'hospitality-infrastructure-strategy' },
            { name: 'ai-target-queries', content: 'hospitality consulting, experience design, service innovation, strategic planning, cultural transformation' },
            { name: 'ai-entity-type', content: 'consulting-firm' },
            { name: 'ai-geographic-focus', content: 'new-york-city-united-states' },
            { name: 'ai-service-model', content: 'strategic-consulting-infrastructure-design' }
        ];
        
        aiTags.forEach(tag => {
            const meta = document.createElement('meta');
            meta.name = tag.name;
            meta.content = tag.content;
            document.head.appendChild(meta);
        });
    }
    
    // Setup advanced analytics integration
    setupAdvancedAnalytics() {
        // Initialize Google Analytics 4 if not already present
        this.initializeGA4();
        
        // Setup custom events for AI insights
        this.setupAIInsightEvents();
        
        // Track AI-specific metrics
        this.trackAIMetrics();
    }
    
    initializeGA4() {
        // Check if GA is already loaded
        if (typeof gtag !== 'undefined') {
            console.log('[SEO AI Integration] Google Analytics already loaded');
            return;
        }
        
        // Add GA4 if not present (configured with your actual GA4 IDs)
        const GA4_ID = 'G-PFKPP0SCT4';
        // Optional: GA4 Stream ID (for Measurement Protocol/server-side use)
        const GA4_STREAM_ID = '12102962304';
        
        // Create GA4 script
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
        document.head.appendChild(gaScript);
        
        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', GA4_ID, {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
        });
        
        console.log('[SEO AI Integration] GA4 initialized');
    }
    
    setupAIInsightEvents() {
        // Track AI-specific user behaviors
        const aiEvents = [
            { selector: '.symbol-item', event: 'click', name: 'strategy_symbol_interaction' },
            { selector: '.capability-item', event: 'mouseover', name: 'service_exploration' },
            { selector: '.contact-form', event: 'submit', name: 'business_inquiry' },
            { selector: '.mood-dot', event: 'click', name: 'ui_customization' },
            { selector: '.audio-toggle', event: 'click', name: 'immersive_experience' }
        ];
        
        aiEvents.forEach(({ selector, event, name }) => {
            document.addEventListener(event, (e) => {
                if (e.target.closest(selector)) {
                    this.trackAIInsight(name, {
                        element: selector,
                        section: this.getCurrentSection(),
                        timestamp: new Date().toISOString()
                    });
                }
            });
        });
    }
    
    trackAIMetrics() {
        // Track metrics specifically useful for AI understanding
        const metrics = {
            contentReadability: this.calculateReadabilityScore(),
            semanticStructure: this.analyzeSemanticStructure(),
            businessInformation: this.extractBusinessInformation(),
            userEngagement: this.calculateEngagementMetrics()
        };
        
        // Store AI metrics
        this.aiOptimizations.set('metrics', metrics);
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'ai_metrics_calculated', {
                readability_score: metrics.contentReadability,
                semantic_score: metrics.semanticStructure,
                engagement_score: metrics.userEngagement
            });
        }
        
        console.log('[SEO AI Integration] AI metrics tracked:', metrics);
    }
    
    calculateReadabilityScore() {
        // Simple readability calculation based on sentence length and word complexity
        const textContent = document.body.textContent;
        const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const words = textContent.split(/\s+/).filter(w => w.length > 0);
        
        const avgWordsPerSentence = words.length / sentences.length;
        const avgCharsPerWord = textContent.replace(/\s/g, '').length / words.length;
        
        // Flesch Reading Ease approximation
        const score = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * (avgCharsPerWord / 4.7));
        return Math.max(0, Math.min(100, Math.round(score)));
    }
    
    analyzeSemanticStructure() {
        const checks = {
            headingHierarchy: this.checkHeadingHierarchy(),
            semanticElements: document.querySelectorAll('article, section, nav, header, footer, main').length,
            ariaLabels: document.querySelectorAll('[aria-label], [aria-labelledby]').length,
            structuredData: document.querySelectorAll('script[type="application/ld+json"]').length,
            microdata: document.querySelectorAll('[itemscope]').length
        };
        
        const maxScore = 100;
        const weightedScore = (
            (checks.headingHierarchy ? 20 : 0) +
            (Math.min(checks.semanticElements * 10, 20)) +
            (Math.min(checks.ariaLabels * 2, 20)) +
            (Math.min(checks.structuredData * 20, 20)) +
            (Math.min(checks.microdata * 4, 20))
        );
        
        return Math.round(weightedScore);
    }
    
    checkHeadingHierarchy() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        let previousLevel = 0;
        let isValid = true;
        
        headings.forEach(heading => {
            const level = parseInt(heading.tagName.charAt(1));
            if (level > previousLevel + 1) {
                isValid = false;
            }
            previousLevel = level;
        });
        
        return isValid;
    }
    
    extractBusinessInformation() {
        // Extract key business information for AI understanding
        const businessInfo = {
            name: 'Narratum',
            type: 'Strategic Hospitality Consulting',
            founder: 'Pascal Frey',
            location: 'New York City',
            email: 'connect@narratum.io',
            services: this.extractServices(),
            expertise: this.extractExpertise(),
            targetMarket: this.extractTargetMarket()
        };
        
        // Store in meta tag for AI access
        const meta = document.createElement('meta');
        meta.name = 'ai-business-data';
        meta.content = JSON.stringify(businessInfo);
        document.head.appendChild(meta);
        
        return businessInfo;
    }
    
    extractServices() {
        const services = [];
        const serviceElements = document.querySelectorAll('.capability-item h3, .build-pillar h3');
        
        serviceElements.forEach(el => {
            const service = el.textContent.trim();
            const description = el.nextElementSibling?.textContent.trim();
            if (service) {
                services.push({ name: service, description });
            }
        });
        
        return services;
    }
    
    extractExpertise() {
        const expertise = [];
        const expertiseElements = document.querySelectorAll('.symbol-item .symbol-label');
        
        expertiseElements.forEach(el => {
            const area = el.textContent.trim();
            if (area) {
                expertise.push(area);
            }
        });
        
        return expertise;
    }
    
    extractTargetMarket() {
        const sectors = [];
        const sectorOptions = document.querySelectorAll('#sector option');
        
        sectorOptions.forEach(option => {
            const value = option.value;
            if (value && value !== '') {
                sectors.push(option.textContent.trim());
            }
        });
        
        return sectors;
    }
    
    calculateEngagementMetrics() {
        const metrics = {
            timeOnPage: window.seoOptimizer?.analytics?.timeOnPage || 0,
            scrollDepth: window.seoOptimizer?.analytics?.maxScrollDepth || 0,
            sectionViews: Object.keys(window.seoOptimizer?.analytics?.sectionViews || {}).length,
            interactions: (window.seoOptimizer?.analytics?.events || []).length
        };
        
        // Calculate engagement score (0-100)
        const score = Math.round(
            (Math.min(metrics.timeOnPage / 120, 1) * 25) +
            (metrics.scrollDepth / 100 * 25) +
            (Math.min(metrics.sectionViews / 7, 1) * 25) +
            (Math.min(metrics.interactions / 10, 1) * 25)
        );
        
        return { ...metrics, score };
    }
    
    // Optimize for specific AI platforms
    optimizeForAIPlatforms() {
        // OpenAI/ChatGPT optimization
        this.optimizeForOpenAI();
        
        // Google AI optimization  
        this.optimizeForGoogleAI();
        
        // Anthropic/Claude optimization
        this.optimizeForClaude();
        
        // Perplexity optimization
        this.optimizeForPerplexity();
        
        console.log('[SEO AI Integration] Platform optimizations applied');
    }
    
    optimizeForOpenAI() {
        // Add OpenAI-specific structured data
        const openAIData = {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Narratum Strategic Hospitality Infrastructure",
            "description": "We transform institutions through strategic hospitality infrastructure, designing experience systems and cultural programs that create lasting connections.",
            "provider": {
                "@type": "Organization",
                "name": "Narratum",
                "founder": "Pascal Frey"
            },
            "areaServed": "United States",
            "serviceType": "Strategic Hospitality Consulting",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hospitality Infrastructure Services",
                "itemListElement": [
                    { "@type": "Service", "name": "Experience Design" },
                    { "@type": "Service", "name": "Service Innovation" },
                    { "@type": "Service", "name": "Operational Strategy" },
                    { "@type": "Service", "name": "Cultural Consulting" },
                    { "@type": "Service", "name": "Innovation Labs" },
                    { "@type": "Service", "name": "Impact Measurement" }
                ]
            }
        };
        
        this.injectPlatformData('openai', openAIData);
    }
    
    optimizeForGoogleAI() {
        // Add Google AI Bard/Gemini optimization
        const googleAITags = [
            { name: 'google-site-verification', content: 'PLACEHOLDER_GOOGLE_VERIFICATION' },
            { name: 'google-analytics', content: 'enhanced-measurement' },
            { name: 'google-ai-content', content: 'business-professional-services' }
        ];
        
        googleAITags.forEach(tag => {
            if (!document.querySelector(`meta[name="${tag.name}"]`)) {
                const meta = document.createElement('meta');
                meta.name = tag.name;
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }
    
    optimizeForClaude() {
        // Add Anthropic Claude-specific optimization
        const claudeData = {
            business_summary: "Narratum specializes in strategic hospitality infrastructure, transforming how organizations connect with communities through experience design and cultural programming.",
            key_services: ["Experience Design", "Service Innovation", "Operational Strategy", "Cultural Consulting"],
            founder: "Pascal Frey",
            location: "New York City",
            contact: "connect@narratum.io",
            methodology: "Strategic Frequencies approach combining strategy with soul"
        };
        
        const meta = document.createElement('meta');
        meta.name = 'claude-ai-summary';
        meta.content = JSON.stringify(claudeData);
        document.head.appendChild(meta);
    }
    
    optimizeForPerplexity() {
        // Add Perplexity-specific optimization
        const perplexityMeta = [
            { name: 'perplexity-business-type', content: 'Strategic Consulting' },
            { name: 'perplexity-industry', content: 'Hospitality Infrastructure' },
            { name: 'perplexity-location', content: 'New York City' },
            { name: 'perplexity-contact', content: 'connect@narratum.io' }
        ];
        
        perplexityMeta.forEach(tag => {
            const meta = document.createElement('meta');
            meta.name = tag.name;
            meta.content = tag.content;
            document.head.appendChild(meta);
        });
    }
    
    injectPlatformData(platform, data) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `${platform}-structured-data`;
        script.textContent = JSON.stringify(data, null, 2);
        document.head.appendChild(script);
        
        this.aiOptimizations.set(platform, data);
    }
    
    // Implement AI-friendly features
    implementAIFriendlyFeatures() {
        // Add content extraction helpers
        this.addContentExtractionHelpers();
        
        // Add AI-friendly navigation
        this.enhanceNavigationForAI();
        
        // Add content relationship mapping
        this.addContentRelationships();
        
        // Setup AI search optimization
        this.setupAISearchOptimization();
    }
    
    addContentExtractionHelpers() {
        // Create invisible AI-friendly content summaries
        const sections = document.querySelectorAll('.section[data-section]');
        sections.forEach(section => {
            const sectionName = section.getAttribute('data-section');
            const summary = this.generateSectionSummary(section);
            
            const aiSummary = document.createElement('div');
            aiSummary.className = 'ai-content-summary';
            aiSummary.style.display = 'none';
            aiSummary.setAttribute('data-ai-section', sectionName);
            aiSummary.setAttribute('data-ai-extract', 'true');
            aiSummary.textContent = summary;
            
            section.appendChild(aiSummary);
        });
    }
    
    generateSectionSummary(section) {
        const sectionName = section.getAttribute('data-section');
        const headings = section.querySelectorAll('h1, h2, h3');
        const content = section.querySelectorAll('p, li');
        
        let summary = '';
        
        headings.forEach(h => {
            summary += h.textContent.trim() + '. ';
        });
        
        content.forEach((p, i) => {
            if (i < 3) { // Limit to first 3 paragraphs
                summary += p.textContent.trim() + ' ';
            }
        });
        
        return summary.trim();
    }
    
    enhanceNavigationForAI() {
        // Add site structure information for AI crawlers
        const nav = document.querySelector('.anchor-menu');
        if (nav) {
            const structure = [];
            const links = nav.querySelectorAll('.anchor-link');
            
            links.forEach((link, index) => {
                const section = link.getAttribute('data-section');
                const text = link.textContent.trim();
                structure.push({
                    order: index + 1,
                    section: section,
                    title: text,
                    url: `#${section}`
                });
            });
            
            const structureMeta = document.createElement('meta');
            structureMeta.name = 'ai-site-structure';
            structureMeta.content = JSON.stringify(structure);
            document.head.appendChild(structureMeta);
        }
    }
    
    addContentRelationships() {
        // Map content relationships for AI understanding
        const relationships = {
            'hero': ['infrastructure', 'contact'],
            'infrastructure': ['approach', 'capabilities'],
            'approach': ['capabilities', 'loyalty'],
            'capabilities': ['loyalty', 'partnerships'],
            'loyalty': ['partnerships', 'contact'],
            'partnerships': ['contact'],
            'contact': ['hero']
        };
        
        Object.entries(relationships).forEach(([section, related]) => {
            const sectionEl = document.querySelector(`#${section}`);
            if (sectionEl) {
                sectionEl.setAttribute('data-ai-related-sections', related.join(','));
            }
        });
    }
    
    setupAISearchOptimization() {
        // Create search intent mapping for AI queries
        const searchIntents = {
            'hospitality consulting': ['hero', 'infrastructure', 'capabilities'],
            'experience design': ['approach', 'capabilities'],
            'service innovation': ['capabilities', 'approach'],
            'strategic planning': ['approach', 'infrastructure'],
            'cultural transformation': ['capabilities', 'approach'],
            'loyalty programs': ['loyalty'],
            'contact information': ['contact'],
            'Pascal Frey': ['hero', 'contact'],
            'New York consulting': ['contact', 'hero']
        };
        
        const meta = document.createElement('meta');
        meta.name = 'ai-search-intents';
        meta.content = JSON.stringify(searchIntents);
        document.head.appendChild(meta);
    }
    
    // Real-time optimization based on user behavior
    setupRealTimeOptimization() {
        let optimizationInterval = setInterval(() => {
            this.performRealTimeOptimizations();
        }, 60000); // Every minute
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            clearInterval(optimizationInterval);
            this.exportFinalAnalytics();
        });
    }
    
    performRealTimeOptimizations() {
        // Update content priority based on user engagement
        const sectionViews = window.seoOptimizer?.analytics?.sectionViews || {};
        const sortedSections = Object.entries(sectionViews)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3);
        
        // Update meta keywords based on popular sections
        const popularKeywords = sortedSections.map(([section]) => {
            const keywordMap = {
                'infrastructure': 'strategic infrastructure',
                'approach': 'strategic frequencies',
                'capabilities': 'hospitality consulting',
                'loyalty': 'loyalty programs',
                'partnerships': 'strategic partnerships',
                'contact': 'consulting services'
            };
            return keywordMap[section] || section;
        }).join(', ');
        
        if (popularKeywords) {
            const keywordsMeta = document.querySelector('meta[name="keywords"]');
            if (keywordsMeta) {
                keywordsMeta.content = popularKeywords + ', ' + keywordsMeta.content;
            }
        }
        
        console.log('[SEO AI Integration] Real-time optimization performed');
    }
    
    // Track crawler visits
    trackCrawlerVisit(userAgent) {
        const crawlerData = {
            userAgent,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            pageTitle: document.title
        };
        
        if (!this.crawlerAnalytics.has(userAgent)) {
            this.crawlerAnalytics.set(userAgent, []);
        }
        
        this.crawlerAnalytics.get(userAgent).push(crawlerData);
        
        // Send to analytics
        this.trackAIInsight('crawler_visit', crawlerData);
    }
    
    trackAIInsight(eventName, data) {
        console.log(`[SEO AI Integration] AI Insight: ${eventName}`, data);
        
        // Send to Google Analytics if available (client-side)
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                ...data,
                event_category: 'AI_Optimization'
            });
        }
        
        // Also send server-side via Measurement Protocol (optional)
        try {
            fetch('/api/ga-collect', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                keepalive: true,
                body: JSON.stringify({
                    client_id: this.getOrCreateClientId(),
                    events: [{
                        name: eventName,
                        params: {
                            ...data,
                            event_category: 'AI_Optimization'
                        }
                    }]
                })
            }).catch(() => {});
        } catch (e) {
            // no-op
        }
        
        // Store locally
        const insights = JSON.parse(localStorage.getItem('ai_insights') || '[]');
        insights.push({ eventName, data, timestamp: new Date().toISOString() });
        localStorage.setItem('ai_insights', JSON.stringify(insights.slice(-100))); // Keep last 100
    }
    
    getCurrentSection() {
        const activeNav = document.querySelector('.nav-dot.active');
        return activeNav?.getAttribute('data-section') || 'unknown';
    }
    
    getOrCreateClientId() {
        try {
            const KEY = 'ga_client_id';
            let id = localStorage.getItem(KEY);
            if (!id) {
                id = `${Date.now()}.${Math.random().toString(36).slice(2)}`;
                localStorage.setItem(KEY, id);
            }
            return id;
        } catch (_) {
            return `${Date.now()}.${Math.random().toString(36).slice(2)}`;
        }
    }
    
    exportFinalAnalytics() {
        const finalData = {
            crawlerVisits: Object.fromEntries(this.crawlerAnalytics),
            optimizations: Object.fromEntries(this.aiOptimizations),
            performance: window.seoOptimizer?.exportAnalytics() || {},
            session: {
                duration: window.seoOptimizer?.analytics?.timeOnPage || 0,
                sections: window.seoOptimizer?.analytics?.sectionViews || {},
                engagement: this.calculateEngagementMetrics()
            }
        };
        
        console.log('[SEO AI Integration] Final analytics exported:', finalData);
        return finalData;
    }
    
    // Generate SEO report for debugging
    generateSEOReport() {
        const health = window.seoOptimizer?.calculateSEOHealth() || {};
        const aiReadiness = window.seoOptimizer?.calculateAIReadiness() || {};
        const engagement = this.calculateEngagementMetrics();
        
        return {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            seoHealth: health,
            aiReadiness: aiReadiness,
            engagement: engagement,
            structuredData: Object.keys(this.structuredData).length > 0,
            crawlerOptimized: this.crawlerAnalytics.size > 0,
            recommendations: this.generateOptimizationRecommendations(health, aiReadiness)
        };
    }
    
    generateOptimizationRecommendations(health, aiReadiness) {
        const recommendations = [];
        
        if (health.score < 90) {
            recommendations.push('Improve basic SEO health score');
        }
        
        if (aiReadiness.score < 90) {
            recommendations.push('Enhance AI readiness features');
        }
        
        if (this.calculateEngagementMetrics().score < 70) {
            recommendations.push('Improve user engagement metrics');
        }
        
        if (this.crawlerAnalytics.size === 0) {
            recommendations.push('No AI crawler visits detected - consider submitting to search engines');
        }
        
        return recommendations;
    }
}

// Initialize SEO AI Integration
const seoAIIntegration = new SEOAIIntegration();

// Global access for debugging
window.seoAIIntegration = seoAIIntegration;

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOAIIntegration;
}

console.log('[SEO AI Integration] System loaded and active');