# Caarapace - Software Development Website

A modern, animated website built with Next.js for Caarapace software development company.

## Features

- ✨ Smooth animations powered by Framer Motion
- 🎨 Custom #BE0B45 color theme (deep crimson accent)
- 📱 Fully responsive design
- 🚀 SEO optimized with Open Graph tags
- ⚡ Built with Next.js 14 App Router
- 💅 Styled with Tailwind CSS
- 🔧 TypeScript for type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **TypeScript**: Full type safety

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with SEO
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   └── animated-group.tsx
│   └── hero-section.tsx # Main hero component
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Customization

### Update Colors
Edit the color scheme in `tailwind.config.ts` and `app/globals.css`.

### Update Content
Edit the hero section content in `components/hero-section.tsx`.

### Update SEO
Edit metadata in `app/layout.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## License

Private - Caarapace © 2024
