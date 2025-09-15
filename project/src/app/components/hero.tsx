import Image from "next/image";
import ResumeModal from "./resumeModal";

export default function Hero() {
    const heroImage = "/images/caitlinpfp2024.png"
    return (
    <div className="flex flex-col">
        <div className="flex w-full justify-center">
            <h1>Caitlin Thaeler</h1>
        </div>

        <div className="flex w-full justify-center">
            <div className="w-[200px] items-center my-auto">
                <p>If you've got the <span>vision</span></p>
                <p>I've got the <span>code</span></p>
            </div>

             <div className="relative size-[90px] overflow-hidden rounded-full">
                {heroImage ? (<Image 
                    src={heroImage}
                    alt="image"
                    fill
                    className="object-cover"
                />) : null}
            </div>

            
        </div>

        <div className="flex w-full justify-center">
            <ResumeModal />
        </div>
        

    </div>
    );
}