# GNEC – Global NGO Executive Committee Website

This repository powers the public web experience for the Global NGO Executive Committee (GNEC). It highlights the committee’s mission, showcases events that connect accredited NGOs/CSOs with the United Nations, and provides engagement flows for donations, podcasts, and partnership inquiries.

## Key Features

- **Stor landing experience** – Hero, featured programs, and testimonial sections use content from `src/locales/en.ts` to communicate impact with motion and imagery.
- **Information-rich routing** – React Router drives dedicated About, Services & Events, and News & Media sections so every initiative has a permanent home.
- **Engagement funnels** – Contact, Donate, Login, and Create Podcast pages use shadcn-ui components for responsive, WCAG-friendly forms and CTAs.
- **WordPress-powered auth** – `AuthProvider` manages a WordPress JWT-backed session for the protected podcast workflow.
- **Cloudinary-backed podcast workflow** – Podcast creation and retrieval now flow through WordPress REST endpoints that are expected to upload media to Cloudinary and return episode records to the frontend using Cloudinary context for episode details.
- **Reusable design system** – Tailwind CSS, shadcn primitives, lucide-react icons, and utility hooks keep typography, spacing, and interactions consistent.
- **Production-ready tooling** – Vite, TypeScript, ESLint, and React Query provide fast feedback, data fetching, and code quality automation.

## Tech Stack

- React 18 + TypeScript + Vite (with SWC)
- React Router DOM for client-side routing
- Tailwind CSS + shadcn-ui component library
- @tanstack/react-query for async data
- WordPress REST API for authentication and podcast management
- Cloudinary for podcast media storage and context-backed asset management
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
│   ├── lib/               # WordPress auth + podcast API helpers
│   ├── locales/           # Text copy (currently English)
│   ├── pages/             # Route-level screens (Home, Contact, News, etc.)
│   ├── App.tsx            # Router + providers
│   └── main.tsx           # React/Vite entry point
├── tailwind.config.ts     # Design tokens and brand palette
├── vite.config.ts         # Vite configuration
└── vercel.json            # SPA rewrite rules for hosting
```

## Configuration Notes

- **WordPress environment variables** – Copy `.env.example` to `.env` and provide your WordPress API values:

  ```bash
  VITE_WORDPRESS_URL=https://your-wordpress-site.com
  VITE_WORDPRESS_JWT_TOKEN_PATH=/wp-json/jwt-auth/v1/token
  VITE_WORDPRESS_CURRENT_USER_PATH=/wp-json/wp/v2/users/me?context=edit
  VITE_WORDPRESS_PODCAST_ENDPOINT_PATH=/wp-json/gnec/v1/podcast-episodes
  ```

  The frontend assumes WordPress exposes:
  - `POST {VITE_WORDPRESS_JWT_TOKEN_PATH}` for login with `username` and `password`
  - `GET {VITE_WORDPRESS_CURRENT_USER_PATH}` for the authenticated user
  - `GET {VITE_WORDPRESS_PODCAST_ENDPOINT_PATH}` for all episodes
  - `GET {VITE_WORDPRESS_PODCAST_ENDPOINT_PATH}/{episode_number}` for one episode
  - `POST {VITE_WORDPRESS_PODCAST_ENDPOINT_PATH}` as a protected multipart endpoint that uploads to Cloudinary and returns the created episode

- **Migration guide** – See `docs/wordpress-cloudinary-migration.md` for the WordPress and Cloudinary setup contract that this frontend now expects.

- **Brand content & copy** – Edit `src/locales/en.ts` for text, and drop images/PDFs into `public/`.

- **Routing** – `vercel.json` rewrites every request to `index.html`, ensuring React Router handles deep links on Vercel or any SPA-aware host.

## Deployment

1. `npm run build`
2. Deploy the generated `dist/` directory to your host of choice.
3. For Vercel, import the repo, set the WordPress environment variables, keep the framework preset on Vite, and the included rewrite config will serve the SPA correctly.

## Contributing & Quality

- Run `npm run lint` before pushing changes.
- Favor reusable components in `src/components` and shared copy in `src/locales` to keep styling and messaging consistent.
- Add tests or Storybook stories for complex UI states where possible.

## License

No license file is present. Please coordinate with the GNEC maintainers before reusing or distributing this codebase.
