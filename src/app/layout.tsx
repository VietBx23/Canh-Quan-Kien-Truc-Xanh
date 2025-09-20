
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { FloatingButtons } from '@/components/app/FloatingButtons';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Cảnh Quan Kiến Trúc Xanh',
  description: 'Chuyên thiết kế, thi công sân vườn, hồ cá Koi và bảo dưỡng cảnh quan chuyên nghiệp.',
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="vi" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <FloatingButtons />
        <Toaster />
      </body>
    </html>
  );
}
