import { motion, } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import React from "react";
import { TimelineLogo } from "./timelineLogo";
import ReadMoreToggle from "./readMoreToggle";
import ExpandingHorizontalDivider from "./expandingHorizontalDivider";
import AnimatedReveal from "./animatedReveal";
import { JobEvent, ProjectEvent, EducationEvent } from "@/types/event";

interface TimelineCardProps<T> {
    item: T;
    expandedIndex: number | null;
    toggleExpand?: (index: number) => void;
    index: number;
}

function JobTimelineCard({
    item,
    expandedIndex,
    index,
    className,
    children,
    toggleExpand,
    ...props
} : TimelineCardProps<JobEvent> & React.ComponentProps<"div">) {


    return (
        <div className={`${className}`} {...props}>
            
            <Card className="overflow-hidden duration-300 bg-transparent border-none shadow-none">
                {item.companyLogo && (
                    <TimelineLogo 
                        link={item.companyLogo.link} 
                        image={item.companyLogo.image}
                        size={64}
                        className="flex flex-col justify-center"
                    />
                )}
                <CardContent className="p-0 cursor-pointer" onClick={() => toggleExpand(index)}>
                <div
                    className="py-0 flex justify-between items-center"
                    
                >
                    <div className="flex-1">

                        {/* title */}
                        <h1 className="text-4xl font-bold text-primary text-center">{item.title}</h1>

                        {/* details */}
                         <div className="flex flex-col items-start justify-between mt-2"> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                company <p className="text-accent"> : {item.company || "N/A"}</p>
                            </div> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                type <p className="text-accent"> : work</p>
                            </div> 
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2"> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                {item.description && item.description} 
                            </div> 
                        </div>
                    </div>
                </div>

                {/* Expanded details */}
                <AnimatedReveal expandedIndex={expandedIndex} index={index}>

                    {/* hidden content */}
                    <div className="px-6">
                            <ExpandingHorizontalDivider />
                        <div className="mb-4">
                            <h4 className="text-lg font-semibold flex items-center mb-2 text-primary">
                                <Briefcase className="w-4 h-4 mr-2 text-primary" />
                                Details
                            </h4>
                            <ul className="grid grid-cols-1 gap-2">
                            {item.points?.map((point: string, i: number) => (
                                <motion.li
                                key={i}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-md text-secondary">{point}</span>
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                    </div>

                </AnimatedReveal>

                <ReadMoreToggle expandedIndex={expandedIndex} index={index}/>

                </CardContent>
            </Card>
            {children}
        </div>
    )
}

function ProjectTimelineCard({
    item,
    expandedIndex,
    index,
    className,
    children,
    toggleExpand,
    ...props
} : TimelineCardProps<ProjectEvent> & React.ComponentProps<"div">) {

    return (
        <div className={`${className}`} {...props}>
            
            <Card className="overflow-hidden duration-300 bg-transparent border-none shadow-none">
                <CardContent className="p-0 cursor-pointer" onClick={() => toggleExpand(index)}>
                <div
                    className="py-0 flex justify-between items-center"
                    
                >
                    <div className="flex-1">

                        {/* title */}
                        <h1 className="text-4xl font-bold text-primary text-center">{item.title}</h1>

                        {/* details */}
                         <div className="flex flex-col items-start justify-between mt-2"> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                type <p className="text-accent"> : project</p>
                            </div> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                skills <p className="text-accent"> : {item.skills || "N/A"}</p>
                            </div>
                        </div>
                        {/* <p className="text-lg font-medium">{item.company || "N/A"}</p> */}
                        <div className="flex flex-row items-center justify-between mt-2"> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                {item.description && item.description} 
                            </div> 
                        </div>
                    </div>
                </div>

                {/* Expanded details */}
                <AnimatedReveal expandedIndex={expandedIndex} index={index}>

                    {/* hidden content */}
                    <div className="px-6">
                            <ExpandingHorizontalDivider />
                        <div className="mb-4">
                            <h4 className="text-lg font-semibold flex items-center mb-2 text-primary">
                                <Briefcase className="w-4 h-4 mr-2 text-primary" />
                                Project Details
                            </h4>
                            <ul className="grid grid-cols-1 gap-2">
                            {item.points?.map((point: string, i: number) => (
                                <motion.li
                                key={i}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-md text-secondary">{point}</span>
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                    </div>

                </AnimatedReveal>

                <ReadMoreToggle expandedIndex={expandedIndex} index={index}/>

                </CardContent>
            </Card>
            {children}
        </div>
    )
}

function EducationTimelineCard({
    item,
    expandedIndex,
    index,
    className,
    children,
    toggleExpand,
    ...props
} : TimelineCardProps<EducationEvent> & React.ComponentProps<"div">) {

    return (
        <div className={`${className}`} {...props}>
            
            <Card className="overflow-hidden duration-300 bg-transparent border-none shadow-none">
                <CardContent className="p-0 cursor-pointer" onClick={() => toggleExpand(index)}>
                <div
                    className="py-0 flex justify-between items-center"
                    
                >
                    <div className="flex-1">

                        {/* title */}
                        <h1 className="text-4xl font-bold text-primary text-center">{item.title}</h1>

                        {/* details */}
                         <div className="flex flex-col items-start justify-between mt-2"> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                type <p className="text-accent"> : education</p>
                            </div> 
                        </div>
                        {/* <p className="text-lg font-medium">{item.company || "N/A"}</p> */}
                        <div className="flex flex-row items-center justify-between mt-2"> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                {item.description && item.description} 
                            </div> 
                        </div>
                    </div>
                </div>
                <ReadMoreToggle expandedIndex={expandedIndex} index={index} expandText="Show Courses" collapseText="Hide Courses"/>


                {/* Expanded details */}
                <AnimatedReveal expandedIndex={expandedIndex} index={index}>

                    {/* hidden content */}
                    <div className="px-6">
                            <ExpandingHorizontalDivider />
                        <div className="mb-4">
                            <h4 className="text-lg font-semibold flex items-center mb-2 text-primary">
                                <Briefcase className="w-4 h-4 mr-2 text-primary" />
                                Courses Taken
                            </h4>
                            <ul className="grid grid-cols-1 gap-2">
                            {item.points?.map((point: string, i: number) => (
                                <motion.li
                                key={i}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-md text-secondary">{point}</span>
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                    </div>

                </AnimatedReveal>

                {/* <ReadMoreToggle expandedIndex={expandedIndex} index={index}/> */}

                </CardContent>
            </Card>
            {children}
        </div>
    )
}


export {
    JobTimelineCard,
    ProjectTimelineCard,
    EducationTimelineCard
}