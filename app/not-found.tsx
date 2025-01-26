"use client";

import { Button } from "@/components/ui/button";
import { PAGES } from "@/constants";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-[150px] md:text-[300px] font-extrabold mb-0 leading-none">
        404
      </h1>

      <h3 className="text-center mb-4 leading-7">
        This page you are trying to access {"doesn't"} exist or has been moved.{" "}
        <br />
        Try going back to our homepage
      </h3>
      <Button
        variant="default"
        className="uppercase tracking-wide"
        onClick={() => {
          router.push(PAGES.home.path);
        }}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default NotFound;
