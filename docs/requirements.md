# Requirements Document

## Introduction

This specification defines UX improvements for a Next.js portfolio website to enhance navigation, readability, and visual consistency. The improvements focus on adding a professional 404 page, restructuring the About page with a two-column layout and accordion components, redesigning the Work page with a section-based layout, and streamlining the Contact page form. All changes maintain the existing design system (Tailwind CSS, shadcn/ui, Framer Motion) while ensuring responsive design and dark mode support.

## Glossary

- **Portfolio_System**: The Next.js 14+ portfolio web application
- **404_Page**: Custom error page displayed when users navigate to non-existent routes
- **About_Page**: Page displaying personal information, education, and interests
- **Work_Page**: Page displaying project portfolio with filtering capabilities
- **Contact_Page**: Page with contact form and social links
- **Accordion**: Collapsible UI component that shows/hides content on interaction
- **Section_Layout**: Horizontal layout with text on left and image on right
- **Card**: Rounded container component with consistent styling
- **Filter**: Category selection mechanism for project display
- **Dark_Mode**: Color scheme with dark background and light text
- **Light_Mode**: Color scheme with light background and dark text
- **Responsive_Design**: Layout that adapts to different screen sizes
- **Framer_Motion**: Animation library for smooth transitions

## Requirements

### Requirement 1: 404 Page

**User Story:** As a user, I want to see a helpful 404 page when I navigate to a non-existent route, so that I can easily return to valid pages.

#### Acceptance Criteria

1. WHEN a user navigates to a non-existent route, THEN THE Portfolio_System SHALL display a custom 404 page
2. THE 404_Page SHALL include a clear heading indicating the page was not found
3. THE 404_Page SHALL include descriptive text explaining the error
4. THE 404_Page SHALL include a button to navigate back to the home page
5. THE 404_Page SHALL include navigation links to main sections (About, Work, Contact)
6. THE 404_Page SHALL support both Dark_Mode and Light_Mode
7. THE 404_Page SHALL use Framer_Motion for smooth entrance animations
8. THE 404_Page SHALL maintain visual consistency with existing pages (typography, spacing, colors)

### Requirement 2: About Page Layout Restructure

**User Story:** As a user, I want to view the About page in a clear two-column layout on desktop, so that I can quickly scan profile information and detailed sections.

#### Acceptance Criteria

1. WHEN a user views the About_Page on desktop (≥1200px), THEN THE Portfolio_System SHALL display a two-column layout
2. THE About_Page left column SHALL contain a profile photo, short intro paragraph, and 2-3 "Now" bullets
3. THE About_Page right column SHALL contain stacked cards for Experience, Education, and Interests
4. WHEN a user views the About_Page on mobile or tablet (<1200px), THEN THE Portfolio_System SHALL display a single-column layout with left column content above right column content
5. THE About_Page profile photo SHALL be displayed with rounded corners matching existing Card radius
6. THE About_Page intro paragraph SHALL be concise (2-3 sentences maximum)
7. THE About_Page "Now" bullets SHALL highlight current activities or focus areas
8. THE About_Page SHALL maintain smooth Framer_Motion animations on page load

### Requirement 3: About Page Accordion Components

**User Story:** As a user, I want to expand and collapse Experience and Education entries, so that I can focus on the information most relevant to me.

#### Acceptance Criteria

1. THE About_Page Experience section SHALL be implemented as an Accordion
2. THE About_Page Education section SHALL be implemented as an Accordion
3. WHEN an Accordion row is collapsed, THEN THE Portfolio_System SHALL display title and year only
4. WHEN a user clicks an Accordion row, THEN THE Portfolio_System SHALL expand the row to reveal 1-3 bullet points
5. WHEN a user clicks an expanded Accordion row, THEN THE Portfolio_System SHALL collapse the row
6. THE Accordion SHALL use smooth animations for expand/collapse transitions
7. THE Accordion SHALL support both Dark_Mode and Light_Mode styling
8. THE Accordion SHALL maintain consistent spacing with other Card components

### Requirement 4: About Page Content Updates

**User Story:** As a user, I want to see updated professional information from LinkedIn, so that I have accurate details about education and experience.

#### Acceptance Criteria

1. THE About_Page SHALL use updated copy from LinkedIn for degrees and roles
2. THE Portfolio_System SHALL NOT repeat education text at the bottom of the About_Page
3. THE About_Page Education entries SHALL include institution name, degree title, and year
4. THE About_Page Experience entries SHALL include company/role title, duration, and 1-3 key responsibilities
5. THE About_Page Interests section SHALL remain as a simple text paragraph (not an Accordion)

### Requirement 5: Work Page Section-Based Layout

**User Story:** As a user, I want to view projects in a section-based layout with large screenshots, so that I can quickly understand each project's purpose and design.

#### Acceptance Criteria

1. THE Work_Page SHALL replace the grid layout with a section-based layout
2. WHEN a user views a project section, THEN THE Portfolio_System SHALL display text on the left and a large screenshot on the right
3. WHEN a user views the Work_Page on mobile (<768px), THEN THE Portfolio_System SHALL stack text above the screenshot
4. THE Work_Page project section SHALL display an index number for each project
5. THE Work_Page project section SHALL display the project title
6. THE Work_Page project section SHALL display a one-sentence "What it does" description
7. THE Work_Page project section SHALL display a short "My role" sentence
8. THE Work_Page project section SHALL display a "Stack" line with technology names
9. THE Work_Page project section SHALL display two buttons: "View live" and "View code"
10. THE Work_Page project descriptions SHALL be tight and focused on problem, system design, and ownership
11. THE Work_Page SHALL maintain smooth scroll animations between sections

