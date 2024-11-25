import { FileUser } from 'lucide-react';
import React from "react";

export default function DownloadFile () {
  return (
    <a
      href="/NeoLeXiAlexis_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-3 bg-[#60212E] text-white rounded-full hover:bg-[#C49895] z-20"
    >
        <FileUser className="h-10 w-10" />
    </a>
  );
};
 