/**
 * Intelligent Analytics & Performance Monitor
 * Advanced user behavior analysis, conversion optimization, and performance tracking
 * Real-time insights and automated optimizations for Narratum.io
 */

class IntelligentAnalytics {
    constructor() {
        this.config = {
            trackingEnabled: true,
            realTimeAnalysis: true,
            privacyCompliant: true,
            conversionGoals: [
                'form_submission',
                'email_click',
                'section_engagement',
                'social_interaction',
                'deep_scroll'
            ],
            performanceThresholds: {
                lcp: 2500,
                fid: 100,
                cls: 0.1,
                ttfb: 800,
                fcp: 1800
            }
        };

        this.analytics = {
            sessions: new Map(),
            events: [],
            conversions: [],
            performance: [],
            errors: [],
            userJourneys: new Map()
        };

        this.insights = {
            behaviorPatterns: [],
            conversionPaths: [],
            performanceIssues: [],
            optimizationOpportunities: [],
            userSegments: new Map()
        };

        this.aiEngine = {
            predictions: new Map(),
            personalizations: new Map(),
            optimizations: new Set(),
            experiments: new Map()
        };

        this.initialize();
    }

    /**
     * Initialize the Intelligent Analytics system
     */
    initialize() {
        console.log('🧠 Initializing Intelligent Analytics for Narratum.io');
        
        this.setupSessionTracking();
        this.initializeEventTracking();
        this.setupPerformanceMonitoring();
        this.initializeConversionTracking();
        this.setupUserBehaviorAnalysis();
        this.initializeAIEngine();
        this.setupRealTimeOptimization();
        this.initializePersonalization();
        this.setupPrivacyCompliance();
        
        console.log('✅ Intelligent Analytics successfully initialized');
    }

    /**
     * SESSION TRACKING & USER IDENTIFICATION
     */
    setupSessionTracking() {
        this.sessionManager = {
            // Generate unique session ID
            generateSessionId: () => {
                return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            },

            // Track session data
            initializeSession: () => {
                const sessionId = this.sessionManager.generateSessionId();
                const sessionData = {
                    id: sessionId,
                    startTime: Date.now(),
                    userAgent: navigator.userAgent,
                    referrer: document.referrer,
                    landingPage: window.location.pathname,
                    viewport: {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    device: this.detectDeviceType(),
                    connection: this.getConnectionInfo(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    language: navigator.language,
                    events: [],
                    pageViews: [],
                    interactions: []
                };

                this.analytics.sessions.set(sessionId, sessionData);
                this.currentSessionId = sessionId;
                
                // Store session ID for cross-tab tracking
                sessionStorage.setItem('narratum_session_id', sessionId);
                
                return sessionData;
            },

            // Update session activity
            updateSession: (updates) => {
                const session = this.analytics.sessions.get(this.currentSessionId);
                if (session) {
                    Object.assign(session, updates);
                    session.lastActivity = Date.now();
                }
            },

            // End session
            endSession: () => {
                const session = this.analytics.sessions.get(this.currentSessionId);
                if (session) {
                    session.endTime = Date.now();
                    session.duration = session.endTime - session.startTime;
                    this.analyzeSession(session);
                }
            }
        };

        // Initialize or resume session
        const existingSessionId = sessionStorage.getItem('narratum_session_id');
        if (existingSessionId && this.analytics.sessions.has(existingSessionId)) {
            this.currentSessionId = existingSessionId;
        } else {
            this.sessionManager.initializeSession();
        }

        // Track page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackEvent('page_hidden');
            } else {
                this.trackEvent('page_visible');
            }
        });

