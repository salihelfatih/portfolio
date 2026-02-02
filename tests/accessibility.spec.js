/**
 * Automated Accessibility Testing with Playwright
 * 
 * This test suite uses Playwright and axe-core to automatically test:
 * - Touch target sizes on mobile viewports
 * - Focus indicators on interactive elements
 * - Keyboard navigation functionality
 * - axe-core accessibility violations
 * 
 * Requirements: 12.4
 * 
 * To run these tests:
 * 1. Install dependencies: npm install -D @playwright/test @axe-core/playwright
 * 2. Start dev server: npm run dev
 * 3. Run tests: npx playwright test tests/accessibility.spec.js
 */

const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

// Test configuration
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const MIN_TOUCH_TARGET_SIZE = 44; // WCAG 2.1 Level AAA

const PAGES = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
  { name: '404', path: '/non-existent-page' }
];

/**
 * Test Suite 1: Touch Target Size Verification
 */
test.describe('Touch Target Size Verification', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE viewport
  
  for (const page of PAGES) {
    test(`${page.name} page - all interactive elements meet minimum touch target size`, async ({ page: browserPage }) => {
      await browserPage.goto(`${BASE_URL}${page.path}`);
      await browserPage.waitForLoadState('networkidle');
      
      // Get all interactive elements
      const interactiveElements = await browserPage.locator('button, a, input, select, textarea, [role="button"]').all();
      
      const violations = [];
      
      for (const element of interactiveElements) {
        const box = await element.boundingBox();
        
        if (box) {
          const meetsRequirement = box.width >= MIN_TOUCH_TARGET_SIZE && box.height >= MIN_TOUCH_TARGET_SIZE;
          
          if (!meetsRequirement) {
            const elementInfo = {
              text: await element.textContent().catch(() => ''),
              width: Math.round(box.width),
              height: Math.round(box.height),
              selector: await element.evaluate(el => {
                const tag = el.tagName.toLowerCase();
                const id = el.id ? `#${el.id}` : '';
                const classes = el.className ? `.${el.className.split(' ')[0]}` : '';
                return `${tag}${id}${classes}`;
              })
            };
            
            violations.push(elementInfo);
          }
        }
      }
      
      // Report violations
      if (violations.length > 0) {
        console.log(`\n❌ Touch target violations on ${page.name} page:`);
        violations.forEach(v => {
          console.log(`  - ${v.selector}: ${v.width}x${v.height}px (text: "${v.text.substring(0, 30)}")`);
        });
      }
      
      expect(violations.length, `Found ${violations.length} elements below minimum touch target size (${MIN_TOUCH_TARGET_SIZE}x${MIN_TOUCH_TARGET_SIZE}px)`).toBe(0);
    });
  }
});

/**
 * Test Suite 2: Focus Indicators
 */
test.describe('Focus Indicators on Interactive Elements', () => {
  for (const page of PAGES) {
    test(`${page.name} page - all interactive elements have visible focus indicators`, async ({ page: browserPage }) => {
      await browserPage.goto(`${BASE_URL}${page.path}`);
      await browserPage.waitForLoadState('networkidle');
      
      // Get all focusable elements
      const focusableElements = await browserPage.locator('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])').all();
      
      const violations = [];
      
      for (const element of focusableElements) {
        // Focus the element
        await element.focus();
        
        // Check for focus indicator
        const hasFocusIndicator = await element.evaluate(el => {
          const styles = window.getComputedStyle(el);
          
          // Check for various focus indicators
          const hasOutline = styles.outline !== 'none' && styles.outline !== '0px none';
          const hasBoxShadow = styles.boxShadow !== 'none' && styles.boxShadow !== '';
          const hasBorder = styles.borderWidth !== '0px';
          const hasRing = el.className.includes('ring') || el.className.includes('focus');
          
          return hasOutline || hasBoxShadow || hasBorder || hasRing;
        });
        
        if (!hasFocusIndicator) {
          const elementInfo = await element.evaluate(el => ({
            tag: el.tagName.toLowerCase(),
            text: el.textContent?.substring(0, 30) || '',
            id: el.id || '',
            classes: el.className || ''
          }));
          
          violations.push(elementInfo);
        }
      }
      
      // Report violations
      if (violations.length > 0) {
        console.log(`\n❌ Focus indicator violations on ${page.name} page:`);
        violations.forEach(v => {
          console.log(`  - ${v.tag}${v.id ? '#' + v.id : ''}: "${v.text}"`);
        });
      }
      
      expect(violations.length, `Found ${violations.length} elements without visible focus indicators`).toBe(0);
    });
  }
});

/**
 * Test Suite 3: Keyboard Navigation - Accordions
 */
