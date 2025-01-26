"use client";

import CustomSelect, { CustomSelectProps } from "./custom-select";

interface Select extends CustomSelectProps {
  type: "select";
}

interface Search {
  type: "search";
}

type Props = (Select | Search) & { error?: string };

const CustomFieldSelector = ({ ...props }: Props) => {
  if (props.type === "select") {
    return <CustomSelect {...props} />;
  }
  return <div>CustomFieldSelector</div>;
};

export default CustomFieldSelector;
