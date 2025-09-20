import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { FloatingButtons } from '@/components/app/FloatingButtons';
import { i18n, type Locale } from '../../i18n-config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'Cảnh Quan Kiến Trúc Xanh',
  description: 'Chuyên thiết kế, thi công sân vườn, hồ cá Koi và bảo dưỡng cảnh quan chuyên nghiệp.',
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang} className={`${inter.variable}`}>
      <body className="antialiased">
        {children}
        <FloatingButtons />
        <Toaster />
      </body>
    </html>
  );
}
