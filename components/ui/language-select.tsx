import { Globe } from "lucide-react";

const LanguageSelect = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span>
        <Globe size={16} />
      </span>{" "}
      English
    </div>
  );
};

export default LanguageSelect;
