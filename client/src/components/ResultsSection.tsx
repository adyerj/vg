import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ResultsSection() {
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

  const caseStudies = [
    {
      id: 1,
      company: "B2B SaaS Platform",
      abbreviation: "B2B",
      before: { grr: "87%", nrr: "102%" },
      after: { grr: "94%", nrr: "118%" },
      impact: "$42M increase in enterprise value (2.1x multiple improvement)",
      quote: "Venturi Growth helped us transform our retention metrics in just 6 months, directly impacting our successful Series C raise.",
      source: "CEO, B2B SaaS Platform"
    },
    {
      id: 2,
      company: "HR Tech Solution",
      abbreviation: "HR",
      before: { grr: "83%", nrr: "98%" },
      after: { grr: "92%", nrr: "116%" },
      impact: "$76M increase in acquisition value (9.2x exit multiple)",
      quote: "Our improved retention metrics were specifically cited by our acquirer as a key reason for the premium valuation.",
      source: "CRO, HR Tech Solution"
    },
    {
      id: 3,
      company: "FinTech SaaS Provider",
      abbreviation: "FS",
      before: { grr: "89%", nrr: "107%" },
      after: { grr: "95%", nrr: "124%" },
      impact: "$118M increase in enterprise value (2.8x multiple improvement)",
      quote: "In our Series D round, our improved retention metrics were directly responsible for a higher valuation multiple.",
      source: "CEO, FinTech SaaS Provider"
    },
    {
      id: 4,
      company: "Marketing Platform",
      abbreviation: "MKT",
      before: { grr: "85%", nrr: "101%" },
      after: { grr: "93%", nrr: "119%" },
      impact: "$92M increase in enterprise value at exit",
      quote: "Our retention transformation with Venturi Growth delivered an extraordinary ROI, with enterprise value impact of over 20x our investment.",
      source: "CCO, Marketing Platform"
    }
  ];

  return (
    <section id="results" className="py-16 lg:py-24 bg-neutral-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">10X ROI on Retention Investments</h2>
          <p className="text-lg text-neutral-600">
            Our clients see dramatic improvements in retention metrics, translating directly into 
            enterprise value creation.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                    <span className="font-medium text-neutral-700">{study.abbreviation}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">{study.company}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <p className="text-sm text-neutral-500">Before</p>
                    <div className="text-2xl font-semibold text-neutral-700">{study.before.grr} GRR</div>
                    <div className="text-2xl font-semibold text-neutral-700">{study.before.nrr} NRR</div>
                  </div>
                  <div className="bg-[#10B981]/10 p-3 rounded-lg">
                    <p className="text-sm text-neutral-500">After</p>
                    <div className="text-2xl font-semibold text-[#10B981]">{study.after.grr} GRR</div>
                    <div className="text-2xl font-semibold text-[#10B981]">{study.after.nrr} NRR</div>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-4">
                  <div className="text-sm text-neutral-600 mb-3">
                    <strong className="text-neutral-800">Impact:</strong> {study.impact}
                  </div>
                  <blockquote className="italic text-neutral-600 border-l-4 border-primary pl-4 py-1">
                    "{study.quote}"
                    <footer className="text-sm text-neutral-500 mt-1 not-italic">— {study.source}</footer>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <a href="#contact" className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 transition-colors text-white font-medium rounded-md shadow-md">
            See How We Do It
          </a>
        </motion.div>
      </div>
    </section>
  );
}
