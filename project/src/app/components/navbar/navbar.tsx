import Link from "next/link";
import Image from "next/image";
import MenuItems from "./menuItems";


export default function Navbar() {
    const imageUrl = "/ui/caitlinpfp2024.png"
    const name = "Caitlin Thaeler"

    return (
        <div className="flex flex-row justify-between mx-10">

            <Link href="/#" className="inline-flex w-fit gap-1 items-center">

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

            <MenuItems className="hidden md:flex" />
            
            
        </div>

        
    );
}