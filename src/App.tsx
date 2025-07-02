import React from "react";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center px-6 bg-gray-900 text-gray-200">
      <div className="flex flex-col items-center text-center space-y-6 max-w-xl">
        <img
          src="/images/logo.png"
          alt="Simple React SPA Logo"
          className="h-60 mb-2"
          loading="lazy"
        />
        <h1 className="text-3xl font-bold">
          Welcome to the Simple React SPA Starter Template!
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          This minimal, production-ready React SPA template features:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-zinc-400">
          <li>
            Built with{" "}
            <span className="font-semibold text-indigo-400">React 19</span> and{" "}
            <span className="font-semibold text-cyan-400">TypeScript</span>{" "}
            (strict mode)
          </li>
          <li>
            Styled using{" "}
            <span className="font-semibold text-cyan-400">Tailwind CSS v4</span>{" "}
            for rapid, utility-first design
          </li>
          <li>
            Configured with{" "}
            <span className="font-semibold text-yellow-400">Webpack 5</span> and{" "}
            <span className="font-semibold text-yellow-400">Babel</span> for
            fast builds and JSX support
          </li>
          <li>
            Developer-friendly features like Hot Module Replacement, friendly
            error overlays, and linting with{" "}
            <span className="font-semibold text-green-400">ESLint</span>
          </li>
          <li>
            Optimized production builds with code splitting, minification, and
            cache busting
          </li>
          <li>
            Pre-configured client-side routing using{" "}
            <span className="font-semibold text-indigo-400">React Router</span>
          </li>
        </ul>
        <p className="text-zinc-500 text-xs italic mt-4">
          To get started, clone the repo, install dependencies with Bun, and run{" "}
          <code className="bg-zinc-700 px-1 rounded">bun dev</code>.
        </p>
      </div>
    </div>
  );
};

export default App;
