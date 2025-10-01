// adapted from https://preline.co/docs/timeline.html

import type { TimelineItemProps } from "../types/TimelineItemProps.ts";

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline = (props: TimelineProps) => {
  const { items } = props

  return (
    <div>
      {items.map((item) => <TimelineItem key={item.title} {...item} />)}
    </div>
  )
}

const TimelineItem = (props: TimelineItemProps) => {
  const { dateRange, title, company } = props

  return (
    <div className="flex gap-x-3">
      {/*Left Content */}
      <div className="w-28 flex-shrink-0 text-end">
        <span className="text-text">{dateRange}</span>
      </div>
      {/*End Left Content*/}

      {/*Icon */}
      {/*line*/}
      <div className="relative w-8 flex-shrink-0 last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-text">
        <div className="relative z-10 size-7 flex justify-center items-center">
          {/*dot*/}
          <div className="size-2 rounded-full bg-text"></div>
        </div>
      </div>
      {/*End Icon */}

      {/*Right Content*/}
      <div className="grow pt-0.5 pb-8">
        <h3 className="flex gap-x-1.5 font-semibold text-text text-lg">
          <svg className="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" x2="8" y1="13" y2="13"></line>
            <line x1="16" x2="8" y1="17" y2="17"></line>
            <line x1="10" x2="8" y1="9" y2="9"></line>
          </svg>
          {title}
        </h3>
        <p className="mt-1 text-sm text-text">
          {company}
        </p>
      </div>
      {/*End Right Content */}
    </div>
  )
}

export default Timeline;
