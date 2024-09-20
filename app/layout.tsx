import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {
  About,
  BackgroundGradientAnimation,
  Contact,
  Footer,
  Home,
  Navbar,
  Projects,
  Skills,
} from "@/app/components/portfolio";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abdullah Arab",
  description: "Abdullah Arab's personal website",
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
            <Navbar />
            <main>
              <Home />
              <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                  <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Turning ideas into apps that matter
                  </p>
                </div>
              </BackgroundGradientAnimation>

              <About />
              <Skills />
              <Projects />
              {/* <Experience /> */}
              <Contact />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
         <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
