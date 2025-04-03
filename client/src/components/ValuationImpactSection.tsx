import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RetentionValueChart } from "@/components/ui/retention-value-chart";

// Chart data for 3-year impact
const threeYearImpactData = [
  { year: 'Year 0', nrr105: 10, nrr120: 10 },
  { year: 'Year 1', nrr105: 10.5, nrr120: 12 },
  { year: 'Year 2', nrr105: 11.0, nrr120: 14.4 },
  { year: 'Year 3', nrr105: 11.6, nrr120: 17.3 },
  { year: 'Year 4', nrr105: 12.1, nrr120: 20.7 },
  { year: 'Year 5', nrr105: 12.7, nrr120: 24.9 },
];

export default function ValuationImpactSection() {
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
    <section id="impact" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="inline-block px-6 py-3 bg-primary/5 text-primary font-medium rounded-full mb-4">
            Quantified Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            The Enterprise Value Gap
          </h2>
          <p className="text-lg text-slate-600">
            According to SaaS Capital's analysis of over 1,400 private SaaS companies, 
            retention metrics have the highest correlation with valuation multiples — even more than growth rate.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <RetentionValueChart />
            
            <motion.div
              className="bg-white rounded-xl shadow-md p-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800">The Revenue Impact</h3>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={threeYearImpactData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      tickFormatter={(value) => `$${value}M`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value}M ARR`, '']}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="nrr105" 
                      name="105% NRR" 
                      stroke="#94A3B8" 
                      strokeWidth={2}
                      isAnimationActive={isVisible}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="nrr120" 
                      name="120% NRR" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      isAnimationActive={isVisible}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center">
                <p className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  A 15% NRR improvement compounds to 3.2x more revenue by year 5
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 mb-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Tale of Two SaaS Companies</h3>
              <p className="text-slate-600 mb-6">
                Two identical SaaS companies with $10M ARR, but different retention metrics:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-lg">
                  <h4 className="font-medium text-lg mb-3">Company A</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Net Retention:</span>
                      <span className="font-medium">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Valuation Multiple:</span>
                      <span className="font-medium">5x ARR</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2 mt-2">
                      <span className="text-slate-500">Enterprise Value:</span>
                      <span className="font-medium">$50M</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-5 rounded-lg border border-primary/20">
                  <h4 className="font-medium text-lg mb-3">Company B</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Net Retention:</span>
                      <span className="font-medium text-primary">115%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Valuation Multiple:</span>
                      <span className="font-medium text-primary">9.5x ARR</span>
                    </div>
                    <div className="flex justify-between border-t border-primary/20 pt-2 mt-2">
                      <span className="text-slate-500">Enterprise Value:</span>
                      <span className="font-medium text-primary">$95M</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-lg">
                <div className="flex items-center">
                  <svg className="h-10 w-10 text-amber-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="text-slate-700 font-medium">
                      Same revenue, <span className="text-amber-600 font-semibold">$45M enterprise value gap</span>
                    </p>
                    <p className="text-sm text-slate-500">
                      The value gap continues to widen as companies scale
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-slate-800 rounded-xl shadow-md p-6 text-white"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-5">Compounding Revenue Value Gap</h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="text-slate-300 mb-2">Year 1 Revenue Gap</h4>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span>Company A (95% NRR)</span>
                      <span>$9.5M ARR</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2 mb-3">
                      <div className="bg-slate-400 h-2 rounded-full" style={{ width: '63%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-1">
                      <span>Company B (115% NRR)</span>
                      <span>$11.5M ARR</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '77%' }}></div>
                    </div>
                    
                    <p className="text-sm text-slate-300 mt-3">
                      <span className="text-primary font-medium">$2M revenue gap</span> (21% difference)
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-slate-300 mb-2">Year 3 Revenue Gap</h4>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span>Company A (95% NRR)</span>
                      <span>$8.6M ARR</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2 mb-3">
                      <div className="bg-slate-400 h-2 rounded-full" style={{ width: '43%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-1">
                      <span>Company B (115% NRR)</span>
                      <span>$15.2M ARR</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                    
                    <p className="text-sm text-slate-300 mt-3">
                      <span className="text-primary font-medium">$6.6M revenue gap</span> (77% difference)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 p-3 bg-slate-900 rounded-lg border border-slate-700">
                <div className="font-medium">Year 3 Enterprise Value Comparison</div>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="text-slate-300">Company A:</span>
                  <span className="font-bold">$43M</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Company B:</span>
                  <span className="font-bold text-primary">$144M</span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-700">
                  <div className="font-medium text-primary">$101M enterprise value gap</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
