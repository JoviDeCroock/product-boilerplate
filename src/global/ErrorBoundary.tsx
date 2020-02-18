import { h } from 'preact';
import { useErrorBoundary } from 'preact/hooks';

const ErrorBoundary = ({ children }) => {
  const [error, _resetError] = useErrorBoundary();
  return error ? (
    <div>
      <h2>Oh no something went wrong.</h2>
      <p>
        {error.message}
      </p>
    </div>
  ) : children;
}

export default ErrorBoundary;
