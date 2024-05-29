import React from 'react';

export default function PageNotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/images/background-error.png')] bg-contain">
      <div className="text-primary text-center">
        <h1 className="text-8xl">404</h1>
        <p className="text-3xl">Page not found</p>
        <p>Sorry, we can't find the page you are looking for</p>
      </div>
    </div>
  );
}
