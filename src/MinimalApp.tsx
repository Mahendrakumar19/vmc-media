import Index from "./pages/Index";
import ErrorBoundary from "./components/ErrorBoundary";

// Minimal App for testing - legacy file kept for compatibility
// Use Next.js App Router (/app directory) for production

const MinimalApp = () => (
  <ErrorBoundary>
    <Index />
  </ErrorBoundary>
);

export default MinimalApp;