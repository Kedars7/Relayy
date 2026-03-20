import React from "react";
import { Terminal } from "@/components/ui/terminal";

const Landing = () => {
  return (
    <div>
      <div className="flex min-h-[68vh] flex-col items-center justify-center pt-2 text-center md:min-h-[72vh]">
        <div className="space-y-6 max-w-4xl">
          {/* Open source badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-400">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Open Source
          </div>
          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl font-bold leading-tight text-slate-50 sm:text-6xl lg:text-7xl">
              Your localhost. Anywhere.
            </h1>
            <h2 className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Instantly.
            </h2>
          </div>

          {/* Subheading */}
          <div className="space-y-2 pt-6">
            <p className="text-lg text-slate-400 sm:text-xl">
              Relayy makes your local apps globally accessible.
            </p>
            <p className="text-lg text-slate-400 sm:text-xl">
              No installation required. Just SSH.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full pt-2 pb-10 md:pt-0 md:pb-5">
        <Terminal
          commands={["npx relayy 3000"]}
          outputs={{
            0: [
              "✔ Connected to tunnel server.",
              " ",
              "Tunnel is live!",
              " ",
              "Public URL:",
              "https://relayy.up.railway.app/domestic-chickadee-c2f1",
              " ",
              "Note: This tunnel will expire at 11:07:45 pm.",
            ],
          }}
          typingSpeed={60}
          delayBetweenCommands={1000}
          username="test-app"
          enableSound
        />
        <p className="text-center text-md pt-5 text-slate-400 sm:text-md">
          No setup. No config. Just run and share.
        </p>
      </section>
    </div>
  );
};

export default Landing;
