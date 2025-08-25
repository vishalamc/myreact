import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
          <img
            src="/404.png"
            alt="Error Occurred"
            className="w-full max-w-lg h-auto mb-8 animate-pulse"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Something Went Wrong
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            We encountered an unexpected error. You can go back home and try again.
          </p>
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-full shadow-md transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}