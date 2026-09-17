# SHUBHAM / DIGITAL IDENTITY

A premium, dark-mode-first personal identity website for Shubham — a builder from Meghalaya, India. Founder & Developer of VISKOS, full-stack developer, and cybersecurity explorer.

## Tech Stack

- **React** + **TypeScript**
- **Vite** (static build, GitHub Pages compatible)
- **Tailwind CSS** (custom design system)
- **Framer Motion** (animations and micro-interactions)
- **Lucide React** (icons)

## Getting Started

### Prerequisites

- Node.js 18+ (20 recommended)
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview the Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### 1. Create the Repository

1. Go to [GitHub](https://github.com/new) and create a new repository.
2. Name it whatever you like (e.g., `YOUR-REPOSITORY-NAME`).
3. Do not initialize with a README (you'll push your own).

### 2. Push the Code

```bash
git init
git add .
git commit -m "Initial commit — digital identity website"
git branch -M main
git remote add origin https://github.com/shubhamcooks/YOUR-REPOSITORY-NAME.git
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub.
2. Navigate to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy on every push to `main`.

### 4. Access Your Website

Once the workflow completes, your site will be live at:

```
https://shubhamcooks.github.io/YOUR-REPOSITORY-NAME/
```

## Project Structure

```
src/
├── components/        # React components (sections + UI)
├── data/              # TypeScript data files (projects, journal, etc.)
├── hooks/             # Custom React hooks
├── App.tsx            # Main app assembly
├── main.tsx           # Entry point
└── index.css          # Global styles + Tailwind
```

## Customization

- **Projects**: Edit `src/data/projects.ts`
- **Journal entries**: Edit `src/data/journal.ts`
- **Identity map nodes**: Edit `src/data/identity.ts`
- **Security learning path**: Edit `src/data/security.ts`
- **Lab experiments**: Edit `src/data/lab.ts`
- **Traits**: Edit `src/data/traits.ts`
- **Contact links**: Edit `src/components/Contact.tsx` (replace `[Add real link]` and `[Add real email]`)

## Notes

- This is a static frontend. No backend or database required.
- The Vite `base` is set to `./` for GitHub Pages compatibility.
- Reduced-motion support is included for accessibility.
- All content is honest — no fake metrics, certifications, or claims.

---

Built by Shubham. Always exploring. Always building.
