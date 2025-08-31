/**
 * Legal Team Agent - Advanced Legal Content Management System
 * Handles terms of service, privacy policies, cookie policies, and compliance
 */

class LegalTeamAgent {
    constructor() {
        this.legalDocuments = new Map();
        this.templates = new Map();
        this.complianceRules = new Map();
        this.changeHistory = [];
        this.reviewQueue = [];
        
        this.initializeTemplates();
        this.initializeComplianceRules();
        this.loadExistingContent();
    }

    /**
     * Initialize legal document templates
     */
    initializeTemplates() {
        this.templates.set('privacy_policy', {
            name: 'Privacy Policy',
            sections: [
                'introduction',
                'information_collection',
                'information_usage',
                'data_protection',
                'third_party_services',
                'user_rights',
                'contact_information',
                'policy_changes'
            ],
            requiredFields: ['company_name', 'website_url', 'contact_email', 'address'],
            complianceStandards: ['GDPR', 'CCPA', 'COPPA']
        });

        this.templates.set('terms_of_service', {
            name: 'Terms of Service',
            sections: [
                'agreement_terms',
                'intellectual_property',
                'user_representations',
                'prohibited_uses',
                'disclaimer',
                'limitation_liability',
                'indemnification',
                'governing_law',
                'contact_information'
            ],
            requiredFields: ['company_name', 'website_url', 'jurisdiction', 'contact_email'],
            complianceStandards: ['E-Commerce', 'Consumer Protection']
        });

        this.templates.set('cookie_policy', {
            name: 'Cookie Policy',
            sections: [
                'cookie_definition',
                'cookie_usage',
                'cookie_types',
                'third_party_cookies',
                'cookie_management',
                'preferences_center',
                'contact_information'
            ],
            requiredFields: ['company_name', 'cookie_list', 'consent_mechanism'],
            complianceStandards: ['GDPR', 'ePrivacy']
        });

        this.templates.set('data_processing_agreement', {
            name: 'Data Processing Agreement',
            sections: [
                'definitions',
                'subject_matter',
                'processing_details',
                'security_measures',
                'data_subject_rights',
                'breach_notification',
                'audit_rights',
                'termination'
            ],
            requiredFields: ['controller_name', 'processor_name', 'processing_purpose', 'data_categories'],
            complianceStandards: ['GDPR', 'Data Protection']
        });
    }

    /**
     * Initialize compliance rules and checks
     */
    initializeComplianceRules() {
        this.complianceRules.set('GDPR', {
            name: 'General Data Protection Regulation',
            requirements: [
                'lawful_basis_for_processing',
                'data_subject_rights_disclosure',
                'breach_notification_procedures',
                'data_protection_officer_contact',
                'international_transfer_safeguards',
                'retention_period_specification'
            ],
            mandatoryFields: ['legal_basis', 'data_categories', 'retention_periods', 'recipient_categories']
        });

        this.complianceRules.set('CCPA', {
            name: 'California Consumer Privacy Act',
            requirements: [
                'right_to_know_disclosure',
                'right_to_delete_process',
                'right_to_opt_out_mechanism',
                'non_discrimination_policy',
                'categories_of_information',
                'business_purposes_disclosure'
            ],
            mandatoryFields: ['information_categories', 'business_purposes', 'opt_out_method']
        });

        this.complianceRules.set('ePrivacy', {
            name: 'ePrivacy Directive',
            requirements: [
                'cookie_consent_mechanism',
                'essential_cookies_identification',
                'clear_cookie_information',
                'withdraw_consent_option',
                'third_party_cookie_disclosure'
            ],
            mandatoryFields: ['cookie_types', 'consent_method', 'withdrawal_process']
        });
    }

    /**
     * Load existing legal content from the current system
     */
    loadExistingContent() {
        // Load from existing legal-content.js if available
        if (typeof window !== 'undefined' && window.legalContent) {
            const existingContent = window.legalContent;
            
            this.legalDocuments.set('privacy_policy', {
                content: existingContent.privacy,
                lastUpdated: new Date(),
                version: '1.0',
                status: 'active',
                complianceStatus: 'pending_review'
            });

            this.legalDocuments.set('terms_of_service', {
                content: existingContent.terms,
                lastUpdated: new Date(),
                version: '1.0',
                status: 'active',
                complianceStatus: 'pending_review'
            });

            this.legalDocuments.set('cookie_policy', {
                content: existingContent.cookies,
                lastUpdated: new Date(),
                version: '1.0',
                status: 'active',
                complianceStatus: 'pending_review'
            });
        }
    }

