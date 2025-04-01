import ProgressBar from './ui/progress-bar';

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang ="en">
      <body className={`${inter.className} antialiased`} >
        <ProgressBar>
          {children}
        </ProgressBar>
      </body>
    </html>
  );
}
