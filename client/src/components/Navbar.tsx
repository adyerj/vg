import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import venturiLogo from "../assets/venturi-logo-header.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={venturiLogo} alt="Venturi Growth" className="h-8 md:h-10" />
            </a>
          </div>
          
          <div className="hidden md:flex space-x-1 items-center">
            <a href="#problem" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100/10 hover:text-primary transition-colors">
              Retention Crisis
            </a>
            <a href="#compounding-problem" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100/10 hover:text-primary transition-colors">
              Compounding Problem
            </a>
            <a href="#retention-impact" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100/10 hover:text-primary transition-colors">
              Valuation Impact
            </a>
            <a href="#process" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100/10 hover:text-primary transition-colors">
              Our Process
            </a>
            <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100/10 hover:text-primary transition-colors">
              Services
            </a>
          </div>
          
          <div className="flex items-center">
            <a 
              href="#contact" 
              className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-[#0072CE] text-white hover:bg-[#005bb7] shadow-md"
            >
              Book Your Diagnostic Call
            </a>
            
            <button 
              className="md:hidden p-2 rounded-md text-slate-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-white absolute left-0 right-0 top-[72px] shadow-lg border-b border-slate-200/80 z-20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-3">
                <a href="#problem" className="block py-2 px-3 rounded-md text-slate-700 hover:bg-slate-50 hover:text-primary" onClick={() => setIsOpen(false)}>Retention Crisis</a>
                <a href="#compounding-problem" className="block py-2 px-3 rounded-md text-slate-700 hover:bg-slate-50 hover:text-primary" onClick={() => setIsOpen(false)}>Compounding Problem</a>
                <a href="#retention-impact" className="block py-2 px-3 rounded-md text-slate-700 hover:bg-slate-50 hover:text-primary" onClick={() => setIsOpen(false)}>Valuation Impact</a>
                <a href="#process" className="block py-2 px-3 rounded-md text-slate-700 hover:bg-slate-50 hover:text-primary" onClick={() => setIsOpen(false)}>Our Process</a>
                <a href="#services" className="block py-2 px-3 rounded-md text-slate-700 hover:bg-slate-50 hover:text-primary" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#calculator" className="block py-2 px-3 rounded-md text-slate-700 hover:bg-slate-50 hover:text-primary" onClick={() => setIsOpen(false)}>Calculator</a>
                <a href="#contact" className="flex items-center justify-center mt-4 px-4 py-2.5 bg-[#0072CE] text-white font-medium rounded-md shadow-sm" onClick={() => setIsOpen(false)}>
                  Book Your Diagnostic Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
