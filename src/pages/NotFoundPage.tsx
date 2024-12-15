import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Oops! Looks like you've traveled to a dimension that doesn't exist.</p>
      <Link to="/" className="text-[#ff9800] hover:underline">Go back to the home dimension</Link>
    </div>
  );
}

