import React from "react";

export function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export function Md({
  children,
  as: Tag = "span",
  ...props
}: { children: string; as?: keyof React.JSX.IntrinsicElements } & React.HTMLAttributes<HTMLElement>) {
  // Cast needed because TypeScript can't narrow the tag + props combo statically.
  const T = Tag as "span";
  return <T {...(props as React.HTMLAttributes<HTMLSpanElement>)}>{parseInline(children)}</T>;
}
