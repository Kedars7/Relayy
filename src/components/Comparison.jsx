import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const columns = ["tunnl.gg", "ngrok", "Cloudflare Tunnel", "localtunnel"];

const rows = [
  {
    label: "No install required",
    values: ["yes", "no", "no", "yes"],
  },
  {
    label: "No signup required",
    values: ["yes", "no", "no", "yes"],
  },
  {
    label: "Free",
    values: ["yes", "limited", "yes", "yes"],
  },
  {
    label: "HTTPS included",
    values: ["yes", "yes", "yes", "yes"],
  },
  {
    label: "Works with SSH",
    values: ["yes", "no", "no", "no"],
  },
  {
    label: "WebSocket support",
    values: ["yes", "yes", "yes", "no"],
  },
  {
    label: "Open source",
    values: ["yes", "no", "no", "yes"],
  },
];

const renderCellValue = (value) => {
  if (value === "yes") {
    return <FiCheck className="mx-auto h-5 w-5 text-emerald-400" aria-label="Yes" />;
  }

  if (value === "no") {
    return <FiX className="mx-auto h-5 w-5 text-slate-500" aria-label="No" />;
  }

  return <span className="text-sm font-medium text-amber-300">Limited</span>;
};

const Comparison = () => {
  return (
    <section className="mx-auto w-[min(1300px,calc(100%-64px))] py-18 max-md:w-[calc(100%-32px)] max-md:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-[-0.02em] text-slate-50 max-md:text-3xl">How We Compare</h2>
        <p className="mt-4 text-xl text-slate-400 max-md:text-lg">
          See how tunnl.gg stacks up against the alternatives.
        </p>
      </div>

      <div className="mx-auto mt-10 w-full max-w-5xl overflow-x-auto rounded-2xl border border-slate-700/35 bg-slate-950/55 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-sm">
        <table className="w-full min-w-215 border-collapse">
          <thead>
            <tr className="border-b border-slate-800/90">
              <th className="w-[30%] px-6 py-5 text-left text-base font-semibold text-slate-300" />
              {columns.map((column, columnIndex) => (
                <th
                  key={column}
                  className={`px-6 py-5 text-left text-xl font-semibold leading-none tracking-[-0.01em] max-md:text-lg ${
                    columnIndex === 0 ? "bg-indigo-500/8 text-indigo-200" : "text-slate-400"
                  }`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-slate-800/70 last:border-b-0">
                <th className="px-6 py-6 text-left text-md font-semibold tracking-[-0.01em] text-slate-100 max-md:text-lg">
                  {row.label}
                </th>

                {row.values.map((value, valueIndex) => (
                  <td
                    key={`${row.label}-${columns[valueIndex]}`}
                    className={`px-6 py-6 text-center ${valueIndex === 0 ? "bg-indigo-500/8" : ""}`}
                  >
                    {renderCellValue(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Comparison;