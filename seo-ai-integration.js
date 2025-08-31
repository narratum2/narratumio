/**
 * SEO & AI Integration Manager
 * Central orchestration system that integrates all optimization modules
 * Provides unified dashboard and automated optimization workflows
 */

class SEOAIIntegrationManager {
    constructor() {
        this.modules = {
            seoOptimizer: null,
            visualEnhancer: null,
            intelligentAnalytics: null
        };

        this.dashboard = null;
        this.optimizationQueue = [];
        this.automationRules = new Map();
        this.performanceBaseline = null;
        
        this.config = {
            autoOptimization: true,
            realTimeMonitoring: true,
            dashboardEnabled: true,
            reportingInterval: 300000, // 5 minutes
            optimizationThreshold: 0.7,
            performanceTargets: {
                seoScore: 95,
                performanceScore: 90,
                accessibilityScore: 95,
                conversionRate: 5.0
            }
        };

        this.initialize();
    }

    /**
     * Initialize the integration manager
     */
    async initialize() {
        console.log('🚀 Initializing SEO & AI Integration Manager');
        
        await this.waitForModules();
        this.connectModules();
        this.setupAutomationRules();
        this.createUnifiedDashboard();
        this.startRealTimeMonitoring();
        this.initializeReporting();
        
        console.log('✅ SEO & AI Integration Manager fully initialized');
        
        // Send welcome notification
        this.showWelcomeNotification();
    }

    /**
     * Wait for all modules to be loaded
     */
    async waitForModules() {
        const maxWaitTime = 10000; // 10 seconds
        const checkInterval = 100; // 100ms
        let waitTime = 0;

        while (waitTime < maxWaitTime) {
            if (window.seoAIOptimizer && window.visualAIEnhancer && window.intelligentAnalytics) {
                this.modules.seoOptimizer = window.seoAIOptimizer;
                this.modules.visualEnhancer = window.visualAIEnhancer;
                this.modules.intelligentAnalytics = window.intelligentAnalytics;
                break;
            }
            
            await new Promise(resolve => setTimeout(resolve, checkInterval));
            waitTime += checkInterval;
        }

        if (!this.modules.seoOptimizer || !this.modules.visualEnhancer || !this.modules.intelligentAnalytics) {
            console.warn('⚠️ Some optimization modules failed to load');
        }
    }

    /**
     * Connect modules for cross-communication
     */
    connectModules() {
        // Connect SEO Optimizer with Analytics
        if (this.modules.seoOptimizer && this.modules.intelligentAnalytics) {
            this.modules.seoOptimizer.analytics = this.modules.intelligentAnalytics;
            this.modules.intelligentAnalytics.seoOptimizer = this.modules.seoOptimizer;
        }

        // Connect Visual Enhancer with Analytics
        if (this.modules.visualEnhancer && this.modules.intelligentAnalytics) {
            this.modules.visualEnhancer.analytics = this.modules.intelligentAnalytics;
            this.modules.intelligentAnalytics.visualEnhancer = this.modules.visualEnhancer;
        }

        // Connect SEO Optimizer with Visual Enhancer
        if (this.modules.seoOptimizer && this.modules.visualEnhancer) {
            this.modules.seoOptimizer.visualEnhancer = this.modules.visualEnhancer;
            this.modules.visualEnhancer.seoOptimizer = this.modules.seoOptimizer;
        }

        console.log('🔗 Modules successfully connected');
    }

