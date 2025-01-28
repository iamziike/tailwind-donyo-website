import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar";
import { Bricolage_Grotesque } from "next/font/google";
import { PAGES, THEMES } from "@/constants";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

const title = PAGES.home.title;
export const metadata: Metadata = {
  title: `${title.prefix} - ${title.suffix}`,
  description: title.suffix,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          bricolageGrotesque.className,
          "bg-background antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={THEMES.RED_MOON}
          enableSystem
          disableTransitionOnChange
          themes={[THEMES.LIGHT, THEMES.DARK, THEMES.SYSTEM, THEMES.RED_MOON]}
        >
          <SidebarProvider defaultOpen={false}>
            <div className="flex flex-col w-full md:max-w-7xl md:mx-auto">
              <Navbar />
              <div className="flex flex-col px-4 flex-1">{children}</div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

