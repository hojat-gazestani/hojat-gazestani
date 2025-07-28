import React from "react";

interface SectionTitleTagProps {
  text: string;
}

export const SectionTitleTag: React.FC<SectionTitleTagProps> = ({ text }) => {
  return (
    <h2 className="text-2xl font-bold mb-4 text-gray-800">
      {text}
    </h2>
  );
};