        // Track session end
        window.addEventListener('beforeunload', () => {
            this.sessionManager.endSession();
        });
    }

    /**
     * COMPREHENSIVE EVENT TRACKING
     */
    initializeEventTracking() {
        this.eventTracker = {
            // Track page views
            trackPageView: () => {
                this.trackEvent('page_view', {
                    url: window.location.href,
                    title: document.title,
                    timestamp: Date.now()
                });
            },

            // Track user interactions
            setupInteractionTracking: () => {
                this.trackClicks();
                this.trackScrollBehavior();
                this.trackFormInteractions();
                this.trackNavigationEvents();
                this.trackMediaInteractions();
            },

            // Track custom business events
            setupBusinessEventTracking: () => {
                this.trackSectionEngagement();
                this.trackContactFormEvents();
                this.trackAudioInteractions();
                this.trackColorMoodChanges();
                this.trackSymbolInteractions();
            },

            // Track errors and issues
            setupErrorTracking: () => {
                this.trackJavaScriptErrors();
                this.trackResourceLoadErrors();
                this.trackCSPViolations();
            }
        };

        this.eventTracker.trackPageView();
        this.eventTracker.setupInteractionTracking();
        this.eventTracker.setupBusinessEventTracking();
        this.eventTracker.setupErrorTracking();
    }

    trackEvent(eventType, eventData = {}) {
        const event = {
            id: 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            type: eventType,
            timestamp: Date.now(),
            sessionId: this.currentSessionId,
            url: window.location.href,
            data: eventData
        };

        this.analytics.events.push(event);
        
        // Add to session
        const session = this.analytics.sessions.get(this.currentSessionId);
        if (session) {
            session.events.push(event);
        }

        // Real-time analysis
        if (this.config.realTimeAnalysis) {
            this.analyzeEventInRealTime(event);
        }

        // Check for conversion events
        this.checkForConversions(event);

        return event;
    }

    trackClicks() {
        document.addEventListener('click', (e) => {
            const element = e.target;
            const elementInfo = {
                tagName: element.tagName,
                className: element.className,
                id: element.id,
                text: element.textContent?.trim().substring(0, 100),
                href: element.href,
                coordinates: { x: e.clientX, y: e.clientY }
            };

            this.trackEvent('click', elementInfo);

            // Track specific click types
            if (element.matches('a[href^="mailto:"]')) {
                this.trackEvent('email_click', { email: element.href.replace('mailto:', '') });
            }
            
            if (element.matches('.submit-button')) {
                this.trackEvent('form_submit_attempt');
            }
            
            if (element.matches('.nav-dot, .anchor-link')) {
                this.trackEvent('navigation_click', { target: element.getAttribute('data-section') });
            }
        });
    }

    trackScrollBehavior() {
        let scrollTimeout;
        let maxScroll = 0;
        let scrollStartTime = Date.now();

        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            maxScroll = Math.max(maxScroll, scrollPercent);

            scrollTimeout = setTimeout(() => {
                this.trackEvent('scroll_stop', {
                    scrollPercent,
                    maxScroll,
                    scrollDuration: Date.now() - scrollStartTime
                });

                // Track deep scroll as potential conversion
                if (scrollPercent > 75) {
                    this.trackEvent('deep_scroll', { scrollPercent });
                }

                scrollStartTime = Date.now();
            }, 150);
        });
    }

    trackSectionEngagement() {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    const sectionId = section.id || section.className;
                    
                    this.trackEvent('section_enter', {
                        section: sectionId,
                        visibilityRatio: entry.intersectionRatio
                    });

                    // Start measuring time in section
                    this.startSectionTimer(sectionId);
                } else {
                    const section = entry.target;
                    const sectionId = section.id || section.className;
                    
                    this.trackEvent('section_exit', {
                        section: sectionId,
                        timeSpent: this.endSectionTimer(sectionId)
                    });
                }
            });
        }, {
            threshold: [0.1, 0.5, 0.9]
        });

        document.querySelectorAll('.section').forEach(section => {
            sectionObserver.observe(section);
        });
    }

    /**
     * ADVANCED PERFORMANCE MONITORING
     */
    setupPerformanceMonitoring() {
        this.performanceMonitor = {
            // Core Web Vitals tracking
            trackCoreWebVitals: () => {
                this.measureLCP();
                this.measureFID();
                this.measureCLS();
                this.measureTTFB();
                this.measureFCP();
            },

            // Resource performance
            trackResourcePerformance: () => {
                this.analyzeResourceLoadTimes();
                this.trackCriticalResourceLoading();
                this.monitorThirdPartyResources();
            },

            // Runtime performance
            trackRuntimePerformance: () => {
                this.monitorMemoryUsage();
                this.trackAnimationPerformance();
                this.measureInteractionLatency();
            },

            // Network performance
            trackNetworkPerformance: () => {
                this.analyzeConnectionQuality();
                this.trackDataUsage();
                this.monitorCacheEfficiency();
            }
        };

        this.performanceMonitor.trackCoreWebVitals();
        this.performanceMonitor.trackResourcePerformance();
        this.performanceMonitor.trackRuntimePerformance();
        this.performanceMonitor.trackNetworkPerformance();
    }

    measureLCP() {
        if ('PerformanceObserver' in window) {
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    this.trackPerformanceMetric('lcp', {
                        value: entry.startTime,
                        element: entry.element?.tagName,
                        url: entry.url,
                        timestamp: Date.now()
                    });
                }
            }).observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }

    measureFID() {
        if ('PerformanceObserver' in window) {
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    this.trackPerformanceMetric('fid', {
                        value: entry.processingStart - entry.startTime,
                        inputDelay: entry.processingStart - entry.startTime,
                        processingTime: entry.processingEnd - entry.processingStart,
                        timestamp: Date.now()
                    });
                }
            }).observe({ entryTypes: ['first-input'] });
        }
    }

    measureCLS() {
        if ('PerformanceObserver' in window) {
            let clsScore = 0;
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsScore += entry.value;
                        
                        this.trackPerformanceMetric('cls', {
                            value: clsScore,
                            shiftValue: entry.value,
                            sources: entry.sources?.map(source => ({
                                element: source.node?.tagName,
                                previousRect: source.previousRect,
                                currentRect: source.currentRect
                            })),
                            timestamp: Date.now()
                        });
                    }
                }
            }).observe({ entryTypes: ['layout-shift'] });
        }
    }

    trackPerformanceMetric(metricType, data) {
        const performanceEntry = {
            type: metricType,
            data: data,
            sessionId: this.currentSessionId,
            timestamp: data.timestamp || Date.now(),
            url: window.location.href
        };

        this.analytics.performance.push(performanceEntry);

        // Check against thresholds
        this.evaluatePerformanceThreshold(metricType, data.value);
    }

    evaluatePerformanceThreshold(metricType, value) {
        const threshold = this.config.performanceThresholds[metricType];
        if (threshold && value > threshold) {
            this.trackEvent('performance_issue', {
                metric: metricType,
                value: value,
                threshold: threshold,
                severity: this.calculateSeverity(value, threshold)
            });

            // Trigger optimization if needed
            this.triggerPerformanceOptimization(metricType, value);
        }
    }

    /**
     * CONVERSION TRACKING & OPTIMIZATION
     */
    initializeConversionTracking() {
        this.conversionTracker = {
            // Define conversion goals
            setupConversionGoals: () => {
                this.config.conversionGoals.forEach(goal => {
                    this.setupConversionGoal(goal);
                });
            },

            // Track micro-conversions
            trackMicroConversions: () => {
                this.trackEngagementMilestones();
                this.trackContentConsumption();
                this.trackSocialProof();
            },

            // Analyze conversion funnels
            analyzeConversionFunnels: () => {
                this.identifyDropOffPoints();
                this.optimizeConversionPaths();
                this.testConversionVariations();
            }
        };

        this.conversionTracker.setupConversionGoals();
        this.conversionTracker.trackMicroConversions();
    }

    setupConversionGoal(goalType) {
        const goalConfig = {
            form_submission: {
                trigger: () => this.trackFormSubmissions(),
                value: 100,
                category: 'primary'
            },
            email_click: {
                trigger: () => this.trackEmailClicks(),
                value: 25,
                category: 'engagement'
            },
            section_engagement: {
                trigger: () => this.trackSectionEngagement(),
                value: 10,
                category: 'engagement'
            },
            deep_scroll: {
                trigger: () => this.trackDeepScrolls(),
                value: 15,
                category: 'engagement'
            }
        };

        const config = goalConfig[goalType];
        if (config) {
            config.trigger();
        }
    }

    checkForConversions(event) {
        const conversionEvents = {
            'form_submit_success': { type: 'form_submission', value: 100 },
            'email_click': { type: 'email_click', value: 25 },
            'deep_scroll': { type: 'deep_scroll', value: 15 },
            'social_click': { type: 'social_interaction', value: 20 }
        };

        const conversion = conversionEvents[event.type];
        if (conversion) {
            this.recordConversion(conversion, event);
        }
    }

    recordConversion(conversionType, triggerEvent) {
        const conversion = {
            id: 'conversion_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            type: conversionType.type,
            value: conversionType.value,
            timestamp: Date.now(),
            sessionId: this.currentSessionId,
            triggerEvent: triggerEvent.id,
            userJourney: this.getUserJourney(this.currentSessionId),
            attribution: this.getAttribution()
        };

        this.analytics.conversions.push(conversion);
        
        // Update session with conversion
        this.sessionManager.updateSession({ 
            hasConversion: true,
            conversionType: conversionType.type,
            conversionValue: conversionType.value
        });

        // Trigger real-time optimization
        this.optimizeForConversion(conversion);
    }

    /**
     * AI-POWERED USER BEHAVIOR ANALYSIS
     */
    setupUserBehaviorAnalysis() {
        this.behaviorAnalyzer = {
            // Pattern detection
            detectBehaviorPatterns: () => {
                this.analyzeNavigationPatterns();
                this.analyzeEngagementPatterns();
                this.analyzeConversionPatterns();
                this.analyzeDropOffPatterns();
            },

            // User segmentation
            segmentUsers: () => {
                this.createBehavioralSegments();
                this.createEngagementSegments();
                this.createConversionSegments();
            },

            // Predictive analysis
            predictUserBehavior: () => {
                this.predictConversionProbability();
                this.predictChurnRisk();
                this.predictEngagementLevel();
            }
        };

        // Run analysis periodically
        setInterval(() => {
            this.behaviorAnalyzer.detectBehaviorPatterns();
            this.behaviorAnalyzer.segmentUsers();
            this.behaviorAnalyzer.predictUserBehavior();
        }, 30000); // Every 30 seconds
    }

    analyzeNavigationPatterns() {
        const sessions = Array.from(this.analytics.sessions.values());
        const navigationEvents = sessions.flatMap(session => 
            session.events.filter(event => event.type === 'navigation_click')
        );

        const patterns = this.findCommonSequences(navigationEvents);
        this.insights.behaviorPatterns.push({
            type: 'navigation',
            patterns: patterns,
            timestamp: Date.now()
        });
    }

    findCommonSequences(events) {
        const sequences = new Map();
        
        // Group events by session
        const sessionGroups = events.reduce((groups, event) => {
            if (!groups[event.sessionId]) {
                groups[event.sessionId] = [];
            }
            groups[event.sessionId].push(event);
            return groups;
        }, {});

        // Analyze sequences within each session
        Object.values(sessionGroups).forEach(sessionEvents => {
            sessionEvents.sort((a, b) => a.timestamp - b.timestamp);
            
            for (let i = 0; i < sessionEvents.length - 1; i++) {
                const sequence = `${sessionEvents[i].data.target} -> ${sessionEvents[i + 1].data.target}`;
                sequences.set(sequence, (sequences.get(sequence) || 0) + 1);
            }
        });

        return Array.from(sequences.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);
    }

    /**
     * AI ENGINE & PERSONALIZATION
     */
    initializeAIEngine() {
        this.aiEngine = {
            // Machine learning models
            models: {
                conversionPrediction: new ConversionPredictionModel(),
                engagementPrediction: new EngagementPredictionModel(),
                churnPrediction: new ChurnPredictionModel(),
                personalizationEngine: new PersonalizationEngine()
            },

            // Real-time scoring
            scoreUser: (sessionData) => {
                return {
                    conversionProbability: this.aiEngine.models.conversionPrediction.predict(sessionData),
                    engagementScore: this.aiEngine.models.engagementPrediction.predict(sessionData),
                    churnRisk: this.aiEngine.models.churnPrediction.predict(sessionData)
                };
            },

            // Dynamic optimization
            optimize: (userScore, context) => {
                return this.aiEngine.models.personalizationEngine.optimize(userScore, context);
            }
        };
    }

    /**
     * REAL-TIME OPTIMIZATION
     */
    setupRealTimeOptimization() {
        this.realTimeOptimizer = {
            // Performance-based optimizations
            optimizePerformance: () => {
                this.dynamicallyAdjustQuality();
                this.optimizeResourceLoading();
                this.adaptForNetworkConditions();
            },

            // Behavior-based optimizations
            optimizeBehavior: () => {
                this.personalizeContent();
                this.adaptUserInterface();
                this.optimizeConversionElements();
            },

            // Context-based optimizations
            optimizeContext: () => {
                this.adaptForDevice();
                this.adaptForTimeOfDay();
                this.adaptForUserSegment();
            }
        };

        // Run optimizations based on triggers
        this.setupOptimizationTriggers();
    }

    setupOptimizationTriggers() {
        // Performance triggers
        this.addEventListener('performance_issue', (event) => {
            this.realTimeOptimizer.optimizePerformance();
        });

        // Behavior triggers
        this.addEventListener('low_engagement', (event) => {
            this.realTimeOptimizer.optimizeBehavior();
        });

        // Context triggers
        this.addEventListener('context_change', (event) => {
            this.realTimeOptimizer.optimizeContext();
        });
    }

    /**
     * PRIVACY-COMPLIANT TRACKING
     */
    setupPrivacyCompliance() {
        this.privacyManager = {
            // Consent management
            manageConsent: () => {
                this.checkConsentStatus();
                this.respectUserPreferences();
                this.implementDataMinimization();
            },

            // Data anonymization
            anonymizeData: () => {
                this.anonymizePersonalData();
                this.implementDataRetention();
                this.ensureDataPortability();
            },

            // Compliance monitoring
            monitorCompliance: () => {
                this.auditDataUsage();
                this.validateConsentMechanisms();
                this.reportComplianceStatus();
            }
        };

        this.privacyManager.manageConsent();
        this.privacyManager.anonymizeData();
        this.privacyManager.monitorCompliance();
    }

    /**
     * COMPREHENSIVE REPORTING
     */
    generateIntelligentReport() {
        const report = {
            timestamp: new Date().toISOString(),
            domain: 'narratum.io',
            reportPeriod: this.getReportPeriod(),
            
            overview: {
                totalSessions: this.analytics.sessions.size,
                totalEvents: this.analytics.events.length,
                totalConversions: this.analytics.conversions.length,
                conversionRate: this.calculateConversionRate(),
                averageSessionDuration: this.calculateAverageSessionDuration(),
                bounceRate: this.calculateBounceRate()
            },

            performance: {
                coreWebVitals: this.getAverageCoreWebVitals(),
                performanceScore: this.calculatePerformanceScore(),
                performanceIssues: this.identifyPerformanceIssues(),
                optimizationImpact: this.measureOptimizationImpact()
            },

            userBehavior: {
                topPages: this.getTopPages(),
                navigationPatterns: this.getNavigationPatterns(),
                engagementMetrics: this.getEngagementMetrics(),
                userSegments: this.getUserSegments()
            },

            conversions: {
                conversionFunnel: this.analyzeConversionFunnel(),
                topConversionPaths: this.getTopConversionPaths(),
                conversionOptimizations: this.getConversionOptimizations(),
                revenueAttribution: this.getRevenueAttribution()
            },

            aiInsights: {
                behaviorPredictions: this.getBehaviorPredictions(),
                personalizationEffectiveness: this.getPersonalizationEffectiveness(),
                optimizationRecommendations: this.getOptimizationRecommendations(),
                futureOpportunities: this.identifyFutureOpportunities()
            },

            actionableRecommendations: this.generateActionableRecommendations()
        };

        console.log('🧠 Intelligent Analytics Report Generated:', report);
        return report;
    }

    // Utility methods for calculations and analysis...
    calculateConversionRate() {
        const totalSessions = this.analytics.sessions.size;
        const conversions = this.analytics.conversions.length;
        return totalSessions > 0 ? (conversions / totalSessions) * 100 : 0;
    }

    calculateAverageSessionDuration() {
        const sessions = Array.from(this.analytics.sessions.values());
        const completedSessions = sessions.filter(session => session.duration);
        
        if (completedSessions.length === 0) return 0;
        
        const totalDuration = completedSessions.reduce((sum, session) => sum + session.duration, 0);
        return totalDuration / completedSessions.length;
    }

    calculateBounceRate() {
        const sessions = Array.from(this.analytics.sessions.values());
        const bounces = sessions.filter(session => session.events.length <= 1).length;
        return sessions.length > 0 ? (bounces / sessions.length) * 100 : 0;
    }

    /**
     * Initialize the analytics when DOM is ready
     */
    static initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                window.intelligentAnalytics = new IntelligentAnalytics();
            });
        } else {
            window.intelligentAnalytics = new IntelligentAnalytics();
        }
    }
}

