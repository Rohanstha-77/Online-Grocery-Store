"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { UpdateCart } from "./_context/UpdateCart";
import { usePathname } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Grocery Store",
//   description: "Best Way to get your product at your door",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [updateCarts, setUpdateCarts] = useState(false);
  const showHeader = pathname !== "/sign-in" && pathname !== "/create-account";
  const showFooter = pathname !== "/sign-in" && pathname !== "/create-account";

  return (
    <html lang="en">
      <body className={inter.className}>
        <UpdateCart.Provider value={{ updateCarts, setUpdateCarts }}>
          {showHeader && <Header />}
          {children}
          <Toaster />
          {showFooter && <Footer />}
        </UpdateCart.Provider>
      </body>
    </html>
  );
}
