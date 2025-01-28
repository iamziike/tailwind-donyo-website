import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  label: React.ReactElement | string;
  value?: string | number;
  options: {
    onClick?: VoidFunction;
    href?: string;
    label: React.ReactElement | string;
    value?: string | number;
  }[];
}

const CustomDropdownMenu = ({ label, options, value }: Props) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 border-0" align="end">
        {options.map((option, index) => (
          <DropdownMenuItem
            className={cn("cursor-pointer rounded-none", {
              "hover:bg-accent": option.value === value,
            })}
            key={index}
            onClick={() => {
              if (option.href) {
                router.push(option.href);
              }

              if (option.onClick) {
                option.onClick();
              }
            }}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdownMenu;
