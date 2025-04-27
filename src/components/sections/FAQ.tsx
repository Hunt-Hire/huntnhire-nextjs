import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  // Track which FAQ items are open, defaulting to the first item
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
      question: "What does our application process look like?",
      answer:
        "Our hiring process is straightforward:\n- Submit Your Application: Upload your PDF resume to hr@huntnhire.co.\n- Initial Screening: If shortlisted, our team will reach out for a quick phone chat.\n- Video Resume: Share a video resume to showcase your personality and skills.\n- Client Interview: Selected candidates will meet the client for a placement interview.\n- Hiring & Onboarding: Congratulations! Complete the formalities and begin your exciting journey with us.",
    },
    {
      question: "Where do I send my resume?",
      answer: "Send a PDF version of your resume to hr@huntnhire.co.",
    },
    {
      question: "Why choose us?",
      answer:
        "Work with top-tier US companies, engage with the latest industry trends and strategies, and enjoy the flexibility of remote work from home.",
    },
    {
      question: "How often will I be paid?",
      answer: "You’ll be paid bi-weekly.",
    },
  ];

  return (
    <section id="faq" className="bg-[#F7FFF7]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-[#7960BE]">Talent-Related FAQs</h2>
          <p className="mt-4 text-xl text-[#191919] max-w-xl mx-auto">
            Answers to common questions for prospective talent.
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
                <h3 className="text-lg font-medium text-[#7960BE]">
                  {item.question}
                </h3>
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
                  openItems.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-[#191919] whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#191919] mb-6">
            Still have questions? We’re happy to help.
          </p>
          <a
            href="#book-call"
            className="bg-[#7960BE] text-[#F7FFF7] text-sm py-2 px-3 rounded-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
