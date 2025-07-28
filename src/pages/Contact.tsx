import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import SlimHeader from "@/components/sections/SlimHeader";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const service_id = "service_qwrsz5z";
  const template_id = "template_f6q7wzs";
  const public_id = "30zhkPheHeaHWeJ4y";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = {
      title: formData.get("title") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(service_id, template_id, data, public_id);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SlimHeader />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-[#7960BE]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-[100px] opacity-50" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#F7FFF7] shadow-md">
                <p className="text-sm font-medium text-primary">Contact Us</p>
              </div>

              <h1 className="mb-6">
                Let's Start a <br />
                <span className="text-[#0DAB76]/70">Conversation</span>
              </h1>

              <p className="text-xl text-black">
                Have a project in mind or want to learn more about our services?
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form Section */}
        <section className="py-20 bg-[#F7FFF7] text-[#7960BE]">
          <div className="container-custom ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedCard
                animationDirection="left"
                className="lg:order-1 order-2"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  Send Us a Message
                </h3>

                {isSubmitted ? (
                  <div className="bg-primary/20 border border-primary/30 rounded-md p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
                      <Send size={24} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                        {error}
                      </div>
                    )}

                    <input
                      type="hidden"
                      name="time"
                      value={new Date().toLocaleString()}
                    />

                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium mb-2"
                      >
                        Title
                      </label>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </AnimatedCard>

              {/* Contact Information */}
              <div className="space-y-8 lg:order-2 order-1">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Reach out through any of these channels and we'll respond as
                    soon as possible.
                  </p>
                </div>

                <AnimatedCard animationDirection="right" animationDelay={100}>
                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-full bg-primary/20 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email Us</h4>
                      <a
                        href="mailto:careers@huntnhire.co"
                        className="text-[#7960be] hover:underline"
                      >
                        careers@huntnhire.co
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Email us at admin@huntnhire.co if you have any queries.
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard animationDirection="right" animationDelay={200}>
                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-full bg-primary/20 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Call Us</h4>
                      <a
                        href="tel:+1234567890"
                        className="text-primary hover:underline"
                      >
                        +1 (234) 567-890
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Friday, 9am - 5pm EST
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard animationDirection="right" animationDelay={300}>
                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-full bg-primary/20 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Visit Us</h4>
                      <p className="text-primary">123 Innovation Way</p>
                      <p className="text-primary">Tech City, CA 90210</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </AnimatedCard>

                <div className="pt-6">
                  <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-3 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
