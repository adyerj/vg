import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function SocialProofSection() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const industries = [
    { id: 1, name: "B2B SaaS" },
    { id: 2, name: "FinTech" },
    { id: 3, name: "HR Tech" },
    { id: 4, name: "MarTech" }
  ];

  return (
    <section className="py-16 lg:py-20 bg-neutral-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Trusted by Fast-Growing SaaS Companies</h2>
          <p className="text-lg text-neutral-600">
            We've helped SaaS companies across industries transform their retention metrics and enterprise value.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {industries.map((industry) => (
            <motion.div 
              key={industry.id}
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24"
              variants={itemVariants}
            >
              <div className="text-neutral-800 font-bold text-xl">{industry.name}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="aspect-square bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-1">Sarah Johnson</h4>
                  <p className="text-neutral-500 text-sm">CRO, Enterprise SaaS</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neutral-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <blockquote className="text-lg text-neutral-700 italic mb-6">
                  "Venturi Growth delivered exactly what they promised: a transformation in our retention metrics that directly impacted our company valuation. Their methodologies increased our NRR from 103% to 118% in just two quarters, which our board specifically highlighted as a key driver in our successful funding round."
                </blockquote>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="ml-4 text-sm text-neutral-500">
                    $52M+ in additional enterprise value created
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="bg-primary/10 rounded-full px-6 py-3 inline-flex items-center">
            <span className="text-primary font-medium">
              100% of our clients see positive ROI within the first 6 months
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
