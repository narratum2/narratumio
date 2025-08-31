/**
 * Narratum.io - Final Complete Interactive JavaScript
 * Version: 3.0 Final
 * Features: Complete navigation, enhanced animations, meditative sound system,
 * form handling, color themes, and all premium interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check device capabilities
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isTouch = 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Ensure loader always initializes first
    try {
        initializeLoader();
    } catch (error) {
        console.error('[Loader] Failed to initialize:', error);
        // Emergency fallback
        setTimeout(() => {
            const loader = document.querySelector('.loading-screen');
            if (loader) {
                loader.style.display = 'none';
                document.body.classList.add('loaded');
            }
        }, 1000);
    }
    
    // Detect if CSS failed to load
    setTimeout(() => {
        const loader = document.querySelector('.loading-screen');
        if (loader && getComputedStyle(loader).position !== 'fixed') {
            console.warn('[Loader] CSS may have failed to load, using fallback');
            loader.classList.add('css-fallback');
        }
    }, 100);
    
    // Only initialize heavy animations on desktop and if motion is allowed
    if (!isMobile && !prefersReducedMotion) {
        try {
            initializeStarField();
            initializeParallax();
        } catch (error) {
            console.error('Animation initialization failed:', error);
        }
    }
    
    // Core initialization with error boundary
    try {
        initializeApp();
    } catch (error) {
        console.error('App initialization failed:', error);
        // Ensure basic functionality still works
        initializeBasicFunctionality();
    }
});

function initializeApp() {
    // Delay initialization for smooth page load
    setTimeout(() => {
        initializeNavigation();
        initializeObservers();
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
        initializeSubtleHighlighting();
        initializeGoldLine();
        initializeCookieBanner();
        initializeLegalModals();
        initializeSmoothScroll();
        initializeAccessibility();
    }, 1000);
}

// Enhanced Loading Screen with Progress and Error Handling
function initializeLoader() {
    const loader = document.querySelector('.loading-screen');
    console.log('[Loader] initializeLoader called (deterministic)');
    if (!loader) {
        console.log('[Loader] .loading-screen not found');
        return;
    }

    let hidden = false;
    let loadStartTime = Date.now();
    
    const hideLoader = (reason) => {
        if (hidden) return;
        hidden = true;
        const loadTime = Date.now() - loadStartTime;
        console.log(`[Loader] Hiding loader (${reason}) after ${loadTime}ms`);
        
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.add('loaded');
            console.log('[Loader] Loader fully hidden, body.loaded added');
            
            // Track loading performance
            if (window.intelligentAnalytics) {
                window.intelligentAnalytics.trackEvent('page_load_complete', {
                    loadTime: loadTime,
                    hideReason: reason
                });
            }
        }, 500);
    };

    // Multiple fallback strategies for reliability
    
    // Strategy 1: Hide when all resources are loaded
    window.addEventListener('load', () => hideLoader('window.load'));
    
    // Strategy 2: Hide when DOM is ready and fonts are loaded
    if (document.readyState === 'complete') {
        hideLoader('already_loaded');
    } else {
        // Strategy 3: Progressive loading check
        const checkResourcesLoaded = () => {
            const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
            const allLoaded = Array.from(stylesheets).every(sheet => {
                try {
                    return sheet.sheet && sheet.sheet.cssRules;
                } catch (e) {
                    return true; // Assume loaded if we can't check (CORS)
                }
            });
            
            if (allLoaded && document.readyState !== 'loading') {
                hideLoader('resources_check');
            }
        };
        
        setTimeout(checkResourcesLoaded, 300);
    }
    
    // Strategy 4: Guaranteed fallback for UX protection
    setTimeout(() => hideLoader('timeout:800ms'), 800);
    
    // Strategy 5: Emergency fallback if something goes wrong
    setTimeout(() => {
        if (!hidden) {
            console.warn('[Loader] Emergency fallback triggered');
            hideLoader('emergency_fallback');
        }
    }, 2000);
}

// Enhanced Premium Gentle Moving Star Field with Advanced Physics
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
        will-change: transform;
    `;
    document.body.appendChild(starContainer);

    // Enhanced star physics system
    const starSystem = {
        stars: new Set(),
        maxStars: 25,
        spawnRate: 1800, // Slightly faster spawn
        physics: {
            gravity: 0.02,
            windStrength: 0.1,
            turbulence: 0.05
        }
    };

    // Advanced star creation with physics
    const createStar = () => {
        if (starSystem.stars.size >= starSystem.maxStars) return;

        const star = document.createElement('div');
        const size = Math.random() * 3 + 1; // 1-4px for more variety
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 25 + 40; // 40-65s for longer journeys
        const starType = Math.random();

        // Different star types with unique properties
        let starConfig = {
            opacity: Math.random() * 0.4 + 0.3,
            glow: Math.random() * 0.8 + 0.2,
            speed: Math.random() * 0.5 + 0.3,
            drift: (Math.random() - 0.5) * 150
        };

        if (starType > 0.8) {
            // Bright star
            starConfig.opacity = Math.random() * 0.3 + 0.7;
            starConfig.glow = Math.random() * 0.5 + 0.5;
        } else if (starType > 0.6) {
            // Fast meteor-like star
            starConfig.speed = Math.random() * 0.8 + 0.8;
            starConfig.drift = (Math.random() - 0.5) * 80;
        }

        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255, 255, 255, ${starConfig.opacity}), transparent);
            border-radius: 50%;
            left: ${startX}px;
            top: ${window.innerHeight + 20}px;
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, ${starConfig.glow});
            will-change: transform, opacity;
            transform: translateZ(0);
        `;

        starContainer.appendChild(star);
        starSystem.stars.add(star);

        // Advanced physics-based animation
        let progress = 0;
        let windOffset = 0;
        let turbulencePhase = Math.random() * Math.PI * 2;

        const animateStar = (timestamp) => {
            if (!star.isConnected) {
                starSystem.stars.delete(star);
                return;
            }

            progress += starConfig.speed / (duration * 60); // Adaptive speed

            if (progress >= 1) {
                star.remove();
                starSystem.stars.delete(star);
                return;
            }

            // Advanced movement with wind and turbulence
            const baseY = window.innerHeight * (1 - progress) - 20;
            const baseX = startX + Math.sin(progress * Math.PI * 2) * starConfig.drift;

            // Wind effect
            windOffset += starSystem.physics.windStrength * (Math.sin(progress * 4) + Math.sin(progress * 8) * 0.5);

            // Turbulence effect
            turbulencePhase += 0.1;
            const turbulence = Math.sin(turbulencePhase) * starSystem.physics.turbulence * starConfig.drift;

            const finalX = baseX + windOffset + turbulence;
            const finalY = baseY + Math.sin(progress * Math.PI) * 30; // Gentle wave motion

            // Enhanced opacity curve with fade-in and fade-out
            let opacity;
            if (progress < 0.1) {
                opacity = Math.sin(progress * 5 * Math.PI) * starConfig.opacity; // Fade in
            } else if (progress > 0.9) {
                opacity = Math.sin((1 - progress) * 5 * Math.PI) * starConfig.opacity; // Fade out
            } else {
                opacity = starConfig.opacity;
            }

            star.style.transform = `translate(${finalX - startX}px, ${finalY - window.innerHeight}px)`;
            star.style.opacity = opacity;

            // Dynamic glow based on movement
            const glowIntensity = starConfig.glow * (0.5 + Math.sin(progress * Math.PI * 4) * 0.5);
            star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, ${glowIntensity})`;

            requestAnimationFrame(animateStar);
        };

        requestAnimationFrame(animateStar);
    };

    // Enhanced initial star field creation
    const initialStars = Math.min(starSystem.maxStars, 25);
    for (let i = 0; i < initialStars; i++) {
        setTimeout(createStar, i * 150); // Staggered creation
    }

    // Adaptive star creation based on performance
    const adaptiveInterval = setInterval(() => {
        if (starSystem.stars.size < starSystem.maxStars * 0.7) {
            // Increase spawn rate if too few stars
            createStar();
        }
    }, starSystem.spawnRate);

    // Performance monitoring and adaptation
    let lastPerformanceCheck = Date.now();
    let frameCount = 0;

    const monitorPerformance = () => {
        frameCount++;
        const now = Date.now();

        if (now - lastPerformanceCheck >= 5000) { // Check every 5 seconds
            const fps = frameCount / 5;

            if (fps < 30) {
                // Reduce star complexity on low performance
                starSystem.maxStars = Math.max(15, starSystem.maxStars - 2);
                starSystem.spawnRate = Math.min(3000, starSystem.spawnRate + 200);
            } else if (fps > 55) {
                // Increase star complexity on high performance
                starSystem.maxStars = Math.min(35, starSystem.maxStars + 1);
                starSystem.spawnRate = Math.max(1200, starSystem.spawnRate - 100);
            }

            frameCount = 0;
            lastPerformanceCheck = now;
        }

        requestAnimationFrame(monitorPerformance);
    };

    requestAnimationFrame(monitorPerformance);

    // Store for cleanup
    starContainer.starSystem = starSystem;
    starContainer.adaptiveInterval = adaptiveInterval;
}

// Gold Line Visibility Control
function initializeGoldLine() {
    const goldLine = document.querySelector('.gold-line');
    const heroHeight = window.innerHeight;
    
    if (!goldLine) return;
    
    // Initially hide gold line
    goldLine.classList.remove('visible');
    
    // Throttled scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                if (window.scrollY > heroHeight - 100) {
                    goldLine.classList.add('visible');
                } else {
                    goldLine.classList.remove('visible');
                }
                scrollTimeout = null;
            }, 100);
        }
    });
}

// Enhanced Premium Mouse Glow Effect with Advanced Interactions
function initializeMouseGlow() {
    const mouseGlow = document.querySelector('.mouse-glow');
    if (!mouseGlow || window.matchMedia('(hover: none)').matches) return;

    // Enhanced tracking system
    let mouseState = {
        x: 0,
        y: 0,
        currentX: 0,
        currentY: 0,
        velocityX: 0,
        velocityY: 0,
        lastX: 0,
        lastY: 0,
        isMoving: false,
        interactionType: 'default',
        intensity: 1,
        trail: []
    };

    // Advanced mouse tracking with velocity calculation
    document.addEventListener('mousemove', (e) => {
        const newX = e.clientX;
        const newY = e.clientY;

        // Calculate velocity for dynamic effects
        mouseState.velocityX = newX - mouseState.lastX;
        mouseState.velocityY = newY - mouseState.lastY;

        mouseState.lastX = newX;
        mouseState.lastY = newY;

        mouseState.x = newX;
        mouseState.y = newY;

        // Add to trail for motion blur effect
        mouseState.trail.push({ x: newX, y: newY, timestamp: Date.now() });
        if (mouseState.trail.length > 10) {
            mouseState.trail.shift();
        }

        if (!mouseState.isMoving) {
            mouseState.isMoving = true;
            animateGlow();
        }

        // Enhanced interaction detection
        const interactiveElement = e.target.closest(
            '.partnership-category, .capability-block, .journey-node, .symbol-item, .submit-button, .anchor-link, .nav-dot, .mood-dot'
        );

        if (interactiveElement) {
            const elementType = getElementType(interactiveElement);
            updateGlowForInteraction(elementType, mouseState);
        } else {
            mouseState.interactionType = 'default';
            resetGlowToDefault(mouseState);
        }
    });

    // Determine element type for customized glow
    function getElementType(element) {
        if (element.classList.contains('submit-button')) return 'button';
        if (element.classList.contains('symbol-item')) return 'symbol';
        if (element.classList.contains('nav-dot')) return 'navigation';
        if (element.classList.contains('mood-dot')) return 'mood';
        if (element.classList.contains('capability-block')) return 'capability';
        if (element.classList.contains('partnership-category')) return 'partnership';
        if (element.classList.contains('journey-node')) return 'journey';
        return 'interactive';
    }

    // Customize glow based on interaction type
    function updateGlowForInteraction(type, state) {
        if (state.interactionType === type) return; // No change needed

        state.interactionType = type;
        mouseGlow.classList.add('active');

        const configurations = {
            button: {
                size: '350px',
                intensity: 1.5,
                color: 'rgba(251, 191, 36, 0.25)',
                spread: 'rgba(251, 191, 36, 0.15)'
            },
            symbol: {
                size: '280px',
                intensity: 1.3,
                color: 'rgba(125, 211, 252, 0.2)',
                spread: 'rgba(125, 211, 252, 0.1)'
            },
            navigation: {
                size: '220px',
                intensity: 1.2,
                color: 'rgba(251, 191, 36, 0.22)',
                spread: 'rgba(251, 191, 36, 0.12)'
            },
            mood: {
                size: '240px',
                intensity: 1.1,
                color: 'rgba(167, 139, 250, 0.2)',
                spread: 'rgba(167, 139, 250, 0.1)'
            },
            capability: {
                size: '320px',
                intensity: 1.4,
                color: 'rgba(251, 191, 36, 0.23)',
                spread: 'rgba(251, 191, 36, 0.13)'
            },
            partnership: {
                size: '300px',
                intensity: 1.3,
                color: 'rgba(125, 211, 252, 0.2)',
                spread: 'rgba(125, 211, 252, 0.1)'
            },
            journey: {
                size: '260px',
                intensity: 1.2,
                color: 'rgba(251, 191, 36, 0.21)',
                spread: 'rgba(251, 191, 36, 0.11)'
            }
        };

        const config = configurations[type] || configurations.interactive;

        mouseGlow.style.width = config.size;
        mouseGlow.style.height = config.size;
        state.intensity = config.intensity;

        // Update CSS custom properties for dynamic styling
        mouseGlow.style.setProperty('--glow-color', config.color);
        mouseGlow.style.setProperty('--glow-spread', config.spread);
    }

    // Reset to default state
    function resetGlowToDefault(state) {
        state.interactionType = 'default';
        mouseGlow.classList.remove('active');
        mouseGlow.style.width = '200px';
        mouseGlow.style.height = '200px';
        state.intensity = 1;
        mouseGlow.style.removeProperty('--glow-color');
        mouseGlow.style.removeProperty('--glow-spread');
    }

    // Enhanced animation loop with physics
    function animateGlow() {
        if (!mouseState.isMoving) return;

        const dx = mouseState.x - mouseState.currentX;
        const dy = mouseState.y - mouseState.currentY;

        // Adaptive easing based on velocity
        const velocityMagnitude = Math.sqrt(mouseState.velocityX ** 2 + mouseState.velocityY ** 2);
        const adaptiveEasing = Math.max(0.05, Math.min(0.2, velocityMagnitude / 100));

        mouseState.currentX += dx * adaptiveEasing;
        mouseState.currentY += dy * adaptiveEasing;

        mouseGlow.style.left = mouseState.currentX + 'px';
        mouseGlow.style.top = mouseState.currentY + 'px';

        // Dynamic transform with subtle rotation based on movement
        const rotation = Math.atan2(mouseState.velocityY, mouseState.velocityX) * (180 / Math.PI) * 0.1;
        const scale = 1 + (velocityMagnitude / 200) * 0.1;

        mouseGlow.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;

        // Dynamic opacity based on velocity
        const dynamicOpacity = 0.1 + (velocityMagnitude / 300) * 0.3;
        mouseGlow.style.opacity = mouseState.interactionType === 'default' ? dynamicOpacity : dynamicOpacity * 1.5;

        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
            requestAnimationFrame(animateGlow);
        } else {
            mouseState.isMoving = false;
            // Gentle settle animation
            mouseGlow.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
        }
    }

    // Add mouse leave handler for smooth transitions
    document.addEventListener('mouseleave', () => {
        mouseGlow.style.opacity = '0';
        mouseState.isMoving = false;
    });

    document.addEventListener('mouseenter', () => {
        mouseGlow.style.opacity = mouseState.interactionType === 'default' ? '0.1' : '0.3';
    });
}

// Enhanced Navigation System
function initializeNavigation() {
    const sections = document.querySelectorAll('.section');
    const navDots = document.querySelectorAll('.nav-dot');
    let isScrolling = false;
    
    // Smooth scroll to section
    navDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = dot.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            
            if (section) {
                isScrolling = true;
                const targetPosition = section.offsetTop;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state immediately
                navDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                
                // Reset scrolling flag
                setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }
        });
    });
    
    // Update active dot on scroll with debouncing
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout && !isScrolling) {
            scrollTimeout = setTimeout(() => {
                updateActiveSection();
                scrollTimeout = null;
            }, 100);
        }
    });
    
    function updateActiveSection() {
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
    }
}

// Enhanced Anchor Menu
function initializeAnchorMenu() {
    const anchorMenu = document.querySelector('.anchor-menu');
    const sections = document.querySelectorAll('.section');
    
    if (!anchorMenu) return;
    
    // Show/hide based on scroll
    let lastScrollY = window.scrollY;
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                const currentScrollY = window.scrollY;
                
                // Show when scrolled past hero
                if (currentScrollY > window.innerHeight / 2) {
                    anchorMenu.classList.add('visible');
                    
                    // Hide on scroll down, show on scroll up
                    if (currentScrollY > lastScrollY && currentScrollY > window.innerHeight) {
                        anchorMenu.style.transform = 'translateX(-50%) translateY(-100%)';
                    } else {
                        anchorMenu.style.transform = 'translateX(-50%) translateY(0)';
                    }
                } else {
                    anchorMenu.classList.remove('visible');
                }
                
                lastScrollY = currentScrollY;
                updateActiveAnchor();
                scrollTimeout = null;
            }, 100);
        }
    });
    
    // Handle anchor clicks
    const anchors = anchorMenu.querySelectorAll('.anchor-link');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = anchor.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            
            if (section) {
                const targetPosition = section.offsetTop;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                anchors.forEach(a => a.classList.remove('active'));
                anchor.classList.add('active');
            }
        });
    });
    
    function updateActiveAnchor() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('data-section');
            }
        });
        
        anchors.forEach(anchor => {
            anchor.classList.remove('active');
            if (anchor.getAttribute('data-section') === currentSection) {
                anchor.classList.add('active');
            }
        });
    }
}

// Enhanced Intersection Observer System
function initializeObservers() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    // Create single observer for performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Add visible state
                target.setAttribute('data-visible', 'true');
                
                // Handle different element types
                if (target.classList.contains('capability-block')) {
                    const index = target.getAttribute('data-index');
                    target.style.transitionDelay = `${(index - 1) * 0.2}s`;
                } else if (target.classList.contains('journey-node')) {
                    const index = target.getAttribute('data-node');
                    target.style.transitionDelay = `${(index - 1) * 0.3}s`;
                } else if (target.classList.contains('build-pillar')) {
                    const delay = Array.from(target.parentElement.children).indexOf(target) * 0.2;
                    target.style.transitionDelay = `${delay}s`;
                }
                
                // Unobserve after animation
                setTimeout(() => {
                    observer.unobserve(target);
                }, 1000);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.capability-block, .journey-node, .build-pillar, .partnership-category, .fade-in'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Enhanced Parallax Effects
function initializeParallax() {
    let ticking = false;
    
    function updateParallax() {
        const scrollY = window.scrollY;
        
        // Hero parallax
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroElements = {
                '.orbital-ring.ring-1': 0.1,
                '.orbital-ring.ring-2': 0.15,
                '.orbital-ring.ring-3': 0.2,
                '.geo-shape.diamond': 0.25,
                '.geo-shape.square': 0.3,
                '.geo-shape.triangle': 0.35
            };
            
            Object.entries(heroElements).forEach(([selector, speed]) => {
                const element = heroSection.querySelector(selector);
                if (element) {
                    element.style.transform = `translate(-50%, calc(-50% + ${scrollY * speed}px))`;
                }
            });
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Enhanced Symbol Interactions
function initializeSymbolInteractions() {
    const symbols = document.querySelectorAll('.symbol-item');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    symbols.forEach(symbol => {
        const eventType = isMobile ? 'touchstart' : 'click';
        
        symbol.addEventListener(eventType, function(e) {
            if (isMobile) {
                e.preventDefault();
            }
            
            const wasActive = this.classList.contains('active');
            
            // Close all symbols
            symbols.forEach(s => s.classList.remove('active'));
            
            if (!wasActive) {
                this.classList.add('active');
                
                // Create magical particles on desktop
                if (!isMobile) {
                    createMagicalParticles(this);
                }
                
                // Play subtle sound if audio is enabled
                playInteractionSound();
                
                // Scroll into view on mobile
                if (isMobile) {
                    setTimeout(() => {
                        const content = this.querySelector('.symbol-content');
                        if (content) {
                            content.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'nearest' 
                            });
                        }
                    }, 100);
                }
            }
        });
    });
    
    // Close on outside click
    document.addEventListener(isMobile ? 'touchstart' : 'click', (e) => {
        if (!e.target.closest('.symbol-item')) {
            symbols.forEach(s => s.classList.remove('active'));
        }
    });
}

// Create magical particles effect
function createMagicalParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 16; i++) {
        const particle = document.createElement('div');
        particle.classList.add('magical-particle');
        
        const angle = (Math.PI * 2 * i) / 16;
        const distance = 50 + Math.random() * 50;
        const size = 2 + Math.random() * 4;
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            left: ${centerX}px;
            top: ${centerY}px;
            background: ${Math.random() > 0.5 ? 'var(--accent-gold)' : 'var(--accent-cyan)'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            box-shadow: 0 0 ${size * 2}px currentColor;
        `;
        
        document.body.appendChild(particle);
        
        // Animate particle
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }).onfinish = () => particle.remove();
    }
}

// Enhanced Form Handling with Security
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Set form submission timestamp
    const timestampField = document.getElementById('formSubmittedAt');
    if (timestampField) {
        timestampField.value = Date.now();
    }
    
    // Character counter
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
    
    // Enhanced form validation
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('.submit-button');
        const buttonText = submitButton.querySelector('.button-text');
        const buttonLoading = submitButton.querySelector('.button-loading');
        
        // Time-based validation
        const submissionTime = Date.now() - parseInt(timestampField.value);
        if (submissionTime < 3000) {
            showFormError('Please take a moment to complete the form properly.');
            return;
        }
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Validate all fields
        if (!validateForm(formData)) {
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        buttonText.style.opacity = '0';
        buttonLoading.style.display = 'block';
        
        try {
            // Submit form
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showFormSuccess();
                trackFormSubmission(formData.get('sector'));
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            buttonText.style.opacity = '1';
            buttonLoading.style.display = 'none';
            
            showFormError('There was an error submitting your form. Please try again or email us directly.');
        }
    });
    
    function validateForm(formData) {
        const validators = {
            name: (value) => value && value.length >= 2 && value.length <= 50,
            email: (value) => value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            organization: (value) => !value || (value.length >= 2 && value.length <= 100),
            sector: (value) => value && value !== '',
            message: (value) => value && value.length >= 10 && value.length <= 1000
        };
        
        const errors = {
            name: 'Please enter a valid name (2-50 characters).',
            email: 'Please enter a valid email address.',
            organization: 'Organization name must be 2-100 characters.',
            sector: 'Please select your sector.',
            message: 'Message must be 10-1000 characters.'
        };
        
        for (const [field, validator] of Object.entries(validators)) {
            const value = formData.get(field);
            if (!validator(value)) {
                showFormError(errors[field]);
                const fieldElement = contactForm.querySelector(`[name="${field}"]`);
                if (fieldElement) {
                    fieldElement.focus();
                    fieldElement.classList.add('error');
                    setTimeout(() => fieldElement.classList.remove('error'), 3000);
                }
                return false;
            }
        }
        
        // Check for spam patterns
        const message = formData.get('message');
        if (containsSpamPatterns(message)) {
            showFormError('Your message was flagged as potential spam. Please revise and try again.');
            return false;
        }
        
        return true;
    }
    
    function containsSpamPatterns(text) {
        const spamPatterns = [
            /\b(viagra|cialis|casino|poker|lottery)\b/i,
            /\b(click here|buy now|limited time)\b/i,
            /(http|https|www\.|\.com){3,}/i,
            /[A-Z]{20,}/,
            /(.)\1{10,}/
        ];
        
        return spamPatterns.some(pattern => pattern.test(text));
    }
    
    function showFormSuccess() {
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
        
        // Play success sound
        playSuccessSound();
    }
    
    function showFormError(message) {
        const existingError = contactForm.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        contactForm.insertBefore(errorDiv, contactForm.firstChild);
        
        setTimeout(() => {
            errorDiv.classList.add('fade-out');
            setTimeout(() => errorDiv.remove(), 300);
        }, 5000);
    }
    
    function trackFormSubmission(sector) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'event_category': 'Contact',
                'event_label': sector
            });
        }
    }
}

// Premium Audio System with Web Audio API - IMPROVED MEDITATION SOUND
let audioContext = null;
let masterGain = null;
let audioNodes = {};
let isAudioInitialized = false;
let isAudioPlaying = false;

function initializeAudioToggle() {
    const audioToggle = document.querySelector('.audio-toggle');
    const soundVisualization = document.querySelector('.sound-visualization');
    
    if (!audioToggle) return;
    
    audioToggle.addEventListener('click', async () => {
        const currentState = audioToggle.getAttribute('data-state');
        
        if (currentState === 'inactive') {
            // Initialize audio context on first interaction
            if (!isAudioInitialized) {
                await initializeAudioContext();
                createMeditativeSound();
            }
            
            // Start audio
            if (audioContext && masterGain) {
                if (audioContext.state === 'suspended') {
                    await audioContext.resume();
                }
                
                // Fade in with lower volume
                masterGain.gain.cancelScheduledValues(audioContext.currentTime);
                masterGain.gain.setValueAtTime(0, audioContext.currentTime);
                masterGain.gain.linearRampToValueAtTime(0.025, audioContext.currentTime + 3); // Reduced from 0.06
                
                isAudioPlaying = true;
                audioToggle.setAttribute('data-state', 'active');
                soundVisualization.classList.add('active');
                
                startVisualization();
            }
        } else {
            // Stop audio
            if (audioContext && masterGain) {
                masterGain.gain.cancelScheduledValues(audioContext.currentTime);
                masterGain.gain.setValueAtTime(masterGain.gain.value, audioContext.currentTime);
                masterGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2);
                
                isAudioPlaying = false;
                audioToggle.setAttribute('data-state', 'inactive');
                soundVisualization.classList.remove('active');
                
                stopVisualization();
            }
        }
    });
}

async function initializeAudioContext() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        masterGain = audioContext.createGain();
        masterGain.gain.value = 0;
        masterGain.connect(audioContext.destination);
        isAudioInitialized = true;
    } catch (error) {
        console.error('Failed to initialize audio context:', error);
    }
}

// IMPROVED MEDITATION SOUND - Scientifically proven calming frequencies
function createMeditativeSound() {
    if (!audioContext || !masterGain) return;
    
    // 432Hz - Scientifically proven to reduce anxiety and promote calm
    const baseFreq = 432; // Changed from 108Hz - much more pleasant
    
    // Create binaural beat effect for deep meditation (optional - works best with headphones)
    const binauralBeatFreq = 5.5; // Theta wave frequency for meditation
    
    // Main healing tone
    const mainOsc = audioContext.createOscillator();
    const mainGain = audioContext.createGain();
    mainOsc.type = 'sine';
    mainOsc.frequency.value = baseFreq;
    mainGain.gain.value = 0.08; // Reduced volume
    
    // Optional binaural beat (slight frequency difference in left/right)
    const secondOsc = audioContext.createOscillator();
    const secondGain = audioContext.createGain();
    secondOsc.type = 'sine';
    secondOsc.frequency.value = baseFreq + binauralBeatFreq; // Creates 5.5Hz beat
    secondGain.gain.value = 0.08;
    
    // Lower octave for depth (216Hz)
    const bassOsc = audioContext.createOscillator();
    const bassGain = audioContext.createGain();
    bassOsc.type = 'sine';
    bassOsc.frequency.value = baseFreq / 2; // 216Hz
    bassGain.gain.value = 0.04; // Very subtle
    
    // 528Hz - "Love frequency" (optional subtle layer)
    const loveOsc = audioContext.createOscillator();
    const loveGain = audioContext.createGain();
    loveOsc.type = 'sine';
    loveOsc.frequency.value = 528;
    loveGain.gain.value = 0.02; // Barely audible
    
    // Much gentler filter - keep the sound open and clear
    const warmthFilter = audioContext.createBiquadFilter();
    warmthFilter.type = 'lowpass';
    warmthFilter.frequency.value = 2500; // Increased from 600Hz - less muffled
    warmthFilter.Q.value = 0.3; // Reduced resonance
    
    // Minimal reverb for space without muddiness
    const reverb = audioContext.createConvolver();
    const reverbGain = audioContext.createGain();
    reverbGain.gain.value = 0.1; // Reduced from 0.3
    
    // Generate shorter, cleaner reverb
    const reverbTime = 1.5; // Reduced from 4 seconds
    const sampleRate = audioContext.sampleRate;
    const length = sampleRate * reverbTime;
    const impulse = audioContext.createBuffer(2, length, sampleRate);
    
    for (let channel = 0; channel < 2; channel++) {
        const channelData = impulse.getChannelData(channel);
        for (let i = 0; i < length; i++) {
            // Exponential decay for more natural reverb
            channelData[i] = (Math.random() * 2 - 1) * Math.exp(-3 * i / length);
        }
    }
    reverb.buffer = impulse;
    
    // Connect everything
    mainOsc.connect(mainGain);
    mainGain.connect(warmthFilter);
    
    secondOsc.connect(secondGain);
    secondGain.connect(warmthFilter);
    
    bassOsc.connect(bassGain);
    bassGain.connect(warmthFilter);
    
    loveOsc.connect(loveGain);
    loveGain.connect(warmthFilter);
    
    warmthFilter.connect(masterGain);
    warmthFilter.connect(reverb);
    reverb.connect(reverbGain);
    reverbGain.connect(masterGain);
    
    // Start oscillators
    mainOsc.start();
    secondOsc.start();
    bassOsc.start();
    loveOsc.start();
    
    // Store references
    audioNodes = {
        mainOsc, secondOsc, bassOsc, loveOsc,
        mainGain, secondGain, bassGain, loveGain,
        warmthFilter, reverb, reverbGain
    };
    
    // Create much subtler LFOs
    createCalmingLFOs();
}

// Much more subtle modulation for organic feel without wobbliness
function createCalmingLFOs() {
    if (!audioContext) return;
    
    // Ultra-subtle breathing effect (like ocean waves)
    const breathLFO = audioContext.createOscillator();
    breathLFO.frequency.value = 0.05; // Slower - 3 breaths per minute
    const breathGain = audioContext.createGain();
    breathGain.gain.value = 0.005; // Much more subtle than before
    
    breathLFO.connect(breathGain);
    breathGain.connect(masterGain.gain);
    breathLFO.start();
    
    // Remove pitch modulation entirely - keeps frequencies pure and stable
    // No filter sweeping - maintains clarity
}

// Sound visualization
let visualizationFrame;
function startVisualization() {
    const soundBars = document.querySelectorAll('.sound-bar');
    let phase = 0;
    
    function animate() {
        phase += 0.01;
        
        soundBars.forEach((bar, i) => {
            const offset = i * 0.2;
            const height = 30 + Math.sin(phase + offset) * 20 + Math.sin(phase * 2 + offset) * 10;
            const opacity = 0.3 + Math.sin(phase + offset) * 0.2;
            
            bar.style.height = `${height}%`;
            bar.style.opacity = opacity;
        });
        
        visualizationFrame = requestAnimationFrame(animate);
    }
    
    animate();
}

function stopVisualization() {
    if (visualizationFrame) {
        cancelAnimationFrame(visualizationFrame);
    }
}

// Interactive sound effects
function playInteractionSound() {
    if (!isAudioPlaying || !audioContext) return;
    
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.frequency.value = 432;
    osc.type = 'sine';
    gain.gain.value = 0.05;
    
    osc.connect(gain);
    gain.connect(masterGain);
    
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
    osc.stop(audioContext.currentTime + 0.3);
}

function playSuccessSound() {
    if (!audioContext) return;
    
    const notes = [432, 540, 648]; // Major chord based on 432Hz
    notes.forEach((freq, i) => {
        setTimeout(() => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            
            osc.frequency.value = freq;
            osc.type = 'sine';
            gain.gain.value = 0.1;
            
            osc.connect(gain);
            gain.connect(audioContext.destination);
            
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
            osc.stop(audioContext.currentTime + 0.5);
        }, i * 100);
    });
}

// Color Mood System
function initializeColorMoodSwitcher() {
    const moodDots = document.querySelectorAll('.mood-dot');
    const root = document.documentElement;
    
    // Color themes
    const themes = {
        default: {
            '--bg-primary': '#0a1520',
            '--bg-secondary': '#0d1825',
            '--accent-gold': '#fbbf24',
            '--accent-cyan': '#7dd3fc'
        },
        teal: {
            '--bg-primary': '#0a2025',
            '--bg-secondary': '#0d2530',
            '--accent-gold': '#2dd4bf',
            '--accent-cyan': '#06b6d4'
        },
        purple: {
            '--bg-primary': '#1a0a25',
            '--bg-secondary': '#250d30',
            '--accent-gold': '#a78bfa',
            '--accent-cyan': '#8b5cf6'
        },
        gold: {
            '--bg-primary': '#251a0a',
            '--bg-secondary': '#302510',
            '--accent-gold': '#f59e0b',
            '--accent-cyan': '#fbbf24'
        },
        nocturne: {
            '--bg-primary': '#0a0812',
            '--bg-secondary': '#140f1a',
            '--accent-gold': '#d97757',
            '--accent-cyan': '#f4a989'
        },
        botanical: {
            '--bg-primary': '#051614',
            '--bg-secondary': '#0a2420',
            '--accent-gold': '#d4a574',
            '--accent-cyan': '#0f766e'
        }
    };
    
    moodDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const mood = dot.getAttribute('data-mood');
            
            // Update active state
            moodDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // Apply theme
            if (themes[mood]) {
                Object.entries(themes[mood]).forEach(([property, value]) => {
                    root.style.setProperty(property, value);
                });
                
                // Save preference
                localStorage.setItem('preferredMood', mood);
                
                // Play sound
                playInteractionSound();
            }
        });
    });
    
    // Load saved preference
    const savedMood = localStorage.getItem('preferredMood');
    if (savedMood && themes[savedMood]) {
        const savedDot = document.querySelector(`[data-mood="${savedMood}"]`);
        if (savedDot) {
            savedDot.click();
        }
    }
}

// Interactive Background
function initializeInteractiveBackground() {
    const cursorFollower = document.querySelector('.cursor-follower');
    if (!cursorFollower || window.matchMedia('(hover: none)').matches) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorFollower.style.opacity = '1';
    });
    
    function animateFollower() {
        const dx = mouseX - followerX;
        const dy = mouseY - followerY;
        
        followerX += dx * 0.05;
        followerY += dy * 0.05;
        
        cursorFollower.style.left = `${followerX}px`;
        cursorFollower.style.top = `${followerY}px`;
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
}

// Loyalty Journey Animation
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
                
                // Animate line drawing
                const line = entry.target.closest('.journey-path')?.querySelector('.journey-line');
                if (line) {
                    line.classList.add('animated');
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

// Constellation Background Animation
function initializeConstellationBackground() {
    const constellationStars = document.querySelector('.constellation-stars');
    const constellationLines = document.querySelector('.constellation-lines');
    
    if (!constellationStars) return;
    
    // Clear existing content
    constellationStars.innerHTML = '';
    if (constellationLines) {
        constellationLines.innerHTML = '';
    }
    
    // Create constellation pattern
    const starCount = 20;
    const stars = [];
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = 1 + Math.random() * 2;
        
        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${Math.random() * 0.5 + 0.3};
        `;
        
        if (Math.random() > 0.7) {
            star.classList.add('twinkle');
            star.style.animationDelay = `${Math.random() * 4}s`;
        }
        
        constellationStars.appendChild(star);
        stars.push({ x, y, element: star });
    }
    
    // Create constellation lines between nearby stars
    if (constellationLines) {
        stars.forEach((star, i) => {
            const nearbyStars = stars.slice(i + 1).filter(other => {
                const distance = Math.sqrt(
                    Math.pow(star.x - other.x, 2) + Math.pow(star.y - other.y, 2)
                );
                return distance < 20 && distance > 5;
            });
            
            nearbyStars.slice(0, 2).forEach(other => {
                const line = document.createElement('div');
                line.classList.add('constellation-line');
                
                const angle = Math.atan2(other.y - star.y, other.x - star.x);
                const distance = Math.sqrt(
                    Math.pow(star.x - other.x, 2) + Math.pow(star.y - other.y, 2)
                );
                
                line.style.cssText = `
                    left: ${star.x}%;
                    top: ${star.y}%;
                    width: ${distance}%;
                    transform: rotate(${angle}rad);
                    opacity: 0.1;
                `;
                
                constellationLines.appendChild(line);
            });
        });
    }
}

// Text Highlighting Effects
function initializeTextHighlighting() {
    const highlightElements = document.querySelectorAll('.highlight-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.1
    });
    
    highlightElements.forEach(element => {
        observer.observe(element);
    });
}

// Subtle Word Highlighting
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

// Cookie Banner Management
function initializeCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!hasAccepted && cookieBanner) {
        setTimeout(() => {
            cookieBanner.style.display = 'block';
        }, 2000);
    }
    
    // Make accept function global
    window.acceptCookies = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
        
        // Initialize analytics if accepted
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    };
}

// Legal Modals
function initializeLegalModals() {
    // Make functions global for onclick handlers
    window.openLegalModal = function(type) {
        const modal = document.getElementById('legalModal');
        const modalContent = document.getElementById('modalContent');
        
        if (modal && modalContent && window.legalContent && window.legalContent[type]) {
            modalContent.innerHTML = window.legalContent[type];
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };
    
    window.closeLegalModal = function() {
        const modal = document.getElementById('legalModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    };
    
    // Close modal on outside click
    const modal = document.getElementById('legalModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLegalModal();
            }
        });
    }
}

// Smooth Scroll Enhancement
function initializeSmoothScroll() {
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offset = 80; // Account for fixed elements
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Accessibility Enhancements
function initializeAccessibility() {
    // Keyboard navigation
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
        
        // ESC to close modals
        if (e.key === 'Escape') {
            closeLegalModal();
            document.querySelectorAll('.symbol-item.active').forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // Announce page changes for screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.classList.add('sr-only');
    document.body.appendChild(announcer);
    
    // Update announcer on section change
    let lastSection = '';
    window.addEventListener('scroll', () => {
        const currentSection = document.querySelector('.nav-dot.active')?.getAttribute('data-section');
        if (currentSection && currentSection !== lastSection) {
            announcer.textContent = `Now viewing ${currentSection} section`;
            lastSection = currentSection;
        }
    });
}

// Performance Monitoring
function initializePerformanceMonitoring() {
    // Log performance metrics
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'paint') {
                    console.log(`${entry.name}: ${entry.startTime}ms`);
                }
            }
        });
        
        observer.observe({ entryTypes: ['paint'] });
    }
}

// Handle visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is hidden
        document.querySelectorAll('[class*="animate"]').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
        
        // Stop audio visualization
        if (isAudioPlaying) {
            stopVisualization();
        }
    } else {
        // Resume animations when page is visible
        document.querySelectorAll('[class*="animate"]').forEach(el => {
            el.style.animationPlayState = 'running';
        });
        
        // Resume audio visualization
        if (isAudioPlaying) {
            startVisualization();
        }
    }
});

// Error boundary
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // You could send this to an error tracking service
});

    // Initialize performance monitoring in production
if (window.location.hostname !== 'localhost') {
    initializePerformanceMonitoring();
}

<<<<<<< Current (Your changes)
// Advanced Magical Particle System
function initializeMagicalParticles() {
    const particleSystem = {
        particles: new Set(),
        maxParticles: 50,
        spawnRate: 100,
        container: null
    };

    function createParticleSystem() {
        particleSystem.container = document.createElement('div');
        particleSystem.container.className = 'magical-particles';
        particleSystem.container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2;
            overflow: hidden;
        `;
        document.body.appendChild(particleSystem.container);
    }

    function createMagicalParticle(x, y, type = 'sparkle') {
        if (particleSystem.particles.size >= particleSystem.maxParticles) return;

        const particle = document.createElement('div');
        particle.className = 'magical-particle';

        const particleTypes = {
            sparkle: {
                size: Math.random() * 4 + 2,
                color: Math.random() > 0.5 ? '#fbbf24' : '#7dd3fc',
                duration: Math.random() * 2000 + 1000,
                trail: true
            },
            energy: {
                size: Math.random() * 6 + 3,
                color: '#a78bfa',
                duration: Math.random() * 1500 + 800,
                trail: false
            },
            pulse: {
                size: Math.random() * 8 + 4,
                color: '#d97757',
                duration: Math.random() * 3000 + 2000,
                trail: true
            }
        };

        const config = particleTypes[type];

        particle.style.cssText = `
            position: absolute;
            width: ${config.size}px;
            height: ${config.size}px;
            background: radial-gradient(circle, ${config.color}, transparent);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            will-change: transform, opacity;
            transform: translateZ(0);
            box-shadow: 0 0 ${config.size * 2}px ${config.color};
        `;

        particleSystem.container.appendChild(particle);
        particleSystem.particles.add(particle);

        animateMagicalParticle(particle, x, y, config);
    }

    function animateMagicalParticle(particle, startX, startY, config) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 50;
        const endX = startX + Math.cos(angle) * distance;
        const endY = startY + Math.sin(angle) * distance;

        let progress = 0;

        const animate = () => {
            progress += 1 / (config.duration / 16);

            if (progress >= 1) {
                particle.remove();
                particleSystem.particles.delete(particle);
                return;
            }

            const t = progress;
            const cx = startX + (endX - startX) * 0.5;
            const cy = startY + (endY - startY) * 0.5 - 100;

            const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * cx + t * t * endX;
            const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * cy + t * t * endY;

            const opacity = Math.sin(progress * Math.PI) * 0.8;
            const scale = 0.5 + Math.sin(progress * Math.PI * 2) * 0.5;

            particle.style.transform = `translate(${x - startX}px, ${y - startY}px) scale(${scale})`;
            particle.style.opacity = opacity;

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }

    createParticleSystem();

    // Auto-spawn particles occasionally
    setInterval(() => {
        if (Math.random() > 0.8) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const type = Math.random() > 0.7 ? 'energy' : Math.random() > 0.5 ? 'pulse' : 'sparkle';
            createMagicalParticle(x, y, type);
        }
    }, particleSystem.spawnRate);

    // Make particles spawn on interactions
    document.addEventListener('click', (e) => {
        if (Math.random() > 0.5) {
            createMagicalParticle(e.clientX, e.clientY, 'sparkle');
        }
    });

    return particleSystem;
}

// Cross-browser compatibility enhancements
const browserSupport = {
    webkit: 'webkitTransform' in document.documentElement.style,
    moz: 'MozTransform' in document.documentElement.style,
    ms: 'msTransform' in document.documentElement.style,
    o: 'OTransform' in document.documentElement.style,
    webgl: (() => {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext &&
                canvas.getContext('webgl'));
        } catch(e) {
            return false;
        }
    })(),
    touch: 'ontouchstart' in window,
    passiveEvents: (() => {
        let supportsPassive = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => supportsPassive = true
            });
            window.addEventListener('test', null, opts);
        } catch (e) {}
        return supportsPassive;
    })()
};

// Device capability detection
const deviceCapabilities = {
    memory: navigator.deviceMemory || 4,
    cores: navigator.hardwareConcurrency || 2,
    connection: navigator.connection?.effectiveType || 'unknown',
    pixelRatio: window.devicePixelRatio || 1,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
    isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
};

// Performance-based feature adaptation
function adaptFeaturesForDevice() {
    const performanceScore = deviceCapabilities.memory + deviceCapabilities.cores;

    if (performanceScore < 6) {
        // Low-end device optimizations
        console.log('[Performance] Adapting for low-end device');

        // Reduce particle counts
        if (window.starContainer && window.starContainer.starSystem) {
            window.starContainer.starSystem.maxStars = Math.min(15, window.starContainer.starSystem.maxStars);
        }

        // Disable complex animations
        document.documentElement.classList.add('low-performance');
    }

    if (deviceCapabilities.isMobile) {
        // Mobile-specific optimizations
        console.log('[Performance] Adapting for mobile device');
        document.documentElement.classList.add('mobile-device');

        // Disable hover effects on touch devices
        if (deviceCapabilities.touch) {
            document.documentElement.classList.add('touch-device');
        }
    }

    if (deviceCapabilities.isIOS) {
        // iOS-specific optimizations
        console.log('[Performance] Adapting for iOS device');
        document.documentElement.classList.add('ios-device');
    }

    if (deviceCapabilities.isSafari) {
        // Safari-specific optimizations
        console.log('[Performance] Adapting for Safari');
        document.documentElement.classList.add('safari-browser');
    }

    // Connection-based adaptations
    if (deviceCapabilities.connection === 'slow-2g' || deviceCapabilities.connection === '2g') {
        console.log('[Performance] Adapting for slow connection');
        document.documentElement.classList.add('slow-connection');
    }
}

// Initialize cross-browser compatibility
function initializeCrossBrowserSupport() {
    // Add browser-specific classes
    if (browserSupport.webkit) document.documentElement.classList.add('webkit');
    if (browserSupport.moz) document.documentElement.classList.add('mozilla');
    if (browserSupport.ms) document.documentElement.classList.add('ms');
    if (browserSupport.o) document.documentElement.classList.add('opera');

    // Add capability classes
    if (browserSupport.webgl) document.documentElement.classList.add('webgl-supported');
    if (browserSupport.touch) document.documentElement.classList.add('touch-supported');
    if (browserSupport.passiveEvents) document.documentElement.classList.add('passive-events-supported');

    // Detect and handle WebGL context loss
    if (browserSupport.webgl) {
        window.addEventListener('webglcontextlost', (event) => {
            console.warn('[WebGL] Context lost, disabling GPU-accelerated features');
            document.documentElement.classList.remove('webgl-supported');
            document.documentElement.classList.add('webgl-disabled');
            event.preventDefault();
        }, false);
    }

    console.log('[Compatibility] Browser support detected:', browserSupport);
    console.log('[Compatibility] Device capabilities:', deviceCapabilities);
}

// Initialize advanced systems after main app initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cross-browser support first
    initializeCrossBrowserSupport();
    adaptFeaturesForDevice();

    // Add advanced systems to the initialization
    setTimeout(() => {
        // Only initialize magical particles if performance allows
        if (!document.documentElement.classList.contains('low-performance')) {
            initializeMagicalParticles();
        }
    }, 2000); // Wait for main animations to load first
});

=======
>>>>>>> Incoming (Background Agent changes)
// Basic functionality fallback if main initialization fails
function initializeBasicFunctionality() {
    console.log('[Fallback] Initializing basic functionality');
    
    // Basic navigation
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const targetSection = dot.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Basic form handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            // Let the form submit normally to Formspree
            console.log('[Fallback] Form submitted');
        });
    }
    
    // Basic cookie acceptance
    window.acceptCookies = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        const banner = document.getElementById('cookieBanner');
        if (banner) banner.style.display = 'none';
    };
}

// Health check function
function performHealthCheck() {
    const criticalElements = [
        { selector: '.loading-screen', name: 'Loader' },
        { selector: '#contactForm', name: 'Contact Form' },
        { selector: '.nav-dots', name: 'Navigation' },
        { selector: '.hero', name: 'Hero Section' }
    ];
    
    const healthStatus = {
        timestamp: new Date().toISOString(),
        checks: []
    };
    
    criticalElements.forEach(({ selector, name }) => {
        const element = document.querySelector(selector);
        const status = {
            component: name,
            element: selector,
            present: !!element,
            visible: element ? getComputedStyle(element).display !== 'none' : false
        };
        healthStatus.checks.push(status);
        
        if (!status.present) {
            console.warn(`[Health Check] Missing critical element: ${name} (${selector})`);
        }
    });
    
    console.log('[Health Check] Status:', healthStatus);
    
    // Track health status with analytics
    if (window.intelligentAnalytics) {
        window.intelligentAnalytics.trackEvent('health_check', healthStatus);
    }
    
    return healthStatus;
}

// Run health check after initialization
setTimeout(performHealthCheck, 2000);

// Export functions for external use
window.narratum = {
    playSound: playInteractionSound,
    openModal: openLegalModal,
    closeModal: closeLegalModal,
    acceptCookies: acceptCookies,
    healthCheck: performHealthCheck,
    reinitialize: initializeApp
};