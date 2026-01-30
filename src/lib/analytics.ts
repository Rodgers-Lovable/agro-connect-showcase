// Umami Analytics Event Tracking Utility

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

/**
 * Track an event with Umami analytics
 * @param event - The event name to track
 * @param data - Optional data to send with the event
 */
export const trackEvent = (event: string, data?: Record<string, unknown>): void => {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(event, data);
  } else if (import.meta.env.DEV) {
    console.log(`[Analytics] ${event}`, data || "");
  }
};

// CTA Events
export const trackViewProducts = (location: string) => 
  trackEvent("cta_view_products", { location });

export const trackRequestQuote = (location: string) => 
  trackEvent("cta_request_quote", { location });

export const trackLearnMore = (location: string) => 
  trackEvent("cta_learn_more", { location });

export const trackExploreProducts = () => 
  trackEvent("cta_explore_products");

export const trackContactUs = (location: string) => 
  trackEvent("cta_contact_us", { location });

export const trackRequestSamples = () => 
  trackEvent("cta_request_samples");

// Product Events
export const trackCategoryFilter = (category: string) => 
  trackEvent("product_category_filter", { category });

export const trackProductQuoteRequest = (product: string) => 
  trackEvent("product_quote_request", { product });

// Contact Form Events
export const trackFormStart = () => 
  trackEvent("contact_form_start");

export const trackFormSubmit = () => 
  trackEvent("contact_form_submit");

export const trackFormSuccess = () => 
  trackEvent("contact_form_success");

export const trackFormError = (error: string) => 
  trackEvent("contact_form_error", { error });

// Quality Page Events
export const trackJourneyStepClick = (step: string, stepId: number) => 
  trackEvent("journey_step_click", { step, step_id: stepId });

export const trackJourneyToggle = (action: "pause" | "resume") => 
  trackEvent("journey_tracking_toggle", { action });

// Engagement Events
export const trackFaqExpand = (question: string) => 
  trackEvent("faq_expand", { question });

export const trackExternalLinkClick = (type: "phone" | "email") => 
  trackEvent("external_link_click", { type });
