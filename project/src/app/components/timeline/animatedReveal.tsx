import { motion, AnimatePresence } from "framer-motion";

interface AnimatedRevealProps {
    expandedIndex: number | null;
    index: number;
    height?: number | string;
    duration?: number;
}

export default function AnimatedReveal({
    expandedIndex,
    index,
    height = "auto",
    duration = 0.3,
    className,
    children,
    ...props
 } : AnimatedRevealProps & React.ComponentProps<"div"> )  {
    return (
        <div className={className} {...props}>
            <AnimatePresence >
            {expandedIndex === index && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: height, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: duration }}
                className="overflow-hidden"
            >
                {children}
            </motion.div>
            )}
        </AnimatePresence>

        </div>
        
    )
}