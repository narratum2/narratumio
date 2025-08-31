# Narratum - Strategic Infrastructure for Transformative Hospitality

A premium website for Narratum LLC, showcasing strategic hospitality infrastructure services with an immersive, modern design.

## Features

- **Immersive Design**: Dark harbor theme with golden accents
- **Interactive Elements**: Click-to-reveal content, smooth animations
- **Sound Experience**: Meditative audio system with harmonic frequencies
- **Color Themes**: 6 color schemes including art-inspired palettes
- **Secure Contact Form**: Formspree integration with anti-spam measures
- **Responsive Design**: Optimized for all devices
- **Performance**: Optimized loading, lazy loading, efficient animations
 - **AI Monitoring**: Developer AI Team orchestrator for SEO, performance, a11y, links, uptime, security

## Technology Stack

- HTML5 with semantic markup
- CSS3 with custom properties
- Vanilla JavaScript (no dependencies)
- Formspree for form handling
- Web Audio API for sound generation

## Quick Start

1. Clone this repository
2. Replace `YOUR_FORM_ID` in `index.html` with your Formspree ID
3. Add image assets to `/assets` folder
4. Deploy to GitHub Pages or your hosting provider

### Developer AI Team (Continuous Monitoring)

The site includes a self-optimizing AI Orchestrator that continuously monitors key aspects:

- SEO, Performance, Accessibility, Links, Uptime, Security, Legal/Consent
- Adaptive scheduling: runs more often when issues are detected, less often when stable
- Privacy-by-default: telemetry disabled; local persistence via `localStorage`
- Overlay: an AI button (bottom-right) opens a panel showing statuses and findings

Configuration in `index.html`:

```html
<script>
  window.NARRATUM_AI_CONFIG = {
    enabled: true,
    overlay: { enabled: true, startHidden: true },
    scheduling: { tickMs: 15000, minIntervalMs: 30000, maxIntervalMs: 3600000, adaptiveness: 0.6 },
    consent: { sendTelemetry: false }
  };
<\/script>
<script src="developer-ai-orchestrator.js"></script>
```

DevTools helpers:

```js
window.NarratumAI.runAll();
window.NarratumAI.run('perf'); // seo|perf|a11y|links|uptime|security|legal
window.NarratumAI.toggleOverlay(true);
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2025 Narratum LLC. All rights reserved.

## Contact

- Website: https://narratum.io
- Email: connect@narratum.io
- Address: 110 East 25th Street, New York, NY 10010

---

Built with 🏛️ for transformative hospitality