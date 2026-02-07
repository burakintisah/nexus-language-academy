import React from "react";

/**
 * Parses **bold** markers in a string and returns React elements.
 * Example: "Bu bir **önemli** kelimedir" → ["Bu bir ", <strong>önemli</strong>, " kelimedir"]
 */
export function boldify(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  if (parts.length === 1) return text;

  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}
