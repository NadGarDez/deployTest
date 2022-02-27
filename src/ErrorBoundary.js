import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  render() {
    if (this.state.error !== null) {
      // You can render any custom fallback UI
      return (
        <div style={{ height: 80, width: "100%", backgroundColor: "black" }}>
          <p style={{ color: "white" }}>Something went wrong</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
