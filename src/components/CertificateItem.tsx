import React from "react";

interface CertificateItemProps {
  title: string;
  issuer: string;
  year: string;
}

export const CertificateItem: React.FC<CertificateItemProps> = ({
  title,
  issuer,
  year,
}) => {
  return (
    <div className="mb-3">
      <p className="text-md font-bold">{title}</p>
      <p className="text-sm text-gray-600">
        {issuer} • {year}
      </p>
    </div>
  );
};
