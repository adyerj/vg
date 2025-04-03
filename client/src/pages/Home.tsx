import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CompoundingProblemSection from "@/components/CompoundingProblemSection";
import ProcessSection from "@/components/ProcessSection";
import ServiceTiersSection from "@/components/ServiceTiersSection";
import RetentionImpactSection from "@/components/RetentionImpactSection";
import CalculatorSection from "@/components/CalculatorSection";
import FinalCTASection from "@/components/FinalCTASection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <div className="overflow-hidden">
          <ProblemSection />
          <CompoundingProblemSection />
          <ProcessSection />
          <ServiceTiersSection />
          <RetentionImpactSection />
          <CalculatorSection />
          <FinalCTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
