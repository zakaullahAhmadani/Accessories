import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqsData = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, debit cards, PayPal, and other secure payment methods for your convenience."
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location, but most orders arrive within 5-7 business days."
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes! We have a 30-day return policy for unused items in original packaging. Contact our support team for help."
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, we’ll send you a tracking link via email so you can follow its journey."
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-5 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-yellow-500" : "rotate-0 text-gray-400"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 py-4 px-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
