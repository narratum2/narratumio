/**
 * AI Discovery Reporter - Comprehensive AI Platform Integration and Reporting
 * Tracks and optimizes for AI platform discovery and understanding
 * Version: 1.0
 */

class AIDiscoveryReporter {
    constructor() {
        this.aiPlatforms = {
            'ChatGPT': {
                userAgents: ['GPTBot', 'ChatGPT-User'],
                lastVisit: null,
                visits: 0,
                optimizations: [],
                status: 'ready'
            },
            'Claude': {
                userAgents: ['Claude-Web', 'ClaudeBot'],
                lastVisit: null,
                visits: 0,
                optimizations: [],
                status: 'ready'
            },
            'GoogleAI': {
                userAgents: ['Google-Extended', 'GoogleBot', 'Bard'],
                lastVisit: null,
                visits: 0,
                optimizations: [],
                status: 'ready'
            },
            'Perplexity': {
                userAgents: ['PerplexityBot', 'Perplexity'],
                lastVisit: null,
                visits: 0,
                optimizations: [],
                status: 'ready'
            },
            'BingAI': {
                userAgents: ['BingBot', 'CopilotBot'],
                lastVisit: null,
                visits: 0,
                optimizations: [],
                status: 'ready'
            }
        };
        
        this.discoveryMetrics = {
            totalAIVisits: 0,
            uniqueAIPlatforms: 0,
            aiEngagementScore: 0,
            contentExtractionSuccess: 0,
            aiReadinessTests: []
        };
        
        this.contentOptimization = {
            keywordDensity: {},
            readabilityScore: 0,
            semanticStructure: 0,
            aiContentQuality: 0
        };
        
        this.init();
    }
    
    init() {
        console.log('[AI Discovery Reporter] Initializing AI discovery tracking...');
        
        this.setupAIPlatformDetection();
        this.analyzeContentForAI();
        this.initializeAIOptimizations();
        this.startDiscoveryReporting();
        this.setupAITestingSuite();
        
        console.log('[AI Discovery Reporter] AI discovery system active');
    }
    
    setupAIPlatformDetection() {
        // Detect AI platform visits
        const userAgent = navigator.userAgent;
        let detectedPlatform = null;
        
        Object.entries(this.aiPlatforms).forEach(([platform, config]) => {
            const isMatch = config.userAgents.some(agent => 
                userAgent.toLowerCase().includes(agent.toLowerCase())
            );
            
            if (isMatch) {
                detectedPlatform = platform;
                this.recordAIVisit(platform);
            }
        });
        
        // Enhanced detection for AI crawlers that might not be in user agent
        this.detectAdvancedAICrawlers();
        
        // Add AI detection metadata
        document.documentElement.setAttribute('data-ai-platform-detected', detectedPlatform || 'none');
        document.documentElement.setAttribute('data-ai-optimized', 'true');
    }
    
    detectAdvancedAICrawlers() {
        // Check for AI-specific request headers or behavior patterns
        const aiIndicators = [
            // Referrer-based detection
            document.referrer.includes('openai.com'),
            document.referrer.includes('anthropic.com'),
            document.referrer.includes('perplexity.ai'),
            
            // Behavior-based detection
            window.innerWidth === 1920 && window.innerHeight === 1080, // Common headless browser size
            navigator.webdriver === true,
            
            // Feature detection
            !window.chrome && !window.safari && !window.firefox
        ];
        
        const aiLikelihood = aiIndicators.filter(Boolean).length;
        
        if (aiLikelihood >= 2) {
            console.log('[AI Discovery Reporter] Potential AI crawler detected (likelihood:', aiLikelihood, ')');
            this.recordAIVisit('Unknown_AI_Platform');
        }
    }
    
