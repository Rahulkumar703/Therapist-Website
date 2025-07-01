# Dr. Serena Blake - Therapist Website

[![Visit Website](https://therapist-website-demo.vercel.app/assets/images/Logo.svg)](https://therapist-website-demo.vercel.app/)

This repository contains the source code for a modern, responsive, and visually appealing website for Dr. Serena Blake, a clinical psychologist. The site is built with Next.js, TypeScript, and styled with Tailwind CSS and shadcn/ui. It includes smooth animations using Framer Motion to enhance the user experience.

## ✨ Features

- **Responsive Design**: Fully functional and visually appealing on desktops, tablets, and mobile devices.
- **Multi-Page Layout**: Includes Home, About, Services, and Contact pages.
- **Interactive Components**: Features an interactive FAQ accordion and a comprehensive contact form with validation.
- **Dynamic Animations**: Utilizes Framer Motion for smooth page transitions and component animations (slide-in, zoom-in, fade-in).
- **Modern UI**: Built with the sleek and customizable components from **shadcn/ui**.
- **Glassmorphism Effect**: A stylish `GlassContainer` component with background blob effects and a blur overlay enhances the aesthetic.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📄 Pages

- **Home (`/`)**: A welcoming landing page featuring a hero section, an overview of services, office hours, and frequently asked questions.
- **About (`/about`)**: A dedicated page with information about Dr. Serena Blake, her professional experience, and her approach to therapy.
- **Services (`/services`)**: Details the therapeutic services offered, including Anxiety Management, Relationship Counseling, and Trauma Recovery, along with pricing information.
- **Contact (`/contact`)**: Provides a contact form for inquiries, along with direct contact details (phone and email).

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm/bun) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/rahulkumar703/therapist-website.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd therapist-website
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```

### Running the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

## 📁 Project Structure

```
.
├── app/                  # Next.js App Router for pages and routing
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── services/         # Services page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── animation/        # Animation wrapper components (Framer Motion)
│   ├── ui/               # UI components from shadcn/ui
│   ├── CHeader.tsx         # Site header
│   ├── Footer.tsx        # Site footer
│   └── ContactForm.tsx   # Contact form component
├── lib/                  # Utility functions
├── public/               # Static assets (images, fonts)
└── ...                   # Configuration files
```
