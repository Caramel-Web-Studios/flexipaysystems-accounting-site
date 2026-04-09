import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import AccountingChat from "@/components/AccountingChat";
import ClientWrapper from "../components/ClientWrapper"; // Import the wrapper
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// --- THIS IS WHERE YOU ADD THE TITLE ---
export const metadata: Metadata = {
  title: "FlexiPay Systems | Automated UK Payroll & Finance",
  description: "Advanced financial systems and automated payroll for UK founders and business owners.",
  metadataBase: new URL('https://flexipaysystems.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {/* Wrap children in the client-side animation component */}
        <ClientWrapper>
          {children}
          {/* This renders the floating chat bubble on every page */}
       
        </ClientWrapper>
        <Footer />
         <AccountingChat />
      </body>
    </html>
  );
}