import Hero from "@/app/components/modules/landingPage/Hero";
import Partners from "../components/modules/landingPage/Partners";
import AboutUs from "../components/modules/landingPage/AboutUs";
import Features from "../components/modules/landingPage/Features";
import Benefits from "@/app/components/modules/landingPage/Benefits";
import Testimonials from "../components/modules/landingPage/Testimonials";
import Subscriptions from "@/app/components/modules/landingPage/Subscriptions";
import Footer from "../components/modules/landingPage/Footer";

export default function LandingPage() {
    return (
        <div className="flex flex-col h-screen gap-20">
            <Hero />
            <Partners />
            <AboutUs />
            <Features />
            <Benefits />
            <Testimonials />
            <Subscriptions />
            <Footer />
        </div>
    );
}