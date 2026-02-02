# Design Document: Portfolio UX Improvements

## Overview

This design document outlines the implementation approach for enhancing the portfolio website's user experience. The improvements include adding a custom 404 page, restructuring the About page with a two-column layout and accordion components, redesigning the Work page with a section-based layout, and streamlining the Contact page.

All changes maintain the existing design system built with Next.js 14+, Tailwind CSS, shadcn/ui components, and Framer Motion animations.

## Architecture

### File Structure

```
app/
├── not-found.jsx                 # Custom 404 page (new)
├── about/page.jsx                # Restructured About page (modified)
├── work/page.jsx                 # Redesigned Work page (modified)
└── contact/page.jsx              # Streamlined Contact page (modified)

components/
├── AboutProfile.jsx              # Left column profile section (new)
├── AboutCards.jsx                # Right column cards section (new)
├── ExperienceAccordion.jsx       # Experience accordion (new)
├── EducationAccordion.jsx        # Education accordion (new)
├── ProjectSection.jsx            # Individual project section (new)
└── CategoryFilter.jsx            # Updated filter component (modified)

lib/
└── data.ts                       # Updated project categories (modified)
```

## Components

### 1. Custom 404 Page
- Framer Motion entrance animation
- Clear heading and description
- Home button and navigation links
- Full dark mode support

### 2. About Page Components

**AboutProfile:**
- Profile photo (rounded-2xl)
- Short intro paragraph
- "Now" section with bullet points

**AboutCards:**
- Experience accordion
- Education accordion
- Interests card

**ExperienceAccordion:**
- Collapsible work history
- Title, company, year visible when collapsed
- Responsibilities shown when expanded

**EducationAccordion:**
- Collapsible education history
- Degree, institution, year visible when collapsed
- Details shown when expanded

### 3. Work Page Components

**ProjectSection:**
- Two-column layout (text left, image right)
- Sequential numbering
- "What it does" description
- "My role" statement
- Technology stack badges
- Conditional action buttons

### 4. Contact Page Simplification
- Removed lastName and phone fields
- Updated heading and subcopy
- Reduced textarea height
- Simplified validation

## Data Models

### Project Interface
```typescript
interface Project {
  id: string;
  title: string;
  oneLiner: string;
  whatItDoes: string;
  myRole: string;
  keyDecisions: string[];
  stack: string[];
  links: {
    demo?: string;
    github?: string;
  };
  category?: 'Community & Solidarity' | 'AI & ML' | 'Money & Work' | 'Tools & Experiments';
  image: string;
}
```

### Category Migration
- "AI/ML" → "AI & ML"
- "Work & Career" → "Money & Work"
- "Learning & Creativity" → "Tools & Experiments"
- "Food & Home" → Reassigned to appropriate categories

## Design System

### Colors
- **Accent:** Indigo-600 (#6366f1)
- **Light Mode Cards:** #f1f5f9
- **Dark Mode Cards:** #232329 / #27272c

### Typography
- System font stack with fallbacks
- Responsive scaling
- Consistent hierarchy

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64px

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1199px
- Desktop: ≥ 1200px

## Testing Strategy

### Test Suites
1. **Home Page Tests** - Validates preservation of existing functionality
2. **Navigation Tests** - Validates routing and theme persistence
3. **Responsive Tests** - Validates layout at all breakpoints
4. **Accessibility Tests** - Manual testing guide
5. **Form Validation Tests** - Validates simplified form structure

### Testing Approach
- Browser-based manual tests (no framework required)
- Copy-paste scripts into DevTools console
- Comprehensive checks with pass/fail/warning indicators
- Interactive test runner for easy management

## Implementation Notes

### Reusing Existing Components
- Button, Card, Badge from shadcn/ui
- Existing navigation and mobile menu logic
- Existing theme system

### Performance Considerations
- Next.js Image component for optimization
- Framer Motion viewport optimization
- Lazy loading for project screenshots
- Minimal bundle size increase

### Accessibility
- Semantic HTML structure
- ARIA labels for accordions
- Keyboard navigation support
- Touch targets ≥ 44x44px on mobile
- Color contrast compliance

## Error Handling

### 404 Page
- Next.js automatically renders app/not-found.jsx
- Multiple navigation options for recovery

### Accordion Interaction
- shadcn/ui handles state internally
- Graceful degradation if JavaScript fails

### Form Validation
- Client-side validation prevents invalid submission
- Clear error messages
- Form data preserved on error

### Responsive Layout
- Mobile-first approach with Tailwind
- Tested at common breakpoints
- Smooth transitions between sizes

## Deployment

### Pre-Deployment Checklist
- ✅ All tests passing
- ✅ Build successful
- ✅ Environment variables documented
- ✅ No console errors
- ✅ Responsive design verified
- ✅ Dark mode verified
- ✅ Accessibility verified

### Environment Variables
```env
SENDGRID_API_KEY=your_api_key
SENDGRID_VERIFIED_SENDER=your_email@example.com
SENDGRID_RECIPIENT_EMAIL=recipient@example.com
```

### Deployment Options
- Vercel (recommended)
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## Summary

This design transforms the portfolio from a functional showcase into a polished, professional experience. The changes prioritize clarity (404 page, simplified contact form), scannability (About page accordions, Work page sections), and visual consistency (design system compliance, dark mode support).

All improvements maintain the existing tech stack and design language while significantly enhancing user experience.
