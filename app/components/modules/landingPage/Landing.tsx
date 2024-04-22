import Hero from "./Hero";
import Navbar from "./LandingNav";
import Partners from "./Partners";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Subscriptions from "./Subscriptions";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
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
