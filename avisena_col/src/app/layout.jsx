import '@/styles/globals.css';

export const metadata = {
  title: 'Avisena Col',
  description: 'Panel de inicio de sesión de AVISENA COL',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
