import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { PAGES } from "@/constants";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link
      href={PAGES.home.path}
      className={clsx("flex items-center gap-2", className)}
    >
      <Image src={"/images/logo.png"} alt="logo" width={32} height={32} />
      <h1 className="font-bold text-xl">Donyo Travel</h1>
    </Link>
  );
};

export default Logo;
