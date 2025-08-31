/**
 * Legal Integration - Seamless integration with existing legal content system
 * Connects the Legal Team Agent with the current website implementation
 */

class LegalIntegration {
    constructor() {
        this.legalAgent = null;
        this.interface = null;
        this.isInitialized = false;
        this.originalLegalContent = null;
        this.backupContent = new Map();
    }

    /**
     * Initialize the legal integration system
     */
    async init() {
        if (this.isInitialized) return;

        try {
            // Initialize core components
            await this.initializeLegalAgent();
            await this.initializeInterface();
            
            // Backup existing content
            this.backupExistingContent();
            
            // Migrate existing content to new system
            await this.migrateExistingContent();
            
            // Set up integration hooks
            this.setupIntegrationHooks();
            
            // Add admin interface trigger
            this.addAdminTrigger();
            
            this.isInitialized = true;
            
            console.log('Legal Team Agent initialized successfully');
            this.notifyInitialization();
            
        } catch (error) {
            console.error('Failed to initialize Legal Team Agent:', error);
            throw error;
        }
    }

    /**
     * Initialize the legal agent
     */
    async initializeLegalAgent() {
        if (typeof LegalTeamAgent === 'undefined') {
            throw new Error('LegalTeamAgent class not found. Make sure legal-team-agent.js is loaded.');
        }
        
        this.legalAgent = new LegalTeamAgent();
        
        // Load existing content if available
        if (typeof window !== 'undefined' && window.legalContent) {
            this.originalLegalContent = { ...window.legalContent };
        }
    }

    /**
     * Initialize the interface
     */
    async initializeInterface() {
        if (typeof LegalTeamInterface === 'undefined') {
            throw new Error('LegalTeamInterface class not found. Make sure legal-team-interface.js is loaded.');
        }
        
        // Don't auto-initialize the interface - only when requested
        this.interface = null;
    }

    /**
     * Backup existing legal content
     */
    backupExistingContent() {
        if (this.originalLegalContent) {
            Object.keys(this.originalLegalContent).forEach(key => {
                this.backupContent.set(key, this.originalLegalContent[key]);
            });
            
            // Also backup to localStorage
            localStorage.setItem('legal_content_backup', JSON.stringify(this.originalLegalContent));
            localStorage.setItem('legal_backup_date', new Date().toISOString());
        }
    }

    /**
     * Migrate existing content to new system
     */
    async migrateExistingContent() {
        if (!this.originalLegalContent) return;

        try {
            // Create documents from existing content
            Object.keys(this.originalLegalContent).forEach(contentType => {
                const content = this.originalLegalContent[contentType];
                
                // Convert content type names
                let documentType = contentType;
                if (contentType === 'privacy') documentType = 'privacy_policy';
                if (contentType === 'terms') documentType = 'terms_of_service';
                if (contentType === 'cookies') documentType = 'cookie_policy';
                
                // Create document record
                const documentId = `migrated_${documentType}`;
                const document = {
                    id: documentId,
                    type: documentType,
                    content: content,
                    createdDate: new Date(),
                    lastUpdated: new Date(),
                    version: '1.0',
                    status: 'active',
                    complianceStatus: 'pending_review',
                    reviewNotes: [],
                    source: 'migration'
                };
                
                this.legalAgent.legalDocuments.set(documentId, document);
            });
            
            console.log('Legal content migration completed');
        } catch (error) {
            console.error('Error during content migration:', error);
        }
    }

    /**
     * Setup integration hooks with existing system
     */
    setupIntegrationHooks() {
        // Override the existing legalContent object to use managed content
        if (typeof window !== 'undefined') {
            const self = this;
            
            // Create a proxy to intercept access to legal content
            window.legalContent = new Proxy({}, {
                get(target, prop) {
                    return self.getManagedContent(prop);
                },
                set(target, prop, value) {
                    console.warn(`Direct modification of legal content is not recommended. Use Legal Team Agent instead.`);
                    return true;
                }
            });
            
            // Override save functions to use the new system
            if (window.saveCookiePreferences) {
                const originalSave = window.saveCookiePreferences;
                window.saveCookiePreferences = function() {
                    // Call original function
                    originalSave.apply(this, arguments);
                    
                    // Log the preference change
                    self.logContentAccess('cookie_preferences_saved');
                };
            }
        }
    }