    recordAIVisit(platform) {
        if (this.aiPlatforms[platform]) {
            this.aiPlatforms[platform].visits++;
            this.aiPlatforms[platform].lastVisit = new Date().toISOString();
            this.discoveryMetrics.totalAIVisits++;
            
            // Update unique platforms count
            this.discoveryMetrics.uniqueAIPlatforms = Object.values(this.aiPlatforms)
                .filter(p => p.visits > 0).length;
            
            console.log(`[AI Discovery Reporter] ${platform} visit recorded (total: ${this.aiPlatforms[platform].visits})`);
            
            // Apply platform-specific optimizations
            this.applyPlatformOptimizations(platform);
            
            // Track in analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'ai_platform_visit', {
                    ai_platform: platform,
                    visit_count: this.aiPlatforms[platform].visits
                });
            }
        }
    }
    
    applyPlatformOptimizations(platform) {
        const optimizations = [];
        
        switch(platform) {
            case 'ChatGPT':
                optimizations.push(...this.optimizeForChatGPT());
                break;
            case 'Claude':
                optimizations.push(...this.optimizeForClaude());
                break;
            case 'GoogleAI':
                optimizations.push(...this.optimizeForGoogleAI());
                break;
            case 'Perplexity':
                optimizations.push(...this.optimizeForPerplexity());
                break;
            case 'BingAI':
                optimizations.push(...this.optimizeForBingAI());
                break;
        }
        
        this.aiPlatforms[platform].optimizations.push(...optimizations);
        console.log(`[AI Discovery Reporter] Applied ${optimizations.length} optimizations for ${platform}`);
    }
    
    optimizeForChatGPT() {
        return [
            this.enhanceBusinessContext(),
            this.optimizeQAFormat(),
            this.addConversationalMetadata()
        ];
    }
    
    optimizeForClaude() {
        return [
            this.enhanceAnalyticalContext(),
            this.optimizeStructuredThinking(),
            this.addDepthMarkers()
        ];
    }
    
    optimizeForGoogleAI() {
        return [
            this.enhanceFactualAccuracy(),
            this.optimizeKnowledgeGraph(),
            this.addAuthoritativeness()
        ];
    }
    
    optimizeForPerplexity() {
        return [
            this.enhanceSourceability(),
            this.optimizeFactChecking(),
            this.addCitationMetadata()
        ];
    }
    
    optimizeForBingAI() {
        return [
            this.enhanceMicrosoftCompatibility(),
            this.optimizeEdgeIntegration(),
            this.addOfficeCompatibility()
        ];
    }
    
    // Platform-specific optimization methods
    enhanceBusinessContext() {
        if (document.querySelector('[data-chatgpt-context]')) return 'already-applied';
        
        const businessContext = document.createElement('div');
        businessContext.style.display = 'none';
        businessContext.setAttribute('data-chatgpt-context', 'true');
        businessContext.innerHTML = `
            <div data-business-type="strategic-consulting">
                <h1>Narratum Business Context for AI</h1>
                <p>Business Type: Strategic Hospitality Infrastructure Consulting</p>
                <p>Founder: Pascal Frey</p>
                <p>Location: 110 East 25th Street, New York City, NY</p>
                <p>Primary Services: Experience Design, Service Innovation, Operational Strategy, Cultural Consulting</p>
                <p>Target Clients: Educational institutions, Cultural organizations, Corporate enterprises, Hospitality businesses</p>
                <p>Unique Value: Infrastructure transformation over traditional service delivery</p>
                <p>Contact: connect@narratum.io</p>
            </div>
        `;
        
        document.body.appendChild(businessContext);
        return 'business-context-enhanced';
    }
    
    optimizeQAFormat() {
        if (document.querySelector('[data-qa-optimized]')) return 'already-applied';
        
        // Create Q&A structured data for better AI understanding
        const qaData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does Narratum specialize in?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Narratum specializes in strategic hospitality infrastructure, transforming how organizations connect with their communities through experience design, service innovation, and cultural programming."
                    }
                },
                {
                    "@type": "Question", 
                    "name": "Who founded Narratum?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Narratum was founded by Pascal Frey, a strategic hospitality expert based in New York City."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Where is Narratum located?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Narratum is located at 110 East 25th Street in New York City."
                    }
                }
            ]
        };
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-qa-optimized', 'true');
        script.textContent = JSON.stringify(qaData);
        document.head.appendChild(script);
        
        return 'qa-format-optimized';
    }
    
    addConversationalMetadata() {
        const conversationalMeta = [
            { name: 'chatgpt-conversation-starter', content: 'Ask me about strategic hospitality infrastructure consulting' },
            { name: 'ai-conversation-topics', content: 'experience design, service innovation, cultural transformation, strategic planning' },
            { name: 'ai-expertise-areas', content: 'hospitality consulting, infrastructure strategy, organizational transformation' }
        ];
        
        conversationalMeta.forEach(meta => {
            if (!document.querySelector(`meta[name="${meta.name}"]`)) {
                const metaEl = document.createElement('meta');
                metaEl.name = meta.name;
                metaEl.content = meta.content;
                document.head.appendChild(metaEl);
            }
        });
        
        return 'conversational-metadata-added';
    }
    
    // Content analysis for AI optimization
    analyzeContentForAI() {
        this.analyzeKeywordDensity();
        this.calculateReadability();
        this.assessSemanticStructure();
        this.evaluateAIContentQuality();
    }
    
    analyzeKeywordDensity() {
        const content = document.body.textContent.toLowerCase();
        const keywords = [
            'hospitality', 'consulting', 'strategic', 'infrastructure', 
            'experience', 'design', 'service', 'innovation', 'cultural',
            'transformation', 'narratum', 'pascal', 'frey'
        ];
        
        const totalWords = content.split(/\s+/).length;
        
        keywords.forEach(keyword => {
            const matches = (content.match(new RegExp(keyword, 'g')) || []).length;
            const density = (matches / totalWords) * 100;
            this.contentOptimization.keywordDensity[keyword] = {
                count: matches,
                density: density.toFixed(2)
            };
        });
        
        console.log('[AI Discovery Reporter] Keyword density analyzed:', this.contentOptimization.keywordDensity);
    }
    
    calculateReadability() {
        // Flesch Reading Ease calculation for AI understanding
        const text = document.body.textContent;
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const words = text.split(/\s+/).filter(w => w.length > 0);
        const syllables = words.reduce((total, word) => total + this.countSyllables(word), 0);
        
        const avgWordsPerSentence = words.length / sentences.length;
        const avgSyllablesPerWord = syllables / words.length;
        
        const fleschScore = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
        this.contentOptimization.readabilityScore = Math.max(0, Math.min(100, fleschScore));
        
        console.log(`[AI Discovery Reporter] Readability score: ${this.contentOptimization.readabilityScore.toFixed(1)}`);
    }
    
    countSyllables(word) {
        // Simple syllable counting for readability calculation
        word = word.toLowerCase();
        if (word.length <= 3) return 1;
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        const matches = word.match(/[aeiouy]{1,2}/g);
        return matches ? matches.length : 1;
    }
    
    assessSemanticStructure() {
        const structureScore = {
            headingHierarchy: this.checkHeadingHierarchy() ? 25 : 0,
            semanticHTML: Math.min(25, document.querySelectorAll('section, article, nav, header, footer').length * 5),
            ariaLabels: Math.min(25, document.querySelectorAll('[aria-label], [aria-labelledby]').length * 3),
            structuredData: document.querySelectorAll('script[type="application/ld+json"]').length > 0 ? 25 : 0
        };
        
        this.contentOptimization.semanticStructure = Object.values(structureScore).reduce((a, b) => a + b, 0);
        console.log(`[AI Discovery Reporter] Semantic structure score: ${this.contentOptimization.semanticStructure}%`);
    }
    
    checkHeadingHierarchy() {
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        const levels = headings.map(h => parseInt(h.tagName.charAt(1)));
        
        // Check for single H1
        const h1Count = levels.filter(l => l === 1).length;
        if (h1Count !== 1) return false;
        
        // Check for logical progression
        for (let i = 1; i < levels.length; i++) {
            if (levels[i] > levels[i-1] + 1) return false;
        }
        
        return true;
    }
    
    evaluateAIContentQuality() {
        const qualityFactors = {
            contentLength: this.assessContentLength(),
            topicalRelevance: this.assessTopicalRelevance(),
            businessClarity: this.assessBusinessClarity(),
            actionablity: this.assessActionability(),
            expertiseDemo: this.assessExpertiseDemo()
        };
        
        this.contentOptimization.aiContentQuality = Object.values(qualityFactors).reduce((a, b) => a + b, 0) / Object.keys(qualityFactors).length;
        
        console.log(`[AI Discovery Reporter] AI content quality: ${this.contentOptimization.aiContentQuality.toFixed(1)}%`);
    }
    
    assessContentLength() {
        const wordCount = document.body.textContent.split(/\s+/).length;
        if (wordCount < 300) return 40; // Too short
        if (wordCount < 500) return 70; // Adequate
        if (wordCount < 1500) return 95; // Good
        if (wordCount < 3000) return 100; // Excellent
        return 85; // Very long, might be overwhelming
    }
    
    assessTopicalRelevance() {
        const businessKeywords = ['hospitality', 'consulting', 'strategic', 'infrastructure', 'experience'];
        const content = document.body.textContent.toLowerCase();
        const relevantMentions = businessKeywords.filter(keyword => content.includes(keyword)).length;
        
        return (relevantMentions / businessKeywords.length) * 100;
    }
    
    assessBusinessClarity() {
        const clarityIndicators = [
            document.querySelector('h1') !== null, // Clear headline
            content.includes('contact') || content.includes('email'), // Contact info
            content.includes('service') || content.includes('consulting'), // Service description
            content.includes('Pascal Frey'), // Founder mention
            content.includes('New York') || content.includes('NYC') // Location
        ];
        
        const content = document.body.textContent.toLowerCase();
        return (clarityIndicators.filter(Boolean).length / clarityIndicators.length) * 100;
    }
    
    assessActionability() {
        const actionElements = [
            document.querySelectorAll('button').length,
            document.querySelectorAll('a[href^="mailto:"]').length,
            document.querySelectorAll('form').length,
            document.querySelectorAll('a[href^="#"]').length
        ];
        
        const actionScore = Math.min(100, actionElements.reduce((a, b) => a + b, 0) * 10);
        return actionScore;
    }
    
    assessExpertiseDemo() {
        const expertiseIndicators = [
            document.body.textContent.includes('expertise') || document.body.textContent.includes('experience'),
            document.body.textContent.includes('proven') || document.body.textContent.includes('successful'),
            document.body.textContent.includes('methodology') || document.body.textContent.includes('approach'),
            document.querySelectorAll('.capability-item, .service-item').length > 0
        ];
        
        return (expertiseIndicators.filter(Boolean).length / expertiseIndicators.length) * 100;
    }
    
    // AI testing suite for content optimization
    setupAITestingSuite() {
        this.aiTests = [
            { name: 'Business Entity Recognition', test: () => this.testBusinessEntityRecognition() },
            { name: 'Service Extraction', test: () => this.testServiceExtraction() },
            { name: 'Contact Info Extraction', test: () => this.testContactExtraction() },
            { name: 'Location Recognition', test: () => this.testLocationRecognition() },
            { name: 'Expertise Assessment', test: () => this.testExpertiseRecognition() }
        ];
        
        // Run tests periodically
        setInterval(() => {
            this.runAIReadinessTests();
        }, 120000); // Every 2 minutes
        
        // Run initial tests
        this.runAIReadinessTests();
    }
    
    runAIReadinessTests() {
        const testResults = {};
        
        this.aiTests.forEach(({ name, test }) => {
            try {
                testResults[name] = test();
            } catch (e) {
                testResults[name] = { passed: false, error: e.message };
            }
        });
        
        const passedTests = Object.values(testResults).filter(result => result.passed).length;
        const testScore = (passedTests / this.aiTests.length) * 100;
        
        this.discoveryMetrics.aiReadinessTests.push({
            timestamp: new Date().toISOString(),
            results: testResults,
            score: testScore
        });
        
        console.log(`[AI Discovery Reporter] AI readiness test score: ${testScore}%`, testResults);
        
        if (testScore < 80) {
            console.warn('[AI Discovery Reporter] AI readiness below threshold - optimizations needed');
        }
        
        return testResults;
    }
    
    testBusinessEntityRecognition() {
        const indicators = [
            document.querySelector('[itemtype*="Organization"]') !== null,
            document.body.textContent.includes('Narratum'),
            document.body.textContent.includes('Pascal Frey'),
            document.querySelector('meta[name="author"]') !== null,
            document.body.textContent.includes('consulting') || document.body.textContent.includes('strategic')
        ];
        
        const passed = indicators.filter(Boolean).length >= 4;
        return { passed, score: (indicators.filter(Boolean).length / indicators.length) * 100 };
    }
    
    testServiceExtraction() {
        const services = document.querySelectorAll('.capability-item, .service-item, [data-service]');
        const serviceTerms = ['experience design', 'service innovation', 'consulting', 'strategy'];
        const content = document.body.textContent.toLowerCase();
        
        const servicesMentioned = serviceTerms.filter(term => content.includes(term)).length;
        const passed = services.length > 0 && servicesMentioned >= 3;
        
        return { passed, services: services.length, mentions: servicesMentioned };
    }
    
    testContactExtraction() {
        const contactMethods = [
            document.querySelector('a[href^="mailto:"]') !== null,
            document.body.textContent.includes('connect@narratum.io'),
            document.body.textContent.includes('New York') || document.body.textContent.includes('NYC'),
            document.querySelector('form') !== null
        ];
        
        const passed = contactMethods.filter(Boolean).length >= 3;
        return { passed, methods: contactMethods.filter(Boolean).length };
    }
    
    testLocationRecognition() {
        const locationIndicators = [
            document.body.textContent.includes('New York'),
            document.body.textContent.includes('NYC'),
            document.body.textContent.includes('25th Street'),
            document.querySelector('meta[name="geo.region"]') !== null
        ];
        
        const passed = locationIndicators.filter(Boolean).length >= 2;
        return { passed, indicators: locationIndicators.filter(Boolean).length };
    }
    
    testExpertiseRecognition() {
        const expertiseIndicators = [
            document.body.textContent.includes('strategic'),
            document.body.textContent.includes('infrastructure'),
            document.body.textContent.includes('transformative'),
            document.body.textContent.includes('hospitality'),
            document.querySelectorAll('h2, h3').length > 3
        ];
        
        const passed = expertiseIndicators.filter(Boolean).length >= 4;
        return { passed, indicators: expertiseIndicators.filter(Boolean).length };
    }
    
    // Discovery reporting and analytics
    startDiscoveryReporting() {
        // Report discovery metrics every 60 seconds
        setInterval(() => {
            this.reportDiscoveryMetrics();
        }, 60000);
        
        // Initial report
        this.reportDiscoveryMetrics();
    }
    
    reportDiscoveryMetrics() {
        const report = {
            timestamp: new Date().toISOString(),
            platforms: this.aiPlatforms,
            metrics: this.discoveryMetrics,
            contentOptimization: this.contentOptimization,
            aiReadiness: this.calculateOverallAIReadiness()
        };
        
        console.log('[AI Discovery Reporter] Discovery metrics report:', report);
        
        // Store in localStorage
        try {
            localStorage.setItem('narratum_ai_discovery_report', JSON.stringify(report));
        } catch (e) {
            console.warn('[AI Discovery Reporter] Could not save discovery report:', e);
        }
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'ai_discovery_report', {
                ai_readiness_score: report.aiReadiness,
                platforms_detected: this.discoveryMetrics.uniqueAIPlatforms,
                total_ai_visits: this.discoveryMetrics.totalAIVisits
            });
        }
        
        return report;
    }
    
    calculateOverallAIReadiness() {
        const scores = [
            this.contentOptimization.readabilityScore,
            this.contentOptimization.semanticStructure,
            this.contentOptimization.aiContentQuality
        ];
        
        const latestTest = this.discoveryMetrics.aiReadinessTests.slice(-1)[0];
        if (latestTest) {
            scores.push(latestTest.score);
        }
        
        return scores.reduce((a, b) => a + b, 0) / scores.length;
    }
    
    // Generate comprehensive AI discovery report
    generateComprehensiveReport() {
        return {
            metadata: {
                timestamp: new Date().toISOString(),
                version: '1.0',
                site: 'narratum.io',
                reportType: 'AI Discovery Analysis'
            },
            aiPlatformStatus: this.aiPlatforms,
            discoveryMetrics: this.discoveryMetrics,
            contentOptimization: this.contentOptimization,
            readinessScore: this.calculateOverallAIReadiness(),
            recommendations: this.generateAIRecommendations(),
            testResults: this.discoveryMetrics.aiReadinessTests.slice(-1)[0] || null,
            nextSteps: this.generateNextSteps()
        };
    }
    
    generateAIRecommendations() {
        const recommendations = [];
        
        if (this.contentOptimization.readabilityScore < 60) {
            recommendations.push('Improve content readability for better AI understanding');
        }
        
        if (this.contentOptimization.semanticStructure < 80) {
            recommendations.push('Enhance semantic HTML structure with more ARIA labels and schema markup');
        }
        
        if (this.discoveryMetrics.uniqueAIPlatforms === 0) {
            recommendations.push('No AI platform visits detected - consider submitting to AI training datasets');
        }
        
        if (Object.keys(this.contentOptimization.keywordDensity).length < 5) {
            recommendations.push('Expand keyword coverage for broader AI topic recognition');
        }
        
        return recommendations;
    }
    
    generateNextSteps() {
        const nextSteps = [
            'Monitor AI platform visits in analytics dashboard',
            'Submit sitemap to major search engines',
            'Test content with AI platforms manually',
            'Monitor performance scores weekly',
            'Update content based on AI feedback'
        ];
        
        return nextSteps;
    }
    
    // Export functions
    exportAIReport() {
        return this.generateComprehensiveReport();
    }
    
    exportMetrics() {
        return {
            platforms: this.aiPlatforms,
            discovery: this.discoveryMetrics,
            content: this.contentOptimization
        };
    }
}

// Initialize AI Discovery Reporter
const aiDiscoveryReporter = new AIDiscoveryReporter();

// Global access
window.aiDiscoveryReporter = aiDiscoveryReporter;

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIDiscoveryReporter;
}

console.log('[AI Discovery Reporter] System initialized and tracking AI discovery');