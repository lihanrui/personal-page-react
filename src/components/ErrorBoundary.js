/* eslint-disable no-console */
import React from 'react';
import { css } from '@emotion/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
            text-align: center;
            background: var(--bg);
            color: var(--text-primary);
          `}
        >
          <h1>Something went wrong</h1>
          <p>We're sorry, but something unexpected happened.</p>
          <button
            onClick={() => window.location.reload()}
            css={css`
              margin-top: 1rem;
              padding: 0.75rem 1.5rem;
              background: var(--primary);
              color: var(--text-on-primary, white);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-weight: 500;

              &:hover {
                opacity: 0.9;
              }
            `}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
