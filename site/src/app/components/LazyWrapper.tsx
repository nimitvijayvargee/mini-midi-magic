import { Suspense } from 'react';

interface LoadingFallbackProps {
  text?: string;
}

export const LoadingFallback = ({ text = "Loading..." }: LoadingFallbackProps) => (
  <div className="flex items-center justify-center min-h-[200px]" role="status" aria-label={text}>
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  </div>
);

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LazyWrapper = ({ children, fallback }: LazyWrapperProps) => (
  <Suspense fallback={fallback || <LoadingFallback />}>
    {children}
  </Suspense>
);