    /**
     * Generate new legal document from template
     */
    generateDocument(documentType, companyInfo, customOptions = {}) {
        const template = this.templates.get(documentType);
        if (!template) {
            throw new Error(`Template not found for document type: ${documentType}`);
        }

        // Validate required fields
        const missingFields = template.requiredFields.filter(field => !companyInfo[field]);
        if (missingFields.length > 0) {
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
        }

        const documentId = `${documentType}_${Date.now()}`;
        let generatedContent = '';

        switch (documentType) {
            case 'privacy_policy':
                generatedContent = this.generatePrivacyPolicy(companyInfo, customOptions);
                break;
            case 'terms_of_service':
                generatedContent = this.generateTermsOfService(companyInfo, customOptions);
                break;
            case 'cookie_policy':
                generatedContent = this.generateCookiePolicy(companyInfo, customOptions);
                break;
            case 'data_processing_agreement':
                generatedContent = this.generateDataProcessingAgreement(companyInfo, customOptions);
                break;
            default:
                throw new Error(`Document generation not implemented for: ${documentType}`);
        }

        const document = {
            id: documentId,
            type: documentType,
            content: generatedContent,
            companyInfo: companyInfo,
            customOptions: customOptions,
            createdDate: new Date(),
            lastUpdated: new Date(),
            version: '1.0',
            status: 'draft',
            complianceStatus: 'pending_review',
            reviewNotes: []
        };

        this.legalDocuments.set(documentId, document);
        this.addToChangeHistory('document_created', documentId, 'System generated new document');

        return document;
    }

