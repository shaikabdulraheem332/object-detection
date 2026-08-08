import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Vision | Real-Time 3D Object Detection Website',
  description:
    'Identify humans, animals, vehicles, electronics, food, plants, tools, and thousands of objects instantly with real-time browser-based AI vision technology.',
  keywords: [
    'Object Detection',
    'AI Vision',
    'TensorFlow.js',
    'Computer Vision',
    'Real-time Detection',
    'COCO-SSD',
    '3D AI Website',
  ],
  authors: [{ name: 'AI Vision Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#040711',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-cyber-950 text-slate-100 antialiased selection:bg-neon-cyan selection:text-cyber-950 min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
