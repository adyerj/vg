import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  const timelineData = [
    {
      title: "Diagnose",
      description: "We analyze your current retention metrics, customer journey, and success processes to identify key areas for improvement.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      content: (
        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-3">Diagnostic Key Deliverables:</h4>
          <div className="space-y-2 mb-5">
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Deep-dive analysis of customer retention metrics</span>
            </div>
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Customer journey mapping and friction identification</span>
            </div>
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Comprehensive gap analysis between current and ideal state</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-blue-700 text-sm font-medium">
              <span className="font-bold">Revenue Gap Identified:</span> At this stage, we typically identify revenue growth opportunities of 20-40% annually through improved retention.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Design",
      description: "We create a tailored retention transformation strategy specific to your business model and customer segments.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      content: (
        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-3">Strategic Design Elements:</h4>
          <div className="space-y-2 mb-5">
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Tailored retention strategy blueprint</span>
            </div>
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Customer success program architecture</span>
            </div>
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Onboarding and expansion revenue frameworks</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <p className="text-amber-700 text-sm font-medium">
                <span className="font-bold">Current State:</span> Most SaaS companies operate at 90-95% gross retention rates.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-green-700 text-sm font-medium">
                <span className="font-bold">Target State:</span> Our designs target 98%+ gross retention and 115%+ net retention.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Implement",
      description: "Unlike traditional consultants, we work alongside your team to implement changes and build new processes.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      content: (
        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-3">Implementation Components:</h4>
          <div className="space-y-2 mb-5">
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Hands-on implementation of new processes and systems</span>
            </div>
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Team training and capability building</span>
            </div>
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cross-functional alignment workshops</span>
            </div>
          </div>
          
          <div className="bg-slate-800 p-4 rounded-lg text-white">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Implementation Progress</span>
              <span className="text-sm font-medium">60-90 days</span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-slate-300 text-xs mt-2">
              By mid-implementation, clients typically see 5-10% improvements in retention metrics.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Optimize",
      description: "We continuously measure results, refine approaches, and adapt strategies to maximize your retention metrics and enterprise value.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      content: (
        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-3">Optimization & Value Creation:</h4>
          <div className="space-y-2 mb-5">
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Continuous measurement and optimization cycles</span>
            </div>
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Executive reporting on both leading and lagging indicators</span>
            </div>
            <div className="flex gap-2 items-center text-slate-700">
              <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Strategic refinement based on real-world results</span>
            </div>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
            <h5 className="font-bold text-primary mb-2">Enterprise Value Impact</h5>
            <p className="text-slate-700 text-sm mb-3">
              Each 5% improvement in Net Retention Rate correlates to a 1-2x increase in valuation multiple.
            </p>
            <div className="bg-white p-3 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">$10M ARR @ 6x multiple</span>
                <span className="font-bold text-slate-800">$60M</span>
              </div>
              <div className="my-2 relative h-2">
                <div className="absolute inset-0 bg-slate-200 rounded-full"></div>
                <div className="absolute inset-y-0 left-0 bg-amber-500 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">$10M ARR @ 12x multiple</span>
                <span className="font-bold text-green-600">$120M</span>
              </div>
              <div className="my-2 relative h-2">
                <div className="absolute inset-0 bg-slate-200 rounded-full"></div>
                <div className="absolute inset-y-0 left-0 bg-green-500 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-3 bg-primary/5 text-primary font-medium rounded-full mb-4">
            Our Transformation Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            The Venturi Growth Methodology
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our proven approach systematically transforms retention metrics to maximize enterprise value
          </p>
        </motion.div>
        
        <Timeline data={timelineData} />
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block px-6 py-3 bg-slate-800 text-white font-medium rounded-full mb-4">
            Retention drives enterprise value
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to maximize your company's valuation?
          </h3>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md shadow-md transition-colors mt-4"
          >
            Book Your Diagnostic Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}