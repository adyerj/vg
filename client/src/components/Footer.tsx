import { motion } from "framer-motion";
import { Link } from "wouter";
import venturiLogoFooter from "../assets/venturi-logo-footer.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-12 text-slate-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-5">
                <img 
                  src={venturiLogoFooter} 
                  alt="Venturi Growth Logo" 
                  className="h-14" 
                />
              </div>
              <p className="max-w-md text-slate-400 mb-6">
                Transform SaaS retention into your most powerful growth engine and enterprise value multiplier.
              </p>
              <div className="flex space-x-5">
                <a href="https://www.linkedin.com/company/venturigrowth" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/venturigrowth" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-medium text-base">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="inline-block text-slate-400 hover:text-white transition-colors">Retention Blog</a></li>
              <li><a href="#" className="inline-block text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#calculator" className="inline-block text-slate-400 hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#" className="inline-block text-slate-400 hover:text-white transition-colors">Retention Guide</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-medium text-base">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="inline-block text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="inline-block text-slate-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="inline-block text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="inline-block text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-medium text-base">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="inline-block text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="inline-block text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="inline-block text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Venturi Growth. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="text-slate-400 hover:text-white transition-colors">Cookies</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
