"use client";

import { Printer } from "lucide-react";

export default function ResumePrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg transition-all"
      title="Print ATS single-column layout"
    >
      <Printer className="w-3.5 h-3.5 text-emerald-400" />
      <span>Print Layout</span>
    </button>
  );
}
