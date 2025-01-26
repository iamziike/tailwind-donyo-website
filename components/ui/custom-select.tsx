"use client";

import CustomBottomDrawer from "./custom-bottom-drawer";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { SelectOption } from "@/types";
import { PopoverAnchor } from "@radix-ui/react-popover";
import { useMediaQuery } from "usehooks-ts";
import { useRef, useState } from "react";
import { TAILWIND_SCREEN_SIZES } from "@/constants";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export interface CustomSelectProps {
  value?: string;
  placeholder?: string;
  options: SelectOption[];
  onChange: (option?: SelectOption) => void;
}

interface OptionsProps extends Omit<CustomSelectProps, "value"> {
  selectedOption?: SelectOption;
  placeholder: string;
}

const Options = ({
  options,
  onChange,
  selectedOption,
  placeholder,
}: OptionsProps) => {
  return (
    <Command>
      <CommandInput placeholder="Search for ..." className="h-9" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem
            className="cursor-pointer"
            onSelect={() => {
              onChange({ label: placeholder, value: "" });
            }}
          >
            <Check
              className={cn(
                selectedOption?.value ? "opacity-0" : "opacity-100"
              )}
            />

            {placeholder}
          </CommandItem>

          {options.map((option) => (
            <CommandItem
              key={option.value}
              value={option.value}
              className="cursor-pointer"
              onSelect={() => {
                onChange(option);
              }}
            >
              <Check
                className={cn(
                  selectedOption?.value === option.value
                    ? "opacity-100"
                    : "opacity-0"
                )}
              />
              {option.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

const CustomSelect = ({
  placeholder = "Select an Option",
  options,
  value,
  onChange,
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const popOverRef = useRef<HTMLDivElement | null>(null);
  const selectedOption = options.find((option) => option.value === value);
  const isUseDrawer = useMediaQuery(
    `only screen and (max-width : ${TAILWIND_SCREEN_SIZES.lg})`
  );

  if (isUseDrawer) {
    return (
      <CustomBottomDrawer
        trigger={
          <Button variant="outline" className="w-full">
            {selectedOption?.label || placeholder}
          </Button>
        }
      >
        <Options
          onChange={onChange}
          options={options}
          selectedOption={selectedOption}
          placeholder={placeholder}
        />
      </CustomBottomDrawer>
    );
  }

  return (
    <Popover defaultOpen open={open} onOpenChange={setOpen}>
      <PopoverAnchor ref={popOverRef} className="w-full">
        <Button
          onClick={() => setOpen((prev) => !prev)}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full"
        >
          {selectedOption?.label || placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>

        <PopoverContent
          style={{ width: popOverRef?.current?.offsetWidth + "px" }}
          className="p-0"
          align="start"
        >
          <Options
            onChange={onChange}
            options={options}
            selectedOption={selectedOption}
            placeholder={placeholder}
          />
        </PopoverContent>
      </PopoverAnchor>
    </Popover>
  );
};

export default CustomSelect;
