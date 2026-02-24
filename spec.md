# Specification

## Summary
**Goal:** Build a full single-page personal portfolio website for Debraj Paul (student web developer) with a dark blue and white color scheme, seven sections, a contact form backed by a Motoko canister, and a sticky WhatsApp button.

**Planned changes:**
- Sticky top navigation bar with name/logo on the left, anchor links on the right, and a hamburger menu on mobile
- Hero section with headline "Professional Business Websites in 48 Hours", subheadline, two CTA buttons ("Get Free Demo" and "Chat on WhatsApp" linking to https://wa.me/918730818101), and an urgency badge "Limited Projects Taken Each Month"
- About Me section with bio text, profile photo placeholder (avatar-debraj.png), and a "Request Free Demo" CTA button
- Services section with 5 icon cards: Business Website Design, Landing Pages, Website Redesign, WhatsApp & Call Integration, Basic SEO Setup
- Portfolio section with 3 cards (Sample Gym, Lawyer, Coaching websites) using generated thumbnail images and a note "Demo designs available on request."
- Pricing section with 3 tiers — Basic (₹2,500), Standard (₹3,500 "Most Popular"), Premium (₹5,000) — each with feature lists and CTA buttons
- "Why Choose Me" section with 5 benefit points and icons/checkmarks
- Contact section with a form (Name, Phone, Business Type, Message) and contact details (phone as tel: link, WhatsApp link, email, location)
- Sticky floating WhatsApp button (bottom-right, green #25D366, pulse animation, "Chat with me" tooltip)
- Footer with copyright "© 2024 Debraj Paul. All rights reserved." and quick-links to all sections
- Motoko backend actor with stable storage, `submitInquiry()` method, and `getInquiries()` query method
- All generated images served from `frontend/public/assets/generated`

**User-visible outcome:** Visitors can browse Debraj Paul's portfolio, view services and pricing, and submit a contact inquiry that is stored on-chain, while a floating WhatsApp button provides instant chat access from any section.
