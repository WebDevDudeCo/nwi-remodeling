# Astro Website Template

A modern, reusable website template built with [Astro](https://astro.build/), TypeScript, and CSS Modules. This template is designed to be a solid foundation for building various websites with a focus on performance, maintainability, and developer experience.

## Features

- ⚡️ **Built with Astro** - Enjoy the speed and simplicity of Astro
- 🔤 **TypeScript Support** - Full TypeScript integration for better developer experience
- 🎨 **CSS Modules** - Scoped CSS with CSS Modules to avoid style conflicts
- 🧩 **Reusable Components** - A library of reusable UI components
- ⚙️ **Centralized Configuration** - Easy site-wide settings management
- 📱 **Responsive Design** - Mobile-first approach for all components
- 🌐 **SEO Ready** - Built-in meta tags and Open Graph support
- 🔍 **Accessibility** - Focus on creating accessible components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm or yarn

### Installation

1. Clone this repository or use it as a template:

```bash
# Clone the repository
git clone https://github.com/yourusername/website-template.git my-website
cd my-website

# Install dependencies
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:4321`

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, etc.)
│   ├── components/      # UI components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── ui/          # UI components (Button, Hero, etc.)
│   ├── config/          # Site configuration
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page components
│   ├── styles/          # Global styles and variables
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Site Configuration

The main site configuration is located in `src/config/site.ts`. You can customize the site name, description, navigation links, and more.

### Theme Customization

Change the global theme variables in `src/styles/variables.css` to customize colors, spacing, typography, and more.

### Adding New Pages

Create new pages by adding `.astro` files in the `src/pages` directory. Astro uses file-based routing, so the file structure maps to your URL paths.

### Components

This template includes several reusable components:

- `Layout.astro` - Main page layout with header and footer
- `Header.astro` - Navigation header
- `Footer.astro` - Page footer
- `Button.astro` - Versatile button component
- `Hero.astro` - Hero section for landing pages

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Astro](https://astro.build/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type safety

---

Made with ❤️ by [Your Name]
