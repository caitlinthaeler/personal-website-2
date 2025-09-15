import Image from "next/image";
import ResumeModal from "./resumeModal";
import ConveyerCarousel from "./ui/conveyerCarousel";

export default function Hero() {
    const heroImage = "/ui/caitlinpfp2024.png"
    const heroImageSize = "200px"
    return (
    <div className="flex flex-col">
        <div className="flex w-full justify-center">
            <h1>Caitlin Thaeler</h1>
        </div>

        <div className="flex w-full justify-center h-full">
            <div className="w-[200px] items-center my-auto">
                <p>If you've got the <span>vision</span></p>
                <p>I've got the <span>code</span></p>
            </div>

             <div className={`relative overflow-hidden rounded-full`}>
                <img src={heroImage} alt="" height={heroImageSize} width={heroImageSize} className={`object-cover`} />
                {/* {heroImage ? (<Image 
                    src={heroImage}
                    alt="image"
                    fill
                    className="object-cover"
                />) : null} */}
            </div>

            
        </div>

        <div className="flex w-full justify-center">
            <ResumeModal />
        </div>

        <div className="flex w-full justify-center">
            <ConveyerCarousel />
        </div>


        

    </div>
    );
}