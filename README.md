# If I Have to Setup a New Project

A starter template for quickly starting new web projects with my go to tools.

## Tech Stack

This setup uses the following tools:

### Core Framework
- **[Vite + React TS](https://vite.dev/guide/)** - Build tool and dev server

### Styling & Design System
- **[Radix Colors](https://www.radix-ui.com/colors)** - For accent and gray color palettes
- **[Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)** - For styling and responsive design
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utility for merging Tailwind CSS classes without style conflicts

### UI Components
- **[Base UI](https://base-ui.com/react/overview/quick-start)** - Unstyled, accessible React components library
- **[Lucide](https://lucide.dev/icons/)** - Icon library

### State Management
- **[Zustand](https://github.com/pmndrs/zustand)** - State management

### Code Quality
- **[@antfu/eslint-config](https://github.com/antfu/eslint-config)** - ESLint configuration

## Getting Started

### Installation

```bash
git clone https://github.com/nnhilys/if-i-have-to-setup-a-new-project.git <your-repo-name>

cd <your-repo-name>

git remote remove origin
git remote add origin <your-repo-origin>

git push -u origin main

pnpm install
pnpm dev
```

## Project Structure

```
my-setup/
├── src/
│   ├── app/          # Application components
│   ├── style/        # Global styles
│   ├── theme/        # Theme configuration and utilities
│   ├── util/         # Utility functions
│   └── box.tsx       # Entry point
├── public/           # Static assets
└── ...config files
```

## License

MIT License
