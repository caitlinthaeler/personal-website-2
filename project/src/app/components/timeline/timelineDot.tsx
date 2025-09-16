"use client";
import { forwardRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineDotProps {
  item: any | null;
  hasNext: boolean;
  nextDotRef?: React.RefObject<HTMLDivElement>;
}

const TimelineDot = forwardRef<HTMLDivElement, TimelineDotProps>(
  ({ item, hasNext, nextDotRef }, ref) => {
    // Observe the NEXT dot
    const isNextInView = useInView(nextDotRef ?? { current: null }, {
      once: false,
      amount: 0.4,
    });

    return (
      <div className="absolute h-full left-0 md:left-1/2 transform -translate-x-1/2 z-10">
        {/* Dot */}
        <div
          ref={ref}
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-white"
        >
          {item?.thumbnail ? (
            <img src={item.thumbnail} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full rounded-full bg-primary" />
          )}
        </div>
        
        {/* Line segment: only render if there's a next item */}
        {hasNext && (
          <motion.div
            className="w-0.5 bg-primary mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isNextInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
               height: "100%", // matches mb-12 spacing
              transformOrigin: "top",
            }}
          />
        )}
      </div>
    );
  }
);

TimelineDot.displayName = "TimelineDot";

export default TimelineDot;