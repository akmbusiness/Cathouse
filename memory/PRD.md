# PRD — Cat House (منزل القط) Website

## Original Problem Statement
Build a modern, premium, visually stunning main website for Cat House in Riyadh with: hero, about, services, reviews, gallery, location map, contact form, sticky nav, mobile-first responsive design, smooth transitions, floating WhatsApp CTA, and local SEO targeting "cat store Riyadh" style keywords.

## User Choices
- Language: English only
- Call + WhatsApp number: +966 59 522 7853
- Brand assets: user provided real logo and real photos
- Contact form behavior: save inquiries in backend database
- Additional request: continue and optimize for fast loading
- Latest content request: explicitly mention all animal care availability for Cats, Dogs, and Birds

## Architecture Decisions
- Frontend: React + existing Shadcn UI components + responsive single-page sections with anchor navigation
- Backend: FastAPI + MongoDB (Motor) with validated Pydantic models
- API: `/api/contact-inquiries` POST/GET for contact capture and retrieval
- SEO: dynamic title + meta description + keywords in frontend
- Performance: eager/lazy image loading strategy, preconnect hints, content-visibility for below-the-fold sections

## Implemented
- Full Cat House website with sections: Hero, About, Services, Reviews, Gallery, Location (Google Map), Contact
- Sticky navigation with desktop links and mobile menu
- CTA actions: Visit store, Call store, Get directions, floating WhatsApp button
- User logo and uploaded photos integrated into hero/gallery
- Updated website messaging and services to clearly state complete care for Cats, Dogs, and Birds
- Contact form integrated to backend persistence with success/failure toasts
- Backend contact inquiry models + endpoints with Mongo-safe responses (no `_id` leakage)
- Styling system updated for warm premium aesthetic, smooth motion, and responsive layout
- Added comprehensive `data-testid` attributes for interactive and critical UI elements

## Validation Completed
- Frontend screenshots captured on preview URL across key flows
- API validated via curl (POST/GET contact inquiries)
- Lint: frontend JS and backend Python passing
- Testing agent run completed: 100% backend and frontend, no blocking issues

## Prioritized Backlog
### P0
- Integrate all remaining user photos when uploaded
- Optional admin/inbox page for viewing inquiries with filters/search

### P1
- Add structured data (LocalBusiness JSON-LD) and OG social meta tags
- Add server-side rate-limit/throttle for contact form spam protection

### P2
- Add bilingual switch (EN/AR) with RTL support
- Add simple CMS-like JSON content editor for quick non-technical updates

## Next Tasks
1. Insert additional uploaded images into curated section slots (hero/service/gallery).
2. Tune copy and image ordering based on owner preference.
3. Add optional inquiry management dashboard if requested.
