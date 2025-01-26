import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar";
import clsx from "clsx";
import { Bricolage_Grotesque } from "next/font/google";
import { PAGES } from "@/constants";
import { SidebarProvider } from "@/components/ui/sidebar";

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
        className={clsx(
          bricolageGrotesque.className,
          "bg-background antialiased"
        )}
      >
        <SidebarProvider defaultOpen={false}>
          <div className="flex flex-col w-full md:max-w-7xl md:mx-auto">
            <Navbar />
            <div className="flex flex-col px-4 flex-1">{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

