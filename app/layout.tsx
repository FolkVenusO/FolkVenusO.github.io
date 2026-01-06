import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import CustomCursor from './components/custom-cursor';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Lumen Studio — Premium Creative Portfolio',
  description: 'Immersive one-page experience with bento highlights, custom cursor, and luminous gradients.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} bg-midnight text-slate-100 antialiased relative overflow-x-hidden`}>
        <div className="mesh-bg" aria-hidden />
        <ThemeProvider>
          <CustomCursor />
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
