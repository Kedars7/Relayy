import React from "react";
import relayyIcon from "/relayy-icon.jpg";
import { FiGithub } from "react-icons/fi";
import { FiBook } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="mx-auto flex w-[min(1300px,calc(100%-64px))] items-center justify-between pt-7 text-slate-50 md:w-[min(1300px,calc(100%-64px))] max-md:w-[calc(100%-32px)] max-md:pt-4.5">
      <div className="inline-flex items-center gap-3.5" aria-label="Relayy home">
        <span className="h-10 w-10 overflow-hidden rounded-[7px] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)] max-md:h-8.5 max-md:w-8.5 max-md:rounded-md">
          <img className="block h-full w-full object-cover" src={relayyIcon} alt="Relayy Icon" />
        </span>
      </div>

      <div className="inline-flex items-center gap-6.5 max-md:gap-3.5">
        <a
          className="inline-flex items-center gap-2.5 text-xl font-medium text-slate-200/80 transition-all duration-200 ease-out hover:-translate-y-px hover:text-slate-50 max-md:gap-1.5 max-md:text-base"
          href="#"
          aria-label="Open docs"
        >
          <FiBook aria-hidden="true" />
          <span className="text-xl tracking-[-0.01em] max-md:text-base">Docs</span>
        </a>
        <a
          className="inline-flex items-center gap-2.5 text-xl font-medium text-slate-200/80 transition-all duration-200 ease-out hover:-translate-y-px hover:text-slate-50 max-md:gap-1.5 max-md:text-base"
          href="#"
          aria-label="Open GitHub"
        >
          <FiGithub aria-hidden="true" />
          <span className="text-xl tracking-[-0.01em] max-md:text-base">GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;