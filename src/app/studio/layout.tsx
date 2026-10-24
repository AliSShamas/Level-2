import type {ReactNode} from 'react';

interface StudioLayoutProps {
  children: ReactNode;
}

export default function StudioLayout({
  children
}: StudioLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}