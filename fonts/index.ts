import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const funkyVibes = localFont({ src: './funkyVibes.ttf' });

export const fonts = {
  montserrat,
  funkyVibes,
};
