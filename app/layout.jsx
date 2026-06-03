import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const themePreferenceScript = `
  (function () {
    try {
      var theme = localStorage.getItem("theme");
      if (theme && theme !== "dark" && theme !== "light") {
        localStorage.removeItem("theme");
      }
    } catch (error) {}
  })();
`;

export const metadata = {
  title: "Salih - Portfolio",
  description: "Salih's portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <script dangerouslySetInnerHTML={{ __html: themePreferenceScript }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
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
