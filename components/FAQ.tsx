"use client";

import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the product?",
      answer: "The product is a comprehensive solution for managing your tasks efficiently."
    },
    {
      question: "How does billing work?",
      answer: "Billing is done on a monthly basis, and you can cancel anytime."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for new users."
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
          <div key={index} className="acordion">
            <button
              className="w-full text-left text-xl font-medium text-[#eee] py-2 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span>
                <Image
                  src={activeIndex === index ? "/icons/open.svg" : "/icons/close.svg"}
                  alt={activeIndex === index ? "Collapse" : "Expand"}
                  width={24}
                  height={26}
                  className="object-contain"
                />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-screen" : "max-h-0"}`}
            >
              <div className="text-lg text-[#667085] py-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;