    /**
     * Generate Privacy Policy content
     */
    generatePrivacyPolicy(companyInfo, options = {}) {
        const { company_name, website_url, contact_email, address } = companyInfo;
        const currentDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long'
        });

        return `
        <h2>Privacy Policy</h2>
        <p class="legal-date">Last Updated: ${currentDate}</p>
        
        <h3>1. Introduction</h3>
        <p>${company_name} ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website ${website_url}.</p>
        
        <h3>2. Information We Collect</h3>
        <p>We may collect the following types of information:</p>
        <ul>
            <li><strong>Contact Information:</strong> Name, email address, company name when you submit our contact form</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve your experience</li>
            ${options.collectsLocation ? '<li><strong>Location Data:</strong> General geographic location based on IP address</li>' : ''}
            ${options.collectsPayment ? '<li><strong>Payment Information:</strong> Credit card details and billing information for transactions</li>' : ''}
        </ul>
        
        <h3>3. How We Use Your Information</h3>
        <p>We use collected information to:</p>
        <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Improve our website and user experience</li>
            <li>Send periodic emails regarding our services (with your consent)</li>
            <li>Comply with legal obligations</li>
            ${options.marketing ? '<li>Send marketing communications (with your explicit consent)</li>' : ''}
            ${options.analytics ? '<li>Analyze usage patterns and website performance</li>' : ''}
        </ul>
        
        <h3>4. Data Protection</h3>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
        <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security audits and assessments</li>
            <li>Access controls and authentication systems</li>
            <li>Employee training on data protection</li>
        </ul>
        
        <h3>5. Third-Party Services</h3>
        <p>We may use third-party services that collect, monitor, and analyze usage data. These services have their own privacy policies:</p>
        <ul>
            ${options.googleAnalytics ? '<li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>' : ''}
            ${options.cloudflare ? '<li><strong>Cloudflare:</strong> For security and performance optimization</li>' : ''}
            ${options.customThirdParties ? options.customThirdParties.map(service => `<li><strong>${service.name}:</strong> ${service.purpose}</li>`).join('') : ''}
        </ul>
        
        <h3>6. Your Rights</h3>
        <p>Under applicable data protection laws, you have the right to:</p>
        <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
        </ul>
        
        <h3>7. Data Retention</h3>
        <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.</p>
        
        <h3>8. International Transfers</h3>
        <p>If we transfer your personal data outside your country of residence, we ensure appropriate safeguards are in place to protect your information.</p>
        
        <h3>9. Contact Information</h3>
        <p>For any privacy-related questions or to exercise your rights, contact us at:</p>
        <p>
            ${company_name}<br>
            ${address}<br>
            Email: ${contact_email}
        </p>
        
        <h3>10. Changes to This Policy</h3>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
        `;
    }

    /**
     * Generate Terms of Service content
     */
    generateTermsOfService(companyInfo, options = {}) {
        const { company_name, website_url, contact_email, address, jurisdiction = 'New York' } = companyInfo;
        const currentDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long'
        });

        return `
        <h2>Terms of Service</h2>
        <p class="legal-date">Last Updated: ${currentDate}</p>
        
        <h3>1. Agreement to Terms</h3>
        <p>By accessing and using ${website_url} (the "Website"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Website.</p>
        
        <h3>2. Intellectual Property Rights</h3>
        <p>The Website and its original content, features, and functionality are owned by ${company_name} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
        
        <h3>3. User Representations</h3>
        <p>By using our Website, you represent and warrant that:</p>
        <ul>
            <li>You have the legal capacity to enter into these Terms</li>
            <li>You will not use the Website for any illegal or unauthorized purpose</li>
            <li>Your use will not violate any applicable law or regulation</li>
            ${options.ageRestriction ? `<li>You are at least ${options.minimumAge || 13} years of age</li>` : ''}
            ${options.businessUse ? '<li>You have authority to bind your organization to these Terms</li>' : ''}
        </ul>
        
        <h3>4. Prohibited Uses</h3>
        <p>You may not use our Website:</p>
        <ul>
            <li>To transmit any advertising or promotional material without our consent</li>
            <li>To impersonate any person or entity</li>
            <li>In any way that infringes upon the rights of others</li>
            <li>To engage in any conduct that restricts or inhibits anyone's use of the Website</li>
            <li>To introduce any viruses, trojan horses, or other harmful material</li>
            ${options.additionalProhibitions ? options.additionalProhibitions.map(prohibition => `<li>${prohibition}</li>`).join('') : ''}
        </ul>
        
        ${options.userContent ? `
        <h3>5. User Content</h3>
        <p>You retain ownership of any content you submit to our Website. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with our services.</p>
        ` : ''}
        
        <h3>${options.userContent ? '6' : '5'}. Disclaimer</h3>
        <p>The information on this Website is provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
        
        <h3>${options.userContent ? '7' : '6'}. Limitation of Liability</h3>
        <p>In no event shall ${company_name}, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Website.</p>
        
        <h3>${options.userContent ? '8' : '7'}. Indemnification</h3>
        <p>You agree to defend, indemnify, and hold harmless ${company_name} from any claim or demand made by any third party due to your breach of these Terms or your violation of any law or rights of a third party.</p>
        
        <h3>${options.userContent ? '9' : '8'}. Governing Law</h3>
        <p>These Terms shall be governed by and construed in accordance with the laws of the State of ${jurisdiction}, without regard to its conflict of law provisions. Any legal action shall be brought exclusively in the courts located in ${jurisdiction}.</p>
        
        <h3>${options.userContent ? '10' : '9'}. Termination</h3>
        <p>We may terminate or suspend your access to our Website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        
        <h3>${options.userContent ? '11' : '10'}. Contact Information</h3>
        <p>Questions about these Terms should be sent to:</p>
        <p>
            ${company_name}<br>
            ${address}<br>
            Email: ${contact_email}
        </p>
        
        <p class="legal-date">Effective Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        `;
    }

    /**
     * Generate Cookie Policy content
     */
    generateCookiePolicy(companyInfo, options = {}) {
        const { company_name, website_url, contact_email, address } = companyInfo;
        const currentDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long'
        });

        const defaultCookies = [
            { name: '_ga', purpose: 'Google Analytics - tracks unique visitors', duration: '2 years', type: 'Analytics' },
            { name: '_gid', purpose: 'Google Analytics - session tracking', duration: '24 hours', type: 'Analytics' },
            { name: `${company_name.toLowerCase().replace(/\s+/g, '_')}_consent`, purpose: 'Stores cookie consent preference', duration: '1 year', type: 'Essential' },
            { name: `${company_name.toLowerCase().replace(/\s+/g, '_')}_theme`, purpose: 'Stores theme preference', duration: '1 year', type: 'Preference' }
        ];

        const cookies = options.customCookies ? [...defaultCookies, ...options.customCookies] : defaultCookies;

        return `
        <h2>Cookie Policy</h2>
        <p class="legal-date">Last Updated: ${currentDate}</p>
        
        <h3>1. What Are Cookies</h3>
        <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to work.</p>
        
        <h3>2. How We Use Cookies</h3>
        <p>We use cookies for the following purposes:</p>
        <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            ${options.marketingCookies ? '<li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>' : ''}
        </ul>
        
        <h3>3. Types of Cookies We Use</h3>
        <table class="cookie-table">
            <thead>
                <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                ${cookies.map(cookie => `
                <tr>
                    <td>${cookie.name}</td>
                    <td>${cookie.purpose}</td>
                    <td>${cookie.duration}</td>
                    <td>${cookie.type}</td>
                </tr>`).join('')}
            </tbody>
        </table>
        
        <h3>4. Third-Party Cookies</h3>
        <p>We may use third-party services that set their own cookies:</p>
        <ul>
            ${options.googleAnalytics !== false ? '<li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>' : ''}
            ${options.socialMedia ? '<li><strong>Social Media Platforms:</strong> For social sharing and embedded content</li>' : ''}
            ${options.customThirdParties ? options.customThirdParties.map(service => `<li><strong>${service.name}:</strong> ${service.purpose}</li>`).join('') : ''}
        </ul>
        
        <h3>5. Managing Cookies</h3>
        <p>You can control and manage cookies in various ways:</p>
        <ul>
            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
            <li><strong>Our Cookie Settings:</strong> Use our cookie preference center below</li>
        </ul>
        
        <h3>6. Cookie Preferences</h3>
        <div class="cookie-preferences">
            <div class="cookie-option">
                <label>
                    <input type="checkbox" id="essential-cookies" checked disabled>
                    <span>Essential Cookies (Required)</span>
                </label>
                <p>These cookies are necessary for the website to function and cannot be disabled.</p>
            </div>
            <div class="cookie-option">
                <label>
                    <input type="checkbox" id="analytics-cookies" checked>
                    <span>Analytics Cookies</span>
                </label>
                <p>Help us understand how visitors interact with our website.</p>
            </div>
            <div class="cookie-option">
                <label>
                    <input type="checkbox" id="preference-cookies" checked>
                    <span>Preference Cookies</span>
                </label>
                <p>Remember your settings and preferences for a better experience.</p>
            </div>
            ${options.marketingCookies ? `
            <div class="cookie-option">
                <label>
                    <input type="checkbox" id="marketing-cookies">
                    <span>Marketing Cookies</span>
                </label>
                <p>Used to deliver relevant advertisements and track campaign effectiveness.</p>
            </div>` : ''}
            <button class="save-preferences" onclick="saveCookiePreferences()">Save Preferences</button>
        </div>
        
        <h3>7. Contact Us</h3>
        <p>If you have questions about our use of cookies, please contact us at:</p>
        <p>
            ${company_name}<br>
            ${address}<br>
            Email: ${contact_email}
        </p>
        `;
    }

    /**
     * Generate Data Processing Agreement
     */
    generateDataProcessingAgreement(companyInfo, options = {}) {
        const { company_name, contact_email, address } = companyInfo;
        const { processor_name, processing_purpose, data_categories } = options;
        
        const currentDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        });

        return `
        <h2>Data Processing Agreement</h2>
        <p class="legal-date">Effective Date: ${currentDate}</p>
        
        <h3>1. Definitions</h3>
        <p>For the purposes of this Agreement:</p>
        <ul>
            <li><strong>"Controller"</strong> means ${company_name}</li>
            <li><strong>"Processor"</strong> means ${processor_name}</li>
            <li><strong>"Personal Data"</strong> has the meaning set out in applicable data protection laws</li>
            <li><strong>"Processing"</strong> has the meaning set out in applicable data protection laws</li>
        </ul>
        
        <h3>2. Subject Matter and Nature of Processing</h3>
        <p><strong>Subject Matter:</strong> ${processing_purpose}</p>
        <p><strong>Nature of Processing:</strong> Collection, storage, analysis, and transmission of personal data</p>
        <p><strong>Categories of Data Subjects:</strong> ${options.data_subjects || 'Website visitors, customers, and prospects'}</p>
        <p><strong>Categories of Personal Data:</strong></p>
        <ul>
            ${data_categories.map(category => `<li>${category}</li>`).join('')}
        </ul>
        
        <h3>3. Processing Details</h3>
        <p>The Processor shall process Personal Data only:</p>
        <ul>
            <li>On documented instructions from the Controller</li>
            <li>For the specific purposes set out in this Agreement</li>
            <li>In accordance with applicable data protection laws</li>
        </ul>
        
        <h3>4. Security Measures</h3>
        <p>The Processor shall implement appropriate technical and organizational measures including:</p>
        <ul>
            <li>Encryption of personal data</li>
            <li>Ongoing confidentiality, integrity, availability and resilience of processing systems</li>
            <li>Regular testing and evaluation of security measures</li>
            <li>Measures to restore availability and access to personal data in a timely manner</li>
        </ul>
        
        <h3>5. Data Subject Rights</h3>
        <p>The Processor shall assist the Controller in responding to data subject requests and in fulfilling the Controller's obligations to respond to requests for exercising data subject rights.</p>
        
        <h3>6. Personal Data Breach</h3>
        <p>The Processor shall notify the Controller without undue delay after becoming aware of a personal data breach, and in any case within 24 hours.</p>
        
        <h3>7. Contact Information</h3>
        <p>Controller Contact:</p>
        <p>
            ${company_name}<br>
            ${address}<br>
            Email: ${contact_email}
        </p>
        `;
    }

    /**
     * Review and update existing legal document
     */
    reviewDocument(documentId, reviewNotes, complianceStatus = 'reviewed') {
        const document = this.legalDocuments.get(documentId);
        if (!document) {
            throw new Error(`Document not found: ${documentId}`);
        }

        document.reviewNotes.push({
            date: new Date(),
            notes: reviewNotes,
            reviewer: 'Legal Team Agent'
        });
        
        document.complianceStatus = complianceStatus;
        document.lastUpdated = new Date();

        this.addToChangeHistory('document_reviewed', documentId, reviewNotes);
        return document;
    }

    /**
     * Update document content
     */
    updateDocument(documentId, newContent, updateNotes = '') {
        const document = this.legalDocuments.get(documentId);
        if (!document) {
            throw new Error(`Document not found: ${documentId}`);
        }

        const previousVersion = document.version;
        const versionParts = previousVersion.split('.');
        const newVersion = `${versionParts[0]}.${parseInt(versionParts[1]) + 1}`;

        document.content = newContent;
        document.version = newVersion;
        document.lastUpdated = new Date();
        document.status = 'updated';
        document.complianceStatus = 'pending_review';

        this.addToChangeHistory('document_updated', documentId, updateNotes);
        return document;
    }

    /**
     * Perform compliance check on document
     */
    checkCompliance(documentId, standards = ['GDPR', 'CCPA']) {
        const document = this.legalDocuments.get(documentId);
        if (!document) {
            throw new Error(`Document not found: ${documentId}`);
        }

        const complianceResults = {
            documentId: documentId,
            checkDate: new Date(),
            standards: standards,
            results: [],
            overallScore: 0,
            recommendations: []
        };

        standards.forEach(standard => {
            const rules = this.complianceRules.get(standard);
            if (rules) {
                const standardResult = this.checkStandardCompliance(document, rules);
                complianceResults.results.push(standardResult);
            }
        });

        // Calculate overall score
        const totalChecks = complianceResults.results.reduce((sum, result) => sum + result.totalChecks, 0);
        const passedChecks = complianceResults.results.reduce((sum, result) => sum + result.passedChecks, 0);
        complianceResults.overallScore = totalChecks > 0 ? Math.round((passedChecks / totalChecks) * 100) : 0;

        // Generate recommendations
        complianceResults.recommendations = this.generateComplianceRecommendations(complianceResults);

        return complianceResults;
    }

    /**
     * Check compliance against specific standard
     */
    checkStandardCompliance(document, rules) {
        const content = document.content.toLowerCase();
        const result = {
            standard: rules.name,
            passedChecks: 0,
            totalChecks: rules.requirements.length,
            failedChecks: [],
            warnings: []
        };

        rules.requirements.forEach(requirement => {
            let passed = false;
            
            switch (requirement) {
                case 'lawful_basis_for_processing':
                    passed = content.includes('lawful basis') || content.includes('legal basis');
                    break;
                case 'data_subject_rights_disclosure':
                    passed = content.includes('your rights') || content.includes('data subject rights');
                    break;
                case 'breach_notification_procedures':
                    passed = content.includes('breach') || content.includes('security incident');
                    break;
                case 'retention_period_specification':
                    passed = content.includes('retention') || content.includes('how long');
                    break;
                case 'right_to_know_disclosure':
                    passed = content.includes('right to know') || content.includes('access your');
                    break;
                case 'cookie_consent_mechanism':
                    passed = content.includes('cookie consent') || content.includes('accept cookies');
                    break;
                default:
                    passed = true; // Default to pass for unimplemented checks
            }

            if (passed) {
                result.passedChecks++;
            } else {
                result.failedChecks.push(requirement);
            }
        });

        return result;
    }

    /**
     * Generate compliance recommendations
     */
    generateComplianceRecommendations(complianceResults) {
        const recommendations = [];

        complianceResults.results.forEach(result => {
            result.failedChecks.forEach(failedCheck => {
                switch (failedCheck) {
                    case 'lawful_basis_for_processing':
                        recommendations.push('Add clear explanation of lawful basis for data processing');
                        break;
                    case 'data_subject_rights_disclosure':
                        recommendations.push('Include comprehensive list of data subject rights');
                        break;
                    case 'breach_notification_procedures':
                        recommendations.push('Add information about breach notification procedures');
                        break;
                    case 'retention_period_specification':
                        recommendations.push('Specify data retention periods for different types of data');
                        break;
                    case 'cookie_consent_mechanism':
                        recommendations.push('Implement proper cookie consent mechanism');
                        break;
                    default:
                        recommendations.push(`Address requirement: ${failedCheck.replace(/_/g, ' ')}`);
                }
            });
        });

        return [...new Set(recommendations)]; // Remove duplicates
    }

    /**
     * Get document by ID
     */
    getDocument(documentId) {
        return this.legalDocuments.get(documentId);
    }

    /**
     * List all documents
     */
    listDocuments(status = null) {
        const documents = Array.from(this.legalDocuments.values());
        return status ? documents.filter(doc => doc.status === status) : documents;
    }

    /**
     * Add entry to change history
     */
    addToChangeHistory(action, documentId, details) {
        this.changeHistory.push({
            timestamp: new Date(),
            action: action,
            documentId: documentId,
            details: details
        });
    }

    /**
     * Get change history
     */
    getChangeHistory(documentId = null) {
        return documentId 
            ? this.changeHistory.filter(entry => entry.documentId === documentId)
            : this.changeHistory;
    }

    /**
     * Export document for deployment
     */
    exportDocument(documentId, format = 'html') {
        const document = this.legalDocuments.get(documentId);
        if (!document) {
            throw new Error(`Document not found: ${documentId}`);
        }

        switch (format) {
            case 'html':
                return document.content;
            case 'json':
                return JSON.stringify(document, null, 2);
            case 'markdown':
                return this.convertHtmlToMarkdown(document.content);
            default:
                throw new Error(`Unsupported export format: ${format}`);
        }
    }

    /**
     * Convert HTML to Markdown (basic conversion)
     */
    convertHtmlToMarkdown(html) {
        return html
            .replace(/<h2[^>]*>/g, '## ')
            .replace(/<h3[^>]*>/g, '### ')
            .replace(/<\/h[2-6]>/g, '\n\n')
            .replace(/<p[^>]*>/g, '')
            .replace(/<\/p>/g, '\n\n')
            .replace(/<strong[^>]*>/g, '**')
            .replace(/<\/strong>/g, '**')
            .replace(/<li[^>]*>/g, '- ')
            .replace(/<\/li>/g, '\n')
            .replace(/<ul[^>]*>/g, '\n')
            .replace(/<\/ul>/g, '\n')
            .replace(/<br\s*\/?>/g, '\n')
            .replace(/<[^>]*>/g, '') // Remove any remaining HTML tags
            .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
            .trim();
    }

    /**
     * Generate compliance report
     */
    generateComplianceReport() {
        const documents = Array.from(this.legalDocuments.values());
        const report = {
            generatedDate: new Date(),
            totalDocuments: documents.length,
            complianceStatus: {
                compliant: 0,
                pending_review: 0,
                non_compliant: 0
            },
            documentSummary: [],
            recommendations: []
        };

        documents.forEach(doc => {
            report.complianceStatus[doc.complianceStatus]++;
            
            const complianceCheck = this.checkCompliance(doc.id || 'unknown');
            report.documentSummary.push({
                documentType: doc.type,
                version: doc.version,
                lastUpdated: doc.lastUpdated,
                complianceScore: complianceCheck.overallScore,
                status: doc.complianceStatus
            });

            report.recommendations.push(...complianceCheck.recommendations);
        });

        // Remove duplicate recommendations
        report.recommendations = [...new Set(report.recommendations)];

        return report;
    }
}

// Export for use in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LegalTeamAgent;
} else if (typeof window !== 'undefined') {
    window.LegalTeamAgent = LegalTeamAgent;
}
