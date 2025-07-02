# React SPA Starter Template

This is a minimalistic, production-ready starter template for building Single Page Applications (SPAs) with React. It comes pre-configured with a modern toolchain designed for a great developer experience and an optimized final build.

## Features

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) with strict mode enabled.
- **Bundler**: [Webpack 5](https://webpack.js.org/) configured for development and production builds.
- **Transpiler**: [Babel](https://babeljs.io/) for modern JavaScript and JSX support.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for a utility-first CSS workflow.
- **Linting**: [ESLint](https://eslint.org/) with a comprehensive set of rules for TypeScript, React, Hooks, and Accessibility.
- **Development Experience**:
  - Hot Module Replacement (HMR) with React Refresh.
  - Friendly error overlays for both compile-time and runtime errors.
  - Clean and informative terminal output with a progress bar.
- **Build Optimizations**:
  - Code splitting to create smaller, more efficient bundles.
  - Minification for JavaScript and CSS in production.
  - Content-hashed filenames for effective browser caching.
- **Routing**: [React Router](https://reactrouter.com/) is set up for client-side routing.
- **Path Aliases**: Pre-configured with `@/*` to point to the `src/` directory for cleaner import paths.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher is recommended)
- [Bun](https://bun.sh/) (used as the package manager and script runner)

## Getting Started

1.  **Clone the repository or use it as a template.**

2.  **Install dependencies:**

    ```bash
    bun install
    ```

## Available Scripts

This template comes with a set of pre-configured scripts to help you with development:

- **`bun dev`**: Starts the Webpack development server with HMR at `http://localhost:3000`.

- **`bun build`**: Bundles the application into the `build` directory for production. It sets `NODE_ENV=production` to ensure all optimizations are applied.

- **`bun start`**: Serves the production build from the `build` directory. This is useful for testing the final application before deployment. (Requires `serve` to be installed globally: `npm install -g serve`).

- **`bun lint`**: Lints all `.ts` and `.tsx` files in the project to check for code quality and style issues.

- **`bun lint:fix`**: Automatically fixes any auto-fixable linting issues.

## Folder Structure

```
/roobet
├── build/              # Production build output
├── public/             # Static assets and the main index.html template
│   └── index.html
├── src/                # Application source code
│   ├── css/            # Global CSS and Tailwind setup
│   │   └── globals.css
│   ├── App.tsx         # Main App component
│   └── index.tsx       # Application entry point
├── .babelrc            # Babel configuration
├── .eslintrc.mjs       # ESLint configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration (for Tailwind)
├── tailwind.config.mjs # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── webpack.config.mjs  # Webpack configuration
```

## Key Configurations

- **Webpack (`webpack.config.mjs`)**: The configuration is split between `development` and `production` modes. It handles TypeScript/JSX transpilation, CSS processing with PostCSS and Tailwind, and asset management (images, fonts, etc.).
- **TypeScript (`tsconfig.json`)**: Configured with a strict type-checking policy and the `react-jsx` transform. It also defines the `@/*` path alias.
- **ESLint (`eslint.config.mjs`)**: Uses the new "flat" configuration format. It extends recommended rules from TypeScript ESLint, React, React Hooks, and JSX-A11y to enforce best practices.
- **Tailwind CSS (`tailwind.config.mjs`, `postcss.config.mjs`)**: Set up to scan your source files and build the necessary utility classes into the final CSS bundle.
