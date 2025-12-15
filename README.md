# GNEC – Global NGO Executive Committee Website

This repository powers the public web experience for the Global NGO Executive Committee (GNEC). It highlights the committee’s mission, showcases events that connect accredited NGOs/CSOs with the United Nations, and provides engagement flows for donations, podcasts, and partnership inquiries.

## Key Features

- **Story-driven landing experience** – Hero, featured programs, and testimonial sections use content from `src/locales/en.ts` to communicate impact with motion and imagery.
- **Information-rich routing** – React Router drives dedicated About, Services & Events, and News & Media sections so every initiative has a permanent home.
- **Engagement funnels** – Contact, Donate, Login, and Create Podcast pages use shadcn-ui components for responsive, WCAG-friendly forms and CTAs.
- **Supabase-powered auth** – `AuthProvider` exposes Supabase user/session state, enabling authenticated flows such as podcast management.
- **Reusable design system** – Tailwind CSS, shadcn primitives, lucide-react icons, and utility hooks keep typography, spacing, and interactions consistent.
- **Production-ready tooling** – Vite, TypeScript, ESLint, and React Query provide fast feedback, data fetching, and code quality automation.

## Tech Stack

- React 18 + TypeScript + Vite (with SWC)
- React Router DOM for client-side routing
- Tailwind CSS + shadcn-ui component library
- @tanstack/react-query for async data
- Supabase JavaScript client for authentication
- PostCSS, Autoprefixer, Lucide Icons, Recharts, date-fns, etc.

## Prerequisites

- Node.js **18.x or 20.x** (Vite requires modern Node). Install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if needed.
- npm **9+** (ships with Node). Yarn/Bun also work, but npm scripts are documented below.

## Getting Started

```bash
git clone <repo-url>
cd GNEC
npm install
npm run dev
```

The dev server defaults to `http://localhost:5173` and reloads automatically as you edit files.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module reloading. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run build:dev` | Build with the `development` mode flag (useful for debugging prod bundles). |
| `npm run preview` | Serve the production build locally for smoke testing. |
| `npm run lint` | Run ESLint across the repo. |

## Project Structure

```
├── public/                # Static assets served as-is
├── src/
│   ├── components/        # Shared UI pieces, layout primitives, sections
│   ├── contexts/          # Auth + Language providers
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Supabase client + helpers
│   ├── locales/           # Text copy (currently English)
│   ├── pages/             # Route-level screens (Home, Contact, News, etc.)
│   ├── App.tsx            # Router + providers
│   └── main.tsx           # React/Vite entry point
├── tailwind.config.ts     # Design tokens and brand palette
├── vite.config.ts         # Vite configuration
└── vercel.json            # SPA rewrite rules for hosting
```

## Configuration Notes

- **Supabase credentials** – Update `src/lib/supabase.ts` with your project URL and anon key. Consider moving them to environment variables for deployment:

  ```ts
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  ```

  Then create a `.env` file with matching `VITE_*` variables (Vite exposes only variables prefixed with `VITE_`).

- **Brand content & copy** – Edit `src/locales/en.ts` for text, and drop images/PDFs into `public/`.

- **Routing** – `vercel.json` rewrites every request to `index.html`, ensuring React Router handles deep links on Vercel or any SPA-aware host.

## Deployment

1. `npm run build`
2. Deploy the generated `dist/` directory to your host of choice.
3. For Vercel, import the repo, set the Supabase environment variables, keep the framework preset on Vite, and the included rewrite config will serve the SPA correctly.

## Contributing & Quality

- Run `npm run lint` before pushing changes.
- Favor reusable components in `src/components` and shared copy in `src/locales` to keep styling and messaging consistent.
- Add tests or Storybook stories for complex UI states where possible.

## License

No license file is present. Please coordinate with the GNEC maintainers before reusing or distributing this codebase.
