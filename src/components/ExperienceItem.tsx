import React from "react";

interface ExperienceItemProps {
  text: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ text }) => {
  return (
    <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">
      {text}
    </span>
  );
};
