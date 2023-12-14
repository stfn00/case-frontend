import localFont from 'next/font/local'

export const gothamFont = localFont({
  src: [
    {
      path: '../../public/fonts/Gotham-Medium.otf',
      weight: '400',
      style: 'normal',
      fallback: ['serif'],
      adjustFontFallback: 'serif',
      display: 'swap',
      preload: true,
    },
    {
      path: '../../public/fonts/Gotham-Book.otf',
      weight: '500',
      style: 'normal',
      fallback: ['serif'],
      adjustFontFallback: 'serif',
      display: 'swap',
      preload: true,
    },
    {
      path: '../../public/fonts/Gotham-Bold.otf',
      weight: '800',
      style: 'normal',
      fallback: ['serif'],
      adjustFontFallback: 'serif',
      display: 'swap',
      preload: true,
    },
  ],
})
