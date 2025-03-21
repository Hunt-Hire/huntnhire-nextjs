
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';

const QuickFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the cost of hiring a marketing professional?",
      answer: "Our marketing professionals are available at competitive rates based on their expertise and the scope of work. Typically ranging from $25-$75/hour, with flexible part-time and full-time options available."
    },
    {
      question: "How quickly can I hire someone?",
      answer: "Most clients are matched with their ideal candidate within 48 hours and can start working together immediately after selection. Our streamlined process ensures you get the talent you need without lengthy recruitment cycles."
    },
    {
      question: "What if I'm not satisfied with the marketer?",
      answer: "We offer a 14-day satisfaction guarantee. If you're not completely satisfied with your hire, we'll quickly match you with a replacement or refund your initial payment. Our pre-vetting process ensures this rarely happens."
    }
  ];

  return (
    <section id="quick-faq" className="section py-16 bg-secondary/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Common Questions</h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedCard 
              key={index}
              animationDelay={index * 100}
              className="mb-4 p-0 overflow-hidden"
              hoverEffect={false}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="flex-shrink-0 text-primary" />
                ) : (
                  <ChevronDown size={20} className="flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFAQ;
