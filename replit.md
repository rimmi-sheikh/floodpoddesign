# Overview

This is a modern, interactive static website showcasing a Modular Flood-Diversion Pods project. The site presents an engineering portfolio piece focused on designing resilient solutions for northern mountain slopes to prevent landslides and protect homes. The website features an enhanced hero section with gradient text effects, project description, prototype gallery, and impact metrics with sophisticated animations and cursor-following effects, built with vanilla HTML, CSS, and JavaScript.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static Site Structure**: Built with vanilla HTML, CSS, and JavaScript for simplicity and fast loading
- **Single Page Design**: All content is contained in a single HTML file with smooth scrolling navigation
- **Responsive Layout**: Uses CSS Grid and Flexbox for responsive design across different screen sizes
- **Progressive Enhancement**: JavaScript adds smooth scrolling and scroll-based animations but site remains functional without it

## Styling and UI
- **CSS Architecture**: Modern CSS with CSS custom properties (variables) for consistent theming and organized sections
- **Typography**: Uses Google Fonts (Inter for body text, Poppins for headings) for sophisticated, professional appearance
- **Color Scheme**: Nature/tech theme with deep blues (#0f172a, #1e293b), vibrant greens (#10b981, #34d399), and clean whites
- **Visual Hierarchy**: Enhanced hero section with gradient text effects, custom background overlays, and structured content sections
- **Animation System**: Advanced animations including fade-in effects, floating elements, cursor follower with glow, and 3D tilt effects on hover

## JavaScript Features
- **Cursor Follower**: Custom cursor with glowing trail effect that follows mouse movement with smooth animation
- **Smooth Scrolling**: Enhanced implementation for internal anchor links with refined easing
- **Scroll Animations**: Advanced IntersectionObserver-based animations with staggered reveals for visual elements
- **Interactive Effects**: 3D tilt effects on cards, floating animations for icons, and dynamic particle system
- **Progressive Enhancement**: Typing effect for hero subtitle, scroll progress indicator, and parallax scrolling
- **Performance Optimized**: RequestAnimationFrame-based animations for smooth 60fps performance

## Asset Management
- **Image Strategy**: Uses placeholder images in gallery with background images referenced from attached assets
- **Optimization**: Static assets are referenced directly without build process for simplicity

# External Dependencies

## Development Tools
- **http-server**: Local development server (v14.1.1) for serving static files during development

## External Resources
- **Google Fonts API**: Roboto font family loaded from Google's CDN for typography
- **Background Images**: References images from attached_assets directory for hero section background

## Browser APIs
- **Intersection Observer API**: For scroll-based animations and visibility detection
- **Smooth Scrolling API**: Native browser smooth scrolling behavior for navigation