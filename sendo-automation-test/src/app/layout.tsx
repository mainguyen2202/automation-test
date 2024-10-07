import './globals.css';
import { Inter } from 'next/font/google';

import {
  TooltipProvider,
} from '@/components/ui/tooltip'
import * as globals from '@/shared/globals';

export const metadata = {
  metadataBase: new URL(globals.urls.domain),
  title: 'Sendo Automation Test - Artificial Intelligence in Test Automation',
  description:
    'Explore the future of test automation with Sendo Automation Test, leveraging artificial intelligence to enhance testing efficiency and accuracy.',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  // children là một đối tượng thuộc loại React.ReactNode. 
  // RootLayout sẽ là bố cục chính cho ứng dụng.
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
