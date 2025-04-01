import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

// Export the Tailwind CSS configuration
export default {
  // Enable the dark mode variant
  darkMode: 'class',
  // Specify the paths to all of the template files in the project
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Extend the default color palette
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        extra: 'var(--bg-extra)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        mm: 'var(--text-mm)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
      },
      fontFamily: {
        title: 'var(--font-signika)',
        body: 'var(--font-baloo)',
      },
      screens: {
        '2xs': '360px',
        xs: '380px',
        '3xl': '2080px',
        '4xl': '2360px',
      },
      height: {
        112: '28rem',
        128: '32rem',
      },
      width: {
        '1/8': '12.5%',
        '7/8': '87.5%',
      },
      maxWidth: {
        '1/3': '33.333333%',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // Include additional plugins
  plugins: [animatePlugin],
  future: {
    // Enable hover only when supported
    hoverOnlyWhenSupported: true,
  },
} satisfies Config; // Ensure the configuration satisfies the Tailwind CSS Config type
