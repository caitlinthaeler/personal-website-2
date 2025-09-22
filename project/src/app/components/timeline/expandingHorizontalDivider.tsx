import { motion } from "framer-motion"

interface ExpandingHorizontalDividerProps {
    duration?: number;
    thickness?: number;
    color?: string;
    dividerClassName?: string;
}

// animates outwards on animate, reverse on exit
export default function ExpandingHorizontalDivider({
    duration = 0.3,
    thickness = 2,
    color = "primary",
    className,
    dividerClassName,
    children,
    ...props
 } : ExpandingHorizontalDividerProps & React.ComponentProps<"div">)  {
    return (
        <div className={`my-6 ${className}`} {...props}>
             <motion.div
                initial={{ scaleX: 0}}
                animate={{ scaleX: 1}}
                exit={{ scaleX: 0}}
                transition={{ duration: duration }}
            >
                <div className={`h-[${thickness}px] bg-${color} ${dividerClassName}`} />
            </motion.div>
            {children}
        </div>
       
)
}