# ShutterStories Photography Blog

## Overview

ShutterStories is a modern, minimalist photography blog website designed to showcase photography content, tutorials, and stories. The project is built as a static website using vanilla HTML, CSS, and JavaScript with a focus on elegant design, smooth animations, and responsive layouts. The site features multiple pages including Home, Blog, Tutorials, About, and Contact sections, all designed with a clean aesthetic using teal and purple color gradients and elegant typography.

**Status:** Complete (October 2025)  
**Tech Stack:** Pure HTML5, CSS3, JavaScript (no frameworks)  
**Color Theme:** Teal (#20b2aa) and Purple (#9b59b6) gradients

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Font Awesome 6.4.0 for icons
- Google Fonts (Playfair Display for headings, Poppins for body text)
- External image hosting via Unsplash CDN

**Design System:**
- CSS Custom Properties for theming (primary: #20b2aa teal, secondary: #9b59b6 purple, accent: #48d1cc light cyan)
- Mobile-first responsive design approach
- Maximum content width of 1200px with centered container pattern
- Consistent 20px horizontal padding across breakpoints

**Page Structure:**
- Multi-page static site with 5 main sections: Home, Blog, Tutorials, About, Contact
- Shared navigation component across all pages with active state indicators
- Sticky navbar that changes appearance on scroll
- Consistent page header component for non-home pages

**Key Features:**
1. **Preloader Animation:** Camera shutter animation with teal/purple gradient on initial page load
2. **Hero Slider:** Auto-rotating image slideshow on homepage with manual navigation controls and dot indicators
3. **Content Filtering:** Category-based filtering system for blog posts (Portrait, Landscape, Travel, Street, Tutorials)
4. **Lightbox Viewer:** Full blog post viewer with images and complete content
5. **Accordion Tutorials:** Expandable/collapsible tutorial sections on Tutorials page
6. **Scroll Animations:** IntersectionObserver-powered fade-in effects for progressive content reveal
7. **Contact Form Validation:** JavaScript form validation with animated success message
8. **Sticky Navbar:** Navbar changes style on scroll with smooth transitions
9. **Back-to-Top Button:** Smooth scroll to top button appears after scrolling threshold
10. **Responsive Design:** Mobile-first approach with hamburger menu and breakpoint optimizations

**Component Architecture:**
- Reusable card components for blog posts and tutorials
- Responsive navigation with mobile hamburger menu toggle
- Grid-based layouts for content display
- Form components for contact page

### Interaction Patterns

**Navigation:**
- Desktop: Horizontal menu bar
- Mobile: Hamburger menu with toggle functionality
- Active page highlighting in navigation
- Smooth scroll behavior for internal links

**Animations & Effects:**
- CSS transitions (0.3s ease) for hover states
- JavaScript-powered fade-in animations on scroll
- Slider transitions for hero carousel
- Navbar background opacity change on scroll

**Event Handling:**
- Window scroll events for navbar state and back-to-top visibility
- Click handlers for navigation toggle, slider controls, and filter buttons
- Load event for preloader dismissal

## External Dependencies

### Third-Party Services

**CDN Resources:**
- Google Fonts API: Typography (Playfair Display, Poppins)
- Font Awesome CDN (v6.4.0): Icon library
- Unsplash: Image hosting and delivery

**External Assets:**
- No external API integrations for dynamic content
- No authentication services
- No analytics or tracking services (currently)
- No backend or database connections

### Browser APIs Used
- Intersection Observer (implied for scroll animations)
- Window scroll events
- DOM manipulation APIs
- Local event listeners

### Content Delivery
- Static HTML files served directly via Python HTTP server
- CSS loaded from `/css/styles.css`
- JavaScript from `/js/main.js`
- Favicon from `/favicon.svg` (teal/purple gradient camera icon)
- Images via Unsplash URLs with query parameters for sizing (`?w=800&h=1000&fit=crop`)

## Project Files

```
/
├── index.html          # Home page with hero slider
├── blog.html          # Blog page with filterable posts and lightbox
├── tutorials.html     # Tutorials page with accordion sections
├── about.html         # About page with timeline
├── contact.html       # Contact page with validated form
├── favicon.svg        # Custom SVG favicon
├── css/
│   └── styles.css     # All styling with teal/purple theme
└── js/
    └── main.js        # All interactive functionality
```

## Running the Project

The website is served using Python's built-in HTTP server on port 5000:
```bash
python -m http.server 5000
```

## Future Enhancements

Potential improvements for future development:
- CMS integration for dynamic content management
- Database for blog posts and comments
- Static site generator integration
- Dark/light theme toggle
- Search functionality
- Newsletter integration
- Social sharing features