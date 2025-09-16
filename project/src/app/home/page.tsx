import Hero from "@/components/hero";
import MobileMenu from "@/components/navbar/mobileMenu";
import Navbar from "@/components/navbar/navbar";
import VerticalEventTimeline from "@/components/timeline/verticalTimeline";

export default function Home() {
    return (
        <div>
            <MobileMenu className="fixed top-0 right-0 z-50"/>
             <div className="flex flex-col min-h-screen">
                <Navbar />
                <Hero />
                
            </div>
             
            <VerticalEventTimeline/>
           
        </div>
       
    );
}