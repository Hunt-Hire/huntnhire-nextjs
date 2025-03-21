
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  // Track which FAQ items are open
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((current) => 
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );
  };

  const faqItems = [
    {
      question: "What makes your talent different from other providers?",
      answer: "Our talent is rigorously vetted not just for technical skills but also for communication abilities, problem-solving approach, and culture fit. We maintain ongoing relationships with our talent pool, ensuring consistent quality and availability for your projects."
    },
    {
      question: "How quickly can you scale our team?",
      answer: "Typically, we can provide vetted candidates within 1-2 weeks. For specialized roles or larger teams, we work with you to develop a custom timeline that ensures quality while meeting your business needs."
    },
    {
      question: "Do you offer fixed-price projects or only team augmentation?",
      answer: "We offer both engagement models. Our fixed-price projects include thorough scoping and detailed milestones, while our team augmentation services provide flexible scaling of your technical capabilities with dedicated talent."
    },
    {
      question: "What technologies and industries do you specialize in?",
      answer: "We specialize in modern web and mobile development technologies, including React, Node.js, Python, and native mobile development. Our experience spans fintech, healthcare, e-commerce, and SaaS products, though we're adaptable to various technical challenges."
    },
    {
      question: "How do you ensure quality and communication?",
      answer: "We implement regular code reviews, maintain transparent project management practices, and schedule recurring check-ins. All our talent undergoes communication assessment, and we provide detailed documentation throughout the engagement."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">FAQ</p>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
            Answers to common questions about our services and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-4 border-b border-white/5 last:border-0 pb-4 last:pb-0"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <span className="flex-shrink-0 ml-2">
                  {openItems.includes(index) ? (
                    <ChevronUp size={20} className="text-primary" />
                  ) : (
                    <ChevronDown size={20} className="text-muted-foreground" />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-4 text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Have more questions? We're happy to help.
          </p>
          <a href="#book-call" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
