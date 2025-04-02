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
      question: "What does a virtual associate do?",
      answer: "Our virtual associates are skilled professionals specializing in digital marketing and SaaS roles such as SEO, PPC, graphic design, and more. Tailored to your agency’s needs, they work full-time (40 hours/week), are college-educated, fluent in English, and bring at least two years of relevant experience."
    },
    {
      question: "Do you offer part-time virtual associates?",
      answer: "No, we currently provide only full-time virtual associates, working 40 hours per week to ensure maximum dedication and productivity."
    },
    {
      question: "How do your virtual associates ensure data security?",
      answer: "Our virtual associates are trained in confidentiality protocols, use secure platforms, and follow industry-standard data protection practices. Their professional experience (minimum two years) ensures a solid grasp of data security principles."
    },
    {
      question: "Why hire a virtual associate?",
      answer: "Virtual associates offer flexibility, cost-effective scaling, and access to specialized expertise. They help your agency meet business goals efficiently without the overhead costs of traditional in-office staff."
    },
    {
      question: "How will I be charged?",
      answer: "We provide flexible payment options: bi-weekly auto-billing via credit card or invoiced payments every two weeks."
    },
    {
      question: "How often will I be charged?",
      answer: "Your first payment covers a full month of service, followed by bi-weekly billing thereafter."
    },
    {
      question: "Is there any long-term commitment involved?",
      answer: "No, there’s no long-term commitment. You can terminate the agreement with a 15-day written notice."
    },
    {
      question: "What is your replacement policy if I’m not satisfied with an associate’s performance?",
      answer: "We guarantee a replacement at no extra cost if an associate doesn’t meet your expectations, ensuring you’re always satisfied with the talent provided."
    }
  ];

  return (
    <section id="quick-faq" className="section py-16 bg-secondary/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Client-Related FAQs</h3>
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