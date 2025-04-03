import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Chart data for retention decay
const retentionDecayData = [
  { quarter: 'Q0', retention90: 100, retention95: 100 },
  { quarter: 'Q1', retention90: 90, retention95: 95 },
  { quarter: 'Q2', retention90: 81, retention95: 90 },
  { quarter: 'Q3', retention90: 73, retention95: 86 },
  { quarter: 'Q4', retention90: 66, retention95: 82 },
  { quarter: 'Q5', retention90: 59, retention95: 78 },
  { quarter: 'Q6', retention90: 53, retention95: 74 },
  { quarter: 'Q7', retention90: 48, retention95: 70 },
  { quarter: 'Q8', retention90: 43, retention95: 66 },
];

export default function ProblemSection() {
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

  return (
    <section id="problem" className="py-16 lg:py-24 bg-neutral-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">The Hidden Retention Crisis in SaaS</h2>
          <p className="text-lg text-neutral-600">
            Even "good" retention metrics are leaving millions in enterprise value unrealized. 
            The gap between good and great retention creates a compounding effect that dramatically impacts valuation.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-900">The Compounding Cost of Retention Gaps</h3>
                <div className="h-[380px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={retentionDecayData}
                      margin={{ top: 20, right: 20, left: 5, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis 
                        dataKey="quarter" 
                        label={{ value: 'Quarters', position: 'insideBottom', offset: -10 }}
                        height={40}
                      />
                      <YAxis 
                        label={{ 
                          value: 'Remaining Customers (%)', 
                          angle: -90, 
                          position: 'insideLeft',
                          offset: -5
                        }}
                        width={60}
                        domain={[0, 100]}
                      />
                      <Tooltip formatter={(value) => [`${value}%`, 'Customers Remaining']} />
                      <Legend wrapperStyle={{ paddingTop: 15 }} />
                      <Line 
                        type="monotone" 
                        dataKey="retention90" 
                        name="90% Retention" 
                        stroke="#F43F5E" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                        isAnimationActive={isVisible}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="retention95" 
                        name="95% Retention" 
                        stroke="#10B981" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                        isAnimationActive={isVisible}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-neutral-500 mt-4">
                  With 90% gross retention, you lose half your customers in just 7 quarters. 
                  At 95%, it takes 14 quarters to lose the same amount.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl shadow-md p-6 mb-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3">The Reality of "Good" Retention</h3>
              <p className="mb-4">Most SaaS companies consider these metrics acceptable:</p>
              <div className="flex justify-between items-center border-b border-white/20 py-3">
                <span>Gross Retention Rate</span>
                <span className="text-xl font-medium">85-90%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 py-3">
                <span>Net Retention Rate</span>
                <span className="text-xl font-medium">100-105%</span>
              </div>
              <p className="mt-4 text-white/80">
                But the best-performing SaaS companies achieve: 
                <strong> 95%+ GRR</strong> and <strong> 120%+ NRR</strong>
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-100 text-red-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">The Real Cost</h3>
              </div>
              <p className="text-neutral-700 mb-3">
                A SaaS company with $10M ARR and "good" retention metrics is 
                <strong> leaving $65M+ in enterprise value</strong> on the table over a 3-year period.
              </p>
              <div className="mt-6">
                <a href="#calculator" className="inline-block px-5 py-2.5 bg-[#F59E0B] hover:bg-amber-500 transition-colors text-white font-medium rounded-md shadow-sm text-sm">
                  Calculate Your Value Gap
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
