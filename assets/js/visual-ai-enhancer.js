/**
 * Visual AI Enhancer - AI-Driven Visual SEO Optimization
 * Enhances visual elements for better AI understanding and SEO performance
 * Version: 1.0
 */

class VisualAIEnhancer {
    constructor() {
        this.config = {
            enabled: true,
            autoOptimize: true,
            generateAltText: true,
            optimizeImages: true,
            enhanceVisualHierarchy: true
        };
        
        this.visualAnalytics = {
            images: [],
            visualElements: [],
            accessibility: {},
            performance: {}
        };
        
        this.init();
    }
    
    init() {
        console.log('[Visual AI Enhancer] Initializing visual AI optimization...');
        
        this.analyzeVisualElements();
        this.optimizeImages();
        this.enhanceVisualHierarchy();
        this.addVisualStructure();
        this.setupVisualMonitoring();
        
        console.log('[Visual AI Enhancer] Visual AI optimization complete');
    }
    
    analyzeVisualElements() {
        // Analyze all visual elements for AI optimization
        const images = document.querySelectorAll('img');
        const svgs = document.querySelectorAll('svg');
        const videos = document.querySelectorAll('video');
        const canvases = document.querySelectorAll('canvas');
        
        this.visualAnalytics.images = Array.from(images).map(img => ({
            src: img.src,
            alt: img.alt,
            hasAlt: !!img.alt,
            dimensions: { width: img.naturalWidth, height: img.naturalHeight },
            loading: img.loading,
            optimized: this.isImageOptimized(img)
        }));
        
        // Enhance SVGs for AI understanding
        svgs.forEach((svg, index) => {
            if (!svg.getAttribute('role')) {
                svg.setAttribute('role', 'img');
            }
            if (!svg.getAttribute('aria-label')) {
                svg.setAttribute('aria-label', `Decorative element ${index + 1}`);
            }
            svg.setAttribute('data-ai-visual-type', 'icon');
        });
        
        console.log(`[Visual AI Enhancer] Analyzed ${images.length} images, ${svgs.length} SVGs`);
    }
    
    isImageOptimized(img) {
        const checks = {
            hasAlt: !!img.alt,
            hasLazyLoading: img.loading === 'lazy',
            appropriateSize: img.naturalWidth <= 2000 && img.naturalHeight <= 2000,
            modernFormat: /\.(webp|avif)$/i.test(img.src)
        };
        
        return Object.values(checks).filter(Boolean).length >= 3;
    }
    
    optimizeImages() {
        const images = document.querySelectorAll('img');
        
        images.forEach((img, index) => {
            // Add AI-friendly attributes
            img.setAttribute('data-ai-content-type', 'image');
            img.setAttribute('data-ai-index', index.toString());
            
            // Generate alt text if missing
            if (!img.alt) {
                img.alt = this.generateAltText(img);
            }
            
            // Add loading optimization
            if (!img.loading && index > 0) {
                img.loading = 'lazy';
            }
            
            // Add size hints for better performance
            if (!img.getAttribute('width') && !img.getAttribute('height')) {
                img.setAttribute('decoding', 'async');
            }
            
            // Add AI metadata
            const context = this.getImageContext(img);
            if (context) {
                img.setAttribute('data-ai-context', context);
            }
        });
        
        console.log(`[Visual AI Enhancer] Optimized ${images.length} images`);
    }
    
    generateAltText(img) {
        // Generate contextual alt text based on surrounding content
        const context = this.getImageContext(img);
        const section = img.closest('.section')?.getAttribute('data-section');
        
        if (context === 'icon') {
            return `${section || 'Section'} icon`;
        } else if (context === 'logo') {
            return 'Narratum logo';
        } else if (context === 'decoration') {
            return `Decorative element for ${section || 'page'}`;
        } else {
            return `Image in ${section || 'page'} section`;
        }
    }
    
    getImageContext(img) {
        const parent = img.closest('.capability-icon, .pillar-icon, .symbol-glyph, .footer, .hero');
        
        if (parent) {
            if (parent.classList.contains('capability-icon') || parent.classList.contains('pillar-icon')) {
                return 'icon';
            } else if (parent.classList.contains('footer') || parent.classList.contains('hero')) {
                return 'logo';
            } else {
                return 'decoration';
            }
        }
        
        return 'content';
    }
    
