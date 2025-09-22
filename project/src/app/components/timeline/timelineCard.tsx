import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Briefcase, CheckCircle, ExternalLink } from "lucide-react";
import { TagList } from "../tagList";
import { Card, CardContent } from "../ui/card";
import React from "react";
import { NavLink } from "../navbar/navlink";

interface TimelineCardProps {
    item: any;
    expandedIndex: number | null;
    toggleExpand?: (index: number) => void;
    index: number;
}

function TimelineCard({
    item,
    expandedIndex,
    index,
    className,
    children,
    toggleExpand,
    ...props
} : TimelineCardProps & React.ComponentProps<"div">) {


    return (
        <div className={className} {...props}>
            <Card className="overflow-hidden border-primary/10 shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                <div
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleExpand(index)}
                >
                    <div className="flex-1">
                    <h1 className="text-4xl font-bold text-primary">{item.title}</h1>
                    <p className="text-lg font-medium">{item.company || "N/A"}</p>
                    {item.tags && <TagList tags={item.tags} />}
                    {item.thumbnail && (
                        <div className="mx-auto"> 
                            <img src={item.thumbnail} alt="" />
                        </div>
                    )}
                    <div className="flex flex-row items-center justify-between mt-2"> 
                        <div className="flex items-center text-sm text-secondary-foreground"> 
                            {item.description && item.description} 
                            </div> 
                            <motion.div 
                                animate={{ rotate: expandedIndex === index ? 180 : 0 }} 
                                transition={{ duration: 0.3 }} > 
                                <ChevronDown className="w-5 h-5 text-card-foreground" /> 
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
                        <div className="px-6 pb-6 pt-2 border-t border-primary">
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold flex items-center mb-2">
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
            {children}
        </div>
        
    )
}

function TimelineCard2({
    item,
    expandedIndex,
    index,
    className,
    children,
    toggleExpand,
    ...props
} : TimelineCardProps & React.ComponentProps<"div">) {


    return (
        <div className={`l${className}`} {...props}>
            
            <Card className="overflow-hidden duration-300 bg-transparent border-none shadow-none">
                {item.companyLogo && (
                    <div className="flex flex flex-col justify-center">
                        <a 
                            href={item.companyLogo.link ? item.companyLogo.link : "#"} 
                            className="cursor-pointer mx-auto" 
                            target={item.companyLogo.link? "_blank" : ""}
                            rel="noopener noreferrer"
                            >
                            <img
                            src={item.companyLogo.image}
                            alt={`${item.companyLogo.image || 'Company'} logo`}
                            className="h-32 w-32 object-contain"
                            />
                            
                        </a>
                        {item.companyLogo.link && (
                            <NavLink 
                                className="text-sm mx-auto"
                                href={item.companyLogo.link}
                                openInNewTab={item.companyLogo.link ? true : false}
                                >
                                Visit website
                                <ExternalLink />
                            </NavLink>

                        )}
                        

                    </div>
                    
                )}
                <CardContent className="p-0 cursor-pointer" onClick={() => toggleExpand(index)}>
                <div
                    className="py-0 flex justify-between items-center"
                    
                >
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-primary text-center">{item.title}</h1>
                        <p className="text-lg font-medium">{item.company || "N/A"}</p>
                        {/* {item.tags && <TagList tags={item.tags} />} */}
                        {/* {item.thumbnail && (
                            <div className="mx-auto"> 
                                <img src={item.thumbnail} alt="" />
                            </div>
                        )} */}
                        <div className="flex flex-row items-center justify-between mt-2"> 
                            <div className="flex items-center text-center text-lg text-secondary"> 
                                {item.description && item.description} 
                            </div> 
                            <motion.div 
                                animate={{ rotate: expandedIndex === index ? 180 : 0 }} 
                                transition={{ duration: 0.3 }} > 
                                <ChevronDown className="w-5 h-5 text-card-foreground" /> 
                            </motion.div> 
                        </div> 
                         
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
                        <div className="px-6">
                            <motion.div
                                initial={{ scaleX: 0}}
                                animate={{ scaleX: 1}}
                                exit={{ scaleX: 0}}
                                transition={{ duration: 0.3}}
                            >
                                <div className="h-[2px] bg-primary my-6">

                                </div>
                            </motion.div>
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
                    </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex items-center gap-2 justify-end text-xl text-primary hover:text-secondary">
                    {expandedIndex === index ? (
                        <>
                            <p>Read less</p>
                            <ChevronUp className="w-5 h-5" />
                        </>
                        
                    ): (
                        <>
                            <p>Read more</p>
                            <ChevronDown className="w-5 h-5" />
                        </>
                        
                    )}
                </div>
                </CardContent>
                
            </Card>
            {children}
        </div>
        
    )
}

function TimelineCard3({
    item,
    expandedIndex,
    index,
    className,
    children,
    toggleExpand,
    ...props
} : TimelineCardProps & React.ComponentProps<"div">) {


    return (
        <div className={className} {...props}>
            <Card className="overflow-hidden duration-300 bg-transparent border-none shadow-none">
                <CardContent className="p-0 cursor-pointer" onClick={() => toggleExpand(index)}>
                <div
                    className="py-0 flex justify-between items-center"
                    
                >
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
                        <div className="px-6 pb-6 pt-2 border-t border-primary">
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold flex items-center mb-2">
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
                                <span className="text-md text-primary">{point}</span>
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex items-center gap-2 justify-end text-xl text-primary hover:text-secondary">
                    {expandedIndex === index ? (
                        <>
                            <p>Read less</p>
                            <ChevronUp className="w-5 h-5" />
                        </>
                        
                    ): (
                        <>
                            <p>Read more</p>
                            <ChevronDown className="w-5 h-5" />
                        </>
                        
                    )}
                </div>
                </CardContent>
                
            </Card>
            {children}
        </div>
        
    )
}

export {
    TimelineCard,
    TimelineCard2,
    TimelineCard3,
}