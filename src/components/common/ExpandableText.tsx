import { useState } from "react";

interface ExpandableTextProps {
  text: string;
  collapsedLines?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const lineClampClass: Record<NonNullable<ExpandableTextProps["collapsedLines"]>, string> = {
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
};

export default function ExpandableText({
  text,
  collapsedLines = 3,
  className = "",
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <p className={expanded ? "" : lineClampClass[collapsedLines]}>{text}</p>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-2 text-sm font-bold text-primary transition-colors hover:text-primary-hover"
      >
        {expanded ? "Rút gọn" : "Xem thêm"}
      </button>
    </div>
  );
}
