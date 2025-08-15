// Performance monitoring utilities
interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
  id: string;
  navigationType: string;
}

export const reportWebVitals = (metric: WebVitalMetric) => {
  // Log performance metrics in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // In production, you could send metrics to an analytics service
  // Example: analytics.track('Web Vital', metric);
};

// Utility to measure custom performance metrics
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof performance !== 'undefined' && performance.mark) {
    const startMark = `${name}-start`;
    const endMark = `${name}-end`;
    const measureName = name;

    performance.mark(startMark);
    fn();
    performance.mark(endMark);
    performance.measure(measureName, startMark, endMark);

    const measure = performance.getEntriesByName(measureName)[0];
    if (measure && process.env.NODE_ENV === 'development') {
      console.log(`${name}: ${measure.duration}ms`);
    }

    // Clean up marks and measures
    performance.clearMarks(startMark);
    performance.clearMarks(endMark);
    performance.clearMeasures(measureName);
  } else {
    fn();
  }
};

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  }
};

// Intersection Observer utility for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options,
    });
  }
  return null;
};
