import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Florencia Astudillo - Fotógrafía Profesional',
  description: 'Florencia Astudillo Fotografía profesional y fotoperiodismo que capturan momentos auténticos con estilo y calidad.',
  canonical: 'https://florenciaastudillo.vercel.app/'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}
      <Analytics/>
      </body>
    </html>
  )
}
