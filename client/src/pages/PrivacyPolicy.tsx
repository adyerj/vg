import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">Last Updated: April 1, 2025</p>
            
            <h2>Introduction</h2>
            <p>
              Venturi Growth LLC ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website or use our services.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, company name, and other information you provide when filling out forms on our website.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, time spent on pages, and other diagnostic data.
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to monitor activity on our website and hold certain information to improve your experience.
              </li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing and maintaining our services</li>
              <li>Personalizing your experience on our website</li>
              <li>Improving our website and services</li>
              <li>Communicating with you about our services, promotions, and events</li>
              <li>Monitoring the usage of our website</li>
              <li>Detecting, preventing, and addressing technical issues</li>
              <li>Heat mapping and user experience analysis</li>
              <li>Retargeting advertisements based on your interactions with our website</li>
            </ul>
            
            <h2>Disclosure of Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as web hosting, data analysis, payment processing, and customer service.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.
              </li>
            </ul>
            
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to our processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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