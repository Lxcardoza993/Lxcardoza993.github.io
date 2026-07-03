# Lxcardoza993.github.io

A 1:1 visual replica of the GitHub personal profile page, built with Vite + React + Tailwind CSS. Data is fetched live from the GitHub REST API.

## Live Site

🌐 **https://lxcardoza993.github.io/**

## Tech Stack

- Vite 6
- React 18 + TypeScript
- Tailwind CSS
- SWR (data fetching)
- react-markdown + remark-gfm (README preview)
- react-icons / date-fns

## Local Development

```bash
# Install dependencies
pnpm install

# Create local env file with your GitHub token (optional but recommended for higher rate limits)
cp .env.example .env.local
# Edit .env.local and add: VITE_GITHUB_TOKEN=ghp_your_token

# Start dev server
pnpm dev
```

## Build

```bash
pnpm build
```

## Deployment

This repo uses GitHub Actions to deploy to GitHub Pages automatically on every push to `main`.

The workflow uses the built-in `secrets.GITHUB_TOKEN`, so no manual PAT is required.

## Project Structure

```
src/
├── components/      # React components
│   ├── activity/    # Contribution graph + activity feed
│   ├── layout/      # Header, Footer, Layout
│   ├── profile/     # Sidebar profile info
│   ├── readme/      # README preview
│   └── repos/       # Pinned repositories
├── hooks/           # SWR hooks for GitHub API
├── lib/             # API client + constants
├── types/           # TypeScript interfaces
├── App.tsx
└── main.tsx
```

## Security Note

If you previously shared a GitHub PAT in chat, **revoke and regenerate it** at GitHub Settings → Developer settings → Personal access tokens.
