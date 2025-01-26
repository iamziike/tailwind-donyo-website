"use client";

import Logo from "./logo";
import clsx from "clsx";
import Link from "next/link";
import { NAVLINKS } from "../layouts/navbar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface Props {
  className?: string;
}

const CustomSidebar = ({ className }: Props) => {
  return (
    <>
      <SidebarTrigger className="md:hidden border size-9" />

      <div className={clsx(className, "fixed top-0 left-0")}>
        <Sidebar collapsible="offcanvas" variant="sidebar">
          <SidebarHeader className="border-b border-primary-foreground py-5 px-4">
            <Logo />
          </SidebarHeader>
          <SidebarContent className="mt-5 px-4">
            {/* SidebarGroup is used to group different sections in content */}
            <SidebarGroup className="space-y-5">
              {NAVLINKS.map(({ path, title, icon }) => (
                <SidebarMenuItem className={clsx("list-none")} key={path}>
                  <Link
                    href={path}
                    className={clsx(
                      "flex items-center gap-3 text-xl p-3 hover:bg-sidebar-primary rounded-md cursor-pointer"
                    )}
                  >
                    <span>{icon}</span>
                    <span>{title}</span>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
      </div>
    </>
  );
};

export default CustomSidebar;
