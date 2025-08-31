/**
 * SEO AI Optimizer - Advanced SEO System for AI Readiness
 * Makes your site perfectly discoverable by AI crawlers and search engines
 * Version: 1.0
 * Features: Dynamic SEO, AI-ready structured data, real-time optimization
 */

class SEOAIOptimizer {
    constructor() {
        this.isInitialized = false;
        this.structuredData = {};
        this.metaElements = {};
        this.currentSection = 'hero';
        this.analytics = {
            pageViews: 0,
            sectionViews: {},
            searchQueries: [],
            userBehavior: {}
        };
        
        // AI-specific optimization settings
        this.aiOptimization = {
            enableStructuredData: true,
            enableSemanticMarkup: true,
            enableDynamicMeta: true,
            enableAnalytics: true,
            enablePerformanceTracking: true
        };
        
        this.init();
    }
    
    async init() {
        if (this.isInitialized) return;
        
        console.log('[SEO AI] Initializing SEO AI Optimizer...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeAllSystems());
        } else {
            this.initializeAllSystems();
        }
    }
    
    initializeAllSystems() {
        this.injectStructuredData();
        this.enhanceMetaTags();
        this.initializeAnalytics();
        this.setupDynamicSEO();
        this.addSemanticMarkup();
        this.initializePerformanceTracking();
        this.setupAIReadyFeatures();
        this.initializeCrawlerOptimization();
        
        this.isInitialized = true;
        console.log('[SEO AI] All SEO systems initialized successfully');
        
        // Track initialization
        this.trackEvent('seo_optimizer_initialized', {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            pageUrl: window.location.href
        });
    }
    
