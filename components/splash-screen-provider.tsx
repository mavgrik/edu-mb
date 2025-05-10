"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"
import { usePathname } from "next/navigation"
import SplashScreen from "./splash-screen"

// Create context to track splash screen state across the app
type SplashScreenContextType = {
  hasSeenSplashScreen: boolean
  setHasSeenSplashScreen: (value: boolean) => void
  resetSplashScreen: () => void
}

const SplashScreenContext = createContext<SplashScreenContextType>({
  hasSeenSplashScreen: false,
  setHasSeenSplashScreen: () => {},
  resetSplashScreen: () => {},
})

export const useSplashScreen = () => useContext(SplashScreenContext)

export function SplashScreenProvider({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false)
  const [splashComplete, setSplashComplete] = useState(false)
  const [hasSeenSplashScreen, setHasSeenSplashScreen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Function to reset the splash screen
  const resetSplashScreen = () => {
    sessionStorage.removeItem("hasSeenSplashScreen")
    setShowSplash(true)
    setSplashComplete(false)
    setHasSeenSplashScreen(false)
  }

  useEffect(() => {
    // Check if this is a new window/tab session
    const hasSeenInSession = sessionStorage.getItem("hasSeenSplashScreen")

    if (!hasSeenInSession) {
      // First visit in this session - show splash screen
      setShowSplash(true)
      setSplashComplete(false)
      setHasSeenSplashScreen(false)
      // Mark that we've shown the splash screen in this session
      sessionStorage.setItem("hasSeenSplashScreen", "true")
    } else {
      // Already seen in this session
      setSplashComplete(true)
      setHasSeenSplashScreen(true)
    }

    setMounted(true)
  }, [])

  // This effect runs when the pathname changes (page navigation)
  useEffect(() => {
    // The splash screen state is maintained during navigation
  }, [pathname])

  // If not mounted yet, render nothing to prevent flash of content
  if (!mounted) return null

  return (
    <SplashScreenContext.Provider
      value={{
        hasSeenSplashScreen,
        setHasSeenSplashScreen,
        resetSplashScreen,
      }}
    >
      {/* Only render children if splash is complete or not needed */}
      {splashComplete ? children : null}

      {/* Show splash screen only when needed */}
      {showSplash && (
        <SplashScreen
          minimumLoadTimeMs={2500}
          onComplete={() => {
            setShowSplash(false)
            setSplashComplete(true)
            setHasSeenSplashScreen(true)
          }}
        />
      )}
    </SplashScreenContext.Provider>
  )
}
