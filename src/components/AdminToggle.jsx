import React, { useState, useEffect } from 'react';
import { Settings, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdminToggle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActiveMode, setIsActiveMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check initial state from localStorage
    const savedState = localStorage.getItem('portfolio_active');
    // Also check environment variable if localStorage is not set, though env vars are static in build
    const envState = import.meta.env.VITE_PORTFOLIO_ACTIVE === 'true';
    
    setIsActiveMode(savedState === 'true' || (savedState === null && envState));

    const handleKeyDown = (e) => {
      // Ctrl + Shift + A to toggle admin panel
      if (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMode = () => {
    const newState = !isActiveMode;
    setIsActiveMode(newState);
    localStorage.setItem('portfolio_active', String(newState));
    
    toast({
      title: newState ? "Portfolio Activated" : "Maintenance Mode",
      description: newState ? "Showing full portfolio site." : "Showing coming soon page.",
      variant: newState ? "default" : "destructive",
    });

    // Small delay to allow toast to show before reload
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center justify-between mb-4 gap-4">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Settings size={16} className="text-emerald-500" />
          Admin Panel
        </h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-gray-400 mb-2">Current Mode:</p>
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-3 h-3 rounded-full ${isActiveMode ? 'bg-emerald-500' : 'bg-yellow-500'}`} />
          <span className="text-sm text-white font-medium">
            {isActiveMode ? 'Portfolio Active' : 'Coming Soon'}
          </span>
        </div>

        <Button 
          onClick={toggleMode}
          variant="outline"
          className="w-full border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 text-white"
        >
          Switch to {isActiveMode ? 'Coming Soon' : 'Active'}
        </Button>
      </div>
      
      <p className="text-[10px] text-gray-500 mt-3 text-center">
        Use Ctrl+Shift+A to toggle this panel
      </p>
    </div>
  );
};

export default AdminToggle;