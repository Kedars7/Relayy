import React from "react";
import { FiGlobe, FiShield, FiZap } from "react-icons/fi";

const featureList = [
  {
    title: "Instant Deploy",
    description:
      "Zero config. Zero install. Just one command and you're live in seconds.",
    icon: FiZap,
    iconColor: "text-amber-300",
  },
  {
    title: "Secure Tunnels",
    description:
      "Automatic HTTPS for all connections. TLS termination ensures your traffic is encrypted in transit.",
    icon: FiShield,
    iconColor: "text-sky-400",
  },
  {
    title: "Public URLs",
    description:
      "Get an instant random subdomain for quick sharing. No registration required.",
    icon: FiGlobe,
    iconColor: "text-fuchsia-300",
  },
];

const Features = () => {
  return (
    <section className="mx-auto w-[min(1300px,calc(100%-64px))] py-18 max-md:w-[calc(100%-32px)] max-md:py-14">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featureList.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-400/10 bg-slate-950/55 px-8 py-10 text-center shadow-[0_12px_48px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/20"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
              </div>

              <div className="relative mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-400/20 bg-slate-900/80 shadow-[0_0_24px_rgba(30,64,175,0.2)]">
                <Icon className={`h-6 w-6 ${feature.iconColor}`} aria-hidden="true" />
              </div>

              <h3 className="relative text-2xl font-semibold leading-tight tracking-[-0.03em] text-slate-50 max-md:text-[1.8rem]">
                {feature.title}
              </h3>
              <p className="relative mx-auto mt-5 max-w-[30ch] text-md leading-relaxed text-slate-400 max-md:text-lg">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Features;