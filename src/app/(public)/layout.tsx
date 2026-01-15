import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

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
    <div className="flex flex-col min-h-screen font-sans bg-dark-900 text-dark-100 relative">
      <Navbar />
      <main className="flex-grow">{children}</main>

      {/* AI ChatBot Floating Component */}
      <ChatBot />

      <Footer />
    </div>
  );
}
