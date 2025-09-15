import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
        </div>
    );
}