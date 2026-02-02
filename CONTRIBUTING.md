# Contributing to Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this portfolio project.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun
- Git

### Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

3. **Run the setup script**
   ```bash
   # Unix/Linux/Mac
   chmod +x scripts/setup.sh
   ./scripts/setup.sh

   # Windows PowerShell
   .\scripts\setup.ps1
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Workflow

### Making Changes

1. **Make your changes** in your feature branch
2. **Test your changes** using the test runner
3. **Ensure build succeeds**
   ```bash
   npm run build
   ```
4. **Lint your code**
   ```bash
   npm run lint
   ```

### Testing

Before submitting a pull request, run all tests:

1. **Open the test runner**
   ```bash
   open scripts/test-runner.html
   ```

2. **Run all test suites:**
   - Home page preservation tests
   - Navigation and routing tests
   - Responsive behavior tests
   - Accessibility tests

3. **Verify build**
   ```bash
   npm run build
   ```

## 🎨 Code Style

### General Guidelines

- Use meaningful variable and function names
- Write comments for complex logic
- Follow existing code patterns
- Keep functions small and focused

### React/Next.js Specific

- Use functional components with hooks
- Prefer `const` over `let` when possible
- Use TypeScript types when available
- Follow Next.js 14 App Router conventions

### Styling

- Use Tailwind CSS utility classes
- Follow existing design system patterns
- Maintain responsive design (mobile-first)
- Support dark mode for all new components

### File Organization

```
app/              # Next.js pages (App Router)
components/       # React components
lib/              # Utilities and data
actions/          # Server actions
tests/            # Test suites
scripts/          # Automation scripts
```

## 🧪 Testing Guidelines

### Writing Tests

When adding new features, include tests:

1. **Browser-based tests** for UI components
2. **Manual test scripts** in `tests/` directory
3. **Clear documentation** in test files

### Test Structure

```javascript
/**
 * Feature Test Suite
 * 
 * Purpose: Brief description
 * Requirements: List requirements validated
 * 
 * Usage:
 * 1. Step-by-step instructions
 */

const TestSuite = {
  results: { passed: [], failed: [], warnings: [] },
  
  async runAllTests() {
    // Test implementation
  },
  
  displayResults() {
    // Results display
  }
};

function testFeature() {
  TestSuite.runAllTests();
}
```

## 📚 Documentation

### Updating Documentation

When making changes, update relevant documentation:

- **README.md** - Main project documentation
- **tests/README.md** - Testing documentation
- **docs/CHANGELOG.md** - Version history
- **README.md** - Project overview and setup
- **Component comments** - JSDoc for new components

### Documentation Style

- Use clear, concise language
- Include code examples
- Add usage instructions
- Provide context and rationale

## 🔄 Pull Request Process

### Before Submitting

1. ✅ All tests pass
2. ✅ Build succeeds
3. ✅ Lint passes
4. ✅ Documentation updated
5. ✅ Commits are clean and descriptive

### Submitting

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request** on GitHub

3. **Fill out PR template:**
   - Description of changes
   - Related issues
   - Testing performed
   - Screenshots (if UI changes)

4. **Wait for review**
   - Address feedback
   - Make requested changes
   - Push updates to same branch

### PR Title Format

```
type: Brief description

Examples:
feat: Add dark mode toggle to navigation
fix: Resolve mobile menu overflow issue
docs: Update testing documentation
style: Improve button hover animations
test: Add responsive layout tests
```

### Commit Message Format

```
type: Brief description

Detailed explanation of changes (if needed)

- Bullet points for multiple changes
- Reference issues: Fixes #123

Types: feat, fix, docs, style, refactor, test, chore
```

## 🐛 Reporting Issues

### Bug Reports

Include:
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser/OS information
- Console errors (if any)

### Feature Requests

Include:
- Clear description of the feature
- Use case and benefits
- Proposed implementation (optional)
- Examples or mockups (optional)

## 💡 Best Practices

### Performance

- Optimize images (use Next.js Image component)
- Minimize bundle size
- Use lazy loading where appropriate
- Avoid unnecessary re-renders

### Accessibility

- Use semantic HTML
- Include ARIA labels
- Ensure keyboard navigation
- Maintain color contrast
- Test with screen readers

### Responsive Design

- Mobile-first approach
- Test at all breakpoints
- Touch-friendly targets (44x44px minimum)
- Smooth animations across devices

### Security

- Never commit sensitive data
- Use environment variables
- Validate user inputs
- Follow Next.js security best practices

## 📞 Getting Help

### Resources

- **Documentation:** See README.md and tests/README.md
- **Specs:** Check `docs/` directory (requirements.md, design.md, tasks.md, CHANGELOG.md)
- **Issues:** Search existing issues on GitHub
- **Discussions:** Start a discussion on GitHub

### Contact

- **GitHub Issues:** For bugs and feature requests
- **GitHub Discussions:** For questions and ideas
- **Email:** For private inquiries

## 🙏 Recognition

Contributors will be recognized in:
- README.md acknowledgments section
- CHANGELOG.md for significant contributions
- GitHub contributors page

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to make this portfolio better! 🎉
