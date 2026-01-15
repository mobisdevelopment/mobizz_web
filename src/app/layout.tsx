import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MobizzApp - Rezervări Simple și Rapide",
  description: "Simplificăm modul în care îți rezervi serviciile preferate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-100 text-dark-900 antialiased selection:bg-accent-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
