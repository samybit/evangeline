# Flora & Fable

A unique botanical digital experience and showcase focusing on the language of flowers (floriography). This project moves away from standard personal portfolios or e-commerce sites to present a modern, highly interactive gallery.

## 🌿 Key Features

- **"Proud" 3-Column Showcase:** An elegant, edge-to-edge masonry/hero layout displaying flowers on the home page.
- **Botanical Database & Dynamic Routing:** A custom data structure mapping to individual detail pages for each flower.
- **"Ask the Botanist" AI Chat:** An integrated slide-out drawer/modal with suggestion chips, allowing users to ask questions about specific flowers via a custom API route.
- **Fluid Animations & Polish:** Built using Framer Motion to include page transitions, a custom animated cursor, and other responsive visual tweaks.
- **Global Theming:** Custom botanical-themed scrollbars and a beautifully integrated navigation and footer system.

## 🛠️ Tech Stack

This project was built using best practices and a bleeding-edge modern web stack:

- **Framework:** React & Next.js v16.2.6 (using the App Router and React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4.3.0
- **UI Components:** Shadcn UI v4.7.0
- **Animation:** Framer Motion

## 🚀 Getting Started (Local Development)

To run this project locally on your machine:

1. **Clone the repository:**
```bash
   git clone https://github.com/samybit/evangeline
   cd evangeline
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Start the development server:**
```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

> **Note:** The AI chat utilizes a mocked API route for initial development. To use a real LLM, inject your API keys into `src/app/api/botanist/route.ts`.

## 🌐 Deployment

This project is configured for seamless deployment on Netlify via GitHub integration.

Because the project is linked to GitHub, any future code changes pushed to the `main` branch will automatically trigger a rebuild and update the live website.

**Netlify Build Settings:**

| Setting | Value |
|---|---|
| Base directory | *(leave blank)* |
| Build command | `npm run build` |
| Publish directory | `.next` |
