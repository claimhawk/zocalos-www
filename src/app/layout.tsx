import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zocalos - El Portal Digital de tu Ciudad',
  description: 'Llevamos una homepage a cada pueblo y ciudad de Mexico. Ya no necesitas visitar 10 sitios web diferentes para hacer tus cosas - hazlo todo en el portal de tu zocalo.',
  keywords: ['zocalos', 'mexico', 'portal', 'ciudad', 'pueblo', 'servicios locales', 'comunidad'],
  authors: [{ name: 'Zocalos Inc.' }],
  openGraph: {
    title: 'Zocalos - El Portal Digital de tu Ciudad',
    description: 'Llevamos una homepage a cada pueblo y ciudad de Mexico',
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
