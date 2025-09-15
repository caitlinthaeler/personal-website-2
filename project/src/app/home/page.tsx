import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import VerticalEventTimeline from "@/components/timeline/verticalTimeline";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <VerticalEventTimeline />
        </div>
    );
}