/**
 * Narratum.io - v3 Enhanced Interactive JavaScript - Final Fixed Version
 * Features: Fixed navigation, gentle moving stars, meditative sound, custom dropdown, gold line fix
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check if mobile device
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isTouch = 'ontouchstart' in window;
    
    initializeLoader();
    
    // Reduce animations on mobile for better performance
    if (!isMobile) {
        initializeStarField();
    }
    
    initializeApp();
});

function initializeApp() {
    setTimeout(() => {
        initializeNavigation();
        initializeObservers();
        initializeParallax();
        initializeSymbolInteractions();
        initializeFormHandling();
        initializeAudioToggle();
        initializeColorMoodSwitcher();
        initializeInteractiveBackground();
        initializeLoyaltyJourney();
        initializeConstellationBackground();
        initializeTextHighlighting();
        initializeAnchorMenu();
        initializeMouseGlow();
        initializeDropdown();
        initializeSubtleHighlighting();
        initializeGoldLine();
    }, 1000);
}

// Loading Screen
function initializeLoader() {
    const loader = document.querySelector('.loading-screen');
    
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1500);
    }
}

// Gentle Moving Star Field
function initializeStarField() {
    const starContainer = document.createElement('div');
    starContainer.className = 'gentle-stars';
    starContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(starContainer);
    
    // Create gentle moving stars
    const createStar = () => {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1; // 1-3px
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 20 + 30; // 30-50s
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
            border-radius: 50%;
            left: ${startX}px;
            top: ${window.innerHeight + 10}px;
            box-shadow: 0 0 ${size}px rgba(255, 255, 255, 0.5);
        `;
        
        starContainer.appendChild(star);
        
        // Animate upward with slight horizontal drift
        let progress = 0;
        const horizontalDrift = (Math.random() - 0.5) * 100;
        
        const animateStar = () => {
            progress += 1 / (duration * 60); // 60fps
            
            if (progress >= 1) {
                star.remove();
                return;
            }
            
            const y = window.innerHeight * (1 - progress) - 10;
            const x = startX + Math.sin(progress * Math.PI * 2) * horizontalDrift;
            
            star.style.transform = `translate(${x - startX}px, ${y - window.innerHeight}px)`;
            star.style.opacity = Math.sin(progress * Math.PI) * 0.8;
            
            requestAnimationFrame(animateStar);
        };
        
        animateStar();
    };
    
    // Create initial stars
    for (let i = 0; i < 20; i++) {
        setTimeout(createStar, i * 200);
    }
    
    // Continue creating stars
    setInterval(createStar, 2000);
}

// Gold Line - Fixed to not show in hero
function initializeGoldLine() {
    const goldLine = document.querySelector('.gold-line');
    const heroHeight = window.innerHeight;
    
    if (!goldLine) return;
    
    // Initially hide gold line
    goldLine.classList.remove('visible');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight - 100) {
            goldLine.classList.add('visible');
        } else {
            goldLine.classList.remove('visible');
        }
    });
}

// Mouse Glow Effect
function initializeMouseGlow() {
    const mouseGlow = document.querySelector('.mouse-glow');
    if (!mouseGlow) return;
    
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show glow on interactive elements
        const interactive = e.target.closest('.partnership-category, .capability-block, .journey-node, .symbol-item');
        if (interactive) {
            mouseGlow.classList.add('active');
        } else {
            mouseGlow.classList.remove('active');
        }
    });

    // Direct positioning for immediate response
    function animateGlow() {
        mouseGlow.style.left = mouseX + 'px';
        mouseGlow.style.top = mouseY + 'px';
        mouseGlow.style.transform = 'translate(-50%, -50%)';
        
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

// Custom Dropdown
function initializeDropdown() {
    const dropdown = document.getElementById('sectorDropdown');
    if (!dropdown) return;
    
    const select = dropdown.querySelector('.dropdown-select');
    const options = dropdown.querySelectorAll('.dropdown-option');
    
    // Toggle dropdown
    select.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
    
    // Select option
    options.forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const text = this.textContent;
            
            // Update select
            select.innerHTML = text;
            select.value = value;
            
            // Update visual state
            options.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            // Close dropdown
            dropdown.classList.remove('active');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
}

// Subtle word highlighting
function initializeSubtleHighlighting() {
    const highlightWords = document.querySelectorAll('.highlight-word');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = Array.from(highlightWords).indexOf(entry.target) * 200;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);
            }
        });
    }, {
        threshold: 0.8,
        rootMargin: '0px'
    });

    highlightWords.forEach(word => {
        observer.observe(word);
    });
}

// Fixed Navigation Dots
function initializeNavigation() {
    const sections = document.querySelectorAll('.section');
    const navDots = document.querySelectorAll('.nav-dot');
    
    // Enhanced click event for navigation dots
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const targetSection = dot.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            
            if (section) {
                const offset = 0;
                const targetPosition = section.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                navDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            }
        });
    });
    
    // Update active dot on scroll
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('data-section');
            }
        });
        
        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === currentSection) {
                dot.classList.add('active');
            }
        });
    });
}

// Fixed Anchor Menu
function initializeAnchorMenu() {
    const anchorMenu = document.querySelector('.anchor-menu');
    const sections = document.querySelectorAll('.section');
    
    if (!anchorMenu) return;
    
    // Show/hide anchor menu based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 2) {
            anchorMenu.classList.add('visible');
        } else {
            anchorMenu.classList.remove('visible');
        }
        
        // Update active anchor
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('data-section');
            }
        });
        
        const anchors = anchorMenu.querySelectorAll('.anchor-link');
        anchors.forEach(anchor => {
            anchor.classList.remove('active');
            if (anchor.getAttribute('data-section') === currentSection) {
                anchor.classList.add('active');
            }
        });
    });
    
    // Fix anchor links to work properly
    const anchors = anchorMenu.querySelectorAll('.anchor-link');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = anchor.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            
            if (section) {
                const offset = 0;
                const targetPosition = section.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state immediately
                anchors.forEach(a => a.classList.remove('active'));
                anchor.classList.add('active');
            }
        });
    });
}

// Intersection Observer for Animations
function initializeObservers() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    // Observer for capability blocks
    const capabilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-visible', 'true');
                const index = entry.target.getAttribute('data-index');
                entry.target.style.transitionDelay = `${(index - 1) * 0.2}s`;
            }
        });
    }, observerOptions);
    
    const capabilityBlocks = document.querySelectorAll('.capability-block');
    capabilityBlocks.forEach(block => {
        capabilityObserver.observe(block);
    });
    
    // Observer for journey nodes
    const journeyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-visible', 'true');
                const index = entry.target.getAttribute('data-node');
                entry.target.style.transitionDelay = `${(index - 1) * 0.3}s`;
            }
        });
    }, observerOptions);
    
    const journeyNodes = document.querySelectorAll('.journey-node');
    journeyNodes.forEach(node => {
        journeyObserver.observe(node);
    });
    
    // Observer for fade-in elements
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-visible', 'true');
            }
        });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

// Parallax Effect
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Parallax for hero section
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroArc = heroSection.querySelector('.section-arc');
            if (heroArc) {
                heroArc.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
        }
        
        // Parallax for other section arcs
        const sectionArcs = document.querySelectorAll('.section-arc:not(.hero .section-arc)');
        sectionArcs.forEach(arc => {
            const section = arc.closest('.section');
            const sectionTop = section.offsetTop;
            const distanceFromTop = scrollY - sectionTop;
            
            if (arc.classList.contains('top')) {
                arc.style.transform = `translateY(${distanceFromTop * 0.2}px)`;
            } else if (arc.classList.contains('bottom')) {
                arc.style.transform = `translateY(${distanceFromTop * 0.1}px)`;
            }
        });
    });
}

// Symbol Interactions
function initializeSymbolInteractions() {
    const symbols = document.querySelectorAll('.symbol-item');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    symbols.forEach(symbol => {
        // Use appropriate event for device type
        const eventType = isMobile ? 'touchstart' : 'click';
        
        symbol.addEventListener(eventType, function(e) {
            if (isMobile) {
                e.preventDefault(); // Prevent double-tap zoom
            }
            
            const wasActive = this.classList.contains('active');
            
            symbols.forEach(s => s.classList.remove('active'));
            
            if (!wasActive) {
                this.classList.add('active');
                
                // Only create particles on desktop
                if (!isMobile) {
                    createMagicalParticles(this);
                }
                
                // Scroll symbol into view on mobile
                if (isMobile) {
                    setTimeout(() => {
                        this.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                    }, 100);
                }
            }
        });
    });
    
    // Close on outside tap/click
    document.addEventListener(isMobile ? 'touchstart' : 'click', (e) => {
        if (!e.target.closest('.symbol-item')) {
            symbols.forEach(s => s.classList.remove('active'));
        }
    });
}

// Create magical particles for symbol interaction
function createMagicalParticles(symbolElement) {
    const rect = symbolElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.classList.add('magical-particle');
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 50;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = Math.random() > 0.5 ? 'var(--accent-gold)' : 'var(--accent-cyan)';
        particle.style.width = `${2 + Math.random() * 4}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = 0.1 + Math.random() * 0.4;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`;
            particle.style.opacity = '0';
            
            setTimeout(() => {
                document.body.removeChild(particle);
            }, 1000);
        }, 10);
    }
}

// Form Handling with Enhanced Security
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Set form submission timestamp for bot detection
        const timestampField = document.getElementById('formSubmittedAt');
        if (timestampField) {
            timestampField.value = Date.now();
        }
        
        // Character counter for message field
        const messageField = document.getElementById('message');
        const charCount = document.getElementById('charCount');
        
        if (messageField && charCount) {
            messageField.addEventListener('input', () => {
                const length = messageField.value.length;
                charCount.textContent = `${length} / 1000`;
                
                // Visual feedback
                if (length > 900) {
                    charCount.classList.add('error');
                    charCount.classList.remove('warning');
                } else if (length > 800) {
                    charCount.classList.add('warning');
                    charCount.classList.remove('error');
                } else {
                    charCount.classList.remove('warning', 'error');
                }
            });
        }
        
        // Input sanitization function
        function sanitizeInput(input) {
            const div = document.createElement('div');
            div.textContent = input;
            return div.innerHTML;
        }
        
        // Form validation and submission
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('.submit-button');
            const buttonText = submitButton.querySelector('.button-text');
            const buttonLoading = submitButton.querySelector('.button-loading');
            
            // Time-based validation (prevent instant submissions - likely bots)
            const submissionTime = Date.now() - parseInt(timestampField.value);
            if (submissionTime < 3000) { // Less than 3 seconds
                showFormError('Please take a moment to complete the form properly.');
                return;
            }
            
            // Validate all inputs
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const organization = formData.get('organization');
            const sector = formData.get('sector');
            const message = formData.get('message');
            
            // Additional validation
            if (!name || name.length < 2 || name.length > 50) {
                showFormError('Please enter a valid name (2-50 characters).');
                return;
            }
            
            if (!email || !isValidEmail(email)) {
                showFormError('Please enter a valid email address.');
                return;
            }
            
            if (organization && (organization.length < 2 || organization.length > 100)) {
                showFormError('Organization name must be 2-100 characters.');
                return;
            }
            
            if (!sector) {
                showFormError('Please select your sector.');
                return;
            }
            
            if (!message || message.length < 10 || message.length > 1000) {
                showFormError('Message must be 10-1000 characters.');
                return;
            }
            
            // Check for spam patterns
            if (containsSpamPatterns(message)) {
                showFormError('Your message was flagged as potential spam. Please revise and try again.');
                return;
            }
            
            // Show loading state
            submitButton.disabled = true;
            buttonText.style.opacity = '0';
            buttonLoading.style.display = 'block';
            
            try {
                // Submit form using Formspree
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success animation
                    contactForm.innerHTML = `
                        <div class="form-success">
                            <div class="success-animation">
                                <svg viewBox="0 0 52 52" class="success-checkmark">
                                    <circle cx="26" cy="26" r="25" fill="none" class="success-circle"/>
                                    <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" class="success-check"/>
                                </svg>
                            </div>
                            <h3>Message Sent Successfully</h3>
                            <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                        </div>
                    `;
                    
                    // Track conversion if analytics is set up
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submission', {
                            'event_category': 'Contact',
                            'event_label': sector
                        });
                    }
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error handling
                submitButton.disabled = false;
                buttonText.style.opacity = '1';
                buttonLoading.style.display = 'none';
                
                showFormError('There was an error submitting your form. Please try again or email us directly.');
                console.error('Form submission error:', error);
            }
        });
        
        // Email validation
        function isValidEmail(email) {
            const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            return emailRegex.test(email);
        }
        
        // Spam pattern detection
        function containsSpamPatterns(text) {
            const spamPatterns = [
                /\b(viagra|cialis|pharma|casino|poker|lottery)\b/i,
                /\b(click here|buy now|limited time|act now)\b/i,
                /\b(make money|work from home|mlm|forex)\b/i,
                /(http|https|www\.|\.com|\.net|\.org){3,}/i,
                /[A-Z]{10,}/,
                /(.)\1{10,}/
            ];
            
            return spamPatterns.some(pattern => pattern.test(text));
        }
        
        // Show form error
        function showFormError(message) {
            const existingError = contactForm.querySelector('.form-error');
            if (existingError) {
                existingError.remove();
            }
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            errorDiv.textContent = message;
            contactForm.insertBefore(errorDiv, contactForm.firstChild);
            
            // Remove error after 5 seconds
            setTimeout(() => {
                errorDiv.remove();
            }, 5000);
        }
        
        // Prevent copy-paste of entire form (anti-spam)
        contactForm.addEventListener('paste', (e) => {
            const clipboardData = e.clipboardData || window.clipboardData;
            const pastedData = clipboardData.getData('text');
            
            if (pastedData.length > 200) {
                e.preventDefault();
                showFormError('Please type your message instead of pasting large blocks of text.');
            }
        });
    }
}

// Enhanced Meditative Audio Toggle
function initializeAudioToggle() {
    const audioToggle = document.querySelector('.audio-toggle');
    const soundVisualization = document.querySelector('.sound-visualization');
    let audioContext;
    let masterGain;
    let nodes = {};
    let animationFrame;
    
    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            const currentState = audioToggle.getAttribute('data-state');
            
            if (currentState === 'inactive') {
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    masterGain = audioContext.createGain();
                    masterGain.gain.value = 0;
                    masterGain.connect(audioContext.destination);
                    
                    createMeditativeSound();
                }
                
                // Fade in slowly
                masterGain.gain.cancelScheduledValues(audioContext.currentTime);
                masterGain.gain.setValueAtTime(0, audioContext.currentTime);
                masterGain.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 3);
                
                audioToggle.setAttribute('data-state', 'active');
                soundVisualization.classList.add('active');
                
                visualizeAudio();
            } else {
                if (audioContext && masterGain) {
                    masterGain.gain.cancelScheduledValues(audioContext.currentTime);
                    masterGain.gain.setValueAtTime(masterGain.gain.value, audioContext.currentTime);
                    masterGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2);
                }
                
                audioToggle.setAttribute('data-state', 'inactive');
                soundVisualization.classList.remove('active');
                
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            }
        });
    }
    
    function createMeditativeSound() {
        // HOSPITALITY HARMONIC SYSTEM - Based on sacred geometry frequencies
        // Using 432Hz tuning for deeper resonance and healing properties
        const baseFreq = 108; // 432Hz/4 - OM frequency in Hindu/Buddhist tradition
        
        // Core drone using perfect fifth intervals (3:2 ratio)
        nodes.fundamental = audioContext.createOscillator();
        nodes.fundamental.type = 'sine';
        nodes.fundamental.frequency.value = baseFreq;
        
        // Sacred interval harmonics
        nodes.perfectFifth = audioContext.createOscillator();
        nodes.perfectFifth.type = 'sine';
        nodes.perfectFifth.frequency.value = baseFreq * 1.5; // 162Hz
        
        // Octave for grounding
        nodes.octaveLow = audioContext.createOscillator();
        nodes.octaveLow.type = 'sine';
        nodes.octaveLow.frequency.value = baseFreq * 0.5; // 54Hz
        
        // Major third for warmth (5:4 ratio)
        nodes.majorThird = audioContext.createOscillator();
        nodes.majorThird.type = 'sine';
        nodes.majorThird.frequency.value = baseFreq * 1.25; // 135Hz
        
        // Gain envelope for each harmonic
        nodes.fundamentalGain = audioContext.createGain();
        nodes.fundamentalGain.gain.value = 0.3;
        
        nodes.fifthGain = audioContext.createGain();
        nodes.fifthGain.gain.value = 0.15;
        
        nodes.octaveGain = audioContext.createGain();
        nodes.octaveGain.gain.value = 0.25;
        
        nodes.thirdGain = audioContext.createGain();
        nodes.thirdGain.gain.value = 0.08;
        
        // Warm filter with resonance
        nodes.warmthFilter = audioContext.createBiquadFilter();
        nodes.warmthFilter.type = 'lowpass';
        nodes.warmthFilter.frequency.value = 600;
        nodes.warmthFilter.Q.value = 0.7;
        
        // Reverb convolver for spatial depth
        nodes.reverb = audioContext.createConvolver();
        nodes.reverbGain = audioContext.createGain();
        nodes.reverbGain.gain.value = 0.3;
        
        // Create impulse response for cathedral-like reverb
        const reverbTime = 4;
        const sampleRate = audioContext.sampleRate;
        const length = sampleRate * reverbTime;
        const impulse = audioContext.createBuffer(2, length, sampleRate);
        
        for (let channel = 0; channel < 2; channel++) {
            const channelData = impulse.getChannelData(channel);
            for (let i = 0; i < length; i++) {
                channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
            }
        }
        nodes.reverb.buffer = impulse;
        
        // Connect oscillators to gains
        nodes.fundamental.connect(nodes.fundamentalGain);
        nodes.perfectFifth.connect(nodes.fifthGain);
        nodes.octaveLow.connect(nodes.octaveGain);
        nodes.majorThird.connect(nodes.thirdGain);
        
        // Create mix bus
        nodes.dryMix = audioContext.createGain();
        nodes.dryMix.gain.value = 0.7;
        
        // Connect to filter
        nodes.fundamentalGain.connect(nodes.warmthFilter);
        nodes.fifthGain.connect(nodes.warmthFilter);
        nodes.octaveGain.connect(nodes.warmthFilter);
        nodes.thirdGain.connect(nodes.warmthFilter);
        
        // Split to dry and reverb
        nodes.warmthFilter.connect(nodes.dryMix);
        nodes.warmthFilter.connect(nodes.reverb);
        nodes.reverb.connect(nodes.reverbGain);
        
        // Final mix
        nodes.dryMix.connect(masterGain);
        nodes.reverbGain.connect(masterGain);
        
        // Start oscillators
        nodes.fundamental.start();
        nodes.perfectFifth.start();
        nodes.octaveLow.start();
        nodes.majorThird.start();
        
        // Breathing modulation (like ocean waves)
        nodes.breathLFO = audioContext.createOscillator();
        nodes.breathLFO.frequency.value = 0.08; // ~5 breaths per minute
        nodes.breathGain = audioContext.createGain();
        nodes.breathGain.gain.value = 0.015;
        
        nodes.breathLFO.connect(nodes.breathGain);
        nodes.breathGain.connect(masterGain.gain);
        nodes.breathLFO.start();
        
        // Subtle pitch drift for organic feel
        nodes.driftLFO = audioContext.createOscillator();
        nodes.driftLFO.frequency.value = 0.03;
        nodes.driftGain = audioContext.createGain();
        nodes.driftGain.gain.value = 0.5;
        
        nodes.driftLFO.connect(nodes.driftGain);
        nodes.driftGain.connect(nodes.fundamental.frequency);
        nodes.driftGain.connect(nodes.perfectFifth.frequency);
        nodes.driftLFO.start();
        
        // Filter sweep for movement
        nodes.filterLFO = audioContext.createOscillator();
        nodes.filterLFO.frequency.value = 0.05;
        nodes.filterGain = audioContext.createGain();
        nodes.filterGain.gain.value = 100;
        
        nodes.filterLFO.connect(nodes.filterGain);
        nodes.filterGain.connect(nodes.warmthFilter.frequency);
        nodes.filterLFO.start();
    }
    
    function visualizeAudio() {
        const soundBars = document.querySelectorAll('.sound-bar');
        let phase = 0;
        
        function draw() {
            phase += 0.01;
            
            soundBars.forEach((bar, i) => {
                const offset = i * 0.2;
                const height = 30 + Math.sin(phase + offset) * 20 + Math.sin(phase * 2 + offset) * 10;
                const opacity = 0.3 + Math.sin(phase + offset) * 0.2;
                
                bar.style.height = `${height}%`;
                bar.style.opacity = opacity;
            });
            
            animationFrame = requestAnimationFrame(draw);
        }
        
        draw();
    }
}

// Color Mood Switcher
function initializeColorMoodSwitcher() {
    const moodDots = document.querySelectorAll('.mood-dot');
    const root = document.documentElement;
    
    moodDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const mood = dot.getAttribute('data-mood');
            
            moodDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            switch (mood) {
                case 'default':
                    root.style.setProperty('--bg-primary', '#0a1520');
                    root.style.setProperty('--bg-secondary', '#0d1825');
                    root.style.setProperty('--accent-gold', '#fbbf24');
                    root.style.setProperty('--accent-cyan', '#7dd3fc');
                    break;
                case 'teal':
                    root.style.setProperty('--bg-primary', '#0a2025');
                    root.style.setProperty('--bg-secondary', '#0d2530');
                    root.style.setProperty('--accent-gold', '#2dd4bf');
                    root.style.setProperty('--accent-cyan', '#06b6d4');
                    break;
                case 'purple':
                    root.style.setProperty('--bg-primary', '#1a0a25');
                    root.style.setProperty('--bg-secondary', '#250d30');
                    root.style.setProperty('--accent-gold', '#a78bfa');
                    root.style.setProperty('--accent-cyan', '#8b5cf6');
                    break;
                case 'gold':
                    root.style.setProperty('--bg-primary', '#251a0a');
                    root.style.setProperty('--bg-secondary', '#302510');
                    root.style.setProperty('--accent-gold', '#f59e0b');
                    root.style.setProperty('--accent-cyan', '#fbbf24');
                    break;
                case 'nocturne':
                    // Inspired by the lily painting - deep night with coral accents
                    root.style.setProperty('--bg-primary', '#0a0812');
                    root.style.setProperty('--bg-secondary', '#140f1a');
                    root.style.setProperty('--accent-gold', '#d97757');
                    root.style.setProperty('--accent-cyan', '#f4a989');
                    break;
                case 'botanical':
                    // Inspired by the leaf painting - deep teal with golden highlights
                    root.style.setProperty('--bg-primary', '#051614');
                    root.style.setProperty('--bg-secondary', '#0a2420');
                    root.style.setProperty('--accent-gold', '#d4a574');
                    root.style.setProperty('--accent-cyan', '#0f766e');
                    break;
            }
        });
    });
}

// Interactive Background
function initializeInteractiveBackground() {
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (cursorFollower) {
            cursorFollower.style.opacity = '1';
        }
    });
    
    function animateFollower() {
        if (cursorFollower) {
            followerX += (mouseX - followerX) * 0.05;
            followerY += (mouseY - followerY) * 0.05;
            
            cursorFollower.style.left = `${followerX}px`;
            cursorFollower.style.top = `${followerY}px`;
        }
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
}

// Loyalty Journey
function initializeLoyaltyJourney() {
    const journeyNodes = document.querySelectorAll('.journey-node');
    
    if (!journeyNodes.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-visible', 'true');
                const index = entry.target.getAttribute('data-node');
                if (index) {
                    entry.target.style.transitionDelay = `${(parseInt(index) - 1) * 0.2}s`;
                }
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.2
    });
    
    journeyNodes.forEach(node => {
        observer.observe(node);
    });
}

// Constellation Background for Hero Section
function initializeConstellationBackground() {
    const constellationStars = document.querySelector('.constellation-stars');
    const constellationLines = document.querySelector('.constellation-lines');
    
    if (!constellationStars || !constellationLines) return;
    
    constellationStars.innerHTML = '';
    constellationLines.innerHTML = '';
    
    // Create fewer, more subtle stars
    const starCount = 15;
    const starPositions = [];
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${1 + Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.opacity = Math.random() * 0.5 + 0.3;
        
        if (Math.random() > 0.7) {
            star.classList.add('twinkle');
            star.style.animationDelay = `${Math.random() * 4}s`;
        }
        
        constellationStars.appendChild(star);
        starPositions.push({ x, y, element: star });
    }
}

// Text Highlighting on Scroll
function initializeTextHighlighting() {
    const highlightElements = document.querySelectorAll('.highlight-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                setTimeout(() => {
                    if (!isElementInViewport(entry.target)) {
                        entry.target.classList.remove('active');
                    }
                }, 2000);
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.1
    });
    
    highlightElements.forEach(element => {
        observer.observe(element);
    });
    
    window.addEventListener('scroll', () => {
        highlightElements.forEach(element => {
            if (isElementInViewport(element, 0.5)) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    });
    
    function isElementInViewport(el, threshold = 0.1) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const elementHeight = rect.bottom - rect.top;
        
        return visibleHeight / elementHeight > threshold;
    }
}

// Handle visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('[class*="animate"]').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        document.querySelectorAll('[class*="animate"]').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = document.querySelectorAll('.section');
    const currentSection = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
    });
    
    if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        e.preventDefault();
        sections[currentSection + 1]?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault();
        sections[currentSection - 1]?.scrollIntoView({ behavior: 'smooth' });
    }
});

// Error boundary for production
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});
