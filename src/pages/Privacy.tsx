import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SlimHeader from "@/components/sections/SlimHeader";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FFF7] text-[#191919]">
      <SlimHeader />
      <Navbar />

      <main className="flex-grow pt-32">
        <div className="container-custom py-16 max-w-4xl">
          {/* Header Section */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl blur-[50px] opacity-50" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 relative z-10 animate-slide-up">
              Hunt & Hire{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-muted-foreground relative z-10 animate-slide-up animation-delay-200">
              Effective Date: March 17, 2025
            </p>
          </div>

          {/* Main Content with Grid Background */}
          <div className="relative rounded-xl p-8 shadow-lg border border-white/5 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]">
            <section className="mb-8 opacity-0 animate-slide-up">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                1. Introduction
              </h2>
              <p className="text-[#191919] leading-relaxed">
                Hunt & Hire ("we," "us," or "our") is committed to protecting
                the privacy of our website visitors and users ("you" or "your").
                This Privacy Policy explains how we collect, use, and disclose
                your personal information when you use our website and services.
              </p>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-100">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4 text-[#191919] leading-relaxed">
                We collect information that identifies, relates to, describes,
                is reasonably capable of being associated with, or could
                reasonably be linked, directly or indirectly, with you or your
                household ("Personal Information").
              </p>

              <h3 className="text-xl font-semibold mb-2">
                2.1 Personal Information You Provide to Us
              </h3>
              <p className="mb-2 text-[#191919]">
                We collect Personal Information when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[#191919]">
                {[
                  "Submit a resume or application",
                  "Request a consultation",
                  "Subscribe to our newsletter",
                  "Contact us through our website or email",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mb-2 text-[#191919]">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[#191919]">
                {[
                  "Your name",
                  "Your email address",
                  "Your phone number",
                  "Your resume and work experience",
                  "Your location",
                  "Any other information you choose to provide",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-2">
                2.2 Information We Collect Automatically
              </h3>
              <p className="mb-2 text-[#191919]">
                When you visit our website, we may automatically collect certain
                information about your device and usage, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[#191919]">
                {[
                  "Your IP address",
                  "Your browser type and version",
                  "Your operating system",
                  "Your referring website",
                  "Pages you view on our website",
                  "Dates and times of your visits",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#191919] leading-relaxed">
                We may use cookies and similar tracking technologies to collect
                this information. You can instruct your browser to refuse all
                cookies or to indicate when a cookie is being sent. However, if
                you do not accept cookies, you may not be able to use some
                portions of our website.
              </p>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-200">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-2 text-[#191919]">
                We use your Personal Information to:
              </p>
              <ul className="list-disc pl-6 text-[#191919]">
                {[
                  "Provide and improve our services",
                  "Respond to your inquiries and requests",
                  "Communicate with you about our services and updates",
                  "Personalize your experience on our website",
                  "Analyze website usage and trends",
                  "Protect against fraud and abuse",
                  "Comply with legal obligations",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-300">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                4. Disclosure of Your Information
              </h2>
              <p className="mb-2 text-[#191919]">
                We may disclose your Personal Information to:
              </p>
              <ul className="list-disc pl-6 text-[#191919]">
                {[
                  "Our service providers who assist us with website hosting, data analysis, and other essential functions",
                  "Our clients, with your consent, to facilitate potential job placements",
                  "Legal authorities, when required by law or to protect our rights and interests",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-400">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                5. Data Security
              </h2>
              <p className="text-[#191919] leading-relaxed">
                We have implemented reasonable security measures to protect your
                Personal Information from unauthorized access, use, or
                disclosure. However, no method of transmission over the internet
                or method of electronic storage is completely secure.
              </p>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-500">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="mb-2 text-[#191919]">
                You have the following rights regarding your Personal
                Information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[#191919]">
                {[
                  "Access: You can request access to your Personal Information.",
                  "Correction: You can request correction of inaccurate or incomplete Personal Information.",
                  "Deletion: You can request deletion of your Personal Information, subject to certain exceptions.",
                  "Objection: You can object to the processing of your Personal Information.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="opacity-0 animate-slide-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#191919] leading-relaxed">
                To exercise your privacy rights, please contact us using the
                information below.
              </p>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-600">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                7. Children's Privacy
              </h2>
              <p className="text-[#191919] leading-relaxed">
                Our website and services are not directed to children under the
                age of 13. We do not knowingly collect Personal Information from
                children under 13.
              </p>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-700">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                8. Links to Other Websites
              </h2>
              <p className="text-[#191919] leading-relaxed">
                Our website may contain links to other websites. We are not
                responsible for the privacy practices of these websites. We
                encourage you to read the privacy policies of those websites.
              </p>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-800">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                9. Changes to this Privacy Policy
              </h2>
              <p className="text-[#191919] leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                post any changes on our website.
              </p>
            </section>

            <section className="mb-8 opacity-0 animate-slide-up animation-delay-900">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                10. Contact Us
              </h2>
              <p className="text-[#191919] leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at info@huntnhire.co.
              </p>
            </section>

            <p className="text-[#191919] opacity-0 animate-slide-up animation-delay-1000">
              Last updated: March 17, 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
