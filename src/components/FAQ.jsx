import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqItems = [
  {
    question: "Do I need to install anything?",
    answer:
      "No. Relayy works with your existing SSH client. Just run npx relayy <port> to get started immediately. No account or configuration required.",
  },
  {
    question: "What are the limits?",
    answer:
      "Free tunnels are designed for development and testing. They support common local workflows and can be restarted anytime.",
  },
  {
    question: "Does it support WebSockets?",
    answer:
      "Yes. Relayy supports WebSocket traffic, so real-time apps and local dev tools continue to work through your public tunnel.",
  },
  {
    question: "How secure is it?",
    answer:
      "All traffic uses encrypted transport and tunnel isolation to keep your connections safe in transit.",
  },
  {
    question: "Can I pick my subdomain?",
    answer:
      "Currently, we assign a memorable, random subdomain (e.g., happy-tiger-a1b2) for each connection. Custom persistent subdomains are on our roadmap.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className="mx-auto w-[min(1300px,calc(100%-64px))] pt-24 sm:pt-36 lg:pt-52 max-md:w-[calc(100%-32px)]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-[-0.02em] text-slate-50 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto mt-10 w-full max-w-3xl space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className={`rounded-xl border px-4 transition-all duration-300 sm:px-5 ${

                isOpen
                  ? "border-slate-700/70 bg-slate-900/50"
                  : "border-slate-800/70 bg-slate-950/75 hover:border-slate-700/80"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                className="cursor-pointer flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => toggleItem(index)}
              >
                <span className="text-base font-semibold tracking-[-0.01em] text-slate-100 sm:text-lg">
                  {item.question}
                </span>
                <FiChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <p className="pb-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {item.answer}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;