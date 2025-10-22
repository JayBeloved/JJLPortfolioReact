import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import LoadingAnimation from './LoadingAnimation';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {isLoading ? (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Analytics />
          <SpeedInsights />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Layout;
