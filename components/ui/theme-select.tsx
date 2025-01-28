"use client";

import CustomDropdownMenu from "./custom-dropdown-menu";
import { THEMES } from "@/constants";
import { Glasses, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSelect = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <CustomDropdownMenu
        value={theme}
        label={
          <div className="hover-btn">
            {theme === THEMES.LIGHT ? <Sun size={16} /> : <Moon size={16} />}
          </div>
        }
        options={[
          {
            value: THEMES.LIGHT,
            label: (
              <>
                <Sun className="me-2" size={16} /> Light
              </>
            ),
            onClick() {
              setTheme("light");
            },
          },
          {
            value: THEMES.DARK,
            label: (
              <>
                <Moon className="me-2" size={16} /> Dark
              </>
            ),
            onClick() {
              setTheme("dark");
            },
          },
          {
            value: THEMES.RED_MOON,
            label: (
              <>
                <Glasses className="me-2" size={16} /> Red Moon
              </>
            ),
            onClick() {
              setTheme(THEMES.RED_MOON);
            },
          },
          {
            value: THEMES.SYSTEM,
            label: (
              <>
                <Laptop className="me-2" size={16} /> System
              </>
            ),
            onClick() {
              setTheme("system");
            },
          },
        ]}
      />
    </div>
  );
};

export default ThemeSelect;
