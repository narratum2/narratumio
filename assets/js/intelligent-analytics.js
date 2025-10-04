/**
 * Intelligent Analytics - AI-Ready Analytics and SEO Monitoring
 * Real-time SEO health monitoring and AI-optimized analytics
 * Version: 1.0
 */

class IntelligentAnalytics {
    constructor() {
        this.metrics = {
            seo: {},
            performance: {},
            engagement: {},
            ai: {}
        };
        this.monitoring = {
            intervals: {},
            observers: [],
            active: false
        };
        this.init();
    }
    
    init() {
        console.log('[Intelligent Analytics] Initializing...');
        this.setupCoreMetrics();
        this.startMonitoring();
        this.setupRealtimeTracking();
        console.log('[Intelligent Analytics] Active');
    }
    
    setupCoreMetrics() {
        // Core Web Vitals tracking
        this.trackCoreWebVitals();
        
        // SEO health monitoring
        this.monitorSEOHealth();
        
        // AI readiness tracking
        this.trackAIReadiness();
        
        // User engagement analytics
        this.trackEngagement();
    }
    
    trackCoreWebVitals() {
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.metrics.performance.lcp = entry.startTime;
                    this.reportMetric('LCP', entry.startTime);
                }
            }).observe({entryTypes: ['largest-contentful-paint']});
            
            // First Input Delay
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.metrics.performance.fid = entry.processingStart - entry.startTime;
                    this.reportMetric('FID', entry.processingStart - entry.startTime);
                }
            }).observe({entryTypes: ['first-input']});
            
            // Cumulative Layout Shift
            let clsValue = 0;
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        this.metrics.performance.cls = clsValue;
                        this.reportMetric('CLS', clsValue);
                    }
                }
            }).observe({entryTypes: ['layout-shift']});
        }
    }
    
    monitorSEOHealth() {
        const checkSEOHealth = () => {
            const health = {
                title: document.title.length > 0 && document.title.length < 60,
                description: this.checkMetaDescription(),
                headings: this.checkHeadingStructure(),
                images: this.checkImageAlt(),
                links: this.checkInternalLinks(),
                structured: !!document.querySelector('script[type="application/ld+json"]'),
                mobile: !!document.querySelector('meta[name="viewport"]'),
                canonical: !!document.querySelector('link[rel="canonical"]')
            };
            
            this.metrics.seo = health;
            const score = Object.values(health).filter(Boolean).length / Object.keys(health).length * 100;
            this.reportMetric('SEO_HEALTH', score);
            
            return health;
        };
        
        // Check on init and periodically
        checkSEOHealth();
        this.monitoring.intervals.seo = setInterval(checkSEOHealth, 30000);
    }
    
    checkMetaDescription() {
        const meta = document.querySelector('meta[name="description"]');
        return meta && meta.content.length > 120 && meta.content.length < 160;
    }
    
    checkHeadingStructure() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        return headings.length > 0 && document.querySelectorAll('h1').length === 1;
    }
    
    checkImageAlt() {
        const images = document.querySelectorAll('img');
        const withAlt = document.querySelectorAll('img[alt]');
        return images.length === 0 || images.length === withAlt.length;
    }
    
    checkInternalLinks() {
        const links = document.querySelectorAll('a[href^="#"], a[href^="/"], a[href^="./"]');
        return links.length > 0;
    }
    
    trackAIReadiness() {
        const checkAIReadiness = () => {
            const readiness = {
                structuredData: document.querySelectorAll('script[type="application/ld+json"]').length > 0,
                semanticMarkup: document.querySelectorAll('[itemscope], [role], [aria-label]').length > 5,
                contentMarkers: document.querySelectorAll('[data-ai-extract], [data-content-type]').length > 0,
                machineReadable: this.checkMachineReadability(),
                crawlerOptimized: !!document.querySelector('meta[name="robots"]'),
                mobileFriendly: this.checkMobileFriendliness()
            };
            
            this.metrics.ai = readiness;
            const score = Object.values(readiness).filter(Boolean).length / Object.keys(readiness).length * 100;
            this.reportMetric('AI_READINESS', score);
            
            return readiness;
        };
        
        checkAIReadiness();
        this.monitoring.intervals.ai = setInterval(checkAIReadiness, 60000);
    }
    
    checkMachineReadability() {
        // Check if content is structured for machine understanding
        const checks = [
            document.querySelectorAll('h1, h2, h3').length > 3,
            document.querySelectorAll('p').length > 5,
            document.querySelectorAll('ul, ol').length > 0,
            document.querySelector('nav'),
            document.querySelector('main')
        ];
        
        return checks.filter(Boolean).length >= 4;
    }
    
    checkMobileFriendliness() {
        const viewport = document.querySelector('meta[name="viewport"]');
        const responsive = window.matchMedia('(max-width: 768px)').matches;
        return !!viewport && (responsive || window.innerWidth > 768);
    }
    
    trackEngagement() {
        let startTime = Date.now();
        let scrollDepth = 0;
        let clicks = 0;
        
        // Scroll tracking
        window.addEventListener('scroll', () => {
            const depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            scrollDepth = Math.max(scrollDepth, depth);
            this.metrics.engagement.scrollDepth = Math.round(scrollDepth * 100);
        }, { passive: true });
        
        // Click tracking
        document.addEventListener('click', () => {
            clicks++;
            this.metrics.engagement.clicks = clicks;
        });
        
        // Time tracking
        setInterval(() => {
            if (!document.hidden) {
                this.metrics.engagement.timeOnPage = Math.round((Date.now() - startTime) / 1000);
            }
        }, 1000);
    }
    
    startMonitoring() {
        this.monitoring.active = true;
        console.log('[Intelligent Analytics] Monitoring started');
        
        // Report status every 5 minutes
        this.monitoring.intervals.status = setInterval(() => {
            this.reportStatus();
        }, 300000);
    }
    
    reportMetric(name, value) {
        console.log(`[Analytics] ${name}: ${typeof value === 'number' ? Math.round(value) : value}`);
        
        // Send to external analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'seo_metric', {
                metric_name: name,
                metric_value: value,
                timestamp: new Date().toISOString()
            });
        }
    }
    
    reportStatus() {
        const status = {
            seoHealth: this.calculateOverallSEOScore(),
            aiReadiness: this.calculateAIReadinessScore(), 
            engagement: this.calculateEngagementScore(),
            performance: this.calculatePerformanceScore()
        };
        
        console.log('[Intelligent Analytics] Status Report:', status);
        
        // Alert on issues
        if (status.seoHealth < 80) {
            console.warn(`[Analytics] SEO Health Alert: ${status.seoHealth}%`);
        }
        
        if (status.performance < 70) {
            console.warn(`[Analytics] Performance Alert: ${status.performance}%`);
        }
        
        return status;
    }
    
    calculateOverallSEOScore() {
        const seo = this.metrics.seo;
        if (!Object.keys(seo).length) return 0;
        
        return Math.round(Object.values(seo).filter(Boolean).length / Object.keys(seo).length * 100);
    }
    
    calculateAIReadinessScore() {
        const ai = this.metrics.ai;
        if (!Object.keys(ai).length) return 0;
        
        return Math.round(Object.values(ai).filter(Boolean).length / Object.keys(ai).length * 100);
    }
    
    calculateEngagementScore() {
        const eng = this.metrics.engagement;
        const timeScore = Math.min((eng.timeOnPage || 0) / 120, 1) * 30;
        const scrollScore = (eng.scrollDepth || 0) / 100 * 40;
        const clickScore = Math.min((eng.clicks || 0) / 5, 1) * 30;
        
        return Math.round(timeScore + scrollScore + clickScore);
    }
    
    calculatePerformanceScore() {
        const perf = this.metrics.performance;
        let score = 100;
        
        if (perf.lcp > 2500) score -= 30;
        else if (perf.lcp > 1500) score -= 15;
        
        if (perf.fid > 100) score -= 30;
        else if (perf.fid > 50) score -= 15;
        
        if (perf.cls > 0.25) score -= 30;
        else if (perf.cls > 0.1) score -= 15;
        
        return Math.max(0, score);
    }
    
    // Export data for analysis
    exportData() {
        return {
            metrics: this.metrics,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            scores: {
                seo: this.calculateOverallSEOScore(),
                ai: this.calculateAIReadinessScore(),
                engagement: this.calculateEngagementScore(),
                performance: this.calculatePerformanceScore()
            }
        };
    }
    
    // Cleanup
    destroy() {
        Object.values(this.monitoring.intervals).forEach(interval => {
            clearInterval(interval);
        });
        
        this.monitoring.observers.forEach(observer => {
            observer.disconnect();
        });
        
        this.monitoring.active = false;
        console.log('[Intelligent Analytics] Monitoring stopped');
    }
}

// Initialize
const intelligentAnalytics = new IntelligentAnalytics();

// Global access
window.intelligentAnalytics = intelligentAnalytics;

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    intelligentAnalytics.destroy();
});

export default IntelligentAnalytics;