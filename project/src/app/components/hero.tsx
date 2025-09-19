import Image from "next/image";
import ResumeModal from "./resumeModal";
import ConveyerCarousel from "./conveyerCarousel";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    const heroImage = "/ui/caitlinpfp2024.png"
    const heroImageSize = "200px"
    return (
    <div className="flex-1 flex flex-col justify-center mt-10">
        <div className="flex w-full justify-center">
            <h1 className="text-4xl md:text-6xl">Caitlin Thaeler</h1>
        </div>

        <div className="flex w-full justify-center h-full">
            <div className="w-[200px] items-center my-auto">
                <p>If you've got the <span>vision</span></p>
                <p>I've got the <span>code</span></p>
            </div>

             <div className={`relative overflow-hidden rounded-full`}>
                <img src={heroImage} alt="" height={heroImageSize} width={heroImageSize} className={`object-cover`} />
            </div>

            
        </div>

        <div className="flex w-full justify-center mt-5">
            <ResumeModal />
        </div>

        <div id="projects" className="flex-1 flex flex-col w-full justify-end">
            <div className="flex w-full relative">
                <div className="absolute left-1/2 -translate-x-1/2">
                    <p>Projects</p>
                </div>
                <div className="ml-auto">
                     <Link href="#">
                        <Button variant="link">
                            See All {' >>'}
                        </Button>
                    </Link>
                </div>
                
            </div>
           
            
            <ConveyerCarousel />
        </div>


        

    </div>
    );
}