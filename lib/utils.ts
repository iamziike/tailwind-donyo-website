import { CustomObject } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeUndefinedOrNull = <T extends CustomObject<string, string>>(
  value: T
) => {
  const newValue: CustomObject<string, string> = {};
  for (const key in value) {
    if (value[key] !== undefined && value[key] !== null && value[key] !== "") {
      newValue[key] = value[key];
    }
  }

  return newValue;
};

export const waitFor = async (secs: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, secs * 1000);
  });
};
