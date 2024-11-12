import './globals.css';
import { Metadata } from 'next';

// Fonts
import { fonts } from '@/fonts';

// utils
import { env, generateSeo, GoogleAnalytics, Providers } from '@/utils';

// Generate SEO metadata
export const metadata: Metadata = generateSeo({
  title: {
    template: '%s | Pravah | SKIT Jaipur',
    default: 'Pravah | SKIT Jaipur',
  },
  description: 'Website for Pravah 2025 at SKIT College Jaipur',
  url: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.montserrat} antialiased`}>
        <GoogleAnalytics GA_TRACKING_ID={env.GA_TRACKING_ID} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
