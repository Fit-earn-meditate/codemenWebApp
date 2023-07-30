

import "../styles/global.scss";

// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorFallback from '../components/error/index.js';

function Application({ Component, pageProps }) {
  return (
    // <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Component {...pageProps} />
    // </ErrorBoundary>
  )
}

export default Application
