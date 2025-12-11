import React, { useEffect } from 'react';

// Careers component - redirects to external URL
function Careeres() {
  useEffect(() => {
    // Immediate redirect to external careers page - use replace to avoid back button issues
    const redirect = () => {
      window.location.replace('https://bes-j2gn.vercel.app/');
    };
    
    // Redirect immediately
    redirect();
    
    // Backup redirect after a short delay
    const timeout = setTimeout(redirect, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  // Redirect on component mount as well
  if (typeof window !== 'undefined') {
    window.location.replace('https://bes-j2gn.vercel.app/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0122] to-[#220a29]">
      <div className="text-center">
        <p className="text-white text-lg mb-4">Redirecting to careers page...</p>
        <p className="text-white text-sm opacity-70">If you are not redirected, <a href="https://bes-j2gn.vercel.app/" className="text-purple-400 underline">click here</a></p>
      </div>
    </div>
  );
}

export default Careeres;