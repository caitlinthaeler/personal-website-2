"use client"
import MobileMenu from "@/components/navbar/mobileMenu";
import Navbar from "@/components/navbar/navbar";
import { NavLink } from "@/components/navbar/navlink";
import { Download } from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function KesslerSyndrome() {
    return (
        <div>
            <div className="fixed top-0 right-0 z-50">
                <MobileMenu className="origin-center"/>
            </div>
            
             <div className="flex flex-col">
                <Navbar />
                <p className="mx-10 my-10 text-6xl text-accent ">Kessler Syndrome Game</p>
            </div>

            <div className="mx-10 text-end">
                <NavLink
                    href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/kessler-syndrome/?tab=details"
                    openInNewTab
                    className="inline-flex items-center gap-2 break-all flex-wrap"
                >
                   <span>Nasa Hackathon 2024 - Kessler Syndrome project details</span>
                    <ExternalLink />
                </NavLink>
                <NavLink
                    href="https://github.com/caitlinthaeler/nyskooo"
                    openInNewTab
                    className="inline-flex items-center gap-2 break-all flex-wrap"
                >
                   <span>Nyskooo Team Github</span>
                    <ExternalLink />
                </NavLink>
            </div>

            <div className="mx-10 my-5 text-primary">
                <p>Download Options</p>
            </div>

            <div className="mx-10 grid-cols-2 border-2 border-muted">
            {/* row container */}
            <div className="grid odd:bg-muted even:bg-background items-center py-4">
                <p className="md:text-4xl text-2xl text-primary text-center px-4">Windows:</p>
                <div className="mx-auto">
                    <NavLink
                        href="https://github.com/caitlinthaeler/nyskooo/releases/download/v1.0/KesslerSyndromeGame-windows.zip"
                        className="md:text-xl text-md flex flex-wrap items-center"
                        >
                        <span className="break-all mr-2">kessler-syndrome-windows.zip</span>
                        <Download />
                    </NavLink>
                </div>
                
            </div>

            <div className="grid odd:bg-muted even:bg-background items-center py-4">
                <p className="md:text-4xl text-2xl text-primary text-center px-4">macOS:</p>
                <div className="mx-auto">
                    <NavLink
                        href="https://github.com/caitlinthaeler/nyskooo/releases/download/v1.0/KesslerSyndromeGame-mac.zip"
                        className="md:text-xl text-md flex flex-wrap items-center "
                        >
                        <span className="break-all mr-2">kessler-syndrome-macOS.zip</span>
                        <Download size={16}/>
                    </NavLink>
                    
                </div>
            </div>

            <div className="grid odd:bg-muted even:bg-background items-center py-4">
                <p className="md:text-4xl text-2xl text-primary text-center px-4">Linux:</p>
                <div className="mx-auto">
                     <NavLink
                        href="https://github.com/caitlinthaeler/nyskooo/releases/download/v1.0/KesslerSyndromeGame-linux.zip"
                        className="md:text-xl text-md flex flex-wrap items-center"
                        >
                        <span className="break-all mr-2">kessler-syndrome-linux.zip</span>
                        <Download size={16}/>
                    </NavLink>

                </div>
               
            </div>
            </div>


           
        </div>
       
    );
}