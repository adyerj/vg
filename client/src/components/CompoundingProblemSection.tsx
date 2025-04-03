import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function CompoundingProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section id="compounding-problem" className="py-20 bg-gradient-to-b from-slate-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-3 bg-primary/5 text-primary font-medium rounded-full mb-4">
            The Compounding Problem
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Poor Retention Creates a Downward Spiral
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            When left unaddressed, retention issues compound and create multiple points of failure across your business
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Problem 1 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Red warning indicator */}
            <div className="absolute top-0 right-0 w-16 h-1 bg-red-500 rounded-bl-md"></div>
            
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-red-50 text-red-600 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3">Financial Drain</h3>
            <p className="text-slate-600 mb-4">
              Every lost customer represents wasted Customer Acquisition Cost (CAC) and unrealized future revenue that could have been reinvested into growth.
            </p>
            
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-red-800 text-sm font-medium mb-3">
                Revenue lost due to preventable churn for a typical $10M ARR business:
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white rounded p-2">
                  <div className="text-slate-500 text-xs mb-1">Year 1</div>
                  <div className="font-bold text-red-600">$1.3M</div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="text-slate-500 text-xs mb-1">Year 3</div>
                  <div className="font-bold text-red-600">$5.2M</div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="text-slate-500 text-xs mb-1">Year 5</div>
                  <div className="font-bold text-red-600">$11.8M</div>
                </div>
              </div>
              <div className="text-xs text-center mt-2 text-red-700">
                Based on industry studies from OpenView Partners and SaaS Capital
              </div>
            </div>
          </motion.div>
          
          {/* Problem 2 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Orange warning indicator */}
            <div className="absolute top-0 right-0 w-16 h-1 bg-amber-500 rounded-bl-md"></div>
            
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-amber-50 text-amber-600 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3">Sales & Marketing Inefficiency</h3>
            <p className="text-slate-600 mb-4">
              When customers churn rapidly, sales and marketing teams need to constantly refill the top of the funnel, leading to rapidly escalating costs.
            </p>
            
            <div className="bg-amber-50 rounded-lg p-4">
              <p className="text-amber-800 text-sm font-medium">
                Typical impact: Customer acquisition costs rise dramatically to maintain the same growth rate in companies with high churn.
              </p>
              <div className="text-xs text-amber-700 mt-2">
                Source: Bain & Company Retention Analysis, 2023
              </div>
            </div>
          </motion.div>
          
          {/* Problem 3 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Purple warning indicator */}
            <div className="absolute top-0 right-0 w-16 h-1 bg-purple-500 rounded-bl-md"></div>
            
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-purple-50 text-purple-600 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3">Product Development Challenges</h3>
            <p className="text-slate-600 mb-4">
              High churn results in limited customer feedback loops and reduced product maturity, leading to slower feature development.
            </p>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-purple-800 text-sm font-medium">
                Typical impact: Product development significantly slows due to lack of stable user feedback and constant priority shifts.
              </p>
              <div className="text-xs text-purple-700 mt-2">
                Source: McKinsey Product Excellence Study
              </div>
            </div>
          </motion.div>
          
          {/* Problem 4 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Blue warning indicator */}
            <div className="absolute top-0 right-0 w-16 h-1 bg-blue-500 rounded-bl-md"></div>
            
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3">Team Morale & Culture</h3>
            <p className="text-slate-600 mb-4">
              Constant customer churn creates frustration and burnout among customer-facing teams, leading to higher employee turnover.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-800 text-sm font-medium">
                Typical impact: Employee turnover significantly increases in companies with high customer churn, creating a vicious cycle.
              </p>
              <div className="text-xs text-blue-700 mt-2">
                Source: LinkedIn Talent Solutions, 2023 Report
              </div>
            </div>
          </motion.div>
          
          {/* Problem 5 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Green warning indicator */}
            <div className="absolute top-0 right-0 w-16 h-1 bg-green-500 rounded-bl-md"></div>
            
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-green-50 text-green-600 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3">Investor Confidence</h3>
            <p className="text-slate-600 mb-4">
              High churn rates signal fundamental business model issues, leading to increased scrutiny and lower valuations from investors.
            </p>
            
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-green-800 text-sm font-medium">
                Typical impact: Valuations decrease substantially when retention metrics fall below industry benchmarks.
              </p>
              <div className="text-xs text-green-700 mt-2">
                Source: SaaS Capital Retention Survey, 2022
              </div>
            </div>
          </motion.div>
          
          {/* Problem 6 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Teal warning indicator */}
            <div className="absolute top-0 right-0 w-16 h-1 bg-teal-500 rounded-bl-md"></div>
            
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-teal-50 text-teal-600 mb-5">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3">Growth Ceiling</h3>
            <p className="text-slate-600 mb-4">
              Poor retention creates an artificial ceiling on growth, as new customer acquisition can't outpace the rate of customer loss.
            </p>
            
            <div className="bg-teal-50 rounded-lg p-4">
              <p className="text-teal-800 text-sm font-medium">
                Typical impact: Growth plateaus significantly when Net Revenue Retention falls below 100%.
              </p>
              <div className="text-xs text-teal-700 mt-2">
                Source: Bessemer Venture Partners State of Cloud Report
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-slate-800 rounded-2xl p-8 md:p-10 text-white shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                The <span className="text-primary-200">solution</span> is systematic retention optimization
              </h3>
              <p className="text-slate-300 mb-6 md:mb-0">
                Our methodology addresses each of these issues by creating a retention system that drives sustainable growth.
              </p>
            </div>
            <a 
              href="#process" 
              className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md shadow-lg transition-colors"
            >
              See Our Approach
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}