    enhanceVisualHierarchy() {
        // Add visual hierarchy markers for AI understanding
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            heading.setAttribute('data-ai-heading-level', level.toString());
            heading.setAttribute('data-ai-heading-importance', level <= 2 ? 'high' : 'medium');
            heading.setAttribute('data-ai-content-type', 'heading');
            
            // Add semantic relationship to content
            const nextElement = heading.nextElementSibling;
            if (nextElement && (nextElement.tagName === 'P' || nextElement.tagName === 'DIV')) {
                nextElement.setAttribute('data-ai-related-heading', heading.textContent.trim());
            }
        });
        
        // Add visual importance markers
        const importantElements = document.querySelectorAll('.highlight-text, .lead, .intro-text');
        importantElements.forEach(element => {
            element.setAttribute('data-ai-importance', 'high');
            element.setAttribute('data-ai-content-priority', 'featured');
        });
        
        console.log(`[Visual AI Enhancer] Enhanced visual hierarchy for ${headings.length} headings`);
    }
    
    addVisualStructure() {
        // Add visual structure indicators for AI
        const sections = document.querySelectorAll('.section');
        
        sections.forEach((section, index) => {
            section.setAttribute('data-ai-visual-order', (index + 1).toString());
            section.setAttribute('data-ai-section-type', this.getSectionType(section));
            
            // Add visual complexity score
            const complexity = this.calculateVisualComplexity(section);
            section.setAttribute('data-ai-visual-complexity', complexity.toString());
            
            // Add content density
            const density = this.calculateContentDensity(section);
            section.setAttribute('data-ai-content-density', density);
        });
        
        // Add page-level visual information
        document.documentElement.setAttribute('data-ai-visual-style', 'premium-modern');
        document.documentElement.setAttribute('data-ai-color-scheme', 'dark-professional');
        document.documentElement.setAttribute('data-ai-design-system', 'systematic-minimal');
    }
    
    getSectionType(section) {
        const sectionName = section.getAttribute('data-section');
        const typeMap = {
            'hero': 'landing',
            'infrastructure': 'content',
            'approach': 'methodology',
            'capabilities': 'services',
            'loyalty': 'programs',
            'partnerships': 'relationships',
            'contact': 'conversion'
        };
        
        return typeMap[sectionName] || 'content';
    }
    
    calculateVisualComplexity(section) {
        const elements = section.querySelectorAll('*');
        const animations = section.querySelectorAll('[class*="animate"], [class*="fade"], [class*="slide"]');
        const interactions = section.querySelectorAll('[onclick], [data-section], button, a');
        
        // Simple complexity score (1-10)
        const complexity = Math.min(10, Math.round(
            (elements.length / 20) + 
            (animations.length / 5) + 
            (interactions.length / 3)
        ));
        
        return complexity;
    }
    
    calculateContentDensity(section) {
        const textContent = section.textContent.trim();
        const elements = section.querySelectorAll('*');
        
        if (elements.length === 0) return 'empty';
        
        const wordsPerElement = textContent.split(/\s+/).length / elements.length;
        
        if (wordsPerElement > 10) return 'dense';
        if (wordsPerElement > 5) return 'medium';
        return 'sparse';
    }
    
    setupVisualMonitoring() {
        // Monitor visual performance and accessibility
        const checkVisualPerformance = () => {
            const metrics = {
                imageOptimization: this.assessImageOptimization(),
                visualAccessibility: this.assessVisualAccessibility(),
                responsiveDesign: this.assessResponsiveDesign(),
                visualHierarchy: this.assessVisualHierarchy()
            };
            
            this.visualAnalytics.performance = metrics;
            
            // Report issues
            if (metrics.imageOptimization < 80) {
                console.warn('[Visual AI Enhancer] Image optimization needs improvement');
            }
            
            if (metrics.visualAccessibility < 90) {
                console.warn('[Visual AI Enhancer] Visual accessibility needs improvement');
            }
            
            return metrics;
        };
        
        // Check on init and periodically
        checkVisualPerformance();
        setInterval(checkVisualPerformance, 60000); // Every minute
        
        // Monitor image loading performance
        this.monitorImageLoading();
    }
    
    assessImageOptimization() {
        const images = this.visualAnalytics.images;
        if (!images.length) return 100;
        
        const optimizedCount = images.filter(img => img.optimized).length;
        return Math.round((optimizedCount / images.length) * 100);
    }
    
    assessVisualAccessibility() {
        const images = document.querySelectorAll('img');
        const withAlt = document.querySelectorAll('img[alt]');
        const withRoles = document.querySelectorAll('svg[role], img[role]');
        const withAriaLabels = document.querySelectorAll('[aria-label], [aria-labelledby]');
        
        const score = (
            (withAlt.length / Math.max(images.length, 1)) * 30 +
            (withRoles.length / 20) * 30 +
            (withAriaLabels.length / 10) * 40
        );
        
        return Math.min(100, Math.round(score));
    }
    
    assessResponsiveDesign() {
        const viewports = [
            { width: 320, height: 568 },  // Mobile
            { width: 768, height: 1024 }, // Tablet
            { width: 1920, height: 1080 } // Desktop
        ];
        
        // Simple responsive check (in real implementation, would test multiple viewports)
        const hasViewportMeta = !!document.querySelector('meta[name="viewport"]');
        const hasMediaQueries = !!document.querySelector('style, link[rel="stylesheet"]');
        const hasFlexibleLayout = !!document.querySelector('[class*="container"], [class*="grid"], [class*="flex"]');
        
        const checks = [hasViewportMeta, hasMediaQueries, hasFlexibleLayout];
        return Math.round((checks.filter(Boolean).length / checks.length) * 100);
    }
    
    assessVisualHierarchy() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const hierarchy = [];
        
        headings.forEach(h => {
            hierarchy.push(parseInt(h.tagName.charAt(1)));
        });
        
        // Check if hierarchy makes sense (no skipping levels)
        let isValid = true;
        for (let i = 1; i < hierarchy.length; i++) {
            if (hierarchy[i] > hierarchy[i-1] + 1) {
                isValid = false;
                break;
            }
        }
        
        const hasH1 = hierarchy.includes(1);
        const hasMultipleLevels = new Set(hierarchy).size > 1;
        
        const checks = [isValid, hasH1, hasMultipleLevels];
        return Math.round((checks.filter(Boolean).length / checks.length) * 100);
    }
    
    monitorImageLoading() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            if (img.complete) {
                this.trackImageLoad(img, 'cached');
            } else {
                img.addEventListener('load', () => this.trackImageLoad(img, 'loaded'));
                img.addEventListener('error', () => this.trackImageLoad(img, 'error'));
            }
        });
    }
    
    trackImageLoad(img, status) {
        const loadData = {
            src: img.src,
            alt: img.alt,
            status: status,
            timestamp: new Date().toISOString(),
            dimensions: {
                natural: { width: img.naturalWidth, height: img.naturalHeight },
                display: { width: img.offsetWidth, height: img.offsetHeight }
            }
        };
        
        // Track in analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'image_load', {
                image_status: status,
                image_src: img.src,
                has_alt: !!img.alt
            });
        }
        
        console.log(`[Visual AI Enhancer] Image ${status}:`, loadData);
    }
    
    // Generate comprehensive visual SEO report
    generateVisualSEOReport() {
        const report = {
            timestamp: new Date().toISOString(),
            imageOptimization: this.assessImageOptimization(),
            visualAccessibility: this.assessVisualAccessibility(),
            responsiveDesign: this.assessResponsiveDesign(),
            visualHierarchy: this.assessVisualHierarchy(),
            recommendations: this.generateVisualRecommendations(),
            analytics: this.visualAnalytics
        };
        
        console.log('[Visual AI Enhancer] Visual SEO Report:', report);
        return report;
    }
    
    generateVisualRecommendations() {
        const recommendations = [];
        const perf = this.visualAnalytics.performance;
        
        if (this.assessImageOptimization() < 90) {
            recommendations.push('Optimize image alt text and loading attributes');
        }
        
        if (this.assessVisualAccessibility() < 90) {
            recommendations.push('Improve visual accessibility with better ARIA labels');
        }
        
        if (this.assessResponsiveDesign() < 90) {
            recommendations.push('Enhance responsive design implementation');
        }
        
        if (this.assessVisualHierarchy() < 90) {
            recommendations.push('Improve heading hierarchy structure');
        }
        
        const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
        if (imagesWithoutAlt.length > 0) {
            recommendations.push(`Add alt text to ${imagesWithoutAlt.length} images`);
        }
        
        return recommendations;
    }
    
    // Real-time visual optimization
    optimizeInRealTime() {
        // Monitor for dynamically added images
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Element node
                        const images = node.tagName === 'IMG' ? [node] : node.querySelectorAll('img');
                        images.forEach(img => this.optimizeNewImage(img));
                        
                        const svgs = node.tagName === 'SVG' ? [node] : node.querySelectorAll('svg');
                        svgs.forEach(svg => this.optimizeNewSVG(svg));
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        console.log('[Visual AI Enhancer] Real-time optimization active');
    }
    
    optimizeNewImage(img) {
        // Auto-optimize newly added images
        if (!img.alt) {
            img.alt = this.generateAltText(img);
        }
        
        if (!img.loading) {
            img.loading = 'lazy';
        }
        
        img.setAttribute('data-ai-content-type', 'image');
        img.setAttribute('data-ai-optimized', 'true');
        
        this.trackImageLoad(img, 'dynamically-added');
    }
    
    optimizeNewSVG(svg) {
        // Auto-optimize newly added SVGs
        if (!svg.getAttribute('role')) {
            svg.setAttribute('role', 'img');
        }
        
        if (!svg.getAttribute('aria-label')) {
            svg.setAttribute('aria-label', 'Decorative icon');
        }
        
        svg.setAttribute('data-ai-visual-type', 'icon');
        svg.setAttribute('data-ai-optimized', 'true');
    }
    
    // Export visual data for analysis
    exportVisualData() {
        return {
            ...this.visualAnalytics,
            scores: {
                imageOptimization: this.assessImageOptimization(),
                visualAccessibility: this.assessVisualAccessibility(),
                responsiveDesign: this.assessResponsiveDesign(),
                visualHierarchy: this.assessVisualHierarchy()
            },
            timestamp: new Date().toISOString()
        };
    }
}

// Initialize Visual AI Enhancer
const visualAIEnhancer = new VisualAIEnhancer();

// Start real-time optimization
visualAIEnhancer.optimizeInRealTime();

// Global access for debugging
window.visualAIEnhancer = visualAIEnhancer;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisualAIEnhancer;
}

console.log('[Visual AI Enhancer] System loaded and monitoring');