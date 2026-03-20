import React from "react";
import { FiCopy, FiGitBranch, FiMonitor, FiShare2, FiSmartphone } from "react-icons/fi";

const useCases = [
  {
    title: "Webhook Testing",
    description: "Receive Stripe, GitHub, or Slack webhooks directly on your local machine without deploying.",
    icon: FiGitBranch,
    accent: "text-amber-400",
    iconGlow: "shadow-[0_0_22px_rgba(251,146,60,0.25)] border-amber-500/25",
  },
  {
    title: "Demo Sharing",
    description: "Share a live preview of your work with clients or teammates - no staging server needed.",
    icon: FiShare2,
    accent: "text-sky-400",
    iconGlow: "shadow-[0_0_22px_rgba(56,189,248,0.22)] border-sky-500/25",
  },
  {
    title: "Mobile Testing",
    description: "Test your app on real devices over the internet without complicated network setup.",
    icon: FiSmartphone,
    accent: "text-emerald-400",
    iconGlow: "shadow-[0_0_22px_rgba(16,185,129,0.22)] border-emerald-500/25",
  },
  {
    title: "CI/CD Callbacks",
    description: "Let external services call back to your local environment during development and debugging.",
    icon: FiMonitor,
    accent: "text-fuchsia-400",
    iconGlow: "shadow-[0_0_22px_rgba(217,70,239,0.2)] border-fuchsia-500/25",
  },
];

const Usecase = () => {
  return (
    <section className="mx-auto w-[min(1300px,calc(100%-64px))] py-18 max-md:w-[calc(100%-32px)] max-md:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-[-0.02em] text-slate-50 sm:text-4xl">Built For</h2>
        <p className="mt-4 text-base text-slate-400 sm:text-xl">Common scenarios where Relayy saves you time.</p>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {useCases.map((useCase) => {
          const Icon = useCase.icon;

          return (
            <article
              key={useCase.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/35 bg-slate-950/55 px-5 py-6 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-500/55 hover:shadow-[0_28px_80px_rgba(15,23,42,0.55)] sm:px-6 sm:py-7"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-400/12 blur-3xl" />
              </div>

              <div className="relative text-center">
                <div
                  className={`mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-slate-900/75 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 ${useCase.iconGlow}`}
                >
                  <Icon className={`h-5 w-5 transition-transform duration-300 group-hover:rotate-3 ${useCase.accent}`} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-50 transition-colors duration-300 group-hover:text-white sm:text-xl">
                  {useCase.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[34ch] text-sm leading-relaxed text-slate-400 sm:text-base">
                  {useCase.description}
                </p>
              </div>

            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Usecase;