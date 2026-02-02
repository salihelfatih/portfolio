import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Salih - Portfolio",
  description: "Salih's portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${jetbrainsMono.variable} flex flex-col min-h-screen overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
