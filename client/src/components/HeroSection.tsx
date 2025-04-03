import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Chart data for Retention Impact on Enterprise Value
const retentionImpactData = [
  { nrr: '90%', multiple: 3.5, category: 'Poor', poor: 3.5, average: 0, good: 0, excellent: 0 },
  { nrr: '95%', multiple: 4.8, category: 'Poor', poor: 4.8, average: 0, good: 0, excellent: 0 },
  { nrr: '100%', multiple: 6.1, category: 'Average', poor: 0, average: 6.1, good: 0, excellent: 0 },
  { nrr: '105%', multiple: 7.2, category: 'Average', poor: 0, average: 7.2, good: 0, excellent: 0 },
  { nrr: '110%', multiple: 8.4, category: 'Good', poor: 0, average: 0, good: 8.4, excellent: 0 },
  { nrr: '115%', multiple: 9.5, category: 'Good', poor: 0, average: 0, good: 9.5, excellent: 0 },
  { nrr: '120%', multiple: 10.8, category: 'Excellent', poor: 0, average: 0, good: 0, excellent: 10.8 },
];

export default function HeroSection() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center relative overflow-hidden" id="hero">
      {/* Hero background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-0"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0"></div>
      
      {/* Curved shape divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="fill-white w-full h-[70px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.86,82.7A627.32,627.32,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Transform Customer Retention into <span className="text-[#10B981]">Revenue and Enterprise Value</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
              Unlock <span className="font-semibold text-white">25-125%</span> increase in enterprise valuation through sustainable growth strategies that maximize customer lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#calculator" 
                className="btn-primary bg-[#10B981] hover:bg-[#0d9668] text-white px-6 py-3 rounded-md shadow-md font-medium"
              >
                Calculate Your Retention Value Gap
              </a>
              <a 
                href="#problem" 
                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur transition-colors border border-white/30 text-white font-medium rounded-md flex items-center justify-center"
              >
                Learn How It Works
              </a>
            </div>
          </motion.div>
          
          {/* Chart */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 md:p-6 border border-white/20 shadow-xl overflow-hidden">
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                <span className="w-2 h-2 bg-[#10B981] rounded-full mr-2 inline-block"></span>
                Customer Retention's Impact on Business Valuation
              </h3>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={retentionImpactData}
                    margin={{
                      top: 10,
                      right: 20,
                      left: 10,
                      bottom: 30,
                    }}
                  >
                    <defs>
                      <linearGradient id="poorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0.2}/>
                      </linearGradient>
                      <linearGradient id="averageGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.2}/>
                      </linearGradient>
                      <linearGradient id="goodGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0.2}/>
                      </linearGradient>
                      <linearGradient id="excellentGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="nrr" 
                      stroke="rgba(255,255,255,0.7)"
                      tick={{ fill: 'rgba(255,255,255,0.7)' }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.3)' }}
                      tickLine={{ stroke: 'rgba(255,255,255,0.3)' }}
                      label={{ value: 'Net Retention Rate', position: 'insideBottom', offset: -15, fill: 'white' }}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.7)"
                      tick={{ fill: 'rgba(255,255,255,0.7)' }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.3)' }}
                      tickLine={{ stroke: 'rgba(255,255,255,0.3)' }}
                      label={{ value: 'Valuation Multiple', angle: -90, position: 'insideLeft', fill: 'white', dy: 40 }}
                    />
                    <Tooltip 
                      formatter={(value, name, props) => {
                        if (name === 'multiple') return [`${value}x ARR`, 'Valuation Multiple'];
                        
                        // Map data keys to friendly names and colors
                        const labels = {
                          poor: ['Poor', '#EF4444'],
                          average: ['Average', '#F59E0B'],
                          good: ['Good', '#10B981'],
                          excellent: ['Excellent', '#6366F1']
                        };
                        
                        // Only show metrics with values > 0
                        if (Number(value) <= 0) return null;
                        
                        // Return formatted tooltip values
                        const [label, color] = labels[name as keyof typeof labels] || ['Unknown', '#999'];
                        return [`${value}x ARR`, label, color];
                      }}
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                        borderColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '0.375rem',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }}
                      labelStyle={{ color: 'white', fontWeight: 'bold' }}
                      itemStyle={{ color: 'white' }}
                      wrapperStyle={{ zIndex: 1000 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="poor"
                      stackId="1"
                      stroke="#EF4444" 
                      strokeWidth={1}
                      fill="url(#poorGradient)"
                      activeDot={false}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="average"
                      stackId="1"
                      stroke="#F59E0B" 
                      strokeWidth={1}
                      fill="url(#averageGradient)"
                      activeDot={false}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="good"
                      stackId="1"
                      stroke="#10B981" 
                      strokeWidth={1}
                      fill="url(#goodGradient)"
                      activeDot={false}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="excellent"
                      stackId="1"
                      stroke="#6366F1" 
                      strokeWidth={1}
                      fill="url(#excellentGradient)"
                      activeDot={false}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="multiple"
                      stroke="white" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="none"
                      activeDot={{ 
                        r: 6, 
                        fill: 'white',
                        stroke: '#10B981', 
                        strokeWidth: 2 
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#EF4444] rounded-full mr-1"></span>
                  <span className="text-xs text-white/80">Poor</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#F59E0B] rounded-full mr-1"></span>
                  <span className="text-xs text-white/80">Average</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#10B981] rounded-full mr-1"></span>
                  <span className="text-xs text-white/80">Good</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#6366F1] rounded-full mr-1"></span>
                  <span className="text-xs text-white/80">Excellent</span>
                </div>
              </div>
              <div className="text-xs text-white/70 mt-2 text-center">
                Source: SaaS Capital analysis of 1,400+ private SaaS companies
              </div>
            </div>
          </motion.div>
        </div>
        

      </div>
    </section>
  );
}
