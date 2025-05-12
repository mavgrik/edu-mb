import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Baloo_2, Signika } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SplashScreenProvider } from '@/components/splash-screen-provider';
import { ThemeProvider } from '@/components/theme-provider';

// Metadata configuration for the application
export const metadata: Metadata = {
  generator: 'Next.js', // Generator of the site
  applicationName: 'Siccità in Pianura Padana', // Name of the application
  referrer: 'strict-origin', // Referrer policy
  keywords: [
    // Keywords for SEO
    'siccità',
    'pianura padana',
    'crisi idrica',
    'monitoraggio',
    'dati satellitari',
    'rilevazioni sul campo',
    'analisi',
    'ambiente',
    'clima',
    'cambiamento climatico',
    'risorse idriche',
    'conservazione',
    'gestione delle risorse idriche',
  ],
  authors: [
    { name: 'mavgrik', url: 'https://tree.mavgrik.net' },
    { name: 'matteohv', url: 'mailto:matteo.benini.scuola@gmail.com' },
  ], // Author information
  formatDetection: {
    email: false, // Disable email detection
    address: true, // Enable address detection
    telephone: true, // Enable telephone detection
  },
  robots: {
    // Robots meta tag configuration
    index: true, // Allow indexing
    follow: true, // Allow following links
    nocache: false, // Disable no-cache
    googleBot: {
      index: true, // Allow Google bot to index
      follow: false, // Disallow Google bot to follow links
      noimageindex: false, // Allow Google bot to index images
      'max-video-preview': -1, // No limit on video preview
      'max-image-preview': 'large', // Large image preview
      'max-snippet': 1, // Maximum snippet length
    },
  },
  title: 'Siccità in Pianura Padana', // Title of the site
  description:
    'Monitoraggio e analisi della crisi idrica 2022-23 nella Pianura Padana attraverso dati satellitari e rilevazioni sul campo', // Description of the site
  icons: {
    // Icons configuration
    icon: [
      { url: '/icons/icon.svg', type: 'image/svg+xml', sizes: 'any' }, // SVG icon
      { url: '/icons/favicon.ico', type: 'image/x-icon', sizes: '32x32' }, // Favicon
    ],
    apple: { url: '/icons/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }, // Apple touch icon
  },
  manifest: '/icons/manifest.webmanifest', // Web manifest file
  category: 'Education', // Category of the site
};

const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--baloo',
  weight: '400',
  style: 'normal',
});

const signika = Signika({
  subsets: ['latin'],
  display: 'swap',
  variable: '--signika',
  weight: '600',
  style: 'normal',
});

export const viewport: Viewport = {
  initialScale: 1, // Set the initial scale to 1
  maximumScale: 1, // Disable auto-zoom on mobile Safari
  width: 'device-width', // Set the viewport width to the device width
  height: 'device-height', // Set the viewport height to the device height
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${baloo.variable} ${signika.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SplashScreenProvider>
            <div className="bg-background flex min-h-screen flex-col">
              <Navbar />
              <main className="z-0 mb-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">{children}</main>
              <Footer />
            </div>
          </SplashScreenProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
