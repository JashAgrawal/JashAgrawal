import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Cursor from "@/components/cursor";
import CursorProvider from "@/context/cursor-context";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jash Agrawal | Personal Portfolio",
  description:
    "Jash Agrawal is a full-stack developer with 1+ years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <Script
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="jashagrawal"
          data-color="#fbe2e2"
          data-emoji="☕"
          data-font="Cookie"
          data-text="Buy me a coffee"
          data-outline-color="#000000"
          data-font-color="#000000"
          data-coffee-color="#FFDD00"
        ></Script>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <CursorProvider>
              <Cursor>
                <Header />
                {children}
                <Footer />
              </Cursor>
            </CursorProvider>
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