/**
 * SIMPLE AI MODELS FOR PREDICTION
 */
class ConversionPredictionModel {
    predict(sessionData) {
        let score = 0.5; // Base probability
        
        // Time on site factor
        if (sessionData.duration > 60000) score += 0.2; // > 1 minute
        if (sessionData.duration > 300000) score += 0.2; // > 5 minutes
        
        // Engagement factor
        if (sessionData.events.length > 5) score += 0.15;
        if (sessionData.events.length > 15) score += 0.15;
        
        // Scroll depth factor
        const scrollEvents = sessionData.events.filter(e => e.type === 'deep_scroll');
        if (scrollEvents.length > 0) score += 0.2;
        
        // Form interaction factor
        const formEvents = sessionData.events.filter(e => e.type.includes('form'));
        if (formEvents.length > 0) score += 0.3;
        
        return Math.min(score, 1);
    }
}

class EngagementPredictionModel {
    predict(sessionData) {
        let score = 0;
        
        // Event variety
        const eventTypes = new Set(sessionData.events.map(e => e.type));
        score += Math.min(eventTypes.size / 10, 0.3);
        
        // Session duration
        score += Math.min(sessionData.duration / 600000, 0.3); // Max at 10 minutes
        
        // Interaction depth
        score += Math.min(sessionData.events.length / 50, 0.4);
        
        return score;
    }
}