    /**
     * Get managed content from the legal agent
     */
    getManagedContent(contentType) {
        // Convert content type names
        let documentType = contentType;
        if (contentType === 'privacy') documentType = 'privacy_policy';
        if (contentType === 'terms') documentType = 'terms_of_service';
        if (contentType === 'cookies') documentType = 'cookie_policy';
        
        // Try to get active document first
        const documents = this.legalAgent.listDocuments('active');
        const activeDoc = documents.find(doc => doc.type === documentType);
        
        if (activeDoc) {
            this.logContentAccess(contentType);
            return activeDoc.content;
        }
        
        // Fallback to migrated content
        const migratedDoc = this.legalAgent.getDocument(`migrated_${documentType}`);
        if (migratedDoc) {
            this.logContentAccess(contentType);
            return migratedDoc.content;
        }
        
        // Final fallback to original content
        if (this.originalLegalContent && this.originalLegalContent[contentType]) {
            this.logContentAccess(contentType, 'fallback');
            return this.originalLegalContent[contentType];
        }
        
        console.warn(`No legal content found for type: ${contentType}`);
        return '';
    }

    /**
     * Log content access for analytics
     */
    logContentAccess(contentType, source = 'managed') {
        const accessLog = {
            timestamp: new Date(),
            contentType: contentType,
            source: source,
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        
        // Store in session storage for analytics
        const existingLogs = JSON.parse(sessionStorage.getItem('legal_access_logs') || '[]');
        existingLogs.push(accessLog);
        sessionStorage.setItem('legal_access_logs', JSON.stringify(existingLogs));
    }

    /**
     * Add admin trigger button
     */
    addAdminTrigger() {
        // Add hidden admin trigger (Ctrl+Shift+L or click sequence)
        let clickSequence = [];
        const targetSequence = ['legal', 'admin'];
        
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.textContent.toLowerCase().includes('legal')) {
                clickSequence.push('legal');
                if (clickSequence.length > 2) clickSequence = clickSequence.slice(-2);
            } else if (e.target.textContent && e.target.textContent.toLowerCase().includes('admin')) {
                clickSequence.push('admin');
                if (clickSequence.length > 2) clickSequence = clickSequence.slice(-2);
            } else {
                clickSequence = [];
            }
            
            if (JSON.stringify(clickSequence) === JSON.stringify(targetSequence)) {
                this.showAdminInterface();
                clickSequence = [];
            }
        });

        // Add keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'L') {
                e.preventDefault();
                this.showAdminInterface();
            }
        });

        // Add console access
        if (typeof window !== 'undefined') {
            window.legalAdmin = {
                show: () => this.showAdminInterface(),
                hide: () => this.hideAdminInterface(),
                agent: this.legalAgent,
                status: () => this.getSystemStatus(),
                backup: () => this.createBackup(),
                restore: () => this.restoreFromBackup(),
                export: () => this.exportAllDocuments(),
                compliance: () => this.runFullComplianceCheck()
            };
        }
    }

    /**
     * Show admin interface
     */
    showAdminInterface() {
        if (!this.interface) {
            this.interface = new LegalTeamInterface();
            this.interface.init();
        }
        this.interface.show();
    }

    /**
     * Hide admin interface
     */
    hideAdminInterface() {
        if (this.interface) {
            this.interface.hide();
        }
    }

    /**
     * Get system status
     */
    getSystemStatus() {
        const documents = this.legalAgent.listDocuments();
        const status = {
            initialized: this.isInitialized,
            documentsCount: documents.length,
            activeDocuments: documents.filter(doc => doc.status === 'active').length,
            pendingReview: documents.filter(doc => doc.complianceStatus === 'pending_review').length,
            lastUpdate: documents.length > 0 ? Math.max(...documents.map(doc => new Date(doc.lastUpdated))) : null,
            backupAvailable: this.backupContent.size > 0,
            accessLogs: JSON.parse(sessionStorage.getItem('legal_access_logs') || '[]').length
        };
        
        console.table(status);
        return status;
    }

    /**
     * Create backup of current state
     */
    createBackup() {
        const backup = {
            timestamp: new Date().toISOString(),
            documents: Array.from(this.legalAgent.legalDocuments.entries()),
            changeHistory: this.legalAgent.getChangeHistory(),
            originalContent: this.originalLegalContent
        };
        
        const backupData = JSON.stringify(backup, null, 2);
        
        // Save to localStorage
        localStorage.setItem('legal_system_backup', backupData);
        localStorage.setItem('legal_backup_timestamp', backup.timestamp);
        
        // Download backup file
        this.downloadBackup(backupData);
        
        console.log('Backup created successfully');
        return backup;
    }

    /**
     * Download backup file
     */
    downloadBackup(backupData) {
        const blob = new Blob([backupData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `legal-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    /**
     * Restore from backup
     */
    restoreFromBackup() {
        const backupData = localStorage.getItem('legal_system_backup');
        if (!backupData) {
            console.error('No backup found');
            return false;
        }
        
        try {
            const backup = JSON.parse(backupData);
            
            // Restore documents
            this.legalAgent.legalDocuments.clear();
            backup.documents.forEach(([key, value]) => {
                this.legalAgent.legalDocuments.set(key, value);
            });
            
            // Restore change history
            this.legalAgent.changeHistory = backup.changeHistory || [];
            
            console.log('System restored from backup');
            return true;
        } catch (error) {
            console.error('Failed to restore from backup:', error);
            return false;
        }
    }

    /**
     * Export all documents
     */
    exportAllDocuments() {
        const documents = this.legalAgent.listDocuments();
        const exports = {};
        
        documents.forEach(doc => {
            exports[doc.type] = {
                html: doc.content,
                metadata: {
                    version: doc.version,
                    lastUpdated: doc.lastUpdated,
                    status: doc.status,
                    complianceStatus: doc.complianceStatus
                }
            };
        });
        
        const exportData = JSON.stringify(exports, null, 2);
        
        // Download export
        const blob = new Blob([exportData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `legal-documents-export-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        return exports;
    }

    /**
     * Run full compliance check
     */
    runFullComplianceCheck() {
        const documents = this.legalAgent.listDocuments();
        const results = {};
        
        documents.forEach(doc => {
            results[doc.type] = this.legalAgent.checkCompliance(doc.id || doc.type);
        });
        
        // Generate summary report
        const report = this.legalAgent.generateComplianceReport();
        
        console.log('Compliance Check Results:');
        console.table(report.documentSummary);
        
        if (report.recommendations.length > 0) {
            console.log('Recommendations:');
            report.recommendations.forEach(rec => console.log(`- ${rec}`));
        }
        
        return { results, report };
    }

    /**
     * Update existing legal content with new version
     */
    updateLegalContent(documentType, newContent, updateNotes = '') {
        try {
            // Convert content type names
            let agentDocumentType = documentType;
            if (documentType === 'privacy') agentDocumentType = 'privacy_policy';
            if (documentType === 'terms') agentDocumentType = 'terms_of_service';
            if (documentType === 'cookies') agentDocumentType = 'cookie_policy';
            
            // Find existing document
            const documents = this.legalAgent.listDocuments();
            const existingDoc = documents.find(doc => doc.type === agentDocumentType);
            
            if (existingDoc) {
                // Update existing document
                this.legalAgent.updateDocument(existingDoc.id, newContent, updateNotes);
            } else {
                // Create new document
                const companyInfo = this.getDefaultCompanyInfo();
                const document = this.legalAgent.generateDocument(agentDocumentType, companyInfo);
                this.legalAgent.updateDocument(document.id, newContent, updateNotes);
            }
            
            // Log the change
            this.legalAgent.addToChangeHistory('content_updated', agentDocumentType, updateNotes);
            
            console.log(`Legal content updated: ${documentType}`);
            return true;
        } catch (error) {
            console.error(`Failed to update legal content: ${error.message}`);
            return false;
        }
    }

    /**
     * Get default company information
     */
    getDefaultCompanyInfo() {
        return {
            company_name: 'Narratum LLC',
            website_url: 'narratum.io',
            contact_email: 'legal@narratum.io',
            jurisdiction: 'New York',
            address: '110 East 25th Street\nNew York, NY 10010'
        };
    }

    /**
     * Activate a specific document version
     */
    activateDocument(documentId) {
        try {
            const document = this.legalAgent.getDocument(documentId);
            if (!document) {
                throw new Error(`Document not found: ${documentId}`);
            }
            
            // Deactivate other documents of the same type
            const documents = this.legalAgent.listDocuments();
            documents.filter(doc => doc.type === document.type && doc.id !== documentId)
                     .forEach(doc => {
                         doc.status = 'inactive';
                         doc.lastUpdated = new Date();
                     });
            
            // Activate the selected document
            document.status = 'active';
            document.lastUpdated = new Date();
            
            this.legalAgent.addToChangeHistory('document_activated', documentId, 'Document activated via integration');
            
            console.log(`Document activated: ${documentId}`);
            return true;
        } catch (error) {
            console.error(`Failed to activate document: ${error.message}`);
            return false;
        }
    }

    /**
     * Get analytics data
     */
    getAnalytics() {
        const accessLogs = JSON.parse(sessionStorage.getItem('legal_access_logs') || '[]');
        const documents = this.legalAgent.listDocuments();
        
        const analytics = {
            totalAccess: accessLogs.length,
            uniqueUsers: new Set(accessLogs.map(log => log.userAgent)).size,
            contentAccess: {},
            documents: {
                total: documents.length,
                active: documents.filter(doc => doc.status === 'active').length,
                pending: documents.filter(doc => doc.complianceStatus === 'pending_review').length
            },
            timeRange: {
                earliest: accessLogs.length > 0 ? Math.min(...accessLogs.map(log => new Date(log.timestamp))) : null,
                latest: accessLogs.length > 0 ? Math.max(...accessLogs.map(log => new Date(log.timestamp))) : null
            }
        };
        
        // Count access by content type
        accessLogs.forEach(log => {
            analytics.contentAccess[log.contentType] = (analytics.contentAccess[log.contentType] || 0) + 1;
        });
        
        return analytics;
    }

    /**
     * Notify successful initialization
     */
    notifyInitialization() {
        // Show subtle notification
        if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
            setTimeout(() => {
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #2c3e50;
                    color: white;
                    padding: 12px 16px;
                    border-radius: 6px;
                    font-size: 12px;
                    z-index: 9999;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                    transition: all 0.3s ease;
                    cursor: pointer;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                `;
                notification.innerHTML = '⚖️ Legal Team Agent Active<br><small>Ctrl+Shift+L for admin</small>';
                
                notification.addEventListener('click', () => {
                    this.showAdminInterface();
                });
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.opacity = '0';
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.parentNode.removeChild(notification);
                        }
                    }, 300);
                }, 5000);
            }, 2000);
        }
    }

    /**
     * Emergency restore function
     */
    emergencyRestore() {
        console.log('Performing emergency restore...');
        
        if (this.originalLegalContent) {
            // Restore original content
            if (typeof window !== 'undefined') {
                window.legalContent = this.originalLegalContent;
            }
            
            console.log('Original legal content restored');
            return true;
        }
        
        // Try to restore from localStorage backup
        const backup = localStorage.getItem('legal_content_backup');
        if (backup) {
            try {
                const restoredContent = JSON.parse(backup);
                if (typeof window !== 'undefined') {
                    window.legalContent = restoredContent;
                }
                console.log('Legal content restored from backup');
                return true;
            } catch (error) {
                console.error('Failed to restore from backup:', error);
            }
        }
        
        console.error('No backup content available for emergency restore');
        return false;
    }
}

// Auto-initialize the integration system
let legalIntegration;

// Initialize when DOM is ready
function initializeLegalSystem() {
    if (typeof LegalTeamAgent === 'undefined' || typeof LegalTeamInterface === 'undefined') {
        console.log('Waiting for Legal Team Agent dependencies...');
        setTimeout(initializeLegalSystem, 100);
        return;
    }
    
    legalIntegration = new LegalIntegration();
    legalIntegration.init().catch(error => {
        console.error('Failed to initialize Legal Team Agent:', error);
        
        // Attempt emergency restore
        if (legalIntegration) {
            legalIntegration.emergencyRestore();
        }
    });
}

// Start initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLegalSystem);
} else {
    initializeLegalSystem();
}

// Export for use
if (typeof window !== 'undefined') {
    window.legalIntegration = legalIntegration;
    window.LegalIntegration = LegalIntegration;
}

// Add emergency restore to global scope
if (typeof window !== 'undefined') {
    window.emergencyRestoreLegal = () => {
        if (legalIntegration) {
            return legalIntegration.emergencyRestore();
        }
        return false;
    };
}
