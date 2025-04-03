import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function RetentionImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="retention-impact" className="py-20 bg-gradient-to-b from-white to-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-3 bg-primary/5 text-primary font-medium rounded-full mb-4">
            Outsized Business Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Where Retention Has The Greatest Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Organizations that recognize retention as a critical driver of enterprise value creation
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* B2B SaaS Companies */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg"
            variants={fadeInUp}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">B2B SaaS Companies</h3>
              <p className="text-slate-600 mb-6">
                Optimize your customer journey and reduce churn to increase valuation multiples and create sustainable growth engines.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Increase NDR/NRR metrics for higher valuation</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Reduce acquisition costs with better retention</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Build scalable expansion revenue streams</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Established Agencies */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg"
            variants={fadeInUp}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Established Agencies</h3>
              <p className="text-slate-600 mb-6">
                Transform transactional client relationships into long-term partnerships with predictable recurring revenue models.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Develop true recurring revenue models</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Increase client lifetime value</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Create scalable service delivery systems</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Private Equity Portfolio */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg"
            variants={fadeInUp}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Private Equity Portfolio</h3>
              <p className="text-slate-600 mb-6">
                Accelerate value creation in portfolio companies through improved retention metrics and customer success strategies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Pre-acquisition due diligence on retention health</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Post-acquisition value creation playbooks</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Exit preparation through improved metrics</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* VC-Backed Companies */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-lg"
            variants={fadeInUp}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">VC-Backed Companies</h3>
              <p className="text-slate-600 mb-6">
                Optimize retention metrics before your next funding round to demonstrate strong unit economics and sustainable growth.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Improve key metrics before fundraising</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Build systems that scale with rapid growth</span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Create investor-ready retention dashboards</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}