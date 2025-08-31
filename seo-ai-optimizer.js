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
    
    // Enhanced visual monitoring and alert system for SEO issues
    monitorSEOHealth() {
        setInterval(() => {
            const health = this.calculateSEOHealth();
            const aiReadiness = this.calculateAIReadiness();

            // Visual feedback for health status
            this.updateSEOHealthIndicator(health, aiReadiness);

            if (health.score < 80) {
                this.showSEOAlert('SEO Health Warning', `Score: ${health.score}% - ${health.grade}`, 'warning');
                console.warn(`[SEO AI] SEO Health Warning: Score ${health.score}%`);
            }

            if (aiReadiness.score < 80) {
                this.showSEOAlert('AI Readiness Warning', `Score: ${aiReadiness.score}% - ${aiReadiness.readinessLevel}`, 'info');
                console.warn(`[SEO AI] AI Readiness Warning: Score ${aiReadiness.score}%`);
            }

            // Show success notification for good health
            if (health.score >= 90 && aiReadiness.score >= 90) {
                this.showSEOAlert('Excellent SEO Health', 'All systems optimized!', 'success');
            }

            // Log current status with visual indicator
            console.log(`[SEO AI] Health: ${health.score}% | AI Ready: ${aiReadiness.score}%`);
        }, 30000); // Check every 30 seconds
    }

    // Create and show animated SEO alerts
    showSEOAlert(title, message, type = 'info') {
        // Prevent duplicate alerts
        const existingAlert = document.querySelector(`.seo-alert[data-type="${type}"]`);
        if (existingAlert) {
            existingAlert.remove();
        }

        const alert = document.createElement('div');
        alert.className = `seo-alert seo-alert-${type}`;
        alert.setAttribute('data-type', type);
        alert.innerHTML = `
            <div class="seo-alert-icon">
                ${this.getAlertIcon(type)}
            </div>
            <div class="seo-alert-content">
                <div class="seo-alert-title">${title}</div>
                <div class="seo-alert-message">${message}</div>
            </div>
            <button class="seo-alert-close" onclick="this.parentElement.remove()">&times;</button>
        `;

        // Add styles for the alert
        this.addSEOAlertStyles();

        document.body.appendChild(alert);

        // Animate in
        requestAnimationFrame(() => {
            alert.style.transform = 'translateX(0)';
            alert.style.opacity = '1';
        });

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alert.parentElement) {
                alert.style.transform = 'translateX(100%)';
                alert.style.opacity = '0';
                setTimeout(() => alert.remove(), 300);
            }
        }, 5000);
    }

    getAlertIcon(type) {
        const icons = {
            success: '✓',
            warning: '⚠️',
            error: '✗',
            info: 'ℹ️'
        };
        return icons[type] || icons.info;
    }

    addSEOAlertStyles() {
        if (document.getElementById('seo-alert-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'seo-alert-styles';
        styles.textContent = `
            .seo-alert {
                position: fixed;
                top: 20px;
                right: 20px;
                max-width: 400px;
                background: rgba(10, 21, 32, 0.95);
                border: 1px solid rgba(251, 191, 36, 0.3);
                border-radius: 8px;
                padding: 16px;
                color: white;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
                z-index: 10000;
                transform: translateX(100%);
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            }

            .seo-alert-success {
                border-color: rgba(39, 174, 96, 0.5);
                background: rgba(39, 174, 96, 0.1);
            }

            .seo-alert-warning {
                border-color: rgba(243, 156, 18, 0.5);
                background: rgba(243, 156, 18, 0.1);
            }

            .seo-alert-error {
                border-color: rgba(231, 76, 60, 0.5);
                background: rgba(231, 76, 60, 0.1);
            }

            .seo-alert-info {
                border-color: rgba(52, 152, 219, 0.5);
                background: rgba(52, 152, 219, 0.1);
            }

            .seo-alert-icon {
                font-size: 20px;
                margin-right: 12px;
                display: inline-block;
                vertical-align: top;
            }

            .seo-alert-content {
                display: inline-block;
                vertical-align: top;
                max-width: calc(100% - 60px);
            }

            .seo-alert-title {
                font-weight: 600;
                margin-bottom: 4px;
                color: #fbbf24;
            }

            .seo-alert-message {
                color: rgba(255, 255, 255, 0.8);
                font-size: 13px;
            }

            .seo-alert-close {
                position: absolute;
                top: 8px;
                right: 8px;
                background: none;
                border: none;
                color: rgba(255, 255, 255, 0.6);
                font-size: 18px;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
            }

            .seo-alert-close:hover {
                color: white;
                background: rgba(255, 255, 255, 0.1);
            }

            .seo-health-indicator {
                position: fixed;
                bottom: 20px;
                left: 20px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: rgba(10, 21, 32, 0.9);
                border: 2px solid rgba(251, 191, 36, 0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 12px;
                font-weight: 600;
                color: #fbbf24;
                z-index: 1000;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
            }

            .seo-health-indicator:hover {
                transform: scale(1.1);
                border-color: rgba(251, 191, 36, 0.6);
            }

            .seo-health-indicator.good {
                border-color: rgba(39, 174, 96, 0.6);
                color: #27ae60;
            }

            .seo-health-indicator.warning {
                border-color: rgba(243, 156, 18, 0.6);
                color: #f39c12;
            }

            .seo-health-indicator.poor {
                border-color: rgba(231, 76, 60, 0.6);
                color: #e74c3c;
            }

            .seo-analysis-progress {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(10, 21, 32, 0.95);
                border: 1px solid rgba(251, 191, 36, 0.3);
                border-radius: 12px;
                padding: 24px;
                text-align: center;
                z-index: 10001;
                backdrop-filter: blur(10px);
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .seo-analysis-progress.visible {
                opacity: 1;
                visibility: visible;
            }

            .seo-progress-bar {
                width: 200px;
                height: 4px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 2px;
                margin: 16px auto;
                overflow: hidden;
            }

            .seo-progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #fbbf24, #7dd3fc);
                border-radius: 2px;
                width: 0%;
                transition: width 0.3s ease;
            }

            .seo-analysis-text {
                color: white;
                font-size: 14px;
                margin-bottom: 8px;
            }

            .seo-analysis-subtext {
                color: rgba(255, 255, 255, 0.6);
                font-size: 12px;
            }

            @keyframes fadeInScale {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.9);
                }
                100% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }

            @keyframes sectionIndicatorFade {
                0%, 100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
                20%, 80% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        `;

        document.head.appendChild(styles);
    }

    // Create and update SEO health indicator
    updateSEOHealthIndicator(health, aiReadiness) {
        let indicator = document.querySelector('.seo-health-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'seo-health-indicator';
            indicator.title = 'SEO Health Indicator - Click for details';
            indicator.onclick = () => this.showSEOHealthDetails(health, aiReadiness);
            document.body.appendChild(indicator);
        }

        const avgScore = Math.round((health.score + aiReadiness.score) / 2);
        indicator.textContent = avgScore;

        // Update styling based on score
        indicator.className = 'seo-health-indicator';
        if (avgScore >= 85) {
            indicator.classList.add('good');
        } else if (avgScore >= 70) {
            indicator.classList.add('warning');
        } else {
            indicator.classList.add('poor');
        }
    }

    // Show detailed SEO health information
    showSEOHealthDetails(health, aiReadiness) {
        const details = document.createElement('div');
        details.className = 'seo-health-details';
        details.innerHTML = `
            <div style="padding: 20px; background: rgba(10, 21, 32, 0.95); border-radius: 8px; border: 1px solid rgba(251, 191, 36, 0.3); backdrop-filter: blur(10px);">
                <h3 style="color: #fbbf24; margin: 0 0 16px 0;">SEO Health Details</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div>
                        <h4 style="color: white; margin: 0 0 8px 0;">SEO Score</h4>
                        <div style="font-size: 24px; font-weight: bold; color: ${health.score >= 80 ? '#27ae60' : health.score >= 60 ? '#f39c12' : '#e74c3c'};">${health.score}%</div>
                        <div style="color: rgba(255,255,255,0.6); font-size: 12px;">Grade: ${health.grade}</div>
                    </div>
                    <div>
                        <h4 style="color: white; margin: 0 0 8px 0;">AI Readiness</h4>
                        <div style="font-size: 24px; font-weight: bold; color: ${aiReadiness.score >= 80 ? '#27ae60' : aiReadiness.score >= 60 ? '#f39c12' : '#e74c3c'};">${aiReadiness.score}%</div>
                        <div style="color: rgba(255,255,255,0.6); font-size: 12px;">${aiReadiness.readinessLevel}</div>
                    </div>
                </div>
                <div style="text-align: center;">
                    <button onclick="this.closest('.seo-health-details').remove()" style="background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); color: #fbbf24; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Close</button>
                </div>
            </div>
        `;

        details.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10001;
            animation: fadeInScale 0.3s ease;
        `;

        document.body.appendChild(details);
    }

    // Enhanced section tracking with visual feedback
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

                    // Visual feedback for section change
                    this.showSectionTransition(sectionName);

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

    // Visual feedback for section transitions
    showSectionTransition(sectionName) {
        // Create subtle transition indicator
        const indicator = document.createElement('div');
        indicator.className = 'section-transition-indicator';
        indicator.textContent = sectionName.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
        indicator.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(10, 21, 32, 0.9);
            color: #fbbf24;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            z-index: 9999;
            opacity: 0;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(251, 191, 36, 0.3);
            animation: sectionIndicatorFade 2s ease;
        `;

        document.body.appendChild(indicator);

        setTimeout(() => {
            if (indicator.parentElement) {
                indicator.remove();
            }
        }, 2000);
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