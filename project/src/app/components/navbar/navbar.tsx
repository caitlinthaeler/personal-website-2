import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./navlink";
import { HomeIcon, BookIcon, TrophyIcon, PeopleIcon, GiftIcon } from "@primer/octicons-react"



export default function Navbar() {
    const imageUrl = "/images/caitlinpfp2024.png"
    const name = "Caitlin Thaeler"

    return (
        <div className="flex flex-row justify-between">

            <Link href="#" className="inline-flex w-fit gap-1 items-center">

                {/* avatar */}
                <div className="relative size-[30px] overflow-hidden rounded-full">
                    {imageUrl ? (<Image 
                        src={imageUrl}
                        alt="logo"
                        fill
                        className="object-cover"
                    />) : null}
                </div>

                {/* author name */}
                <div>
                    <p>{name}</p>
                </div>

            </Link>

            <div className="flex flex-row">
                <NavLink className="flex flex-row items-center gap-2" href="/#">
                    <HomeIcon size={16} />
                    Dashboard
                </NavLink>
                <NavLink className="flex flex-row items-center gap-2" href="#">
                    <PeopleIcon size={16} />
                    Study Groups
                </NavLink>
                <NavLink className="flex flex-row items-center gap-2" href="#">
                    <BookIcon size={16} />
                    Notes...
                </NavLink>
                <NavLink className="flex flex-row items-center gap-2" href="#">
                    <TrophyIcon size={16} />
                    Leaderboard
                </NavLink>
                <NavLink className="flex flex-row items-center gap-2" href="#">
                    <GiftIcon size={16} />
                    Rewards
                </NavLink>

            </div>
        </div>

        
    );
}