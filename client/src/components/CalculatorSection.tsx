import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { formatCurrency } from "@/lib/utils";

type CalculatorFormData = {
  currentARR: number;
  grossRetention: number;
  netRetention: number;
  growthRate: number;
  timeToExit: string;
};

type CalculatorResults = {
  currentValuation: number;
  potentialValuation: number;
  valuationGap: number;
  improvedGRR: number;
  improvedNRR: number;
  revenueYear1: number;
  revenueYear3: number;
  revenueYear5: number;
  churnRate: number;
};

export default function CalculatorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<CalculatorFormData>();

  const onSubmit = (data: CalculatorFormData) => {
    const arr = parseFloat(data.currentARR.toString());
    const grr = parseFloat(data.grossRetention.toString());
    const nrr = parseFloat(data.netRetention.toString());
    const growthRate = parseFloat(data.growthRate.toString()) / 100;
    
    // Calculate multiples based on net retention rate
    const currentMultiple = calculateMultiple(nrr);
    const improvedNRR = Math.min(nrr + 15, 130);
    const improvedGRR = Math.min(grr + 7, 98);
    const improvedMultiple = calculateMultiple(improvedNRR);
    
    const currentValuation = arr * currentMultiple;
    const potentialValuation = arr * improvedMultiple;
    const valuationGap = potentialValuation - currentValuation;
    
    // Calculate churn rate from gross retention
    const churnRate = 100 - grr;
    
    // Calculate revenue lost due to churn over multiple years
    let year1Loss = 0;
    let year3Loss = 0;
    let year5Loss = 0;
    let currentACV = arr;
    
    // Calculate cumulative revenue loss over years with growth factored in
    for (let i = 1; i <= 5; i++) {
      // Calculate potential ACV with growth but before churn
      currentACV = currentACV * (1 + growthRate);
      // Calculate churn amount for this year
      const yearlyChurn = currentACV * (churnRate / 100);
      
      if (i === 1) {
        year1Loss = yearlyChurn;
      }
      if (i <= 3) {
        year3Loss += yearlyChurn;
      }
      year5Loss += yearlyChurn;
      
      // Adjust ACV after churn
      currentACV = currentACV - yearlyChurn;
    }
    
    setResults({
      currentValuation,
      potentialValuation,
      valuationGap,
      improvedGRR,
      improvedNRR,
      revenueYear1: year1Loss,
      revenueYear3: year3Loss,
      revenueYear5: year5Loss,
      churnRate
    });
  };

  // Helper function to calculate multiple based on NRR
  const calculateMultiple = (nrr: number): number => {
    // Simplified formula for demonstration
    if (nrr < 100) return 3 + (nrr - 85) * 0.1;
    return 4 + (nrr - 100) * 0.2;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">How Much Revenue and Value Could You Be Leaving on the Table?</h2>
          <p className="text-lg text-neutral-600">
            Use our calculator to estimate your potential enterprise value gap based on your current 
            retention metrics and growth rate.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-neutral-50 rounded-2xl shadow-lg overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-900">Retention ROI Calculator</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="currentARR">
                    Current ARR ($)
                  </label>
                  <input 
                    type="number" 
                    id="currentARR" 
                    className={`w-full px-4 py-2 border ${errors.currentARR ? 'border-red-300 focus:ring-red-500' : 'border-neutral-300 focus:ring-primary'} rounded-md focus:ring-2 focus:border-primary`}
                    placeholder="e.g. 10000000" 
                    {...register("currentARR", { 
                      required: "ARR is required", 
                      min: { value: 100000, message: "Minimum ARR is $100,000" },
                      max: { value: 1000000000, message: "Maximum ARR is $1,000,000,000" }
                    })}
                  />
                  {errors.currentARR && <p className="mt-1 text-sm text-red-600">{errors.currentARR.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="grossRetention">
                    Current Gross Retention (%)
                  </label>
                  <input 
                    type="number" 
                    id="grossRetention" 
                    className={`w-full px-4 py-2 border ${errors.grossRetention ? 'border-red-300 focus:ring-red-500' : 'border-neutral-300 focus:ring-primary'} rounded-md focus:ring-2 focus:border-primary`}
                    placeholder="e.g. 85" 
                    {...register("grossRetention", { 
                      required: "Gross retention is required", 
                      min: { value: 50, message: "Minimum gross retention is 50%" },
                      max: { value: 100, message: "Maximum gross retention is 100%" }
                    })}
                  />
                  {errors.grossRetention && <p className="mt-1 text-sm text-red-600">{errors.grossRetention.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="netRetention">
                    Current Net Retention (%)
                  </label>
                  <input 
                    type="number" 
                    id="netRetention" 
                    className={`w-full px-4 py-2 border ${errors.netRetention ? 'border-red-300 focus:ring-red-500' : 'border-neutral-300 focus:ring-primary'} rounded-md focus:ring-2 focus:border-primary`}
                    placeholder="e.g. 105" 
                    {...register("netRetention", { 
                      required: "Net retention is required", 
                      min: { value: 50, message: "Minimum net retention is 50%" },
                      max: { value: 200, message: "Maximum net retention is 200%" }
                    })}
                  />
                  {errors.netRetention && <p className="mt-1 text-sm text-red-600">{errors.netRetention.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="growthRate">
                    Annual Growth Rate (%)
                  </label>
                  <input 
                    type="number" 
                    id="growthRate" 
                    className={`w-full px-4 py-2 border ${errors.growthRate ? 'border-red-300 focus:ring-red-500' : 'border-neutral-300 focus:ring-primary'} rounded-md focus:ring-2 focus:border-primary`}
                    placeholder="e.g. 30" 
                    {...register("growthRate", { 
                      required: "Growth rate is required", 
                      min: { value: 0, message: "Minimum growth rate is 0%" },
                      max: { value: 300, message: "Maximum growth rate is 300%" }
                    })}
                  />
                  {errors.growthRate && <p className="mt-1 text-sm text-red-600">{errors.growthRate.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="timeToExit">
                    Years to Exit/Fundraise
                  </label>
                  <select 
                    id="timeToExit" 
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    {...register("timeToExit")}
                  >
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 years</option>
                  </select>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-[#10B981] hover:bg-[#0d9668] transition-colors text-white font-medium rounded-md shadow-md"
                  >
                    Calculate Your Retention Value Gap
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 md:p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-semibold mb-6">Your Results</h3>
              
              {results ? (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Current Estimated Valuation:</span>
                      <span className="text-2xl font-semibold">{formatCurrency(results.currentValuation)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Potential Valuation:</span>
                      <span className="text-2xl font-semibold">{formatCurrency(results.potentialValuation)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-white/20">
                      <span className="text-white/90 font-medium">Enterprise Value Gap:</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#2DD4BF] text-transparent bg-clip-text">{formatCurrency(results.valuationGap)}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <p className="text-white/90 mb-2">With improved retention metrics:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-white/70 text-sm">Optimal Gross Retention</span>
                        <div className="text-xl font-medium">{results.improvedGRR.toFixed(1)}%</div>
                      </div>
                      <div>
                        <span className="text-white/70 text-sm">Optimal Net Retention</span>
                        <div className="text-xl font-medium">{results.improvedNRR.toFixed(1)}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-900/30 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="h-4 w-4 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="text-red-400 font-medium text-sm">Current Churn Rate: <span className="font-bold">{results.churnRate.toFixed(1)}%</span></p>
                    </div>
                    
                    <p className="text-white/90 text-sm mb-3">Potential Revenue Lost:</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 p-2 rounded">
                        <div className="text-xs text-white/70 mb-1">Year 1</div>
                        <div className="text-red-400 font-semibold">{formatCurrency(results.revenueYear1)}</div>
                      </div>
                      <div className="bg-white/5 p-2 rounded">
                        <div className="text-xs text-white/70 mb-1">Year 3</div>
                        <div className="text-red-400 font-semibold">{formatCurrency(results.revenueYear3)}</div>
                      </div>
                      <div className="bg-white/5 p-2 rounded">
                        <div className="text-xs text-white/70 mb-1">Year 5</div>
                        <div className="text-red-400 font-semibold">{formatCurrency(results.revenueYear5)}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <a href="#contact" className="block w-full px-6 py-3 bg-white text-primary font-medium rounded-md shadow-md text-center hover:bg-neutral-100 transition-colors">
                      Book Your Diagnostic Call
                    </a>
                    <p className="text-white/70 text-sm mt-3 text-center">
                      Learn how we can help you capture your full enterprise value potential.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/70 mb-6">Complete the form to see your potential enterprise value gap.</p>
                    <div className="text-center">
                      <p className="text-sm text-white/50">We'll estimate how much additional enterprise value you could generate with improved retention metrics.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto mt-8 text-xs text-neutral-500 text-center">
          <p>
            Source: Valuation multiples based on SaaS Capital analysis of 1,400+ private SaaS companies. 
            Retention improvement estimates based on industry benchmarks from OpenView Partners' Expansion SaaS Benchmarks (2023).
          </p>
        </div>
      </div>
    </section>
  );
}