    /**
     * Setup automated optimization rules
     */
    setupAutomationRules() {
        this.automationRules.set('performance_degradation', {
            condition: (metrics) => metrics.performanceScore < 0.7,
            action: () => this.triggerPerformanceOptimization(),
            priority: 'high',
            cooldown: 60000 // 1 minute
        });

        this.automationRules.set('low_conversion_rate', {
            condition: (metrics) => metrics.conversionRate < 2.0,
            action: () => this.triggerConversionOptimization(),
            priority: 'medium',
            cooldown: 300000 // 5 minutes
        });

        this.automationRules.set('accessibility_issues', {
            condition: (metrics) => metrics.accessibilityScore < 0.8,
            action: () => this.triggerAccessibilityImprovements(),
            priority: 'high',
            cooldown: 30000 // 30 seconds
        });

        this.automationRules.set('seo_score_drop', {
            condition: (metrics) => metrics.seoScore < 0.85,
            action: () => this.triggerSEOOptimization(),
            priority: 'medium',
            cooldown: 120000 // 2 minutes
        });

        console.log('⚙️ Automation rules configured');
    }

    /**
     * Create unified dashboard
     */
    createUnifiedDashboard() {
        if (!this.config.dashboardEnabled) return;

        this.dashboard = document.createElement('div');
        this.dashboard.id = 'unified-seo-ai-dashboard';
        this.dashboard.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 400px;
            max-height: 80vh;
            background: rgba(10, 21, 32, 0.98);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(251, 191, 36, 0.3);
            border-radius: 16px;
            z-index: 10000;
            color: white;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
            transform: translateX(420px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
        `;

        this.dashboard.innerHTML = this.createDashboardHTML();
        document.body.appendChild(this.dashboard);

        this.setupDashboardInteractions();
        this.startDashboardUpdates();

        console.log('📊 Unified dashboard created');
    }

    createDashboardHTML() {
        return `
            <div class="dashboard-header" style="
                padding: 20px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <div>
                    <h3 style="margin: 0; color: #fbbf24; font-size: 18px; font-weight: 500;">
                        Narratum AI Optimizer
                    </h3>
                    <p style="margin: 4px 0 0 0; font-size: 12px; color: rgba(255, 255, 255, 0.6);">
                        Real-time optimization & insights
                    </p>
                </div>
                <button id="dashboard-toggle" style="
                    background: none;
                    border: none;
                    color: #fbbf24;
                    font-size: 20px;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                ">📊</button>
            </div>

            <div id="dashboard-content" style="padding: 20px; max-height: calc(80vh - 80px); overflow-y: auto;">
                <!-- Performance Metrics -->
                <div class="metric-section" style="margin-bottom: 24px;">
                    <h4 style="margin: 0 0 12px 0; color: #7dd3fc; font-size: 14px;">Performance Metrics</h4>
                    <div class="metrics-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div class="metric-card" style="
                            background: rgba(255, 255, 255, 0.03);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            border-radius: 8px;
                            padding: 12px;
                        ">
                            <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">SEO Score</div>
                            <div id="seo-score" style="font-size: 24px; font-weight: 600; color: #fbbf24;">--</div>
                        </div>
                        <div class="metric-card" style="
                            background: rgba(255, 255, 255, 0.03);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            border-radius: 8px;
                            padding: 12px;
                        ">
                            <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">Performance</div>
                            <div id="performance-score" style="font-size: 24px; font-weight: 600; color: #34d399;">--</div>
                        </div>
                        <div class="metric-card" style="
                            background: rgba(255, 255, 255, 0.03);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            border-radius: 8px;
                            padding: 12px;
                        ">
                            <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">Accessibility</div>
                            <div id="accessibility-score" style="font-size: 24px; font-weight: 600; color: #60a5fa;">--</div>
                        </div>
                        <div class="metric-card" style="
                            background: rgba(255, 255, 255, 0.03);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            border-radius: 8px;
                            padding: 12px;
                        ">
                            <div style="font-size: 12px; color: rgba(255, 255, 255, 0.6);">Conversions</div>
                            <div id="conversion-rate" style="font-size: 24px; font-weight: 600; color: #f472b6;">--</div>
                        </div>
                    </div>
                </div>

                <!-- Core Web Vitals -->
                <div class="metric-section" style="margin-bottom: 24px;">
                    <h4 style="margin: 0 0 12px 0; color: #7dd3fc; font-size: 14px;">Core Web Vitals</h4>
                    <div style="display: flex; justify-content: space-between; font-size: 12px;">
                        <div>LCP: <span id="lcp-value" style="color: #fbbf24;">--</span>ms</div>
                        <div>FID: <span id="fid-value" style="color: #34d399;">--</span>ms</div>
                        <div>CLS: <span id="cls-value" style="color: #60a5fa;">--</span></div>
                    </div>
                </div>

                <!-- Active Optimizations -->
                <div class="metric-section" style="margin-bottom: 24px;">
                    <h4 style="margin: 0 0 12px 0; color: #7dd3fc; font-size: 14px;">Active Optimizations</h4>
                    <div id="active-optimizations" style="min-height: 40px;">
                        <div style="color: rgba(255, 255, 255, 0.6); font-size: 12px;">Monitoring for optimization opportunities...</div>
                    </div>
                </div>

                <!-- AI Insights -->
                <div class="metric-section" style="margin-bottom: 24px;">
                    <h4 style="margin: 0 0 12px 0; color: #7dd3fc; font-size: 14px;">AI Insights</h4>
                    <div id="ai-insights" style="min-height: 60px; font-size: 12px; color: rgba(255, 255, 255, 0.8);">
                        <div>🧠 Analyzing user behavior patterns...</div>
                        <div>📈 Optimizing conversion opportunities...</div>
                        <div>⚡ Enhancing performance metrics...</div>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="dashboard-actions" style="display: flex; gap: 8px; margin-top: 20px;">
                    <button id="optimize-now" style="
                        flex: 1;
                        padding: 10px;
                        background: linear-gradient(135deg, #fbbf24, #f59e0b);
                        border: none;
                        color: #0a1520;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 500;
                        font-size: 12px;
                        transition: all 0.3s ease;
                    ">Optimize Now</button>
                    <button id="generate-report" style="
                        flex: 1;
                        padding: 10px;
                        background: transparent;
                        border: 1px solid #fbbf24;
                        color: #fbbf24;
                        border-radius: 8px;
                        cursor: pointer;
                        font-size: 12px;
                        transition: all 0.3s ease;
                    ">Full Report</button>
                </div>
            </div>
        `;
    }

    setupDashboardInteractions() {
        const toggle = this.dashboard.querySelector('#dashboard-toggle');
        const optimizeButton = this.dashboard.querySelector('#optimize-now');
        const reportButton = this.dashboard.querySelector('#generate-report');
        
        let isVisible = false;

        toggle.addEventListener('click', () => {
            isVisible = !isVisible;
            this.dashboard.style.transform = isVisible ? 'translateX(0)' : 'translateX(420px)';
            toggle.textContent = isVisible ? '✕' : '📊';
            toggle.style.background = isVisible ? 'rgba(251, 191, 36, 0.1)' : 'none';
        });

        optimizeButton.addEventListener('click', () => {
            this.triggerManualOptimization();
        });

        reportButton.addEventListener('click', () => {
            this.generateComprehensiveReport();
        });

        // Auto-show dashboard initially
        setTimeout(() => {
            if (!isVisible) {
                toggle.click();
            }
        }, 5000);

        // Auto-hide after period of inactivity
        let inactivityTimer;
        document.addEventListener('mousemove', () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                if (isVisible) {
                    toggle.click();
                }
            }, 60000); // Hide after 1 minute of inactivity
        });
    }

    startDashboardUpdates() {
        setInterval(() => {
            this.updateDashboardMetrics();
        }, 5000); // Update every 5 seconds
    }

    updateDashboardMetrics() {
        if (!this.dashboard) return;

        // Update SEO score
        if (this.modules.seoOptimizer) {
            const seoScore = this.modules.seoOptimizer.calculateSEOScore?.() || 0;
            const seoElement = this.dashboard.querySelector('#seo-score');
            if (seoElement) {
                seoElement.textContent = seoScore;
                seoElement.style.color = seoScore >= 90 ? '#34d399' : seoScore >= 70 ? '#fbbf24' : '#f87171';
            }
        }

        // Update performance score
        if (this.modules.visualEnhancer) {
            const perfScore = Math.round((this.modules.visualEnhancer.getPerformanceScore?.() || 0.5) * 100);
            const perfElement = this.dashboard.querySelector('#performance-score');
            if (perfElement) {
                perfElement.textContent = perfScore;
                perfElement.style.color = perfScore >= 90 ? '#34d399' : perfScore >= 70 ? '#fbbf24' : '#f87171';
            }
        }

        // Update conversion rate
        if (this.modules.intelligentAnalytics) {
            const conversionRate = this.modules.intelligentAnalytics.calculateConversionRate?.() || 0;
            const convElement = this.dashboard.querySelector('#conversion-rate');
            if (convElement) {
                convElement.textContent = `${conversionRate.toFixed(1)}%`;
                convElement.style.color = conversionRate >= 5 ? '#34d399' : conversionRate >= 2 ? '#fbbf24' : '#f87171';
            }
        }

        // Update Core Web Vitals
        this.updateCoreWebVitals();
        
        // Update AI insights
        this.updateAIInsights();
        
        // Update active optimizations
        this.updateActiveOptimizations();
    }

    updateCoreWebVitals() {
        const lcpElement = this.dashboard.querySelector('#lcp-value');
        const fidElement = this.dashboard.querySelector('#fid-value');
        const clsElement = this.dashboard.querySelector('#cls-value');

        if (this.modules.seoOptimizer?.metrics?.performance?.coreWebVitals) {
            const vitals = this.modules.seoOptimizer.metrics.performance.coreWebVitals;
            
            if (lcpElement && vitals.lcp) {
                lcpElement.textContent = Math.round(vitals.lcp);
                lcpElement.style.color = vitals.lcp <= 2500 ? '#34d399' : vitals.lcp <= 4000 ? '#fbbf24' : '#f87171';
            }
            
            if (fidElement && vitals.fid) {
                fidElement.textContent = Math.round(vitals.fid);
                fidElement.style.color = vitals.fid <= 100 ? '#34d399' : vitals.fid <= 300 ? '#fbbf24' : '#f87171';
            }
            
            if (clsElement && vitals.cls !== undefined) {
                clsElement.textContent = vitals.cls.toFixed(3);
                clsElement.style.color = vitals.cls <= 0.1 ? '#34d399' : vitals.cls <= 0.25 ? '#fbbf24' : '#f87171';
            }
        }
    }

    updateAIInsights() {
        const insightsElement = this.dashboard.querySelector('#ai-insights');
        if (!insightsElement) return;

        const insights = this.generateRealTimeInsights();
        insightsElement.innerHTML = insights.map(insight => 
            `<div style="margin-bottom: 8px;">
                <span style="color: ${insight.color};">${insight.icon}</span> ${insight.text}
            </div>`
        ).join('');
    }

    generateRealTimeInsights() {
        const insights = [];
        
        // Performance insights
        if (this.modules.visualEnhancer) {
            const perfScore = this.modules.visualEnhancer.getPerformanceScore?.() || 0.5;
            if (perfScore < 0.7) {
                insights.push({
                    icon: '⚡',
                    color: '#f59e0b',
                    text: 'Performance optimization opportunities detected'
                });
            } else {
                insights.push({
                    icon: '✨',
                    color: '#34d399',
                    text: 'Performance metrics are optimal'
                });
            }
        }

        // Conversion insights
        if (this.modules.intelligentAnalytics) {
            const sessions = this.modules.intelligentAnalytics.analytics?.sessions?.size || 0;
            if (sessions > 0) {
                insights.push({
                    icon: '📊',
                    color: '#60a5fa',
                    text: `Analyzing ${sessions} active sessions`
                });
            }
        }

        // SEO insights
        if (this.modules.seoOptimizer) {
            const seoScore = this.modules.seoOptimizer.calculateSEOScore?.() || 0;
            if (seoScore >= 90) {
                insights.push({
                    icon: '🎯',
                    color: '#34d399',
                    text: 'SEO optimization is excellent'
                });
            } else {
                insights.push({
                    icon: '🔍',
                    color: '#f59e0b',
                    text: 'SEO improvements available'
                });
            }
        }

        return insights.slice(0, 3); // Show top 3 insights
    }

    updateActiveOptimizations() {
        const optimizationsElement = this.dashboard.querySelector('#active-optimizations');
        if (!optimizationsElement) return;

        if (this.optimizationQueue.length === 0) {
            optimizationsElement.innerHTML = '<div style="color: rgba(255, 255, 255, 0.6); font-size: 12px;">No active optimizations</div>';
        } else {
            optimizationsElement.innerHTML = this.optimizationQueue.map(opt => 
                `<div style="margin-bottom: 6px; font-size: 12px;">
                    <span style="color: #fbbf24;">●</span> ${opt.description}
                </div>`
            ).join('');
        }
    }

    /**
     * Start real-time monitoring
     */
    startRealTimeMonitoring() {
        if (!this.config.realTimeMonitoring) return;

        setInterval(() => {
            this.evaluateAutomationRules();
            this.monitorPerformanceChanges();
            this.analyzeUserBehavior();
        }, 30000); // Every 30 seconds

        console.log('🔍 Real-time monitoring started');
    }

    evaluateAutomationRules() {
        const currentMetrics = this.getCurrentMetrics();
        
        this.automationRules.forEach((rule, ruleName) => {
            if (rule.condition(currentMetrics)) {
                this.executeAutomationRule(ruleName, rule);
            }
        });
    }

    getCurrentMetrics() {
        return {
            seoScore: this.modules.seoOptimizer?.calculateSEOScore?.() || 0,
            performanceScore: this.modules.visualEnhancer?.getPerformanceScore?.() || 0.5,
            accessibilityScore: (this.modules.seoOptimizer?.calculateAccessibilityScore?.() || 0.5),
            conversionRate: this.modules.intelligentAnalytics?.calculateConversionRate?.() || 0
        };
    }

    executeAutomationRule(ruleName, rule) {
        // Check cooldown
        const lastExecution = rule.lastExecution || 0;
        if (Date.now() - lastExecution < rule.cooldown) {
            return;
        }

        // Execute rule action
        rule.action();
        rule.lastExecution = Date.now();

        // Add to optimization queue
        this.optimizationQueue.push({
            rule: ruleName,
            timestamp: Date.now(),
            description: `Auto-optimization: ${ruleName.replace(/_/g, ' ')}`
        });

        console.log(`🤖 Executed automation rule: ${ruleName}`);
    }

    /**
     * Manual optimization trigger
     */
    triggerManualOptimization() {
        console.log('🚀 Manual optimization triggered');
        
        // Trigger optimizations in all modules
        if (this.modules.seoOptimizer?.implementAutomaticImprovements) {
            this.modules.seoOptimizer.implementAutomaticImprovements();
        }
        
        if (this.modules.visualEnhancer?.visualOptimizer?.adaptVisuals) {
            this.modules.visualEnhancer.visualOptimizer.adaptVisuals();
        }
        
        if (this.modules.intelligentAnalytics?.realTimeOptimizer?.optimizeBehavior) {
            this.modules.intelligentAnalytics.realTimeOptimizer.optimizeBehavior();
        }

        // Show optimization feedback
        this.showOptimizationNotification('Manual optimization completed successfully!');
    }

    /**
     * Generate comprehensive report
     */
    generateComprehensiveReport() {
        const report = {
            timestamp: new Date().toISOString(),
            domain: 'narratum.io',
            
            seo: this.modules.seoOptimizer?.generateOptimizationReport?.() || {},
            visual: this.modules.visualEnhancer?.generateVisualOptimizationReport?.() || {},
            analytics: this.modules.intelligentAnalytics?.generateIntelligentReport?.() || {},
            
            integration: {
                optimizationQueue: this.optimizationQueue,
                automationRules: Array.from(this.automationRules.keys()),
                performanceBaseline: this.performanceBaseline,
                overallScore: this.calculateOverallOptimizationScore()
            }
        };

        this.downloadReport(report);
        console.log('📊 Comprehensive report generated');
    }

    calculateOverallOptimizationScore() {
        const metrics = this.getCurrentMetrics();
        const weights = { seo: 0.3, performance: 0.3, accessibility: 0.2, conversion: 0.2 };
        
        return Math.round(
            (metrics.seoScore * weights.seo) +
            (metrics.performanceScore * 100 * weights.performance) +
            (metrics.accessibilityScore * 100 * weights.accessibility) +
            (Math.min(metrics.conversionRate * 20, 100) * weights.conversion)
        );
    }

    downloadReport(report) {
        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `narratum-comprehensive-report-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    /**
     * Optimization triggers
     */
    triggerPerformanceOptimization() {
        if (this.modules.visualEnhancer) {
            this.modules.visualEnhancer.realTimeOptimizer?.optimizePerformance();
        }
        this.addOptimizationToQueue('Performance optimization triggered');
    }

    triggerSEOOptimization() {
        if (this.modules.seoOptimizer) {
            this.modules.seoOptimizer.implementAutomaticImprovements();
        }
        this.addOptimizationToQueue('SEO optimization triggered');
    }

    triggerConversionOptimization() {
        if (this.modules.intelligentAnalytics) {
            this.modules.intelligentAnalytics.realTimeOptimizer?.optimizeBehavior();
        }
        this.addOptimizationToQueue('Conversion optimization triggered');
    }

    triggerAccessibilityImprovements() {
        if (this.modules.visualEnhancer) {
            this.modules.visualEnhancer.accessibilityOptimizer?.ensureWCAGCompliance();
        }
        this.addOptimizationToQueue('Accessibility improvements triggered');
    }

    addOptimizationToQueue(description) {
        this.optimizationQueue.push({
            timestamp: Date.now(),
            description: description
        });

        // Keep queue size manageable
        if (this.optimizationQueue.length > 10) {
            this.optimizationQueue.shift();
        }
    }

    /**
     * Notification system
     */
    showWelcomeNotification() {
        this.showNotification(
            '🎯 Narratum AI Optimizer Ready',
            'Your website is being optimized in real-time for perfect performance and visibility.',
            'success',
            5000
        );
    }

    showOptimizationNotification(message) {
        this.showNotification(
            '⚡ Optimization Complete',
            message,
            'success',
            3000
        );
    }

    showNotification(title, message, type = 'info', duration = 4000) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-100px);
            background: rgba(10, 21, 32, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(251, 191, 36, 0.4);
            border-radius: 12px;
            padding: 16px 24px;
            z-index: 10001;
            color: white;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            max-width: 400px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
        `;

        notification.innerHTML = `
            <div style="font-weight: 600; margin-bottom: 4px; color: #fbbf24;">${title}</div>
            <div style="color: rgba(255, 255, 255, 0.8); font-size: 12px;">${message}</div>
        `;

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(-50%) translateY(0)';
        });

        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(-50%) translateY(-100px)';
            setTimeout(() => notification.remove(), 400);
        }, duration);
    }

    /**
     * Initialize when DOM is ready
     */
    static initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                window.seoAIIntegrationManager = new SEOAIIntegrationManager();
            });
        } else {
            window.seoAIIntegrationManager = new SEOAIIntegrationManager();
        }
    }
}

// Auto-initialize the integration manager
SEOAIIntegrationManager.initialize();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOAIIntegrationManager;
}

console.log('🎯 SEO & AI Integration Manager loaded successfully');
