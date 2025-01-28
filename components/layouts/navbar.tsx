import Link from "next/link";
import ThemeControl from "../ui/theme-select";
import LanguageSelect from "../ui/language-select";
import Logo from "../ui/logo";
import CustomSidebar from "../ui/custom-sidebar";
import { Badge } from "../ui/badge";
import { ArrowRight, File, Grid, Search, Tag } from "lucide-react";

export const NAVLINKS = [
  { title: "Search", path: "/search", icon: <Search size={20} /> },
  { title: "Category", path: "/category", icon: <Grid size={20} /> },
  { title: "Tag", path: "/tag", icon: <Tag size={20} /> },
  { title: "Blog", path: "/blog", icon: <File size={20} /> },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-background opacity-75" />
      <div className="p-3 flex items-center justify-between backdrop-blur-xl">
        <CustomSidebar className="block md:hidden" />
        <div className="hidden md:flex items-center gap-8">
          <Logo />
          <ul className="flex gap-2 items-center text-muted-foreground font-medium">
            {NAVLINKS.map((navlink) => (
              <Link
                key={navlink.title}
                href={navlink.path}
                className="cursor hover:bg-secondary hover:text-primary p-2 rounded-md transition"
              >
                {navlink.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <LanguageSelect />
          <div className="ms-5 me-2">
            <ThemeControl />
          </div>
          <Badge className="rounded-full p-4 py-2 text-md cursor-pointer font-medium text-sm">
            Sign In{" "}
            <span className="ml-2">
              <ArrowRight size={16} />
            </span>
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
