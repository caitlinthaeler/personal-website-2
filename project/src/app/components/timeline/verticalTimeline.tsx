"use client";
import { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import TimelineItem from "./timelineItem";
import useEvents from "@/hooks/useEvents";
import TimelineDot from "./timelineDot";
import Filters from "./filters"
import { EventPeriod, Event } from "@/types/event";

export default function VerticalEventTimeline() {
  const { events, getEventsByType } = useEvents();
  //const events = getEventsByType("job");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["job", "project", "education"]);

  // Create all refs at the top level
  const dotRefs = useMemo(
    () => Array.from({ length: events.length+1 }, () => ({ current: null as HTMLDivElement | null })),
    [events.length+1]
  );

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredEvents = events.filter(event => {
    if (selectedFilters.length === 0) return true; // No filters, show all
    if (event.type === "job" && selectedFilters.includes("job")) return true;
    if (event.type === "project" && selectedFilters.includes("project")) return true;
    if (event.type === "education" && selectedFilters.includes("education")) return true;
    return false;
  });

  const sortedEvents = [...filteredEvents].sort((a: Event, b: Event) => {
    const dateA = new Date(a.period.startDate.year, (a.period.startDate.month ?? 1) - 1, a.period.startDate.day ?? 1).getTime();
    const dateB = new Date(b.period.startDate.year, (b.period.startDate.month ?? 1) - 1, b.period.startDate.day ?? 1).getTime();
    return dateB - dateA; // Newest to oldest
  });

  return (
    <div id="experience" className="mx-auto px-4 max-w-5xl mt-10">
     
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-2 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My development journey and milestones
      </motion.h1>
      {/* <motion.p
        className="text-muted-foreground text-center mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My development journey and milestones
      </motion.p> */}
       <Filters 
        value={selectedFilters}
        onChange={(newValue) => setSelectedFilters(newValue)}
       />

      <div className="relative">
        {/* Static vertical line */}
        {/* <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20 z-0" /> */}
        
        {sortedEvents.map((item, index) => {
          const dotRef = dotRefs[index];
          const nextDotRef = index < events.length ? dotRefs[index + 1] : undefined;

          return (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              dotRef={dotRef}
              isLast={index === events.length}
              nextDotRef={nextDotRef}
              expandedIndex={expandedIndex}
              toggleExpand={toggleExpand}
            />
          );
        })}

          {/* Dot + Line */}
          <TimelineDot
            ref={dotRefs[events.length]} // Pass the dotRef to TimelineDot
            item={null}
            hasNext={null}
            nextDotRef={null}
          />
      </div>
    </div>
  );
}