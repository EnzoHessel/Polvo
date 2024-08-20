"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the product?',
      answer: 'The product is a comprehensive solution for managing your tasks efficiently.'
    },
    {
      question: 'How does billing work?',
      answer: 'Billing is done on a monthly basis, and you can cancel anytime.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for new users.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl text-[#EEE] font-semibold">Frequently asked questions</h2>
        <p className="text-xl text-[#667085] pt-5 font-normal">Everything you need to know about the product and billing.</p>
      </div>
      <div className="mt-10">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion">
            <button
              className="w-full text-left text-xl font-medium text-[#eee] py-2 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span>
                <motion.img
                  src={activeIndex === index ? '/icons/open.svg' : '/icons/close.svg'}
                  alt={activeIndex === index ? 'Collapse' : 'Expand'}
                  width={24}
                  height={26}
                  className="object-contain"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-lg text-[#667085] py-2">
                {faq.answer}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;