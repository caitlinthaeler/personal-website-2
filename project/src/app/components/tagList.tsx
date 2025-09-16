import { Tag, tags } from "@/types/tag"
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip"
import { motion } from "framer-motion";

export default function TagList({ 
        tags: tagList, 
        size=20
    }: { 
        tags: Tag[], 
        size?: number }){
    return (
        <div className="flex flex-wrap w-full gap-5 py-2">
            {tagList.map((tag, i) => {
                const TagIcon = tags[tag].icon
                return (
                <motion.div
                    key={i}
                    className="mb-4 md:mb-0"
                    whileHover={{ scale: 1.5 }}
                >
                    <Tooltip>
                    <TooltipTrigger>
                        <TagIcon size={size} className="shrink-0"/>
                        
                    </TooltipTrigger>
                    <TooltipContent>
                        {tags[tag].label}
                    </TooltipContent>
                    </Tooltip>
                    
                </motion.div>
                )
            })}
        </div>
    )
}
    