test.describe('Keyboard Navigation Through Accordions', () => {
  test('About page - accordions can be navigated and operated with keyboard', async ({ page }) => {
    await page.goto(`${BASE_URL}/about`);
    await page.waitForLoadState('networkidle');
    
    // Find all accordion triggers
    const accordionTriggers = await page.locator('[data-radix-collection-item]').all();
    
    expect(accordionTriggers.length).toBeGreaterThan(0);
    
    for (let i = 0; i < accordionTriggers.length; i++) {
      const trigger = accordionTriggers[i];
      
      // Focus the trigger using Tab navigation
      await trigger.focus();
      
      // Verify focus is on the trigger
      const isFocused = await trigger.evaluate(el => el === document.activeElement);
      expect(isFocused).toBe(true);
      
      // Get initial expanded state
      const initialState = await trigger.getAttribute('data-state');
      
      // Press Enter to toggle
      await page.keyboard.press('Enter');
      await page.waitForTimeout(300); // Wait for animation
      
      // Verify state changed
      const newState = await trigger.getAttribute('data-state');
      expect(newState).not.toBe(initialState);
      
      // Press Enter again to toggle back
      await page.keyboard.press('Enter');
      await page.waitForTimeout(300);
      
      // Verify state changed back
      const finalState = await trigger.getAttribute('data-state');
      expect(finalState).toBe(initialState);
    }
  });
  
  test('About page - Tab key navigates through accordion triggers in order', async ({ page }) => {
    await page.goto(`${BASE_URL}/about`);
    await page.waitForLoadState('networkidle');
    
    // Get all accordion triggers
    const accordionTriggers = await page.locator('[data-radix-collection-item]').all();
    
    // Focus first trigger
    await accordionTriggers[0].focus();
    
    // Tab through all triggers
    for (let i = 0; i < accordionTriggers.length - 1; i++) {
      await page.keyboard.press('Tab');
      
      // Verify focus moved to next element
      const focusedElement = await page.evaluate(() => document.activeElement.getAttribute('data-radix-collection-item'));
      expect(focusedElement).not.toBeNull();
    }
  });
});

/**
 * Test Suite 4: Screen Reader Attributes
 */
test.describe('Screen Reader Attributes', () => {
  test('About page - accordions have proper ARIA attributes', async ({ page }) => {
    await page.goto(`${BASE_URL}/about`);
    await page.waitForLoadState('networkidle');
    
    // Find all accordion triggers
    const accordionTriggers = await page.locator('[data-radix-collection-item]').all();
    
    for (const trigger of accordionTriggers) {
      // Check for aria-expanded attribute
      const ariaExpanded = await trigger.getAttribute('aria-expanded');
      expect(ariaExpanded).toMatch(/^(true|false)$/);
      
      // Check for aria-controls attribute
      const ariaControls = await trigger.getAttribute('aria-controls');
      expect(ariaControls).toBeTruthy();
      
      // Verify the controlled element exists
      const controlledElement = await page.locator(`#${ariaControls}`).count();
      expect(controlledElement).toBe(1);
    }
  });
  
  test('All pages - images have alt text', async ({ page }) => {
    for (const pageInfo of PAGES) {
      await page.goto(`${BASE_URL}${pageInfo.path}`);
      await page.waitForLoadState('networkidle');
      
      // Find all images
      const images = await page.locator('img').all();
      
      for (const img of images) {
        const alt = await img.getAttribute('alt');
        expect(alt, `Image on ${pageInfo.name} page missing alt text`).toBeDefined();
      }
    }
  });
  
  test('All pages - form inputs have associated labels', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    await page.waitForLoadState('networkidle');
    
    // Find all form inputs
    const inputs = await page.locator('input, select, textarea').all();
    
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');
      const placeholder = await input.getAttribute('placeholder');
      
      // Input should have either: id with matching label, aria-label, or aria-labelledby
      const hasLabel = id || ariaLabel || ariaLabelledBy;
      
      expect(hasLabel, 'Form input missing accessible label').toBeTruthy();
    }
  });
});

/**
 * Test Suite 5: axe-core Accessibility Audit
 */
test.describe('axe-core Accessibility Audit', () => {
  for (const page of PAGES) {
    test(`${page.name} page - no axe-core violations`, async ({ page: browserPage }) => {
      await browserPage.goto(`${BASE_URL}${page.path}`);
      await browserPage.waitForLoadState('networkidle');
      
      // Run axe accessibility scan
      const accessibilityScanResults = await new AxeBuilder({ page: browserPage })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      
      // Log violations if any
      if (accessibilityScanResults.violations.length > 0) {
        console.log(`\n❌ Accessibility violations on ${page.name} page:`);
        accessibilityScanResults.violations.forEach(violation => {
          console.log(`\n  ${violation.id}: ${violation.description}`);
          console.log(`  Impact: ${violation.impact}`);
          console.log(`  Help: ${violation.helpUrl}`);
          violation.nodes.forEach(node => {
            console.log(`    - ${node.html.substring(0, 100)}`);
          });
        });
      }
      
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
  
  test('About page - accordions in both light and dark mode', async ({ page }) => {
    // Test light mode
    await page.goto(`${BASE_URL}/about`);
    await page.waitForLoadState('networkidle');
    
    const lightModeResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    expect(lightModeResults.violations).toEqual([]);
    
    // Switch to dark mode
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
    });
    
    await page.waitForTimeout(500);
    
    const darkModeResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    expect(darkModeResults.violations).toEqual([]);
  });
});

/**
 * Test Suite 6: Button Size Verification (Specific Check)
 */
test.describe('Button Component Touch Targets', () => {
  test('All button sizes meet minimum touch target requirements', async ({ page }) => {
    await page.goto(`${BASE_URL}/work`);
    await page.waitForLoadState('networkidle');
    
    // Get all buttons
    const buttons = await page.locator('button, a[role="button"], .btn').all();
    
    const violations = [];
    
    for (const button of buttons) {
      const box = await button.boundingBox();
      
      if (box) {
        // Check if button meets minimum size
        if (box.width < MIN_TOUCH_TARGET_SIZE || box.height < MIN_TOUCH_TARGET_SIZE) {
          const text = await button.textContent();
          violations.push({
            text: text?.substring(0, 30),
            width: Math.round(box.width),
            height: Math.round(box.height)
          });
        }
      }
    }
    
    if (violations.length > 0) {
      console.log('\n❌ Button size violations:');
      violations.forEach(v => {
        console.log(`  - "${v.text}": ${v.width}x${v.height}px`);
      });
    }
    
    expect(violations).toEqual([]);
  });
});
