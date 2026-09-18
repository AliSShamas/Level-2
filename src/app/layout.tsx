import type {Metadata} from 'next';
import type {ReactNode} from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Growth Platform',
  description:
    'A bilingual coaching, consulting, training, and media platform.'
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}