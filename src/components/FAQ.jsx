import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqItems = [
  {
    question: "Do I need to install anything?",
    answer:
      "No. tunnl.gg works with your existing SSH client. Just run ssh -t -R 80:localhost:PORT proxy.tunnl.gg to get started immediately. No account or configuration required.",
  },
  {
    question: "What are the limits?",
    answer:
      "Free tunnels are designed for development and testing. They support common local workflows and can be restarted anytime.",
  },
  {
    question: "Does it support WebSockets?",
    answer:
      "Yes. tunnl.gg supports WebSocket traffic, so real-time apps and local dev tools continue to work through your public tunnel.",
  },
  {
    question: "How secure is it?",
    answer:
      "All traffic uses encrypted transport and tunnel isolation to keep your connections safe in transit.",
  },
  {
    question: "Can I pick my subdomain?",
    answer:
      "By default, a random subdomain is assigned instantly for speed. Custom subdomains can be offered in managed plans.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className="mx-auto w-[min(1300px,calc(100%-64px))] py-18 max-md:w-[calc(100%-32px)] max-md:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-[-0.02em] text-slate-50 max-md:text-3xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto mt-10 w-full max-w-3xl space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className={`rounded-xl border px-5 transition-all duration-300 ${
                isOpen
                  ? "border-slate-700/70 bg-slate-900/50"
                  : "border-slate-800/70 bg-slate-950/75 hover:border-slate-700/80"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => toggleItem(index)}
              >
                <span className="text-xl font-semibold tracking-[-0.01em] text-slate-100 max-md:text-lg">
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
                <p className="pb-5 text-lg leading-relaxed text-slate-400 max-md:text-base">
                  {item.question === "Do I need to install anything?" ? (
                    <>
                      No. tunnl.gg works with your existing SSH client. Just run{" "}
                      <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-base text-slate-300">
                        ssh -t -R 80:localhost:PORT proxy.tunnl.gg
                      </code>{" "}
                      to get started immediately. No account or configuration required.
                    </>
                  ) : (
                    item.answer
                  )}
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