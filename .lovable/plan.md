

# Streamlined Umami Analytics Implementation

## Overview

This refined plan focuses on tracking meaningful user interactions that provide actionable business insights - primarily conversion events, product interest, and form engagement.

## Events to Track (Refined List)

### Call-to-Action (CTA) Buttons - 6 events

| Event Name | Trigger | Data Captured |
|------------|---------|---------------|
| `cta_view_products` | "View Products" button click | `{ location: "hero" }` |
| `cta_request_quote` | "Request Quote" button clicks | `{ location: "hero" \| "nav" \| "product_card" }` |
| `cta_learn_more` | "Learn More" about company | `{ location: "hero" }` |
| `cta_explore_products` | "Explore All Products" button | - |
| `cta_contact_us` | "Contact Us" buttons | `{ location: "hero" \| "quality_cta" }` |
| `cta_request_samples` | "Request Product Samples" button | - |

### Product Interactions - 2 events

| Event Name | Trigger | Data Captured |
|------------|---------|---------------|
| `product_category_filter` | Filter products by category | `{ category: "coffee-tea" }` |
| `product_quote_request` | "Request Quote" on product card | `{ product: "Coffee" }` |

### Contact Form - 4 events

| Event Name | Trigger | Data Captured |
|------------|---------|---------------|
| `contact_form_start` | First field focus | - |
| `contact_form_submit` | Form submission attempt | - |
| `contact_form_success` | Successful submission | - |
| `contact_form_error` | Submission failed | `{ error: "email_send_failed" }` |

### Quality Page - Interactive Timeline - 2 events

| Event Name | Trigger | Data Captured |
|------------|---------|---------------|
| `journey_step_click` | Click on traceability step | `{ step: "Farm Sourcing", step_id: 1 }` |
| `journey_tracking_toggle` | Pause/Resume animation | `{ action: "pause" \| "resume" }` |

### Content Engagement - 2 events

| Event Name | Trigger | Data Captured |
|------------|---------|---------------|
| `faq_expand` | Expand FAQ accordion item | `{ question: "How do I..." }` |
| `external_link_click` | Click phone/email links | `{ type: "phone" \| "email" }` |

**Total: 16 focused events**

---

## Technical Implementation

### New File: `src/lib/analytics.ts`

Creates a centralized analytics utility with:
- TypeScript type definitions for all events
- `trackEvent(name, data?)` wrapper function
- Graceful handling when umami is unavailable (dev mode)

### Files to Modify

| File | Events Added |
|------|--------------|
| `src/vite-env.d.ts` | Add global `umami` type definition |
| `src/components/layout/Navigation.tsx` | `cta_request_quote` (nav button) |
| `src/components/ContactForm.tsx` | Form lifecycle events (start, submit, success, error) |
| `src/components/ProductCard.tsx` | `product_quote_request` with product name |
| `src/components/FarmToExportJourney.tsx` | `journey_step_click`, `journey_tracking_toggle` |
| `src/pages/Home.tsx` | Hero CTAs, `faq_expand` |
| `src/pages/Products.tsx` | `product_category_filter` |
| `src/pages/About.tsx` | CTA buttons |
| `src/pages/Quality.tsx` | CTA buttons |
| `src/pages/Contact.tsx` | `external_link_click` for phone/email |

---

## Summary

- **16 meaningful events** focused on conversions and engagement
- **1 new file** for analytics utility
- **10 files modified** to add tracking
- **Business value**: Track which products attract interest, form conversion rates, and CTA effectiveness

