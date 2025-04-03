import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function ServiceTiersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section id="services" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Who We Help Grow
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our structured approach provides tailored solutions for every business at different growth stages
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Early-stage businesses card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-slate-800 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Early-stage businesses</h3>
                <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p className="text-slate-300">$1-2M Annual Revenue</p>
            </div>
            
            <div className="p-6 pb-8">
              <h4 className="text-xl font-bold text-primary mb-2 border-b border-primary pb-2">
                Retention Mastery™
              </h4>
              <p className="text-slate-600 mb-6">
                Strategic guidance and coaching that builds the foundation for sustainable growth.
              </p>
              
              <div className="bg-green-50 text-green-800 rounded-lg p-3 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Typical ROI: $200-400K in retained revenue</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive retention audit</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customer journey mapping</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Churn prevention strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-day action plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly coaching calls</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-200 pt-4 mb-4">
                <span>Timeline:</span>
                <span className="font-medium">4-8 weeks</span>
              </div>
              
              <a href="#contact" className="block w-full px-4 py-2 text-center bg-[#0072CE] text-white font-medium rounded-md hover:bg-[#005bb7] transition-colors">
                Book Your Diagnostic Call
              </a>
            </div>
          </motion.div>
          
          {/* Growth-stage companies card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 relative lg:scale-105 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Most Popular
            </div>
            
            <div className="bg-primary text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Growth-stage companies</h3>
                <svg className="w-8 h-8 text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-primary-100">$2-10M Annual Revenue</p>
            </div>
            
            <div className="p-6 pb-8">
              <h4 className="text-xl font-bold text-primary mb-2 border-b border-primary pb-2">
                Venturi Catalyst™
              </h4>
              <p className="text-slate-600 mb-6">
                Comprehensive transformation program focused on revenue retention and expansion.
              </p>
              
              <div className="bg-green-50 text-green-800 rounded-lg p-3 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Typical ROI: $1-2.5M in retained revenue</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>In-depth diagnostics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customer success playbook</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Onboarding optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expansion revenue strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>90-day transformation plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ongoing implementation support</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-200 pt-4 mb-4">
                <span>Timeline:</span>
                <span className="font-medium">90 days</span>
              </div>
              
              <a href="#contact" className="block w-full px-4 py-2 text-center bg-[#0072CE] text-white font-medium rounded-md hover:bg-[#005bb7] transition-colors">
                Book Your Diagnostic Call
              </a>
            </div>
          </motion.div>
          
          {/* Enterprise organizations card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-slate-800 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Enterprise organizations</h3>
                <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-slate-300">$10M+ Annual Revenue</p>
            </div>
            
            <div className="p-6 pb-8">
              <h4 className="text-xl font-bold text-primary mb-2 border-b border-primary pb-2">
                Venturi Enterprise™
              </h4>
              <p className="text-slate-600 mb-6">
                Advanced growth optimization for enterprise and pre-exit companies.
              </p>
              
              <div className="bg-green-50 text-green-800 rounded-lg p-3 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Typical ROI: $5-25M in enterprise value</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise-wide retention audit</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cross-team alignment strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Net Revenue Retention optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customer success organization design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exit readiness assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Long-term retention strategy</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-200 pt-4 mb-4">
                <span>Timeline:</span>
                <span className="font-medium">4-6 months</span>
              </div>
              
              <a href="#contact" className="block w-full px-4 py-2 text-center bg-[#0072CE] text-white font-medium rounded-md hover:bg-[#005bb7] transition-colors">
                Book Your Diagnostic Call
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <a 
            href="#calculator" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#10B981] rounded-md shadow-md hover:bg-[#0d9668] transition-colors"
          >
            Calculate Your Retention Value Gap
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}