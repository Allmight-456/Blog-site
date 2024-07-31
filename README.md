# Blog Site with Next.js and Tailwind CSS

## Overview

This project is a blog site built using Next.js, Tailwind CSS, and TypeScript. The site features a clean and responsive design, leveraging Next.js's powerful features such as Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes. The main objective is to showcase the capabilities of Next.js in building modern frontend applications.

## Features

- **Server-Side Rendering (SSR):** Improves performance and SEO by rendering pages on the server.
- **Static Site Generation (SSG):** Pre-renders pages at build time for better performance.
- **Dynamic Routing:** Implements client-side navigation for a single-page application (SPA) experience.
- **API Routes:** Handles backend logic directly within the Next.js application.
- **Tailwind CSS:** Provides utility-first CSS framework for rapid UI development.
- **TypeScript:** Adds type safety to the project for improved developer experience.
- **Authentication:** Includes SignIn and SignUp pages for user authentication.

## Project Structure

/blog-site
├── /components
├── /pages
│ ├── /api
│ ├── /blog
│ ├── _app.tsx
│ ├── index.tsx
│ ├── signin.tsx
│ └── signup.tsx
├── /public
├── /styles
│ └── globals.css
├── /types
├── /utils
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json


## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Allmight-456/blog-site.git
    cd blog-site
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Routing

### Home Page

- URL: `http://localhost:3000`
- Displays the list of blogs with a "Read More" button for each blog.

### SignIn Page

- URL: `http://localhost:3000/signin`
- Provides a form for user sign-in.

### SignUp Page

- URL: `http://localhost:3000/signup`
- Provides a form for user sign-up.

### Blog Details Page

- URL: `http://localhost:3000/blog/[id]`
- Dynamic route to display individual blog details.

## Using Tailwind CSS

The project uses Tailwind CSS for styling. You can customize the styles in the `tailwind.config.js` file and add global styles in `styles/globals.css`.

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## TypeScript

TypeScript is used throughout the project for type safety and better developer experience. You can find type definitions in the `types` directory.


```css
This README.md provides a concise overview of the project, its features, structure, installation instructions, and basic routing details without including example code directly in the file.
