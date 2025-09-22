import { ChevronUp, ChevronDown } from "lucide-react";


interface ReadMoreToggleProps {
    expandedIndex: number;
    index: number;
    expandText?: string;
    collapseText?: string;
}

// put this at the end of your content both visible and hidden
// doesn't actually reveal content
export default function ReadMoreToggle({
    expandedIndex,
    index,
    expandText = "Read more...",
    collapseText = "Read less",
    className,
    children,
    ...props
    } : ReadMoreToggleProps & React.ComponentProps<"div">)  {
    return (
         <div className={`flex items-center gap-2 justify-end text-xl text-primary hover:text-secondary ${className}`} {...props}>
            {expandedIndex === index ? (
                <>
                    <p>{collapseText}</p>
                    <ChevronUp className="w-5 h-5" />
                </>
                
            ): (
                <>
                    <p>{expandText}</p>
                    <ChevronDown className="w-5 h-5" />
                </>
                
            )}
            {children}
        </div>
    )
}