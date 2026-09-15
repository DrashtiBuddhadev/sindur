import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { FloatingContact } from "@/components/layout/floating-contact";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sindur Group | Build for Future",
  description:
    "Sindur Group has delivered 1000+ homes across Naranpura and beyond since 2014 — residential and commercial spaces designed for modern, eco-friendly living.",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('sindur-theme');if(!t){t='light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SmoothScroll />
        <ThemeProvider>{children}</ThemeProvider>
        <FloatingContact />
      </body>
    </html>
  );
}
