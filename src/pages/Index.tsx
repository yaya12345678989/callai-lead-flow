
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import Proof from "@/components/Proof";
import Offer from "@/components/Offer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Comparison />
      <HowItWorks />
      <Proof />
      <Offer />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
