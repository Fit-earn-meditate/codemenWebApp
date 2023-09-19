
import "../styles/global.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
