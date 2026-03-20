import React from "react";
import relayyClean from "/relayy-clean.png"
import { FiGithub } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  const isDocsPage = pathname.startsWith("/docs");

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 text-slate-50 backdrop-blur-md supports-backdrop-filter:bg-black/35">
        <div className="mx-auto flex w-[min(1300px,calc(100%-64px))] items-center justify-between py-4 md:w-[min(1300px,calc(100%-64px))] md:py-5 max-md:w-[calc(100%-32px)] max-md:py-3.5">
          <Link className="inline-flex items-center gap-3.5" to="/" aria-label="Relayy home">
            <span className="h-10 w-10 overflow-hidden max-md:h-8.5 max-md:w-8.5 max-md:rounded-md">
              <img className="block h-full w-full object-cover" src={relayyClean} alt="Relayy Icon" />
            </span>
          </Link>

          <div className="inline-flex items-center gap-6.5 max-md:gap-3.5">
            <Link
              className="inline-flex items-center gap-1.5 text-base font-medium text-slate-200/80 transition-all duration-200 ease-out hover:-translate-y-px hover:text-slate-50 sm:gap-2 sm:text-lg md:gap-2.5 md:text-xl"
              to={isDocsPage ? "/" : "/docs"}
              aria-label={isDocsPage ? "Open home" : "Open docs"}
            >
              {isDocsPage ? <FiHome aria-hidden="true" /> : <FiBook aria-hidden="true" />}
              <span className="tracking-[-0.01em]">{isDocsPage ? "Home" : "Docs"}</span>
            </Link>
            <Link
              className="inline-flex items-center gap-1.5 text-base font-medium text-slate-200/80 transition-all duration-200 ease-out hover:-translate-y-px hover:text-slate-50 sm:gap-2 sm:text-lg md:gap-2.5 md:text-xl"
              to="https://github.com/Kedars7/relayy-server"
              aria-label="Open GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden="true" />
              <span className="tracking-[-0.01em]">GitHub</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-17.5 sm:h-19" aria-hidden="true" />
    </>
  );
};

export default Navigation;