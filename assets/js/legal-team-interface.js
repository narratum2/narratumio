/**
 * Legal Team Interface - User Interface for Legal Content Management
 * Provides an intuitive interface for legal team operations
 */

class LegalTeamInterface {
    constructor() {
        this.legalAgent = new LegalTeamAgent();
        this.currentDocument = null;
        this.initialized = false;
    }

    /**
     * Initialize the interface
     */
    init() {
        if (this.initialized) return;
        
        this.createInterface();
        this.bindEvents();
        this.loadExistingDocuments();
        this.initialized = true;
    }

    /**
     * Create the main interface
     */
    createInterface() {
        // Create main container
        const container = document.createElement('div');
        container.id = 'legal-team-interface';
        container.className = 'legal-interface-container';
        
        container.innerHTML = `
            <div class="legal-interface-header">
                <h2>Legal Team Agent</h2>
                <div class="interface-tabs">
                    <button class="tab-button active" data-tab="documents">Documents</button>
                    <button class="tab-button" data-tab="generator">Generator</button>
                    <button class="tab-button" data-tab="compliance">Compliance</button>
                    <button class="tab-button" data-tab="review">Review</button>
                </div>
            </div>
            
            <div class="legal-interface-content">
                <!-- Documents Tab -->
                <div class="tab-content active" id="documents-tab">
                    <div class="documents-header">
                        <h3>Legal Documents</h3>
                        <button class="btn btn-primary" id="refresh-documents">Refresh</button>
                    </div>
                    <div class="documents-list" id="documents-list">
                        <!-- Documents will be loaded here -->
                    </div>
                </div>
                
                <!-- Generator Tab -->
                <div class="tab-content" id="generator-tab">
                    <div class="generator-form">
                        <h3>Generate New Legal Document</h3>
                        
                        <div class="form-group">
                            <label for="document-type">Document Type:</label>
                            <select id="document-type" class="form-control">
                                <option value="privacy_policy">Privacy Policy</option>
                                <option value="terms_of_service">Terms of Service</option>
                                <option value="cookie_policy">Cookie Policy</option>
                                <option value="data_processing_agreement">Data Processing Agreement</option>
                            </select>
                        </div>
                        
                        <div class="company-info-section">
                            <h4>Company Information</h4>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="company-name">Company Name:</label>
                                    <input type="text" id="company-name" class="form-control" value="Narratum LLC">
                                </div>
                                <div class="form-group">
                                    <label for="website-url">Website URL:</label>
                                    <input type="text" id="website-url" class="form-control" value="narratum.io">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="contact-email">Contact Email:</label>
                                    <input type="email" id="contact-email" class="form-control" value="legal@narratum.io">
                                </div>
                                <div class="form-group">
                                    <label for="jurisdiction">Jurisdiction:</label>
                                    <input type="text" id="jurisdiction" class="form-control" value="New York">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="company-address">Address:</label>
                                <textarea id="company-address" class="form-control" rows="3">110 East 25th Street
New York, NY 10010</textarea>
                            </div>
                        </div>
                        
                        <div class="options-section">
                            <h4>Document Options</h4>
                            <div id="document-options">
                                <!-- Dynamic options based on document type -->
                            </div>
                        </div>
                        
                        <div class="form-actions">
                            <button class="btn btn-primary" id="generate-document">Generate Document</button>
                            <button class="btn btn-secondary" id="preview-document">Preview</button>
                        </div>
                    </div>
                </div>
                
                <!-- Compliance Tab -->
                <div class="tab-content" id="compliance-tab">
                    <div class="compliance-header">
                        <h3>Compliance Checker</h3>
                        <button class="btn btn-primary" id="run-compliance-check">Run Full Compliance Check</button>
                    </div>
                    
                    <div class="compliance-standards">
                        <h4>Select Compliance Standards:</h4>
                        <div class="checkbox-group">
                            <label><input type="checkbox" id="gdpr-check" checked> GDPR</label>
                            <label><input type="checkbox" id="ccpa-check" checked> CCPA</label>
                            <label><input type="checkbox" id="eprivacy-check" checked> ePrivacy Directive</label>
                        </div>
                    </div>
                    
                    <div class="compliance-results" id="compliance-results">
                        <!-- Compliance results will appear here -->
                    </div>
                </div>
                
                <!-- Review Tab -->
                <div class="tab-content" id="review-tab">
                    <div class="review-header">
                        <h3>Document Review</h3>
                        <select id="review-document-select" class="form-control">
                            <option value="">Select document to review...</option>
                        </select>
                    </div>
                    
                    <div class="review-content" id="review-content">
                        <!-- Review interface will appear here -->
                    </div>
                </div>
            </div>
            
            <!-- Document Editor Modal -->
            <div id="document-editor-modal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 id="editor-title">Edit Document</h3>
                        <button class="close-modal" onclick="legalInterface.closeModalWithAnimation(this.closest('.modal'))">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="editor-toolbar">
                            <button class="btn btn-sm" id="editor-bold">Bold</button>
                            <button class="btn btn-sm" id="editor-italic">Italic</button>
                            <button class="btn btn-sm" id="editor-heading">Heading</button>
                            <button class="btn btn-sm" id="editor-list">List</button>
                        </div>
                        <textarea id="document-editor" class="document-editor" rows="20"></textarea>
                        <div class="editor-actions">
                            <button class="btn btn-primary" id="save-document">Save Changes</button>
                            <button class="btn btn-secondary" id="preview-changes">Preview</button>
                            <button class="btn btn-secondary" onclick="legalInterface.closeModalWithAnimation(this.closest('.modal'))">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles
        this.addStyles();
        
        // Append to body or specified container
        document.body.appendChild(container);
    }

    /**
     * Add CSS styles for the interface
     */
    addStyles() {
        if (document.getElementById('legal-interface-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'legal-interface-styles';
        styles.textContent = `
            .legal-interface-container {
                position: fixed;
                top: 20px;
                right: 20px;
                width: 800px;
                height: 600px;
                background: white;
                border: 1px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                z-index: 10000;
                display: flex;
                flex-direction: column;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
            }
            
            .legal-interface-header {
                padding: 16px 20px;
                border-bottom: 1px solid #eee;
                background: #f8f9fa;
                border-radius: 8px 8px 0 0;
            }
            
            .legal-interface-header h2 {
                margin: 0 0 12px 0;
                font-size: 18px;
                color: #2c3e50;
            }
            
            .interface-tabs {
                display: flex;
                gap: 8px;
            }
            
            .tab-button {
                padding: 8px 16px;
                border: 1px solid #ddd;
                background: white;
                border-radius: 4px;
                cursor: pointer;
                font-size: 13px;
                transition: all 0.4s var(--transition-smooth);
                position: relative;
                overflow: hidden;
                will-change: transform, background-color;
                transform: translateZ(0);
            }

            .tab-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(52, 152, 219, 0.2), transparent);
                transition: left 0.5s ease;
            }

            .tab-button:hover {
                background: #f0f0f0;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }

            .tab-button:hover::before {
                left: 100%;
            }

            .tab-button.active {
                background: #3498db;
                color: white;
                border-color: #3498db;
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
            }

            .tab-button.active::after {
                content: '';
                position: absolute;
                bottom: -1px;
                left: 50%;
                transform: translateX(-50%);
                width: 80%;
                height: 2px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 1px;
            }
            
            .legal-interface-content {
                flex: 1;
                overflow-y: auto;
                padding: 20px;
            }
            
            .tab-content {
                display: none;
                opacity: 0;
                transform: translateX(20px) scale(0.98);
                transition: all 0.5s var(--transition-smooth);
                will-change: opacity, transform;
            }

            .tab-content.active {
                display: block;
                opacity: 1;
                transform: translateX(0) scale(1);
            }

            .tab-content.leaving {
                opacity: 0;
                transform: translateX(-20px) scale(0.98);
            }
            
            .form-group {
                margin-bottom: 16px;
            }
            
            .form-group label {
                display: block;
                margin-bottom: 4px;
                font-weight: 500;
                color: #555;
            }
            
            .form-control {
                width: 100%;
                padding: 8px 12px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
                box-sizing: border-box;
            }
            
            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
            }
            
            .btn {
                padding: 8px 16px;
                border: 1px solid #ddd;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                background: white;
                transition: all 0.3s var(--transition-smooth);
                position: relative;
                overflow: hidden;
                will-change: transform, box-shadow;
                transform: translateZ(0);
            }

            .btn::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%);
                transition: all 0.4s ease;
            }

            .btn:hover::before {
                width: 300px;
                height: 300px;
            }

            .btn:active {
                transform: translateY(1px) scale(0.98);
                transition-duration: 0.1s;
            }

            .btn-primary {
                background: #3498db;
                color: white;
                border-color: #3498db;
                box-shadow: 0 2px 4px rgba(52, 152, 219, 0.2);
            }

            .btn-primary:hover {
                background: #2980b9;
                border-color: #2980b9;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
            }

                        .btn-secondary {
                background: #95a5a6;
                color: white;
                border-color: #95a5a6;
                box-shadow: 0 2px 4px rgba(149, 165, 166, 0.2);
            }

            .btn-secondary:hover {
                background: #7f8c8d;
                border-color: #7f8c8d;
                transform: translateY(-1px);
                box-shadow: 0 3px 8px rgba(127, 140, 141, 0.3);
            }
            
            .btn-sm {
                padding: 4px 8px;
                font-size: 12px;
            }
            
            .documents-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .document-card {
                border: 1px solid #eee;
                border-radius: 6px;
                padding: 16px;
                margin-bottom: 12px;
                background: #fafafa;
            }
            
            .document-title {
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 8px;
            }
            
            .document-meta {
                font-size: 12px;
                color: #666;
                margin-bottom: 12px;
            }
            
            .document-actions {
                display: flex;
                gap: 8px;
            }
            
            .compliance-score {
                display: inline-block;
                padding: 2px 8px;
                border-radius: 12px;
                font-size: 11px;
                font-weight: 600;
                color: white;
            }
            
            .compliance-score.high { background: #27ae60; }
            .compliance-score.medium { background: #f39c12; }
            .compliance-score.low { background: #e74c3c; }
            
            .checkbox-group {
                display: flex;
                gap: 16px;
                margin-bottom: 20px;
            }
            
            .checkbox-group label {
                display: flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
            }
            
            .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                backdrop-filter: blur(4px);
                z-index: 10001;
                opacity: 0;
                transition: opacity 0.3s var(--transition-smooth);
                will-change: opacity;
            }

            .modal.show {
                opacity: 1;
            }

            .modal-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.9) rotate(-2deg);
                background: white;
                border-radius: 12px;
                width: 90%;
                max-width: 900px;
                max-height: 90%;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-shadow:
                    0 20px 60px rgba(0,0,0,0.3),
                    0 8px 32px rgba(0,0,0,0.2),
                    0 0 0 1px rgba(255,255,255,0.1);
                transition: all 0.4s var(--transition-elastic);
                will-change: transform, opacity;
                opacity: 0;
            }

            .modal.show .modal-content {
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
                opacity: 1;
            }
            
            .modal-header {
                padding: 16px 20px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #f8f9fa;
            }
            
            .modal-body {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
            }
            
            .document-editor {
                width: 100%;
                font-family: 'Monaco', 'Menlo', monospace;
                font-size: 13px;
                line-height: 1.5;
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 12px;
                resize: vertical;
            }
            
            .editor-toolbar {
                margin-bottom: 12px;
                padding-bottom: 12px;
                border-bottom: 1px solid #eee;
            }
            
            .editor-actions {
                margin-top: 16px;
                display: flex;
                gap: 8px;
            }
            
            .company-info-section, .options-section {
                margin-bottom: 24px;
                padding: 16px;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .company-info-section h4, .options-section h4 {
                margin: 0 0 16px 0;
                color: #2c3e50;
                font-size: 16px;
            }
            
            .compliance-result-card {
                border: 1px solid #eee;
                border-radius: 6px;
                padding: 16px;
                margin-bottom: 12px;
            }
            
            .compliance-standard {
                font-weight: 600;
                margin-bottom: 8px;
            }
            
            .compliance-details {
                font-size: 13px;
                color: #666;
            }
            
            .recommendations-list {
                margin-top: 16px;
            }
            
            .recommendation-item {
                padding: 8px 12px;
                background: #fff3cd;
                border: 1px solid #ffeaa7;
                border-radius: 4px;
                margin-bottom: 8px;
                font-size: 13px;
            }
            
            .close-modal {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #999;
                padding: 0;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s var(--transition-smooth);
                will-change: transform, background-color;
                position: relative;
                overflow: hidden;
            }

            .close-modal::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(231, 76, 60, 0.1);
                transform: translate(-50%, -50%);
                transition: all 0.3s ease;
            }

            .close-modal:hover {
                color: #e74c3c;
                background: rgba(231, 76, 60, 0.05);
                transform: rotate(90deg) scale(1.1);
            }

            .close-modal:hover::before {
                width: 60px;
                height: 60px;
            }

            .close-modal:active {
                transform: rotate(90deg) scale(0.95);
                transition-duration: 0.1s;
            }
        `;
        
        document.head.appendChild(styles);
    }

    /**
     * Bind event handlers
     */
    bindEvents() {
        // Tab switching
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Document type selection
        document.getElementById('document-type').addEventListener('change', (e) => {
            this.updateDocumentOptions(e.target.value);
        });

        // Generate document
        document.getElementById('generate-document').addEventListener('click', () => {
            this.generateDocument();
        });

        // Preview document
        document.getElementById('preview-document').addEventListener('click', () => {
            this.previewDocument();
        });

        // Refresh documents
        document.getElementById('refresh-documents').addEventListener('click', () => {
            this.loadExistingDocuments();
        });

        // Compliance check
        document.getElementById('run-compliance-check').addEventListener('click', () => {
            this.runComplianceCheck();
        });

        // Review document selection
        document.getElementById('review-document-select').addEventListener('change', (e) => {
            if (e.target.value) {
                this.loadDocumentForReview(e.target.value);
            }
        });

        // Save document
        document.getElementById('save-document').addEventListener('click', () => {
            this.saveDocumentChanges();
        });
    }

    /**
     * Switch between tabs with enhanced animations
     */
    switchTab(tabName) {
        const currentTab = document.querySelector('.tab-content.active');
        const newTab = document.getElementById(`${tabName}-tab`);

        if (currentTab === newTab) return;

        // Enhanced tab switching with smooth transitions
        if (currentTab) {
            currentTab.classList.add('leaving');
            currentTab.classList.remove('active');
        }

        // Update tab buttons with animation
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });

        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
            // Add a subtle bounce animation
            activeButton.style.animation = 'none';
            setTimeout(() => {
                activeButton.style.animation = 'microBounce 0.4s var(--transition-elastic)';
            }, 10);
        }

        // Animate new tab content
        setTimeout(() => {
            if (currentTab) {
                currentTab.classList.remove('leaving');
            }
            if (newTab) {
                newTab.classList.add('active');
            }

            // Load tab-specific data
            this.loadTabData(tabName);
        }, 150);
    }

    /**
     * Load data for specific tab
     */
    loadTabData(tabName) {
        switch (tabName) {
            case 'documents':
                this.loadExistingDocuments();
                break;
            case 'generator':
                this.updateDocumentOptions('privacy_policy');
                break;
            case 'compliance':
                this.loadComplianceData();
                break;
            case 'review':
                this.loadReviewDocuments();
                break;
        }
    }

    /**
     * Update document options based on type
     */
    updateDocumentOptions(documentType) {
        const optionsContainer = document.getElementById('document-options');
        let optionsHTML = '';

        switch (documentType) {
            case 'privacy_policy':
                optionsHTML = `
                    <div class="checkbox-group">
                        <label><input type="checkbox" id="opt-location"> Collect Location Data</label>
                        <label><input type="checkbox" id="opt-payment"> Collect Payment Information</label>
                        <label><input type="checkbox" id="opt-marketing"> Marketing Communications</label>
                        <label><input type="checkbox" id="opt-analytics" checked> Website Analytics</label>
                    </div>
                    <div class="form-group">
                        <label>Third-Party Services:</label>
                        <div class="checkbox-group">
                            <label><input type="checkbox" id="service-ga" checked> Google Analytics</label>
                            <label><input type="checkbox" id="service-cf" checked> Cloudflare</label>
                        </div>
                    </div>
                `;
                break;
            case 'terms_of_service':
                optionsHTML = `
                    <div class="checkbox-group">
                        <label><input type="checkbox" id="opt-age-restriction"> Age Restriction</label>
                        <label><input type="checkbox" id="opt-business-use"> Business Use</label>
                        <label><input type="checkbox" id="opt-user-content"> User Generated Content</label>
                    </div>
                    <div class="form-group" style="display: none;" id="age-restriction-group">
                        <label for="minimum-age">Minimum Age:</label>
                        <input type="number" id="minimum-age" class="form-control" value="13" min="1" max="21">
                    </div>
                `;
                break;
            case 'cookie_policy':
                optionsHTML = `
                    <div class="checkbox-group">
                        <label><input type="checkbox" id="opt-marketing-cookies"> Marketing Cookies</label>
                        <label><input type="checkbox" id="opt-social-media"> Social Media Integration</label>
                        <label><input type="checkbox" id="opt-ga-cookies" checked> Google Analytics</label>
                    </div>
                `;
                break;
            case 'data_processing_agreement':
                optionsHTML = `
                    <div class="form-group">
                        <label for="processor-name">Processor Name:</label>
                        <input type="text" id="processor-name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="processing-purpose">Processing Purpose:</label>
                        <textarea id="processing-purpose" class="form-control" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="data-categories">Data Categories (comma-separated):</label>
                        <input type="text" id="data-categories" class="form-control" placeholder="Names, Email addresses, IP addresses">
                    </div>
                `;
                break;
        }

        optionsContainer.innerHTML = optionsHTML;

        // Add event listeners for conditional options
        if (documentType === 'terms_of_service') {
            document.getElementById('opt-age-restriction').addEventListener('change', (e) => {
                document.getElementById('age-restriction-group').style.display = e.target.checked ? 'block' : 'none';
            });
        }
    }

    /**
     * Generate document based on form inputs
     */
    generateDocument() {
        try {
            const documentType = document.getElementById('document-type').value;
            const companyInfo = this.getCompanyInfo();
            const customOptions = this.getCustomOptions(documentType);

            const document = this.legalAgent.generateDocument(documentType, companyInfo, customOptions);
            
            this.showSuccessMessage(`${document.type} generated successfully!`);
            this.loadExistingDocuments();
            this.switchTab('documents');
        } catch (error) {
            this.showErrorMessage(`Error generating document: ${error.message}`);
        }
    }

    /**
     * Get company information from form
     */
    getCompanyInfo() {
        return {
            company_name: document.getElementById('company-name').value,
            website_url: document.getElementById('website-url').value,
            contact_email: document.getElementById('contact-email').value,
            jurisdiction: document.getElementById('jurisdiction').value,
            address: document.getElementById('company-address').value
        };
    }

    /**
     * Get custom options based on document type
     */
    getCustomOptions(documentType) {
        const options = {};

        switch (documentType) {
            case 'privacy_policy':
                options.collectsLocation = document.getElementById('opt-location')?.checked;
                options.collectsPayment = document.getElementById('opt-payment')?.checked;
                options.marketing = document.getElementById('opt-marketing')?.checked;
                options.analytics = document.getElementById('opt-analytics')?.checked;
                options.googleAnalytics = document.getElementById('service-ga')?.checked;
                options.cloudflare = document.getElementById('service-cf')?.checked;
                break;
            case 'terms_of_service':
                options.ageRestriction = document.getElementById('opt-age-restriction')?.checked;
                options.minimumAge = document.getElementById('minimum-age')?.value;
                options.businessUse = document.getElementById('opt-business-use')?.checked;
                options.userContent = document.getElementById('opt-user-content')?.checked;
                break;
            case 'cookie_policy':
                options.marketingCookies = document.getElementById('opt-marketing-cookies')?.checked;
                options.socialMedia = document.getElementById('opt-social-media')?.checked;
                options.googleAnalytics = document.getElementById('opt-ga-cookies')?.checked;
                break;
            case 'data_processing_agreement':
                options.processor_name = document.getElementById('processor-name')?.value;
                options.processing_purpose = document.getElementById('processing-purpose')?.value;
                options.data_categories = document.getElementById('data-categories')?.value.split(',').map(cat => cat.trim());
                break;
        }

        return options;
    }

    /**
     * Preview document
     */
    previewDocument() {
        try {
            const documentType = document.getElementById('document-type').value;
            const companyInfo = this.getCompanyInfo();
            const customOptions = this.getCustomOptions(documentType);

            // Generate content for preview
            let previewContent = '';
            switch (documentType) {
                case 'privacy_policy':
                    previewContent = this.legalAgent.generatePrivacyPolicy(companyInfo, customOptions);
                    break;
                case 'terms_of_service':
                    previewContent = this.legalAgent.generateTermsOfService(companyInfo, customOptions);
                    break;
                case 'cookie_policy':
                    previewContent = this.legalAgent.generateCookiePolicy(companyInfo, customOptions);
                    break;
                case 'data_processing_agreement':
                    previewContent = this.legalAgent.generateDataProcessingAgreement(companyInfo, customOptions);
                    break;
            }

            this.showPreviewModal(previewContent);
        } catch (error) {
            this.showErrorMessage(`Error generating preview: ${error.message}`);
        }
    }

    /**
     * Show preview modal with enhanced animations
     */
    showPreviewModal(content) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Document Preview</h3>
                    <button class="close-modal" onclick="legalInterface.closeModalWithAnimation(this.closest('.modal'))">&times;</button>
                </div>
                <div class="modal-body">
                    <div style="border: 1px solid #ddd; padding: 20px; background: white; max-height: 500px; overflow-y: auto; border-radius: 6px;">
                        ${content}
                    </div>
                    <div style="margin-top: 16px; text-align: center;">
                        <button class="btn btn-secondary" onclick="legalInterface.closeModalWithAnimation(this.closest('.modal'))">Close</button>
                    </div>
                </div>
            </div>
        `;

        // Enhanced modal opening with animation
        document.body.appendChild(modal);

        // Trigger animation
        requestAnimationFrame(() => {
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    }

    /**
     * Close modal with smooth animation
     */
    closeModalWithAnimation(modal) {
        if (!modal) return;

        modal.classList.remove('show');

        // Wait for animation to complete before removing
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }

    /**
     * Load existing documents
     */
    loadExistingDocuments() {
        const documents = this.legalAgent.listDocuments();
        const container = document.getElementById('documents-list');

        if (documents.length === 0) {
            container.innerHTML = '<p>No documents found. Generate your first legal document using the Generator tab.</p>';
            return;
        }

        container.innerHTML = documents.map(doc => {
            const complianceScore = Math.floor(Math.random() * 100); // Placeholder
            const scoreClass = complianceScore >= 80 ? 'high' : complianceScore >= 60 ? 'medium' : 'low';
            
            return `
                <div class="document-card">
                    <div class="document-title">${doc.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                    <div class="document-meta">
                        Version: ${doc.version} | 
                        Updated: ${doc.lastUpdated.toLocaleDateString()} | 
                        Status: ${doc.status} |
                        <span class="compliance-score ${scoreClass}">${complianceScore}% Compliant</span>
                    </div>
                    <div class="document-actions">
                        <button class="btn btn-sm btn-primary" onclick="legalInterface.editDocument('${doc.id || doc.type}')">Edit</button>
                        <button class="btn btn-sm btn-secondary" onclick="legalInterface.viewDocument('${doc.id || doc.type}')">View</button>
                        <button class="btn btn-sm" onclick="legalInterface.checkDocumentCompliance('${doc.id || doc.type}')">Check Compliance</button>
                        <button class="btn btn-sm" onclick="legalInterface.exportDocument('${doc.id || doc.type}')">Export</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Run compliance check
     */
    runComplianceCheck() {
        const standards = [];
        if (document.getElementById('gdpr-check').checked) standards.push('GDPR');
        if (document.getElementById('ccpa-check').checked) standards.push('CCPA');
        if (document.getElementById('eprivacy-check').checked) standards.push('ePrivacy');

        const documents = this.legalAgent.listDocuments();
        const resultsContainer = document.getElementById('compliance-results');

        if (documents.length === 0) {
            resultsContainer.innerHTML = '<p>No documents to check. Generate documents first.</p>';
            return;
        }

        let resultsHTML = '<h4>Compliance Results</h4>';
        
        documents.forEach(doc => {
            const complianceResults = this.legalAgent.checkCompliance(doc.id || doc.type, standards);
            const scoreClass = complianceResults.overallScore >= 80 ? 'high' : 
                             complianceResults.overallScore >= 60 ? 'medium' : 'low';

            resultsHTML += `
                <div class="compliance-result-card">
                    <div class="compliance-standard">
                        ${doc.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        <span class="compliance-score ${scoreClass}">${complianceResults.overallScore}%</span>
                    </div>
                    <div class="compliance-details">
                        ${complianceResults.results.map(result => 
                            `${result.standard}: ${result.passedChecks}/${result.totalChecks} checks passed`
                        ).join(' | ')}
                    </div>
                    ${complianceResults.recommendations.length > 0 ? `
                        <div class="recommendations-list">
                            <strong>Recommendations:</strong>
                            ${complianceResults.recommendations.map(rec => 
                                `<div class="recommendation-item">${rec}</div>`
                            ).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
        });

        resultsContainer.innerHTML = resultsHTML;
    }

    /**
     * Load compliance data
     */
    loadComplianceData() {
        // This would load any saved compliance data
        // For now, just clear the results
        document.getElementById('compliance-results').innerHTML = '';
    }

    /**
     * Load documents for review
     */
    loadReviewDocuments() {
        const documents = this.legalAgent.listDocuments();
        const select = document.getElementById('review-document-select');
        
        select.innerHTML = '<option value="">Select document to review...</option>';
        documents.forEach(doc => {
            const option = document.createElement('option');
            option.value = doc.id || doc.type;
            option.textContent = doc.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            select.appendChild(option);
        });
    }

    /**
     * Load document for review
     */
    loadDocumentForReview(documentId) {
        const document = this.legalAgent.getDocument(documentId);
        if (!document) return;

        const reviewContainer = document.getElementById('review-content');
        reviewContainer.innerHTML = `
            <div class="document-preview" style="border: 1px solid #ddd; padding: 20px; margin-bottom: 20px; max-height: 300px; overflow-y: auto;">
                ${document.content}
            </div>
            <div class="review-form">
                <div class="form-group">
                    <label for="review-notes">Review Notes:</label>
                    <textarea id="review-notes" class="form-control" rows="4" placeholder="Add your review notes here..."></textarea>
                </div>
                <div class="form-group">
                    <label for="compliance-status">Compliance Status:</label>
                    <select id="compliance-status" class="form-control">
                        <option value="pending_review">Pending Review</option>
                        <option value="compliant">Compliant</option>
                        <option value="needs_revision">Needs Revision</option>
                        <option value="non_compliant">Non-Compliant</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button class="btn btn-primary" onclick="legalInterface.submitReview('${documentId}')">Submit Review</button>
                    <button class="btn btn-secondary" onclick="legalInterface.editDocument('${documentId}')">Edit Document</button>
                </div>
            </div>
        `;
    }

    /**
     * Submit review
     */
    submitReview(documentId) {
        const notes = document.getElementById('review-notes').value;
        const status = document.getElementById('compliance-status').value;

        try {
            this.legalAgent.reviewDocument(documentId, notes, status);
            this.showSuccessMessage('Review submitted successfully!');
            this.loadExistingDocuments();
        } catch (error) {
            this.showErrorMessage(`Error submitting review: ${error.message}`);
        }
    }

    /**
     * Edit document with enhanced modal animation
     */
    editDocument(documentId) {
        const document = this.legalAgent.getDocument(documentId);
        if (!document) return;

        const modal = document.getElementById('document-editor-modal');
        const editorTitle = document.getElementById('editor-title');
        const editorTextarea = document.getElementById('document-editor');

        // Update content
        editorTitle.textContent = `Edit ${document.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
        editorTextarea.value = document.content;

        // Enhanced modal opening with animation
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);

        this.currentDocument = documentId;
    }

    /**
     * View document
     */
    viewDocument(documentId) {
        const document = this.legalAgent.getDocument(documentId);
        if (!document) return;

        this.showPreviewModal(document.content);
    }

    /**
     * Save document changes with enhanced feedback
     */
    saveDocumentChanges() {
        if (!this.currentDocument) return;

        const saveButton = document.getElementById('save-document');
        const originalText = saveButton.textContent;

        // Show loading state
        saveButton.textContent = 'Saving...';
        saveButton.disabled = true;
        saveButton.style.background = '#95a5a6';

        const newContent = document.getElementById('document-editor').value;
        const updateNotes = prompt('Enter update notes:') || 'Manual edit via interface';

        try {
            this.legalAgent.updateDocument(this.currentDocument, newContent, updateNotes);

            // Success animation
            saveButton.textContent = '✓ Saved!';
            saveButton.style.background = '#27ae60';
            saveButton.style.color = 'white';

            this.showSuccessMessage('Document updated successfully!');

            // Close modal with animation after a brief delay
            setTimeout(() => {
                const modal = document.getElementById('document-editor-modal');
                this.closeModalWithAnimation(modal);
                this.loadExistingDocuments();
            }, 1000);

        } catch (error) {
            // Error state
            saveButton.textContent = '✗ Error';
            saveButton.style.background = '#e74c3c';
            saveButton.style.color = 'white';

            this.showErrorMessage(`Error updating document: ${error.message}`);

            // Reset button after delay
            setTimeout(() => {
                saveButton.textContent = originalText;
                saveButton.disabled = false;
                saveButton.style.background = '';
                saveButton.style.color = '';
            }, 2000);
        }
    }

    /**
     * Check document compliance
     */
    checkDocumentCompliance(documentId) {
        const results = this.legalAgent.checkCompliance(documentId);
        
        let message = `Compliance Score: ${results.overallScore}%\n\n`;
        results.results.forEach(result => {
            message += `${result.standard}: ${result.passedChecks}/${result.totalChecks} checks passed\n`;
        });
        
        if (results.recommendations.length > 0) {
            message += `\nRecommendations:\n${results.recommendations.join('\n')}`;
        }

        alert(message);
    }

    /**
     * Export document
     */
    exportDocument(documentId) {
        const format = prompt('Export format (html, json, markdown):', 'html');
        if (!format) return;

        try {
            const content = this.legalAgent.exportDocument(documentId, format);
            this.downloadFile(`document.${format}`, content);
        } catch (error) {
            this.showErrorMessage(`Error exporting document: ${error.message}`);
        }
    }

    /**
     * Download file
     */
    downloadFile(filename, content) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    /**
     * Show success message
     */
    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    /**
     * Show error message
     */
    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }

    /**
     * Show message
     */
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 20px;
            border-radius: 4px;
            color: white;
            z-index: 10002;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        `;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 3000);
    }

    /**
     * Toggle interface visibility
     */
    toggle() {
        const container = document.getElementById('legal-team-interface');
        if (container) {
            container.style.display = container.style.display === 'none' ? 'flex' : 'none';
        }
    }

    /**
     * Show interface
     */
    show() {
        const container = document.getElementById('legal-team-interface');
        if (container) {
            container.style.display = 'flex';
        }
    }

    /**
     * Hide interface
     */
    hide() {
        const container = document.getElementById('legal-team-interface');
        if (container) {
            container.style.display = 'none';
        }
    }
}

// Initialize the interface when the script loads
let legalInterface;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        legalInterface = new LegalTeamInterface();
        legalInterface.init();
    });
} else {
    legalInterface = new LegalTeamInterface();
    legalInterface.init();
}

// Add global access
if (typeof window !== 'undefined') {
    window.legalInterface = legalInterface;
    window.LegalTeamInterface = LegalTeamInterface;
}

// Add keyboard shortcut to toggle interface
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        if (legalInterface) {
            legalInterface.toggle();
        }
    }
});
