# Components Directory Structure

This directory contains all React components organized by their purpose and functionality.

## Directory Structure

```
components/
├── animations/          # Animation and transition components
│   ├── Curve.jsx
│   ├── CurveTransition.jsx
│   └── Magnetic.jsx
│
├── features/           # Feature-specific components
│   ├── about/         # About page components
│   │   ├── AboutCards.jsx
│   │   ├── AboutProfile.jsx
│   │   ├── EducationAccordion.jsx
│   │   └── ExperienceAccordion.jsx
│   │
│   └── projects/      # Project-related components
│       ├── CategoryFilter.jsx
│       ├── ProjectCard.jsx
│       ├── ProjectGrid.jsx
│       └── ProjectSection.jsx
│
├── layout/            # Layout components (Header, Footer, Nav)
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MobileNav.jsx
│   ├── Nav.jsx
│   └── Settings.jsx
│
├── shared/            # Reusable shared components
│   ├── ErrorMessage.jsx
│   ├── Photo.jsx
│   ├── Social.jsx
│   ├── Stats.jsx
│   └── ThemeToggle.jsx
│
├── ui/                # shadcn/ui components
│   ├── accordion.jsx
│   ├── badge.jsx
│   ├── button.jsx
│   ├── card.jsx
│   ├── dialog.jsx
│   ├── input.jsx
│   ├── scroll-area.jsx
│   ├── select.jsx
│   ├── sheet.jsx
│   ├── switch.jsx
│   ├── tabs.jsx
│   ├── textarea.jsx
│   └── tooltip.jsx
│
├── index.js           # Central export file for easy imports
└── README.md          # This file
```

## Organization Principles

### 1. **animations/**
Components that handle animations, transitions, and interactive effects using Framer Motion and GSAP.

- `Curve.jsx` - SVG curve animation component
- `CurveTransition.jsx` - Page transition with curve effect
- `Magnetic.jsx` - Magnetic hover effect wrapper

### 2. **features/**
Feature-specific components grouped by domain. Each feature has its own subdirectory.

#### about/
Components specific to the About page:
- `AboutCards.jsx` - Container for experience, education, and interests
- `AboutProfile.jsx` - Profile section with image and bio
- `EducationAccordion.jsx` - Education history accordion
- `ExperienceAccordion.jsx` - Work experience accordion

#### projects/
Components for displaying and filtering projects:
- `CategoryFilter.jsx` - Filter buttons for project categories
- `ProjectCard.jsx` - Individual project card display
- `ProjectGrid.jsx` - Grid layout for multiple projects
- `ProjectSection.jsx` - Single project showcase with carousel

### 3. **layout/**
Core layout components used across the application:

- `Header.jsx` - Main header with navigation
- `Footer.jsx` - Site footer
- `Nav.jsx` - Desktop navigation menu
- `MobileNav.jsx` - Mobile navigation drawer
- `Settings.jsx` - Settings panel (theme toggle, etc.)

### 4. **shared/**
Reusable components used across multiple features:

- `ErrorMessage.jsx` - Form error message display
- `Photo.jsx` - Animated profile photo component
- `Social.jsx` - Social media links
- `Stats.jsx` - Animated statistics counter
- `ThemeToggle.jsx` - Dark/light mode toggle

### 5. **ui/**
shadcn/ui components - pre-built, accessible UI primitives.

## Import Patterns

### Using the index file (recommended):
```javascript
import { Header, Footer, ProjectCard } from "@/components";
```

### Direct imports (when you need specific components):
```javascript
import Header from "@/components/layout/Header";
import ProjectCard from "@/components/features/projects/ProjectCard";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
```

## Adding New Components

### For feature-specific components:
1. Create a new subdirectory under `features/` if needed
2. Add your component file
3. Export it in `index.js`

Example:
```javascript
// components/features/blog/BlogPost.jsx
export default function BlogPost() { ... }

// components/index.js
export { default as BlogPost } from "./features/blog/BlogPost";
```

### For shared components:
1. Add to `shared/` directory
2. Export in `index.js`

### For UI components:
Use shadcn/ui CLI to add new components:
```bash
npx shadcn-ui@latest add [component-name]
```

## Best Practices

1. **Keep components focused** - Each component should have a single responsibility
2. **Use TypeScript/JSDoc** - Document props and component purpose
3. **Follow naming conventions** - PascalCase for components, camelCase for utilities
4. **Colocate related files** - Keep tests, styles, and utilities near their components
5. **Export through index** - Always add new components to the index file

## Migration Notes

This structure was reorganized from a flat component directory to improve:
- **Discoverability** - Easier to find related components
- **Maintainability** - Clear separation of concerns
- **Scalability** - Easy to add new features without cluttering
- **Developer Experience** - Logical grouping and clear imports
