"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TimelineDot from "./timelineDot";
import { ChevronDown, Briefcase, CheckCircle } from "lucide-react";
import { TagList } from "../tagList";
import { Card, CardContent } from "../ui/card";
import { EducationTimelineCard, JobTimelineCard, ProjectTimelineCard} from "./timelineCard";

interface TimelineItemProps {
  item: any;
  index: number;
  dotRef: React.RefObject<HTMLDivElement>;
  isLast: boolean;
  nextDotRef?: React.RefObject<HTMLDivElement>;
  expandedIndex: number | null;
  toggleExpand: (index: number) => void;
}

export default function TimelineItem({ 
    item, 
    index,
    dotRef, // Use the prop instead of creating a new ref
    isLast, 
    nextDotRef, 
    expandedIndex,
    toggleExpand, 
}: TimelineItemProps) {
    // detect if viewport is at least md (768px) so we can switch animation direction responsively
    const [isMdUp, setIsMdUp] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(min-width: 768px)");
        setIsMdUp(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsMdUp(e.matches);
        // addEventListener is preferred, fall back to addListener for older browsers
        if (mq.addEventListener) mq.addEventListener("change", handler);
        return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", handler);
        };
    }, []);

  const isEven = index % 2 === 0;


  // animation X: on mobile always slide from the same side (here: +50),
  // on md+ alternate left/right per index
  const initialX = isMdUp ? (isEven ? 50 : -50) : 50;

  const cardMargin = isMdUp ?  (isEven ? "md:ml-auto" : "md:mr-auto") : "ml-8"
  // default origin on mobile is top-left; at md+ we keep the alternating origin
  const originClass = isMdUp ? (isEven ? "origin-top-left" : "md:origin-top-right") : "origin-top-left ml-8"
  const childCardMargin = isMdUp ?  (isEven ? "md:ml-8" : "md:mr-8") : ""

  const flexDirection = isEven ? "flex-row" : "flex-row-reverse"

    const dateClass = isMdUp ? (isEven ? "absolute flex justify-end md:w-1/2 text-right pr-10" : "flex flex-row-reverse absolute left-2 justify-start md:w-1/2 text-left ml-20") : "flex justify-start md:w-full text-left ml-16 origin-top-right"

    const dateMargin = isEven ? "md:l-8" : "" //md:mr-8

    const dateInitialX = isMdUp ? (isEven ? -50 : 50) : 50;
  return (
    <motion.div
      className={`mb-12 relative z-10 flex flex-col md:${flexDirection}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Dot + Line */}
      <TimelineDot
        ref={dotRef} // Pass the dotRef to TimelineDot
        item={item}
        hasNext={!isLast}
        nextDotRef={nextDotRef}
      />

      {item.period && (
        
        <motion.div className={`transform z-10 ${dateClass} ${originClass}`}
            initial={{ opacity: 0, scale: 0.5, x: dateInitialX }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
            <div className={`text-accent text-xl ${dateMargin}`}>
                <p >{item.period.startDate.year}</p>
            </div>
                
            
        </motion.div>
      )}

      {/* Card */}
      <div className={`flex md:w-1/2 ${cardMargin}`}>
        <motion.div
          className={`w-full ${originClass} ${childCardMargin}`}
          initial={{ opacity: 0, scale: 0.5, x: initialX }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
            {/* Conditionally render different card types based on item.type */}
            {item.type === "job" && (
                <JobTimelineCard
                item={item} 
                index={index}
                toggleExpand={toggleExpand} 
                expandedIndex={expandedIndex}/>
            )}
            {item.type === "project" && (
                <ProjectTimelineCard
                item={item} 
                index={index}
                toggleExpand={toggleExpand} 
                expandedIndex={expandedIndex}/>
            )}
            {item.type === "education" && (
                <EducationTimelineCard
                item={item} 
                index={index}
                toggleExpand={toggleExpand} 
                expandedIndex={expandedIndex}/>
            )}
        </motion.div>
      </div>
    </motion.div>
  );
}