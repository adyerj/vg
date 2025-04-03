import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">Last Updated: April 1, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to Venturi Growth LLC ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <h2>2. Services</h2>
            <p>
              Venturi Growth LLC provides retention strategy consulting and implementation services for SaaS and technology companies, focused on increasing customer retention, reducing churn, and maximizing enterprise value. Our services include but are not limited to diagnostics, strategy development, implementation guidance, and ongoing support.
            </p>
            
            <h2>3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Not engage in any activity that could harm our services or interfere with other users</li>
            </ul>
            
            <h2>4. Intellectual Property Rights</h2>
            <p>
              Our website, content, and services, including text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the property of Venturi Growth LLC or its licensors and are protected by United States and international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our services for their intended purposes. This license does not include the right to copy, modify, distribute, sell, or lease any part of our services or content.
            </p>
            
            <h2>5. User Content</h2>
            <p>
              You retain ownership of any content you submit to us. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in connection with providing our services.
            </p>
            
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS WILL BE CORRECTED. WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS, OR RELIABILITY OF ANY CONTENT OR INFORMATION PROVIDED THROUGH OUR SERVICES.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VENTURI GROWTH LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF OUR SERVICES.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU TO US FOR THE SERVICES GIVING RISE TO THE LIABILITY.
            </p>
            
            <h2>8. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Venturi Growth LLC, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including but not limited to reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your violation of any rights of another.
            </p>
            
            <h2>9. Changes to Terms</h2>
            <p>
              We may revise these Terms at any time by posting an updated version on our website. Your continued use of our services after any changes indicates your acceptance of the revised Terms.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of laws principles. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the federal or state courts located in Michigan.
            </p>
            
            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p>
              Venturi Growth LLC<br />
              Email: contact@venturigrowth.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}