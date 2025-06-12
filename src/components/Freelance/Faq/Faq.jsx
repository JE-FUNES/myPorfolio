import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SpanishFaqs, EnglishFaqs } from "./FaqData";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const language = useSelector((state) => state.language);
  const faqs = language === "en" ? EnglishFaqs : SpanishFaqs;

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white mt-6 " id="Faq">
      <div className="container bg-bg-faq bg-cover bg-no-repeat h-full  pt-24 pb-24">
      
        <div className="grid lg:pb-10 md:pb-10 pb-8 pt-10 mt-10">
          <div className="lg:col-span-6 text-center">
            <h3 className="text-black">
              FAQ :{" "}
              {language === "en"
                ? "Frequently Asked Questions"
                : "Preguntas Frecuentes"}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1200px] mx-auto mb-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="self-start border border-slate-900 rounded-lg bg-black/60 text-white transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-5 py-2 text-left"
              >
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">{faq.Title}</h4>
                  <span className="text-sm text-white/60">{faq.Section}</span>
                </div>
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-4 pt-2">
                  <p className="text-base leading-relaxed italic">
                    {faq.Detail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
