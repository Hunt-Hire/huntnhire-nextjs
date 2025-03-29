
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <div className="container-custom py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Hunt & Hire Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Effective Date: March 17, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Hunt & Hire ("we," "us," or "our") is committed to protecting the privacy of our website visitors 
              and users ("you" or "your"). This Privacy Policy explains how we collect, use, and disclose your 
              personal information when you use our website and services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect information that identifies, relates to, describes, is reasonably capable of being 
              associated with, or could reasonably be linked, directly or indirectly, with you or your household 
              ("Personal Information").
            </p>
            
            <h3 className="text-xl font-semibold mb-2">2.1 Personal Information You Provide to Us</h3>
            <p className="mb-2">We collect Personal Information when you:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Submit a resume or application</li>
              <li>Request a consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our website or email</li>
            </ul>
            
            <p className="mb-2">This information may include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your resume and work experience</li>
              <li>Your location</li>
              <li>Any other information you choose to provide</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">2.2 Information We Collect Automatically</h3>
            <p className="mb-2">
              When you visit our website, we may automatically collect certain information about your device and usage, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your IP address</li>
              <li>Your browser type and version</li>
              <li>Your operating system</li>
              <li>Your referring website</li>
              <li>Pages you view on our website</li>
              <li>Dates and times of your visits</li>
            </ul>
            
            <p>
              We may use cookies and similar tracking technologies to collect this information. You can instruct 
              your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not 
              accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use your Personal Information to:</p>
            <ul className="list-disc pl-6">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Communicate with you about our services and updates</li>
              <li>Personalize your experience on our website</li>
              <li>Analyze website usage and trends</li>
              <li>Protect against fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-2">We may disclose your Personal Information to:</p>
            <ul className="list-disc pl-6">
              <li>Our service providers who assist us with website hosting, data analysis, and other essential functions</li>
              <li>Our clients, with your consent, to facilitate potential job placements</li>
              <li>Legal authorities, when required by law or to protect our rights and interests</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We have implemented reasonable security measures to protect your Personal Information from unauthorized 
              access, use, or disclosure. However, no method of transmission over the internet or method of electronic 
              storage is completely secure.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
            <p className="mb-2">You have the following rights regarding your Personal Information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access: You can request access to your Personal Information.</li>
              <li>Correction: You can request correction of inaccurate or incomplete Personal Information.</li>
              <li>Deletion: You can request deletion of your Personal Information, subject to certain exceptions.</li>
              <li>Objection: You can object to the processing of your Personal Information.</li>
            </ul>
            <p>To exercise your privacy rights, please contact us using the information below.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p>
              Our website and services are not directed to children under the age of 13. We do not knowingly 
              collect Personal Information from children under 13.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Links to Other Websites</h2>
            <p>
              Our website may contain links to other websites. We are not responsible for the privacy practices 
              of these websites. We encourage you to read the privacy policies of those websites.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post any changes on our website.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@huntnhire.co.
            </p>
          </section>
          
          <p className="text-muted-foreground">Last updated: March 17, 2025</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
