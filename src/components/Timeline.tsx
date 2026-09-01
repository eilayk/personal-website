import type { TimelineItemProps } from "../types/TimelineItemProps.ts";

interface TimelineProps {
  items: TimelineItemProps[];
}

interface TimelineItemComponentProps extends TimelineItemProps {
  isLast: boolean;
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="w-full max-w-2xl py-2 pl-4 sm:pl-6">
      {items.map((item, index) => (
        <TimelineItem
          key={`${item.company}-${item.title}-${item.dateRange}-${index}`}
          isLast={index === items.length - 1}
          {...item}
        />
      ))}
    </div>
  );
};

const TimelineItem = ({
  dateRange,
  title,
  company,
  type,
  isLast,
}: TimelineItemComponentProps) => {
  return (
    <div className="flex gap-x-4">
      {/* Node and Line */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Node Dot */}
        <div className="size-2 rounded-full bg-text mt-2 z-10" />
        {/* Line */}
        {!isLast && <div className="w-px grow bg-surface mt-1" />}
      </div>

      {/* Content */}
      <div className={`grow ${isLast ? "pb-0" : "pb-8"}`}>
        {/* Date & Type */}
        <div className="flex items-center gap-2 text-xs opacity-60 mb-0.5">
          <span>{dateRange}</span>
          {type && (
            <>
              <span>•</span>
              <span className="border border-surface px-1.5 py-0.5 rounded text-[11px]">
                {type}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text">
          {title}
        </h3>

        {/* Company */}
        <p className="text-sm text-text opacity-80 mt-0.5">
          {company}
        </p>
      </div>
    </div>
  );
};

export default Timeline;

