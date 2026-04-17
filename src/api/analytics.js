/**
 * Analytics API - Google Analytics 4 (GA4) integration.
 *
 * Loads the gtag.js library on demand and exposes helpers to initialise the
 * tracker and log SPA page views. Configured via VITE_GA4_MEASUREMENT_ID.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

/**
 * Ensure window.gtag exists. Safe to call before the GA script has finished
 * loading - queued events will be flushed once the script arrives.
 */
function ensureGtag() {
  if (typeof window === 'undefined') return null;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    // eslint-disable-next-line func-names
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }
  return window.gtag;
}

let initialised = false;

function injectGtagScript(measurementId) {
  if (document.querySelector(`script[data-ga4="${measurementId}"]`)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.setAttribute('data-ga4', measurementId);
  document.head.appendChild(script);
}

/**
 * Initialise GA4. Called once from main.jsx on app startup. No-ops if the
 * measurement ID is not configured (e.g. local dev without the env var set).
 */
export function initAnalytics() {
  if (initialised) return;
  if (!MEASUREMENT_ID) {
    console.debug('[Analytics] VITE_GA4_MEASUREMENT_ID not set - analytics disabled.');
    return;
  }
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const gtag = ensureGtag();
  if (!gtag) return;

  injectGtagScript(MEASUREMENT_ID);

  gtag('js', new Date());
  // send_page_view:false - we fire page_view manually on route changes so the
  // SPA router is tracked accurately.
  gtag('config', MEASUREMENT_ID, { send_page_view: false });

  initialised = true;
}

export const analyticsApi = {
  /**
   * Log a page view / in-app navigation event. Called by NavigationTracker
   * whenever the SPA route changes.
   * @param {string} pageName
   */
  async logUserInApp(pageName) {
    if (!MEASUREMENT_ID) {
      console.debug('[Analytics] logUserInApp (disabled):', pageName);
      return;
    }

    const gtag = ensureGtag();
    if (!gtag) return;

    gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
    });
  },
};
