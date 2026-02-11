import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "GIBSONVISUALSFOTOGRAFIE | Portfolio",
  description: "Authentische Fotografie von Kiara Gibson - Paare, Hochzeiten, Familien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased bg-white dark:bg-[#0f0f0f] text-[#1a1a1a] dark:text-white transition-colors duration-300 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Dark Mode Toggle Script or Button can go here if needed, but Next.js usually handles this with context/providers */}
        <div className="fixed bottom-8 right-8 z-50">
          {/* Simple Theme Toggle can be added later as a Client Component */}
        </div>
      </body>
    </html>
  );
}
