'use client';

import { usePathname } from 'next/navigation';
import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import SplashScreen from './splash-screen';

// Create context to track splash screen state across the app
type SplashScreenContextType = {
  hasSeenSplashScreen: boolean;
  setHasSeenSplashScreen: (value: boolean) => void;
  resetSplashScreen: () => void;
};

const SplashScreenContext = createContext<SplashScreenContextType>({
  hasSeenSplashScreen: false,
  setHasSeenSplashScreen: () => {},
  resetSplashScreen: () => {},
});

export const useSplashScreen = () => useContext(SplashScreenContext);

export function SplashScreenProvider({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [hasSeenSplashScreen, setHasSeenSplashScreen] = useState(true);
  const pathname = usePathname();

  // Function to reset the splash screen
  const resetSplashScreen = () => {
    sessionStorage.removeItem('hasSeenSplashScreen');
    setShowSplash(true);
    setHasSeenSplashScreen(false);
  };

  useEffect(() => {
    // Check if this is a new window/tab session
    const hasSeenInSession = sessionStorage.getItem('hasSeenSplashScreen');

    if (!hasSeenInSession) {
      // First visit in this session - show splash screen
      setShowSplash(true);
      setHasSeenSplashScreen(false);
      // Mark that we've shown the splash screen in this session
      sessionStorage.setItem('hasSeenSplashScreen', 'true');
    }
  }, []);

  // This effect runs when the pathname changes (page navigation)
  useEffect(() => {
    // The splash screen state is maintained during navigation
  }, [pathname]);

  return (
    <SplashScreenContext.Provider
      value={{
        hasSeenSplashScreen,
        setHasSeenSplashScreen,
        resetSplashScreen,
      }}
    >
      {/* Always render children, and conditionally show the splash screen */}
      {children}

      {/* Show splash screen only when needed */}
      {showSplash && (
        <SplashScreen
          onComplete={() => {
            setShowSplash(false);
            setHasSeenSplashScreen(true);
          }}
        />
      )}
    </SplashScreenContext.Provider>
  );
}
