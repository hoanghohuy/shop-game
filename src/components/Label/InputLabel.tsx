import React from "react";

interface Props {
  children: string;
  required?: boolean;
}

export default function InputLabel({ children, required }: Props) {
  return (
    <div className="flex gap-1">
      <div className="font-semibold text-sm mb-1">{children}</div>
      {required && <div className="text-red-700">*</div>}
    </div>
  );
}