    // Inject comprehensive structured data for AI understanding
    injectStructuredData() {
        const structuredData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": "https://narratum.io/#organization",
                    "name": "Narratum",
                    "legalName": "Narratum LLC",
                    "url": "https://narratum.io",
                    "logo": "https://narratum.io/favicon.svg",
                    "foundingDate": "2024",
                    "founder": {
                        "@type": "Person",
                        "name": "Pascal Frey",
                        "jobTitle": "Founder & Strategic Director"
                    },
                    "description": "Strategic infrastructure for transformative hospitality. We build systems that transform how organizations connect with their communities.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "110 East 25th Street",
                        "addressLocality": "New York",
                        "addressRegion": "NY",
                        "addressCountry": "US"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "email": "connect@narratum.io",
                        "contactType": "Customer Service"
                    },
                    "sameAs": [
                        "https://instagram.com/narratum_io",
                        "https://x.com/narratum_io"
                    ],
                    "industry": "Hospitality Consulting",
                    "services": [
                        "Experience Design",
                        "Service Innovation", 
                        "Operational Strategy",
                        "Cultural Consulting",
                        "Innovation Labs",
                        "Impact Measurement"
                    ]
                },
                {
                    "@type": "WebSite",
                    "@id": "https://narratum.io/#website",
                    "url": "https://narratum.io",
                    "name": "Narratum - Strategic Infrastructure for Transformative Hospitality",
                    "description": "We build systems that transform how organizations connect with their communities through strategic hospitality infrastructure.",
                    "publisher": {
                        "@id": "https://narratum.io/#organization"
                    },
                    "inLanguage": "en-US",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://narratum.io/?s={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                },
                {
                    "@type": "WebPage",
                    "@id": "https://narratum.io/#webpage",
                    "url": "https://narratum.io",
                    "name": "Narratum | Strategic Infrastructure for Transformative Hospitality | NYC",
                    "description": "Transform your organization through strategic hospitality infrastructure. Expert consulting in experience design, service innovation, and cultural transformation.",
                    "about": {
                        "@id": "https://narratum.io/#organization"
                    },
                    "isPartOf": {
                        "@id": "https://narratum.io/#website"
                    },
                    "primaryImageOfPage": "https://narratum.io/assets/og-image.jpg",
                    "datePublished": "2024-01-01",
                    "dateModified": new Date().toISOString().split('T')[0],
                    "breadcrumb": {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://narratum.io"
                            }
                        ]
                    }
                },
                {
                    "@type": "Service",
                    "name": "Strategic Hospitality Infrastructure",
                    "description": "Comprehensive hospitality consulting services including experience design, service innovation, and cultural transformation.",
                    "provider": {
                        "@id": "https://narratum.io/#organization"
                    },
                    "areaServed": "United States",
                    "serviceType": "Hospitality Consulting",
                    "offers": [
                        {
                            "@type": "Offer",
                            "name": "Experience Design",
                            "description": "Design immersive and engaging experiences that resonate on a human level"
                        },
                        {
                            "@type": "Offer", 
                            "name": "Service Innovation",
                            "description": "Reimagine service delivery to be more efficient, personalized, and impactful"
                        },
                        {
                            "@type": "Offer",
                            "name": "Operational Strategy", 
                            "description": "Develop strategies that optimize operations and drive sustainable growth"
                        },
                        {
                            "@type": "Offer",
                            "name": "Cultural Consulting",
                            "description": "Guide organizations in cultivating strong, inclusive, and adaptive cultures"
                        }
                    ]
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is strategic hospitality infrastructure?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Strategic hospitality infrastructure refers to the systematic design and implementation of frameworks that transform how organizations connect with their communities. It includes experience systems, cultural programs, and operational strategies that create lasting connections and drive meaningful engagement."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How does Narratum transform organizations?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Narratum transforms organizations through comprehensive infrastructure development including experience design, service innovation, operational strategy, cultural consulting, innovation labs, and impact measurement. We focus on creating systems rather than just providing services."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What industries does Narratum serve?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Narratum serves education, cultural institutions, corporate organizations, and hospitality sectors. We specialize in any organization looking to transform how they connect with and serve their communities."
                            }
                        }
                    ]
                }
            ]
        };
        
        // Inject structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData, null, 2);
        document.head.appendChild(script);
        
        this.structuredData = structuredData;
        console.log('[SEO AI] Structured data injected successfully');
    }
    
    // Enhance meta tags with AI-specific optimizations
    enhanceMetaTags() {
        // Add AI-specific meta tags
        const aiMetaTags = [
            // AI readiness tags
            { name: 'ai-ready', content: 'true' },
            { name: 'ai-content-type', content: 'business-service-website' },
            { name: 'content-language', content: 'en-US' },
            { name: 'content-classification', content: 'hospitality,consulting,strategy,innovation' },
            
            // Enhanced semantic tags
            { name: 'article:author', content: 'Pascal Frey' },
            { name: 'article:publisher', content: 'Narratum LLC' },
            { name: 'business:category', content: 'Hospitality Consulting' },
            { name: 'business:location', content: 'New York City, NY' },
            
            // AI training data tags
            { name: 'dataset-subject', content: 'Strategic Hospitality Infrastructure' },
            { name: 'content-keywords', content: 'hospitality consulting,experience design,service innovation,cultural transformation,strategic planning,organizational development' },
            
            // Performance and accessibility tags
            { name: 'performance-optimized', content: 'true' },
            { name: 'accessibility-compliant', content: 'WCAG-2.1-AA' },
            { name: 'mobile-optimized', content: 'true' },
            
            // Additional discovery tags
            { name: 'industry', content: 'Hospitality,Consulting,Strategy' },
            { name: 'target-audience', content: 'Enterprise,Education,Cultural-Institutions' },
            { name: 'service-area', content: 'United-States,New-York-City' }
        ];
        
        aiMetaTags.forEach(tag => {
            const meta = document.createElement('meta');
            meta.name = tag.name;
            meta.content = tag.content;
            document.head.appendChild(meta);
            this.metaElements[tag.name] = meta;
        });
        
        // Add enhanced Open Graph tags
        const enhancedOGTags = [
            { property: 'og:business:contact_data:street_address', content: '110 East 25th Street' },
            { property: 'og:business:contact_data:locality', content: 'New York City' },
            { property: 'og:business:contact_data:region', content: 'NY' },
            { property: 'og:business:contact_data:country_name', content: 'United States' },
            { property: 'og:business:contact_data:email', content: 'connect@narratum.io' },
            { property: 'article:section', content: 'Hospitality Consulting' },
            { property: 'article:tag', content: 'hospitality,consulting,strategy,innovation,transformation' }
        ];
        
        enhancedOGTags.forEach(tag => {
            const meta = document.createElement('meta');
            meta.setAttribute('property', tag.property);
            meta.content = tag.content;
            document.head.appendChild(meta);
        });
        
        console.log('[SEO AI] Enhanced meta tags injected');
    }
    
    // Initialize advanced analytics for SEO insights
    initializeAnalytics() {
        this.analytics.pageViews++;
        this.analytics.sessionStart = new Date().toISOString();
        this.analytics.userAgent = navigator.userAgent;
        this.analytics.referrer = document.referrer;
        this.analytics.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        
        // Track page performance for SEO
        if ('PerformanceObserver' in window) {
            this.setupPerformanceTracking();
        }
        
        // Track user engagement for SEO signals
        this.setupEngagementTracking();
        
        console.log('[SEO AI] Analytics initialized');
    }
    
    setupPerformanceTracking() {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'paint') {
                    this.analytics[entry.name.replace('-', '_')] = entry.startTime;
                } else if (entry.entryType === 'largest-contentful-paint') {
                    this.analytics.lcp = entry.startTime;
                } else if (entry.entryType === 'first-input') {
                    this.analytics.fid = entry.processingStart - entry.startTime;
                } else if (entry.entryType === 'layout-shift') {
                    this.analytics.cls = (this.analytics.cls || 0) + entry.value;
                }
            }
        });
        
        try {
            observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
        } catch (e) {
            console.log('[SEO AI] Some performance metrics not supported:', e.message);
        }
    }
    
    setupEngagementTracking() {
        // Track scroll depth for engagement signals
        let maxScrollDepth = 0;
        const trackScrollDepth = () => {
            const scrollDepth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
            this.analytics.maxScrollDepth = Math.round(maxScrollDepth * 100);
        };
        
        window.addEventListener('scroll', trackScrollDepth, { passive: true });
        
        // Track time on page
        this.analytics.timeOnPage = 0;
        setInterval(() => {
            if (!document.hidden) {
                this.analytics.timeOnPage++;
            }
        }, 1000);
        
        // Track section engagement
        this.setupSectionTracking();
        
        // Track clicks and interactions
        document.addEventListener('click', (e) => {
            const element = e.target.closest('[data-seo-track]');
            if (element) {
                const trackingData = element.getAttribute('data-seo-track');
                this.trackEvent('element_interaction', {
                    element: trackingData,
                    section: this.currentSection,
                    timestamp: new Date().toISOString()
                });
            }
        });
    }
    
    setupSectionTracking() {
        const sections = document.querySelectorAll('.section[data-section]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionName = entry.target.getAttribute('data-section');
                    this.currentSection = sectionName;
                    
                    // Update section view analytics
                    if (!this.analytics.sectionViews[sectionName]) {
                        this.analytics.sectionViews[sectionName] = 0;
                    }
                    this.analytics.sectionViews[sectionName]++;
                    
                    // Update dynamic meta description based on current section
                    this.updateDynamicMeta(sectionName);
                    
                    this.trackEvent('section_view', {
                        section: sectionName,
                        timestamp: new Date().toISOString()
                    });
                }
            });
        }, { threshold: 0.5 });
        
        sections.forEach(section => observer.observe(section));
    }
    
    // Dynamic SEO optimization based on user behavior
    setupDynamicSEO() {
        // Update page title and meta description based on current section
        const sectionMeta = {
            hero: {
                title: 'Narratum | Strategic Infrastructure for Transformative Hospitality | NYC',
                description: 'Transform your organization through strategic hospitality infrastructure. Expert consulting in experience design, service innovation, and cultural transformation in NYC.'
            },
            infrastructure: {
                title: 'Infrastructure Systems | Strategic Hospitality Design | Narratum',
                description: 'We build systems that transform how organizations connect with their communities. Expert in experiential systems, cultural infrastructure, and technology integration.'
            },
            approach: {
                title: 'Strategic Hospitality Approach | Experience Design Methods | Narratum',
                description: 'Our strategic frequencies combine strategy with soul. Explore our approach to transformative hospitality through proven methodologies and frameworks.'
            },
            capabilities: {
                title: 'Hospitality Consulting Capabilities | Service Innovation | Narratum',
                description: 'Comprehensive capabilities in experience design, service innovation, operational strategy, cultural consulting, innovation labs, and impact measurement.'
            },
            loyalty: {
                title: 'Loyalty Program Design | Customer Engagement Strategy | Narratum',
                description: 'Building lasting connections through strategic loyalty programs. Community, transactional, experiential, and partnered loyalty solutions.'
            },
            partnerships: {
                title: 'Strategic Partnerships | Collaborative Innovation | Narratum',
                description: 'Collaborating for greater impact through technology partnerships, hospitality groups, cultural institutions, and educational alliances.'
            },
            contact: {
                title: 'Contact Narratum | Strategic Hospitality Consulting | NYC',
                description: 'Ready to transform your infrastructure? Connect with our strategic hospitality experts in NYC. Email: connect@narratum.io'
            }
        };
        
        this.sectionMeta = sectionMeta;
        
        // Set up intersection observer for dynamic updates
        window.addEventListener('popstate', () => this.updateMetaFromURL());
        this.updateMetaFromURL(); // Initial update
    }
    
    updateDynamicMeta(section) {
        if (!this.sectionMeta[section]) return;
        
        const meta = this.sectionMeta[section];
        
        // Update title
        document.title = meta.title;
        
        // Update meta description
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
            descMeta.content = meta.description;
        }
        
        // Update Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogTitle) ogTitle.content = meta.title;
        if (ogDescription) ogDescription.content = meta.description;
        
        // Update Twitter
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterTitle) twitterTitle.content = meta.title;
        if (twitterDescription) twitterDescription.content = meta.description;
        
        console.log(`[SEO AI] Updated meta for section: ${section}`);
    }
    
    updateMetaFromURL() {
        const hash = window.location.hash.substring(1);
        if (hash && this.sectionMeta[hash]) {
            this.updateDynamicMeta(hash);
        }
    }
    
    // Add semantic markup for better AI understanding
    addSemanticMarkup() {
        // Add semantic roles and ARIA labels where missing
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            const sectionName = section.getAttribute('data-section');
            section.setAttribute('role', 'region');
            section.setAttribute('aria-labelledby', `${sectionName}-heading`);
            
            // Find and enhance headings
            const heading = section.querySelector('h1, h2, h3');
            if (heading) {
                heading.id = `${sectionName}-heading`;
            }
        });
        
        // Enhance navigation for AI understanding
        const nav = document.querySelector('.nav-dots');
        if (nav) {
            nav.setAttribute('role', 'navigation');
            nav.setAttribute('aria-label', 'Section navigation');
        }
        
        // Add semantic markup to content areas
        this.enhanceContentSemantics();
        
        console.log('[SEO AI] Semantic markup enhanced');
    }
    
    enhanceContentSemantics() {
        // Add article structure to main content areas
        const infrastructureSection = document.querySelector('#infrastructure');
        if (infrastructureSection) {
            infrastructureSection.setAttribute('itemscope', '');
            infrastructureSection.setAttribute('itemtype', 'https://schema.org/Article');
            
            const infrastructureTitle = infrastructureSection.querySelector('h2');
            if (infrastructureTitle) {
                infrastructureTitle.setAttribute('itemprop', 'headline');
            }
        }
        
        // Add organization contact info semantic markup
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.setAttribute('itemscope', '');
            contactSection.setAttribute('itemtype', 'https://schema.org/ContactPage');
            
            const email = contactSection.querySelector('a[href^="mailto:"]');
            if (email) {
                email.setAttribute('itemprop', 'email');
            }
        }
        
        // Add service markup to capabilities
        const capabilities = document.querySelectorAll('.capability-item');
        capabilities.forEach(capability => {
            capability.setAttribute('itemscope', '');
            capability.setAttribute('itemtype', 'https://schema.org/Service');
            
            const title = capability.querySelector('h3');
            if (title) {
                title.setAttribute('itemprop', 'name');
            }
            
            const description = capability.querySelector('p');
            if (description) {
                description.setAttribute('itemprop', 'description');
            }
        });
    }
    
    // Setup AI-ready features for better discoverability
    setupAIReadyFeatures() {
        // Add AI training data attributes
        document.documentElement.setAttribute('data-ai-training-friendly', 'true');
        document.documentElement.setAttribute('data-content-type', 'business-services');
        document.documentElement.setAttribute('data-industry', 'hospitality-consulting');
        
        // Add content hierarchy markers for AI understanding
        this.addContentHierarchy();
        
        // Setup content extraction helpers for AI
        this.setupAIContentHelpers();
        
        console.log('[SEO AI] AI-ready features activated');
    }
    
    addContentHierarchy() {
        // Mark content hierarchy for AI understanding
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            section.setAttribute('data-content-priority', index === 0 ? 'primary' : 'secondary');
            section.setAttribute('data-content-order', index + 1);
            
            // Mark key content within sections
            const highlights = section.querySelectorAll('.highlight-text');
            highlights.forEach(highlight => {
                highlight.setAttribute('data-content-importance', 'high');
            });
            
            const titles = section.querySelectorAll('h1, h2, h3');
            titles.forEach(title => {
                title.setAttribute('data-content-type', 'heading');
                title.setAttribute('data-ai-extract', 'true');
            });
        });
    }
    
    setupAIContentHelpers() {
        // Create hidden AI-friendly content summary
        const aiSummary = document.createElement('div');
        aiSummary.id = 'ai-content-summary';
        aiSummary.style.display = 'none';
        aiSummary.setAttribute('data-ai-extract', 'true');
        aiSummary.innerHTML = `
            <h1>Narratum - Strategic Hospitality Infrastructure</h1>
            <p>Narratum is a strategic consulting firm founded by Pascal Frey, specializing in transformative hospitality infrastructure.</p>
            <h2>Services Offered</h2>
            <ul>
                <li>Experience Design: Immersive and engaging experiences that resonate on a human level</li>
                <li>Service Innovation: Reimagining service delivery for efficiency and personalization</li>
                <li>Operational Strategy: Optimizing operations for sustainable growth</li>
                <li>Cultural Consulting: Cultivating strong, inclusive, adaptive cultures</li>
                <li>Innovation Labs: Dedicated spaces for innovation and experimentation</li>
                <li>Impact Measurement: Metrics and evaluation frameworks for value demonstration</li>
            </ul>
            <h2>Target Industries</h2>
            <ul>
                <li>Education</li>
                <li>Cultural Institutions</li>
                <li>Corporate Organizations</li>
                <li>Hospitality Sector</li>
            </ul>
            <h2>Location and Contact</h2>
            <p>Located at 110 East 25th Street, New York City. Contact: connect@narratum.io</p>
            <h2>Key Differentiators</h2>
            <p>Focuses on infrastructure over service, systematic transformation, and lasting community connections.</p>
        `;
        
        document.body.appendChild(aiSummary);
    }
    
    // Optimize for different crawler types
    initializeCrawlerOptimization() {
        // Add robots meta enhancements
        const robotsMeta = document.querySelector('meta[name="robots"]');
        if (robotsMeta) {
            robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
        }
        
        // Add additional crawler directives
        const crawlerMetas = [
            { name: 'googlebot', content: 'index, follow, max-image-preview:large' },
            { name: 'bingbot', content: 'index, follow' },
            { name: 'slurp', content: 'index, follow' },
            { name: 'duckduckbot', content: 'index, follow' },
            { name: 'facebookexternalhit', content: 'index, follow' },
            { name: 'twitterbot', content: 'index, follow' },
            { name: 'linkedinbot', content: 'index, follow' }
        ];
        
        crawlerMetas.forEach(meta => {
            const existing = document.querySelector(`meta[name="${meta.name}"]`);
            if (!existing) {
                const metaEl = document.createElement('meta');
                metaEl.name = meta.name;
                metaEl.content = meta.content;
                document.head.appendChild(metaEl);
            }
        });
        
        // Add sitemap reference if not exists
        if (!document.querySelector('link[rel="sitemap"]')) {
            const sitemap = document.createElement('link');
            sitemap.rel = 'sitemap';
            sitemap.type = 'application/xml';
            sitemap.href = '/sitemap.xml';
            document.head.appendChild(sitemap);
        }
        
        console.log('[SEO AI] Crawler optimization completed');
    }
    
    // Track events for SEO insights
    trackEvent(eventName, data = {}) {
        const event = {
            name: eventName,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            section: this.currentSection,
            ...data
        };
        
        this.analytics.events = this.analytics.events || [];
        this.analytics.events.push(event);
        
        // Send to Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                ...data,
                custom_parameter_section: this.currentSection
            });
        }
        
        // Store in localStorage for later analysis
        this.storeAnalytics();
        
        console.log(`[SEO AI] Event tracked: ${eventName}`, data);
    }
    
    storeAnalytics() {
        try {
            localStorage.setItem('narratum_seo_analytics', JSON.stringify(this.analytics));
        } catch (e) {
            console.warn('[SEO AI] Could not store analytics:', e.message);
        }
    }
    
    // Generate sitemap dynamically
    generateSitemap() {
        const sections = document.querySelectorAll('.section[data-section]');
        const pages = [
            {
                url: 'https://narratum.io/',
                lastmod: new Date().toISOString().split('T')[0],
                changefreq: 'weekly',
                priority: '1.0'
            }
        ];
        
        // Add section anchors as separate pages for AI understanding
        sections.forEach(section => {
            const sectionName = section.getAttribute('data-section');
            if (sectionName && sectionName !== 'hero') {
                pages.push({
                    url: `https://narratum.io/#${sectionName}`,
                    lastmod: new Date().toISOString().split('T')[0],
                    changefreq: 'monthly',
                    priority: '0.8'
                });
            }
        });
        
        return pages;
    }
    
    // Get AI-optimized content summary
    getAIContentSummary() {
        return {
            businessName: 'Narratum',
            businessType: 'Strategic Hospitality Consulting',
            founder: 'Pascal Frey',
            location: 'New York City',
            services: [
                'Experience Design',
                'Service Innovation',
                'Operational Strategy',
                'Cultural Consulting',
                'Innovation Labs',
                'Impact Measurement'
            ],
            targetIndustries: ['Education', 'Cultural Institutions', 'Corporate', 'Hospitality'],
            keyDifferentiators: [
                'Infrastructure over service approach',
                'Systematic transformation methodology',
                'Community connection focus',
                'Cultural programming expertise'
            ],
            contactInfo: {
                email: 'connect@narratum.io',
                address: '110 East 25th Street, New York City',
                social: {
                    instagram: 'https://instagram.com/narratum_io',
                    x: 'https://x.com/narratum_io'
                }
            }
        };
    }
    
    // Export analytics data for SEO analysis
    exportAnalytics() {
        return {
            ...this.analytics,
            seoHealth: this.calculateSEOHealth(),
            aiReadiness: this.calculateAIReadiness(),
            recommendations: this.generateSEORecommendations()
        };
    }
    
    calculateSEOHealth() {
        const checks = {
            hasTitle: !!document.title,
            hasDescription: !!document.querySelector('meta[name="description"]'),
            hasCanonical: !!document.querySelector('link[rel="canonical"]'),
            hasStructuredData: !!document.querySelector('script[type="application/ld+json"]'),
            hasOpenGraph: !!document.querySelector('meta[property^="og:"]'),
            hasTwitterCards: !!document.querySelector('meta[property^="twitter:"]'),
            mobileOptimized: !!document.querySelector('meta[name="viewport"]'),
            hasManifest: !!document.querySelector('link[rel="manifest"]'),
            fastLoadTime: (this.analytics.first_contentful_paint || 0) < 2500,
            goodEngagement: this.analytics.timeOnPage > 30
        };
        
        const score = Object.values(checks).filter(Boolean).length / Object.keys(checks).length;
        return {
            score: Math.round(score * 100),
            checks,
            grade: score >= 0.9 ? 'A' : score >= 0.8 ? 'B' : score >= 0.7 ? 'C' : score >= 0.6 ? 'D' : 'F'
        };
    }
    
    calculateAIReadiness() {
        const aiChecks = {
            hasStructuredData: !!this.structuredData['@graph'],
            hasSemanticMarkup: !!document.querySelector('[itemscope]'),
            hasAIMetaTags: !!document.querySelector('meta[name="ai-ready"]'),
            hasContentHierarchy: !!document.querySelector('[data-content-priority]'),
            hasExtractableContent: !!document.querySelector('[data-ai-extract]'),
            hasBusinessSchema: !!document.querySelector('script[type="application/ld+json"]'),
            mobileResponsive: window.matchMedia('(max-width: 768px)').matches,
            fastPerformance: (this.analytics.lcp || 0) < 2500
        };
        
        const score = Object.values(aiChecks).filter(Boolean).length / Object.keys(aiChecks).length;
        return {
            score: Math.round(score * 100),
            checks: aiChecks,
            readinessLevel: score >= 0.9 ? 'Excellent' : score >= 0.8 ? 'Good' : score >= 0.6 ? 'Fair' : 'Needs Improvement'
        };
    }
    
    generateSEORecommendations() {
        const recommendations = [];
        const health = this.calculateSEOHealth();
        const aiReadiness = this.calculateAIReadiness();
        
        if (!health.checks.fastLoadTime) {
            recommendations.push('Optimize page load time to under 2.5 seconds');
        }
        
        if (!health.checks.goodEngagement) {
            recommendations.push('Improve user engagement metrics');
        }
        
        if (!aiReadiness.checks.hasBusinessSchema) {
            recommendations.push('Add comprehensive business schema markup');
        }
        
        if (this.analytics.maxScrollDepth < 50) {
            recommendations.push('Improve content engagement to increase scroll depth');
        }
        
        return recommendations;
    }
    
    // Monitor and alert on SEO issues
    monitorSEOHealth() {
        setInterval(() => {
            const health = this.calculateSEOHealth();
            const aiReadiness = this.calculateAIReadiness();
            
            if (health.score < 80) {
                console.warn(`[SEO AI] SEO Health Warning: Score ${health.score}%`);
            }
            
            if (aiReadiness.score < 80) {
                console.warn(`[SEO AI] AI Readiness Warning: Score ${aiReadiness.score}%`);
            }
            
            // Log current status
            console.log(`[SEO AI] Health: ${health.score}% | AI Ready: ${aiReadiness.score}%`);
        }, 30000); // Check every 30 seconds
    }
}

// Initialize SEO AI Optimizer
const seoOptimizer = new SEOAIOptimizer();

// Make it globally available for debugging and external access
window.seoOptimizer = seoOptimizer;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOAIOptimizer;
}

console.log('[SEO AI] SEO AI Optimizer loaded successfully');