"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TimelineDot from "./timelineDot";
import { ChevronDown, Briefcase, CheckCircle } from "lucide-react";
import TagList from "../tagList";
import { Card, CardContent } from "../ui/card";

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

    const dateClass = isMdUp ? (isEven ? "flex justify-end md:w-1/2 text-right pr-8" : "flex justify-start md:w-1/2 text-left ml-16") : "flex justify-start md:w-full text-left ml-16 origin-top-right"

    const dateMargin = isEven ? "md:l-8" : "md:mr-8"

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
        
        <motion.div className={`absolute transform z-10 ${dateClass} ${originClass}`}
            initial={{ opacity: 0, scale: 0.5, x: dateInitialX }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
            <div className={dateMargin}>
                <p >{item.period.startDate.year}</p>
            </div>
                
            
        </motion.div>
      )}

      {/* Card */}
      <div className={`flex md:w-1/2 ${cardMargin}`}>
        <motion.div
          className={`md:w-full ${originClass} ${childCardMargin}`}
          initial={{ opacity: 0, scale: 0.5, x: initialX }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
          <Card className="overflow-hidden border-primary/10 shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-lg font-medium">{item.company || "N/A"}</p>
                  {item.tags && <TagList tags={item.tags} />}
                  {item.thumbnail && (
                     <div className="mx-auto"> 
                        <img src={item.thumbnail} alt="" />
                    </div>
                )}
                <div className="flex flex-row items-center justify-between mt-2"> 
                    <div className="flex items-center text-sm text-muted-foreground"> 
                        {item.description && item.description} 
                        </div> 
                        <motion.div 
                            animate={{ rotate: expandedIndex === index ? 180 : 0 }} 
                            transition={{ duration: 0.3 }} > 
                            <ChevronDown className="w-5 h-5 text-muted-foreground" /> 
                        </motion.div> </div>   
                </div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-border/50">
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold flex items-center mb-2">
                          <Briefcase className="w-4 h-4 mr-2 text-primary" />
                          Details
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {item.points.map((point: string, i: number) => (
                            <motion.li
                              key={i}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-sm">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}