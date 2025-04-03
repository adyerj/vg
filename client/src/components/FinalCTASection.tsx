import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Ready to Close Your Retention Value Gap?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Book your retention diagnostic today and start your journey toward sustainable growth and increased enterprise value.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#0072CE] rounded-md shadow-lg hover:bg-[#005bb7] transition-colors"
            >
              Book Your Diagnostic Call
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}