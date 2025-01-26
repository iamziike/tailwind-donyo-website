"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Toggle } from "./toggle";

const ThemeSelect = () => {
  const [theme] = useState("dark");

  return (
    <div>
      <Toggle>
        {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
      </Toggle>{" "}
    </div>
  );
};

export default ThemeSelect;
