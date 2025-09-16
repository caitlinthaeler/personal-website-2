import { PeopleIcon, CommentIcon } from "@primer/octicons-react";
import { HomeIcon, BookIcon } from "lucide-react";
import { GitHubIcon } from "../ui/icons";
import { NavLink } from "./navlink";


export default function MenuItems({
    className,
    children,
    ...props
}:  React.ComponentProps<"div">){
    return (
        <div className={className} {...props}>
            <NavLink className="flex flex-row items-center gap-2" href="#">
                <HomeIcon size={16} />
                About
            </NavLink>
            <NavLink className="flex flex-row items-center gap-2" href="#projects">
                <PeopleIcon size={16} />
                Projects
            </NavLink>
            <NavLink className="flex flex-row items-center gap-2" href="#experience">
                <BookIcon size={16} />
                Experience
            </NavLink>
            <NavLink className="flex flex-row items-center gap-2" href="#">
                <CommentIcon size={16} />

                Contact Me
            </NavLink>
            <NavLink className="flex flex-row items-center gap-2" href="https://github.com/caitlinthaeler" openInNewTab>
                <GitHubIcon size={16} />
                GitHub
            </NavLink>
            {children}
        </div>
    )
}