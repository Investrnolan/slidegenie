
import './global.css';
import React from 'react';

export const metadata = {
  title: 'SlideGenie',
  description: 'AI-powered presentation generator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
