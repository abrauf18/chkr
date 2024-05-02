import Hero from "./hero";
import Navbar from "./landing-nav";
import Partners from "./partners";
import AboutUs from "./about-us";
import Features from "./features";
import Benefits from "./benefits";
import Testimonials from "./testimonials";
import Subscriptions from "./subscriptions";
import Footer from "./footer";

export default function Landing() {
  return (
    <div className="flex flex-col h-screen gap-20">
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

