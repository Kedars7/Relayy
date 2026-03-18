import React from 'react'

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="space-y-6 max-w-4xl">
        {/* Open source badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-400 text-sm font-medium rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Open Source
        </div>
        {/* Main Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 leading-tight">
            Your localhost. Anywhere.
          </h1>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Instantly.
          </h2>
        </div>

        {/* Subheading */}
        <div className="space-y-2 pt-6">
          <p className="text-lg sm:text-xl text-slate-400">
            Relayy makes your local apps globally accessible.
          </p>
          <p className="text-lg sm:text-xl text-slate-400">
            No installation required. Just SSH.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landing