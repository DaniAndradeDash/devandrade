import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import ComingSoonPage from '@/pages/ComingSoonPage';
import CopyrightPage from '@/pages/CopyrightPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import { Toaster } from '@/components/ui/toaster';
import AdminToggle from '@/components/AdminToggle';

function App() {
  const [isPortfolioActive, setIsPortfolioActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage first (admin override)
    const localState = localStorage.getItem('portfolio_active');
    
    // Check environment variable
    const envState = import.meta.env.VITE_PORTFOLIO_ACTIVE === 'true';

    // Priority: LocalStorage > Environment Variable > Default (false)
    if (localState !== null) {
      setIsPortfolioActive(localState === 'true');
    } else {
      setIsPortfolioActive(envState);
    }
    
    setIsLoading(false);
  }, []);

  if (isLoading) return null; // Or a loading spinner

  return (
    <Router>
      <Helmet>
        <title>Daniel Andrade - Desarrollador Web Freelance</title>
        <meta name="description" content="Desarrollador web freelance especializado en React, Next.js y soluciones web personalizadas." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        <Routes>
          {/* Main Route - Conditional */}
          <Route 
            path="/" 
            element={isPortfolioActive ? <ComingSoonPage /> : <HomePage /> } 
          />
          
          {/* Explicit Access Routes */}
          <Route path="/portfolio" element={<HomePage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          
          {/* Legal Pages */}
          <Route path="/copyright" element={<CopyrightPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Toaster />
        <AdminToggle />
      </div>
    </Router>
  );
}

export default App;