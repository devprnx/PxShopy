import type { Metadata } from "next";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";
import AuthMiddleware from "@/components/auth/AuthMiddleware";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DemoPopup from "@/components/ui/DemoPopup";
import FloatingFeaturesButton from "@/components/ui/FloatingFeaturesButton";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'PX Shop - Premium Shopping Experience',
  description: 'Discover premium products at PX Shop. Quality, style, and exceptional service.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans bg-slate-50 antialiased`}>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <AuthMiddleware>
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    {children}
                  </main>
                  <Footer />
                </div>
              </AuthMiddleware>
              <DemoPopup />
              <FloatingFeaturesButton />
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
