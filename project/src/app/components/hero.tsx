"use client"
import Image from "next/image";
import ResumeModal from "./resumeModal";
import ConveyerCarousel from "./conveyerCarousel";
import Link from "next/link";
import { Button } from "./ui/button";
import { GitHubIcon, LinkedinIcon } from "./ui/icons";
import { useRef } from 'react';
import VariableProximity from "./ui/variableProximity";



export default function Hero() {
    const heroImage = "/ui/caitlinpfp2024.png"
    const heroImageSize = "200px"

    const containerRef = useRef(null);
    return (
    <div className="flex-1 flex flex-col justify-center mt-10">
        <div className="flex w-full justify-center">
            <h1 className="text-6xl font-semibold text-accent">Caitlin Thaeler</h1>
        </div>

       <div className="flex w-full justify-center gap-5 h-full py-10 sm:flex-row flex-col-reverse px-4 sm:px-10 overflow-hidden">
            <div className="flex flex-col justify-end">
                <div 
                    className="flex flex-col text-primary justify-end max-w-xl w-full text-xl"
                >
                    {/* <div
                    ref={containerRef}  
                    style={{position: 'relative'}}
                    >
                        <VariableProximity
                        label={'Hover me! And then star React Bits on GitHub, or else...'}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff='linear'
                        style={{ fontFamily: '"Roboto Flex", sans-serif', fontSize: 48 }}
                    />

                    </div> */}
                     
                <p>
                    
                    Hello there! I'm a <span className="text-secondary">4th year university student</span> and 
                    <span className="text-secondary"> full stack software developer</span> 
                    with a passion for creating  <span className="text-secondary">aesthetic, functional, and user-friendly applications.</span>
                </p>
                </div>
                <div className="flex w-full justify-start mt-5 gap-2">
                <ResumeModal />
                <Link href="https://www.linkedin.com/in/caitlin-thaeler/" target="_blank">
                    <Button variant="outline">
                        <LinkedinIcon size={16} />
                    </Button>
                </Link>
                <Link href="https://github.com/caitlinthaeler" target="_blank">
                    <Button variant="outline" className="">
                        <GitHubIcon size={16} color="white"/>
                    </Button>
                </Link>
                
                </div>
            </div>
            

            <div className="relative overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 shrink-0">
                <img
                src={heroImage}
                alt="Caitlin profile picture"
                className="object-cover w-full h-full"
                />
            </div>
        </div>


        {/* <div className="flex w-full justify-center mt-5">
            <ResumeModal />
        </div> */}

        <div id="projects" className="flex-1 flex flex-col w-full justify-end">
            <div className="flex w-full relative">
                {/* <div className="absolute left-1/2 -translate-x-1/2">
                    <p>Projects</p>
                </div> */}
                <div className="ml-auto">
                     <Link href="/projects">
                        <Button variant="link">
                            See All Projects{' >>'}
                        </Button>
                    </Link>
                </div>
                
            </div>
           
            
            <ConveyerCarousel />
        </div>


        

    </div>
    );
}