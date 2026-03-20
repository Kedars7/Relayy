"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/ui/Footer.jsx";

const DocsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const troubleshootingItems = [
    {
      title: "Connection refused?",
      content:
        "Make sure your local application is running on the specified port and is accepting connections.",
    },
    {
      title: "How long does the tunnel last?",
      content:
        "Tunnels remain active as long as the SSH connection is maintained. Close the connection to end the tunnel.",
    },
  ];

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-black pt-12 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
        {/* Breadcrumb Navigation */}
        <div className="mx-auto mb-10 max-w-4xl px-4 sm:mb-12 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="transition-colors hover:text-slate-300">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">Documentation</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-12 px-4 sm:space-y-16 sm:px-6">
          {/* Getting Started Section */}
          <section>
            <h1 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl">
              Getting Started
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Relayy is a reverse tunneling service that lets you expose local
              servers to the public internet. It works with standard SSH
              clients, so there's nothing to install.
            </p>
          </section>

          {/* The Command Section */}
          <section>
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <div className="w-1 h-8 bg-emerald-400"></div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">The Command</h2>
            </div>

            <div className="mb-6 overflow-x-auto rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 font-mono sm:mb-8 sm:p-6">
              <div className="text-sm text-slate-300 sm:text-base">
                npx relayy PORT
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border border-blue-500/50 bg-blue-500/10">
                    <span className="text-blue-400 text-sm font-semibold">
                      •
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-sm font-semibold text-purple-400 sm:text-base">
                    npx relayy
                  </p>
                  <p className="mt-1 text-sm text-slate-400 sm:text-base">
                    The command to run the Relayy client using npx. This will autmatically download and execute the latest version of the client.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border border-blue-500/50 bg-blue-500/10">
                    <span className="text-blue-400 text-sm font-semibold">
                      •
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-sm font-semibold text-purple-400 sm:text-base">
                    PORT
                  </p>
                  <p className="mt-1 text-sm text-slate-400 sm:text-base">
                    The port number that you want to expose to the public internet.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Examples Section */}
          <section>
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="text-2xl">⚙️</span>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Common Examples</h2>
            </div>

            <div className="space-y-7 sm:space-y-8">
              {/* Example 1 */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white sm:mb-4 sm:text-xl">
                  Expose a React/Vite App
                </h3>
                <div className="overflow-x-auto rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 font-mono sm:p-6">
                  <div className="text-slate-300 text-sm">
                    <span className="text-slate-500">$</span> npx relayy 5173
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-slate-400">
                  <button className="hover:text-slate-300 transition-colors p-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white sm:mb-4 sm:text-xl">
                  Expose a Python Flask App
                </h3>
                <div className="overflow-x-auto rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 font-mono sm:p-6">
                  <div className="text-slate-300 text-sm">
                    <span className="text-slate-500">$</span> npx relayy 5000
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-slate-400">
                  <button className="hover:text-slate-300 transition-colors p-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section>
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="text-2xl">🌐</span>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Troubleshooting</h2>
            </div>

            <div className="space-y-3">
              {troubleshootingItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden hover:bg-slate-800/50 transition-colors"
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left transition-colors hover:bg-slate-700/20 sm:px-6 sm:py-5"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        expandedIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expandedIndex === index && (
                    <div className="border-t border-slate-700/30 bg-slate-900/30 px-4 py-4 text-sm text-slate-300 sm:px-6 sm:text-base">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocsPage;
