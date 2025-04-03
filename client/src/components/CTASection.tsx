import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  arrRange: string;
  message: string;
};

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Request submitted!",
        description: "Thank you for your interest! A retention specialist will contact you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  };

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

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 z-0"></div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Transform Your SaaS Retention <span className="text-[#10B981]">Today</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Schedule a 30-minute retention diagnostic call to discover how much additional 
            enterprise value you could unlock.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white border border-white/20 shadow-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#10B981] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              In this consultation, you'll receive:
            </h3>
            
            <motion.ul className="space-y-5" variants={containerVariants}>
              {[
                "Your specific enterprise value gap based on current metrics",
                "Top 3 retention-limiting factors in your business",
                "A customized roadmap to improved retention metrics",
                "The expected ROI timeline for retention improvements"
              ].map((item, index) => (
                <motion.li key={index} className="flex items-start" variants={itemVariants}>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#10B981]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <motion.div 
                className="flex items-center text-white/80"
                variants={itemVariants}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>30-minute complimentary consultation with a retention specialist</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="lg:col-span-7 bg-white rounded-2xl shadow-2xl p-8 md:p-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Book Your Diagnostic Call</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`block w-full px-4 py-3 border ${errors.name ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-primary/40'} rounded-lg focus:ring-4 focus:border-primary transition-all duration-200`}
                    placeholder="John Smith" 
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="company">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    className={`block w-full px-4 py-3 border ${errors.company ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-primary/40'} rounded-lg focus:ring-4 focus:border-primary transition-all duration-200`}
                    placeholder="Acme SaaS, Inc." 
                    {...register("company", { required: "Company name is required" })}
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">
                  Business Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className={`block w-full px-4 py-3 border ${errors.email ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-primary/40'} rounded-lg focus:ring-4 focus:border-primary transition-all duration-200`}
                  placeholder="john@example.com" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="arrRange">
                  Annual Recurring Revenue
                </label>
                <select 
                  id="arrRange" 
                  className={`block w-full px-4 py-3 border ${errors.arrRange ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-primary/40'} rounded-lg focus:ring-4 focus:border-primary transition-all duration-200`}
                  {...register("arrRange", { required: "ARR range is required" })}
                  defaultValue=""
                >
                  <option value="" disabled>Select ARR range</option>
                  <option value="$1M-$5M">$1M-$5M</option>
                  <option value="$5M-$10M">$5M-$10M</option>
                  <option value="$10M-$25M">$10M-$25M</option>
                  <option value="$25M-$50M">$25M-$50M</option>
                  <option value="$50M+">$50M+</option>
                </select>
                {errors.arrRange && <p className="mt-1 text-sm text-red-600">{errors.arrRange.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">
                  What's your biggest retention challenge? (Optional)
                </label>
                <textarea 
                  id="message" 
                  rows={3} 
                  className="block w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-4 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                  placeholder="Tell us about your retention challenges..."
                  {...register("message")}
                ></textarea>
              </div>
              
              <div className="pt-3">
                <button 
                  type="submit" 
                  className="w-full px-6 py-4 bg-[#10B981] hover:bg-[#0d9668] transition-colors text-white font-medium rounded-lg shadow-lg hover:shadow-xl disabled:opacity-70 transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Your Diagnostic Call"}
                </button>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  By submitting, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary">privacy policy</Link> and <Link href="/terms-of-service" className="underline hover:text-primary">terms of service</Link>.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
