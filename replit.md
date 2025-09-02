# Overview

This is a static website showcasing a Modular Flood-Diversion Pods project. The site presents an engineering portfolio piece focused on designing resilient solutions for northern mountain slopes to prevent landslides and protect homes. The website features a hero section, project description, prototype gallery, and impact metrics, built with vanilla HTML, CSS, and JavaScript.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static Site Structure**: Built with vanilla HTML, CSS, and JavaScript for simplicity and fast loading
- **Single Page Design**: All content is contained in a single HTML file with smooth scrolling navigation
- **Responsive Layout**: Uses CSS Grid and Flexbox for responsive design across different screen sizes
- **Progressive Enhancement**: JavaScript adds smooth scrolling and scroll-based animations but site remains functional without it

## Styling and UI
- **CSS Architecture**: Single stylesheet approach with organized sections for reset, components, and responsive design
- **Typography**: Uses Google Fonts (Roboto) for consistent, professional appearance
- **Visual Hierarchy**: Implements a hero section with background overlay and structured content sections
- **Animation System**: Intersection Observer API for scroll-triggered animations on gallery items and impact cards

## JavaScript Features
- **Smooth Scrolling**: Custom implementation for internal anchor links
- **Scroll Animations**: IntersectionObserver-based animations for visual elements as they enter viewport
- **Progressive Loading**: Elements start hidden and animate in when visible for better user experience

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