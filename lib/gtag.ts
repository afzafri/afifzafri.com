export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Check if GA_ID exists
export const hasGAId = !!GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (hasGAId) {
    window.gtag('config', GA_ID as string, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (hasGAId) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
