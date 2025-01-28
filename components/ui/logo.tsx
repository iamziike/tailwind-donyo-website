import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/constants";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link
      href={PAGES.home.path}
      className={cn("flex items-center gap-2", className)}
    >
      <Image src={"/images/logo.png"} alt="logo" width={32} height={32} />
      <h1 className="font-bold text-xl">Donyo Travel</h1>
    </Link>
  );
};

export default Logo;
