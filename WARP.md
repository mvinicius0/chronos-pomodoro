# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**chronos-pomodoro** is a React application built with TypeScript and Vite. The project is currently in its initial state with a standard Vite + React template setup. The application is intended to be a Pomodoro timer application (based on the project name), though the core functionality is yet to be implemented.

## Development Setup

- **Node.js Version**: 22.19.0 (specified in `.nvmrc`)
- **Package Manager**: npm (uses `package-lock.json`)
- **Build Tool**: Vite with SWC for fast compilation
- **React Version**: 19.1.1 (latest)

## Common Commands

### Development
```bash
# Start development server with hot module replacement
npm run dev

# Build for production (TypeScript compilation + Vite build)
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

### Node Version Management
```bash
# Use the correct Node.js version (if using nvm)
nvm use
```

## Architecture and Structure

### TypeScript Configuration
The project uses a **composite TypeScript setup** with project references:
- `tsconfig.json` - Root configuration with references to sub-projects
- `tsconfig.app.json` - Application code configuration (src/ directory)
- `tsconfig.node.json` - Node.js tooling configuration (Vite config)

This setup enables:
- Incremental compilation with build info caching
- Strict type checking with modern ES2022+ targets
- Proper separation between app code and build tooling

### Build System
- **Vite** as the build tool with **@vitejs/plugin-react-swc** for Fast Refresh
- **SWC** (not Babel) is used for faster compilation
- Development server supports HMR (Hot Module Replacement)
- Production builds use TypeScript compilation followed by Vite bundling

### Code Quality Tools
- **ESLint** with modern flat config using:
  - TypeScript ESLint rules
  - React Hooks rules with latest recommendations
  - React Refresh rules for Vite integration
- **Prettier** configured for consistent formatting with:
  - Single quotes for JS/TS
  - JSX single quotes
  - 2-space indentation
  - Trailing commas
  - Arrow function parens avoidance

### Entry Points
- **HTML**: `index.html` (Vite entry point)
- **React App**: `src/main.tsx` → `src/App.tsx`
- **Styles**: `src/index.css` and `src/App.css`

### Current State
The application is currently at the template stage with:
- Basic React counter component in `App.tsx`
- Standard Vite + React logos and styling
- No custom components or Pomodoro-specific functionality yet

## Development Patterns

### File Structure Convention
```
src/
├── main.tsx          # React app entry point
├── App.tsx           # Main app component
├── App.css           # App-specific styles
├── index.css         # Global styles
└── vite-env.d.ts     # Vite type definitions
```

### TypeScript Features Enabled
- Strict mode with comprehensive linting rules
- Modern ES2022 target for app code
- JSX transform (react-jsx) - no need to import React in components
- Module detection forced to ESM
- Unused parameter/local detection
- No fallthrough cases in switch statements

## Testing Strategy
Currently no testing framework is configured. Consider adding:
- Vitest (Vite's native test runner)
- React Testing Library
- Jest DOM utilities

## Deployment Considerations
- Production build outputs to `dist/` directory
- Static assets are handled by Vite's asset pipeline
- Modern browser targets (ES2022) - ensure compatibility requirements
