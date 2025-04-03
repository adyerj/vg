import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function MethodologySection() {
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
        staggerChildren: 0.2
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
  
  // SVG for methodology flow diagram
  const methodologyFlowSvg = (
    <svg viewBox="0 0 800 300" className="w-full h-auto max-w-4xl mx-auto">
      <defs>
        <linearGradient id="gradientFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect x="0" y="0" width="800" height="300" fill="#f8fafc" rx="10" ry="10" />
      
      {/* Connecting Flow Lines */}
      <path d="M150,150 H330 M470,150 H650" stroke="url(#gradientFlow)" strokeWidth="3" strokeDasharray="8,4" />
      
      {/* Circles */}
      <g>
        <circle cx="150" cy="150" r="60" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="2"/>
        <text x="150" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E3A8A">Activation</text>
        <text x="150" y="160" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E3A8A">Optimization</text>
      </g>
      
      <g>
        <circle cx="400" cy="150" r="60" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="2"/>
        <text x="400" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E3A8A">Engagement</text>
        <text x="400" y="160" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E3A8A">Deepening</text>
      </g>
      
      <g>
        <circle cx="650" cy="150" r="60" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="2"/>
        <text x="650" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E3A8A">Expansion</text>
        <text x="650" y="160" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E3A8A">Enablement</text>
      </g>
      
      {/* Indicators */}
      <g>
        <rect x="90" y="240" width="120" height="30" rx="15" ry="15" fill="#10B981" opacity="0.2" />
        <text x="150" y="258" textAnchor="middle" fontSize="12" fill="#0F766E">-38% Early Churn</text>
      </g>
      
      <g>
        <rect x="340" y="240" width="120" height="30" rx="15" ry="15" fill="#10B981" opacity="0.2" />
        <text x="400" y="258" textAnchor="middle" fontSize="12" fill="#0F766E">+72% Feature Usage</text>
      </g>
      
      <g>
        <rect x="590" y="240" width="120" height="30" rx="15" ry="15" fill="#10B981" opacity="0.2" />
        <text x="650" y="258" textAnchor="middle" fontSize="12" fill="#0F766E">+85% Expansion</text>
      </g>
      
      {/* Title */}
      <text x="400" y="50" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1E3A8A">The Venturi Growth Methodology</text>
    </svg>
  );

  return (
    <section id="methodology" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">The Venturi Growth Methodology</h2>
          <p className="text-lg text-neutral-600">
            Our proprietary data-driven approach transforms retention from a maintenance metric 
            into your most powerful growth engine.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6 transition-all hover:shadow-md hover:-translate-y-1 duration-300"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-900">Activation Optimization</h3>
            <p className="text-neutral-600 mb-4">
              Identify and eliminate onboarding friction points that lead to early-stage churn using our 
              proprietary Value Realization Framework.
            </p>
            <div className="text-sm font-medium text-primary">
              <p>• Reduces time-to-value by 60%</p>
              <p>• Cuts early-stage churn by 38%</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6 transition-all hover:shadow-md hover:-translate-y-1 duration-300"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-900">Engagement Deepening</h3>
            <p className="text-neutral-600 mb-4">
              Transform product usage patterns with data-driven engagement strategies that create habitual, 
              sticky behavior patterns.
            </p>
            <div className="text-sm font-medium text-primary">
              <p>• Increases feature adoption by 72%</p>
              <p>• Reduces feature abandonment by 43%</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6 transition-all hover:shadow-md hover:-translate-y-1 duration-300"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-900">Expansion Enablement</h3>
            <p className="text-neutral-600 mb-4">
              Deploy our Value-Based Expansion Framework to identify and capture revenue expansion opportunities 
              within your existing customer base.
            </p>
            <div className="text-sm font-medium text-primary">
              <p>• Increases expansion revenue by 85%</p>
              <p>• Boosts net retention by 15-20 points</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {methodologyFlowSvg}
          <p className="text-sm text-neutral-500 mt-3">Our proprietary methodology flow (simplified overview)</p>
        </motion.div>
      </div>
    </section>
  );
}