class ChurnPredictionModel {
    predict(sessionData) {
        let riskScore = 0;
        
        // Short session duration increases risk
        if (sessionData.duration < 30000) riskScore += 0.3;
        
        // Low interaction count increases risk
        if (sessionData.events.length < 3) riskScore += 0.3;
        
        // Bounce behavior increases risk
        if (sessionData.events.length === 1) riskScore += 0.4;
        
        return Math.min(riskScore, 1);
    }
}

class PersonalizationEngine {
    optimize(userScore, context) {
        const optimizations = [];
        
        // High conversion probability
        if (userScore.conversionProbability > 0.7) {
            optimizations.push('highlight_cta', 'show_testimonials', 'reduce_friction');
        }
        
        // Low engagement
        if (userScore.engagementScore < 0.3) {
            optimizations.push('add_interactive_elements', 'simplify_navigation', 'improve_content');
        }
        
        // High churn risk
        if (userScore.churnRisk > 0.6) {
            optimizations.push('exit_intent_popup', 'reduce_cognitive_load', 'highlight_value_proposition');
        }
        
        return optimizations;
    }
}

// Auto-initialize the Intelligent Analytics
IntelligentAnalytics.initialize();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IntelligentAnalytics;
}

console.log('🎯 Intelligent Analytics loaded successfully for Narratum.io');
