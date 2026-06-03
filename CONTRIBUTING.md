# Using This Portfolio As A Starter

This repository is my personal portfolio, but it can also be used as a reference or starting point for your own site. The best way to use it is to clone it, replace the content with your own story, and adapt the design until it feels like you.

This is not really a traditional open source contribution target. Pull requests that personalize my live portfolio probably are not useful, but questions, bug reports, and thoughtful improvements are welcome.

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm
- Git

### Clone And Run

```bash
git clone https://github.com/salihelfatih/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

If you want your own copy on GitHub, fork the repo first or create a fresh repository after cloning.

## Make It Yours

Start with the content before changing the code too deeply. A portfolio feels strongest when the words, projects, and images are specific to the person behind it.

### Project Data

Most Work page content lives in:

```text
lib/data.ts
```

Update each project with your own:

- Title and one-line summary
- What it does
- Your role
- Key decisions
- Tech stack
- Demo and GitHub links
- Category and screenshot

### Images

Replace the existing image assets with your own:

```text
public/assets/photos/
public/assets/work/
public/assets/resume/
```

Keep filenames consistent with `lib/data.ts`, or update the image paths there.

### Pages

The main routes are:

```text
app/page.jsx
app/about/page.jsx
app/work/page.jsx
app/contact/page.jsx
app/resume/page.jsx
app/services/page.jsx
```

Use these as editing entry points for copy, layout, and page-specific content.

### Shared Components

Reusable UI pieces live in:

```text
components/
components/features/
components/layout/
components/shared/
components/ui/
```

For small changes, edit the page first. Reach for shared components when the same pattern appears in more than one place.

### Styling

The project uses Tailwind CSS with a small design system:

```text
app/globals.css
tailwind.config.js
components/ui/
```

Good first customizations:

- Accent color
- Profile images
- Project screenshots
- Button and badge styling
- Dark mode details
- Page copy and spacing

## Contact Form Setup

The contact form uses Resend. To enable it locally or in production, create `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_verified_sender@example.com
RESEND_TO_EMAIL=your_destination_email@example.com
```

If you do not want a working contact form, you can replace the form with links to email, LinkedIn, GitHub, or another booking/contact tool.

## Useful Commands

```bash
npm run dev
npm run build
npm run lint
```

Run `npm run build` before deploying to catch broken imports, missing assets, and build-time errors.

## Deployment

Vercel is the easiest deployment path for this project:

1. Push your version to GitHub.
2. Import the repo in Vercel.
3. Add the Resend environment variables if you use the contact form.
4. Deploy.

Netlify, Railway, and other Next.js-friendly hosts can work too, but Vercel is the default path.

## A Note On Reuse

You are welcome to study the structure, borrow patterns, and build your own version from it. Please replace my personal bio, project descriptions, screenshots, resume, and identity details before publishing your site.

Make it yours. That is the whole point.
