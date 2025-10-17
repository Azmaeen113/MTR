import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Tokenomics from "@/components/Tokenomics";
import Benefits from "@/components/Benefits";
import Roadmap from "@/components/Roadmap";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Tokenomics />
      <Benefits />
      <Roadmap />
      <Partners />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
