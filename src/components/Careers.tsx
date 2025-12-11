import React, { useEffect } from 'react';

// Careers component - redirects to external URL
function Careeres() {
  useEffect(() => {
    // Redirect to external careers page
    window.location.href = 'https://bes-kappa.vercel.app/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0122] to-[#220a29]">
      <div className="text-center">
        <p className="text-white text-lg">Redirecting to careers page...</p>
      </div>
    </div>
  );
}

export default Careeres;