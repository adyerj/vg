import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  description: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    
    // Update height on resize
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans relative"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start relative mb-16 md:mb-20"
          >
            {/* Mobile timeline dot */}
            <div className="md:hidden absolute left-0 top-0 w-14 h-14 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                  {item.icon ? item.icon : (
                    <span className="text-sm font-bold">{index + 1}</span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Desktop timeline dot - fixed position */}
            <div className="hidden md:block sticky top-1/3 self-start z-10 mr-8">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                  {item.icon ? item.icon : (
                    <span className="text-lg font-bold">{index + 1}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full pl-16 md:pl-0">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                {item.title}
              </h3>
              
              <div className="mb-6">
                <p className="text-slate-600 md:text-lg">
                  {item.description}
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-4 md:p-6 border border-slate-100 shadow-sm">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        
        {/* Timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-7 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 to-transparent to-[99%]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};