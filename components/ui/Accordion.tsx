"use client";

import { useState } from "react";
import { FAQ } from "@/types";

interface AccordionProps {
  items: FAQ[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded-12 overflow-hidden"
        >
          <button
            onClick={() =>
              setExpandedId(expandedId === item.id ? null : item.id)
            }
            className="w-full px-6 py-4 text-left font-semibold text-navy-900 bg-white hover:bg-navy-50 transition-colors flex items-center justify-between"
          >
            <span>{item.question}</span>
            <span
              className={`text-magenta-600 transition-transform ${
                expandedId === item.id ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {expandedId === item.id && (
            <div className="px-6 py-4 bg-navy-50 text-body text-gray-700 border-t border-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
