import { ExternalLink } from "lucide-react";
import { NavLink } from "../navbar/navlink";


interface TimelineLogoProps {
    link?: string;
    image: string;
    size?: number;
    displayText?: string;
    showText?: boolean;
}

// logo for company, organization, institution, etc with optional hyperlink
export function TimelineLogo({
    link = "",
    image,
    className,
    children,
    displayText = "Visit Website",
    showText = true,
    size = 16,
    ...props
} : TimelineLogoProps & React.ComponentProps<"div">){
    return (
        <div className={className} {...props}>
             <a 
            href={link} 
            className="cursor-pointer mx-auto" 
            target={link? "_blank" : ""}
            rel="noopener noreferrer"
            >
            <img
            src={image}
            alt={`${image} logo`}
            style={{ height: `${size}px`, width: `${size}px` }}
            className="object-contain"
            />
            
        </a>
         {link && (
            <NavLink 
                className="text-sm mx-auto"
                href={link}
                openInNewTab={link ? true : false}
                >
                {showText && link && (
                    <>
                        {displayText}
                        <ExternalLink />
                    </>
                )}
            </NavLink>
        )}
        {children}

        </div>
       
    )
}
