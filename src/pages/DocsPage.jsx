"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
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
      <div className="min-h-screen bg-black pt-20 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="mx-auto max-w-4xl px-6 mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <a href="/" className="hover:text-slate-300 transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">Documentation</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 space-y-16">
          {/* Getting Started Section */}
          <section>
            <h1 className="text-5xl font-bold text-white mb-6">
              Getting Started
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              Relayy is a reverse tunneling service that lets you expose local
              servers to the public internet. It works with standard SSH
              clients, so there's nothing to install.
            </p>
          </section>

          {/* The Command Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-emerald-400"></div>
              <h2 className="text-3xl font-bold text-white">The Command</h2>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 mb-8 font-mono overflow-x-auto">
              <div className="text-slate-300">
                npx relayy PORT
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border border-blue-500/50 bg-blue-500/10">
                    <span className="text-blue-400 text-sm font-semibold">
                      •
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-purple-400 font-semibold">
                    npx relayy
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    The command to run the Relayy client using npx. This will autmatically download and execute the latest version of the client.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border border-blue-500/50 bg-blue-500/10">
                    <span className="text-blue-400 text-sm font-semibold">
                      •
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-purple-400 font-semibold">
                    PORT
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    The port number that you want to expose to the public internet.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Examples Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">⚙️</span>
              <h2 className="text-3xl font-bold text-white">Common Examples</h2>
            </div>

            <div className="space-y-8">
              {/* Example 1 */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Expose a React/Vite App
                </h3>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 font-mono overflow-x-auto">
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
                <h3 className="text-xl font-semibold text-white mb-4">
                  Expose a Python Flask App
                </h3>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 font-mono overflow-x-auto">
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
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🌐</span>
              <h2 className="text-3xl font-bold text-white">Troubleshooting</h2>
            </div>

            <div className="space-y-3">
              {troubleshootingItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden hover:bg-slate-800/50 transition-colors"
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-700/20 transition-colors text-left"
                  >
                    <span className="text-lg font-semibold text-white">
                      {item.title}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        expandedIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expandedIndex === index && (
                    <div className="px-6 py-4 border-t border-slate-700/30 bg-slate-900/30 text-slate-300">
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
