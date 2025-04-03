import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">Last Updated: April 1, 2025</p>
            
            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies enhance user experience by remembering your preferences and enabling certain features.
            </p>
            
            <h2>How we use cookies</h2>
            <p>
              Venturi Growth LLC ("we," "our," or "us") uses cookies for the following purposes:
            </p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.
              </li>
              <li>
                <strong>Analytics cookies:</strong> We use analytics cookies to collect information about how visitors use our website. These cookies help us understand which pages are the most popular, how visitors move around the site, and whether they encounter any errors. This information helps us improve our website and your browsing experience.
              </li>
              <li>
                <strong>Functionality cookies:</strong> These cookies allow our website to remember choices you make and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we have added to our pages.
              </li>
              <li>
                <strong>Marketing and advertising cookies:</strong> These cookies are used to track visitors across websites. They are set to display targeted advertisements based on your interests and online behavior. They also help measure the effectiveness of advertising campaigns.
              </li>
            </ul>
            
            <h2>Third-party cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may include:
            </p>
            <ul>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>LinkedIn</li>
              <li>Facebook/Meta</li>
              <li>HubSpot</li>
            </ul>
            
            <h2>Managing cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul>
              <li>See what cookies you have and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from particular sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            
            <p>
              Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
            </p>
            
            <h2>How to manage cookies in your browser</h2>
            <p>
              Different browsers provide different methods to block and delete cookies. You can block or delete cookies by adjusting your browser settings. The following links provide information on how to modify cookie settings in some popular browsers:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            
            <h2>Changes to our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>Contact us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
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