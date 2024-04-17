import Hero from "@/app/components/modules/landingPage/Hero";
import AboutUs from "../components/modules/landingPage/AboutUs";
import Features from "../components/modules/landingPage/Features";

export default function LoginPage() {
    return (
        <div className="flex flex-col h-screen gap-20">
            <Hero />
            <AboutUs />
            <Features />
        </div>
    );
}