### Requirement 6: Work Page Content Updates

**User Story:** As a user, I want to see concise project descriptions using updated content, so that I can quickly understand the value and technical approach of each project.

#### Acceptance Criteria

1. THE Work_Page SHALL use updated content from data.ts for project descriptions
2. THE Work_Page project descriptions SHALL focus on problem statement, system design, and ownership
3. THE Work_Page project descriptions SHALL be 1-2 sentences maximum for "What it does"
4. THE Work_Page project descriptions SHALL be 1 sentence for "My role"
5. THE Work_Page "Stack" line SHALL display technology names separated by commas or as inline badges

### Requirement 7: Work Page Filter Updates

**User Story:** As a user, I want to filter projects by updated categories, so that I can find projects relevant to my interests.

#### Acceptance Criteria

1. THE Work_Page filters SHALL include: "All", "Community & Solidarity", "AI & ML", "Money & Work", "Tools & Experiments"
2. WHEN a user clicks a filter, THEN THE Portfolio_System SHALL display only projects matching that category
3. WHEN a user clicks "All", THEN THE Portfolio_System SHALL display all projects
4. THE Work_Page SHALL update the "AI/ML" category to "AI & ML"
5. THE Work_Page SHALL update the "Work & Career" category to "Money & Work"
6. THE Work_Page SHALL update the "Learning & Creativity" category to "Tools & Experiments"
7. THE Work_Page SHALL remove the "Food & Home" category and reassign those projects to appropriate new categories
8. THE Work_Page filter buttons SHALL maintain consistent styling with existing Button components

### Requirement 8: Contact Page Content Updates

**User Story:** As a user, I want to see a more engaging heading and concise copy on the Contact page, so that I feel encouraged to reach out.

#### Acceptance Criteria

1. THE Contact_Page heading SHALL be "Let's build something that slaps"
2. THE Contact_Page subcopy SHALL be 1-2 sentences maximum
3. THE Contact_Page subcopy SHALL be engaging and action-oriented
4. THE Contact_Page SHALL maintain the existing visual style for contact cards

### Requirement 9: Contact Page Form Simplification

**User Story:** As a user, I want to fill out a simpler contact form, so that I can send a message quickly without unnecessary fields.

#### Acceptance Criteria

1. THE Contact_Page form SHALL remove the "last name" field
2. THE Contact_Page form SHALL remove the "phone number" field
3. THE Contact_Page form SHALL keep the "first name" field
4. THE Contact_Page form SHALL keep the "email" field
5. THE Contact_Page form SHALL keep the "topic select" dropdown
6. THE Contact_Page form SHALL keep the "message" textarea
7. THE Contact_Page form validation SHALL be updated to reflect removed fields
8. THE Contact_Page form submission logic SHALL be updated to handle the simplified data structure

### Requirement 10: Contact Page Height Optimization

**User Story:** As a user, I want to see the entire Contact page without scrolling on a typical laptop, so that I can quickly access all information and the form.

#### Acceptance Criteria

1. THE Contact_Page SHALL fit entirely on screen without scrolling on viewports ≥1024px height
2. THE Contact_Page form container SHALL have reduced vertical height compared to the current implementation
3. THE Contact_Page form fields SHALL maintain adequate spacing for usability
4. THE Contact_Page textarea height SHALL be reduced while remaining functional
5. THE Contact_Page SHALL maintain responsive behavior on smaller screens
6. THE Contact_Page contact cards SHALL remain visible alongside the form on desktop layouts

### Requirement 11: Visual Consistency Across Pages

**User Story:** As a user, I want all pages to feel visually aligned, so that I have a cohesive experience throughout the portfolio.

#### Acceptance Criteria

1. THE Portfolio_System SHALL use consistent Card border radius across About_Page, Work_Page, and Contact_Page
2. THE Portfolio_System SHALL use consistent spacing scale across all pages
3. THE Portfolio_System SHALL use consistent accent colors across all pages
4. THE Portfolio_System SHALL use smooth Framer_Motion animations across all pages
5. THE Portfolio_System SHALL maintain the current hero section on the home page
6. THE Portfolio_System SHALL maintain the current stats section on the home page
7. THE Portfolio_System SHALL maintain the current typography system across all pages
8. THE Portfolio_System SHALL ensure all new components support Dark_Mode and Light_Mode

### Requirement 12: Responsive Design Maintenance

**User Story:** As a user, I want the portfolio to work seamlessly on all device sizes, so that I can access it from any device.

#### Acceptance Criteria

1. WHEN a user views the Portfolio_System on mobile (<640px), THEN THE Portfolio_System SHALL display single-column layouts
2. WHEN a user views the Portfolio_System on tablet (640px-1199px), THEN THE Portfolio_System SHALL display optimized layouts for medium screens
3. WHEN a user views the Portfolio_System on desktop (≥1200px), THEN THE Portfolio_System SHALL display multi-column layouts where specified
4. THE Portfolio_System SHALL maintain touch-friendly interaction targets on mobile devices (minimum 44x44px)
5. THE Portfolio_System SHALL ensure text remains readable at all screen sizes
6. THE Portfolio_System SHALL ensure images scale appropriately without distortion
7. THE Portfolio_System SHALL maintain smooth animations across all device sizes
