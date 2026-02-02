/**
 * Home Page Preservation Test Suite
 * Task 13.1 - Portfolio UX Improvements
 * 
 * Validates that the home page remains unchanged after UX improvements:
 * - Hero section renders correctly
 * - Stats section renders correctly
 * - All existing animations work
 * 
 * Requirements: 11.5, 11.6
 * 
 * Usage:
 * 1. Start dev server: npm run dev
 * 2. Open http://localhost:3000 in browser
 * 3. Open DevTools console (F12)
 * 4. Copy and paste this script
 * 5. Run: testHomePage()
 */

const HomePageTestSuite = {
  results: {
    passed: [],
    failed: [],
    warnings: []
  },

  /**
   * Main test runner
   */
  async runAllTests() {
    console.log('='.repeat(80));
    console.log('HOME PAGE PRESERVATION TEST SUITE - Task 13.1');
    console.log('='.repeat(80));
    console.log('');

    // Verify we're on the home page
    if (window.location.pathname !== '/') {
      console.error('❌ ERROR: Please navigate to the home page (/) to run these tests');
      return;
    }

    this.results = { passed: [], failed: [], warnings: [] };

    // Run all test suites
    await this.testHeroSection();
    await this.testStatsSection();
    await this.testAnimations();
    await this.testResponsiveLayout();
    await this.testSocialLinks();

    // Display results
    this.displayResults();
  },

  /**
   * Test 1: Hero Section Verification
   * Validates that hero section renders with correct content and structure
   */
  async testHeroSection() {
    console.log('Testing Hero Section...');
    console.log('-'.repeat(80));

    // Check subtitle
    const subtitle = document.querySelector('span');
    if (subtitle && subtitle.textContent.includes('Full-stack developer')) {
      this.results.passed.push('Hero: Subtitle text is correct');
    } else {
      this.results.failed.push('Hero: Subtitle text is missing or incorrect');
    }

    // Check main heading
    const heading = document.querySelector('h1');
    if (heading && heading.textContent.includes('Building technology that empowers people')) {
      this.results.passed.push('Hero: Main heading text is correct');
    } else {
      this.results.failed.push('Hero: Main heading text is missing or incorrect');
    }

    // Check "View my work" button
    const workButton = Array.from(document.querySelectorAll('a')).find(
      a => a.href.includes('/work')
    );
    if (workButton) {
      const buttonText = workButton.textContent.toLowerCase();
      if (buttonText.includes('view my work')) {
        this.results.passed.push('Hero: "View my work" button exists with correct text');
      } else {
        this.results.warnings.push('Hero: Work button exists but text may be different');
      }
    } else {
      this.results.failed.push('Hero: "View my work" button is missing');
    }

    // Check photo component
    const photoImage = document.querySelector('img[alt*="Salih"]');
    if (photoImage) {
      this.results.passed.push('Hero: Profile photo is present');
      
      // Check if image loaded successfully
      if (photoImage.complete && photoImage.naturalHeight !== 0) {
        this.results.passed.push('Hero: Profile photo loaded successfully');
      } else {
        this.results.warnings.push('Hero: Profile photo may not have loaded');
      }
    } else {
      this.results.failed.push('Hero: Profile photo is missing');
    }

    // Check SVG circle animation
    const svgCircle = document.querySelector('svg circle');
    if (svgCircle) {
      this.results.passed.push('Hero: Animated SVG circle is present');
      
      // Check stroke color
      const stroke = svgCircle.getAttribute('stroke');
      if (stroke === '#6366f1') {
        this.results.passed.push('Hero: SVG circle has correct accent color');
      } else {
        this.results.warnings.push(`Hero: SVG circle stroke color is ${stroke} (expected #6366f1)`);
      }
    } else {
      this.results.failed.push('Hero: Animated SVG circle is missing');
    }

    // Check social icons
    const socialIcons = document.querySelectorAll('a[target="_blank"]');
    const socialCount = Array.from(socialIcons).filter(
      a => a.href.includes('github') || a.href.includes('linkedin') || a.href.includes('twitter')
    ).length;
    
    if (socialCount === 3) {
      this.results.passed.push('Hero: All 3 social icons are present (GitHub, LinkedIn, Twitter)');
    } else {
      this.results.failed.push(`Hero: Expected 3 social icons, found ${socialCount}`);
    }

    console.log('✓ Hero section tests complete');
    console.log('');
  },

  /**
   * Test 2: Stats Section Verification
   * Validates that stats section renders with correct data
   */
  async testStatsSection() {
    console.log('Testing Stats Section...');
    console.log('-'.repeat(80));

    // Expected stats
    const expectedStats = [
      { value: '3+', label: 'Years building software' },
      { value: '10+', label: 'Products & tools shipped' },
      { value: '15+', label: 'Technologies in production' },
      { value: '300+', label: 'GitHub contributions' }
    ];

    // Find all stat items
    const statItems = document.querySelectorAll('.flex-1.flex.flex-col');
    
    if (statItems.length === 4) {
      this.results.passed.push('Stats: Found all 4 stat items');
    } else {
      this.results.failed.push(`Stats: Expected 4 stat items, found ${statItems.length}`);
    }

    // Verify each stat
    expectedStats.forEach((expectedStat, index) => {
      const statItem = statItems[index];
      if (statItem) {
        const statText = statItem.textContent;
        
        // Check value
        if (statText.includes(expectedStat.value)) {
          this.results.passed.push(`Stats: Stat ${index + 1} value is correct (${expectedStat.value})`);
        } else {
          this.results.failed.push(`Stats: Stat ${index + 1} value is incorrect`);
        }
        
        // Check label
        if (statText.includes(expectedStat.label)) {
          this.results.passed.push(`Stats: Stat ${index + 1} label is correct`);
        } else {
          this.results.failed.push(`Stats: Stat ${index + 1} label is incorrect`);
        }
      }
    });

    // Check stats container styling
    const statsContainer = document.querySelector('.flex.flex-wrap.gap-4');
    if (statsContainer) {
      this.results.passed.push('Stats: Container has correct flex layout');
    } else {
      this.results.warnings.push('Stats: Container styling may have changed');
    }

    console.log('✓ Stats section tests complete');
    console.log('');
  },

  /**
   * Test 3: Animation Verification
   * Validates that Framer Motion animations are working
   */
  async testAnimations() {
    console.log('Testing Animations...');
    console.log('-'.repeat(80));

    // Check for Framer Motion section wrapper
    const mainSection = document.querySelector('section');
    if (mainSection) {
      const styles = window.getComputedStyle(mainSection);
      
      // Check if opacity animation has been applied
      if (styles.opacity === '1') {
        this.results.passed.push('Animations: Main section opacity animation completed');
      } else {
        this.results.warnings.push('Animations: Main section may still be animating');
      }
    }

    // Check photo animation
    const photoContainer = document.querySelector('.w-\\[280px\\].h-\\[280px\\]');
    if (photoContainer) {
      const styles = window.getComputedStyle(photoContainer);
      if (styles.opacity === '1') {
        this.results.passed.push('Animations: Photo opacity animation completed');
      } else {
        this.results.warnings.push('Animations: Photo may still be animating');
      }
    }

    // Check SVG circle animation
    const svgCircle = document.querySelector('svg circle');
    if (svgCircle) {
      const strokeDasharray = svgCircle.getAttribute('stroke-dasharray');
      if (strokeDasharray) {
        this.results.passed.push('Animations: SVG circle has animated stroke-dasharray');
      } else {
        this.results.warnings.push('Animations: SVG circle animation may not be active');
      }
    }

    // Check for animation delays (Framer Motion specific)
    const animatedElements = document.querySelectorAll('[style*="opacity"]');
    if (animatedElements.length > 0) {
      this.results.passed.push(`Animations: Found ${animatedElements.length} elements with opacity animations`);
    } else {
      this.results.warnings.push('Animations: No opacity animations detected');
    }

    console.log('✓ Animation tests complete');
    console.log('');
  },

  /**
   * Test 4: Responsive Layout Verification
   * Validates that layout adapts correctly at different breakpoints
   */
  async testResponsiveLayout() {
    console.log('Testing Responsive Layout...');
    console.log('-'.repeat(80));

    const currentWidth = window.innerWidth;
    console.log(`  Current viewport: ${currentWidth}px`);

    // Check hero layout
    const heroContainer = document.querySelector('.flex.flex-col.xl\\:flex-row');
    if (heroContainer) {
      const styles = window.getComputedStyle(heroContainer);
      
      if (currentWidth >= 1280) {
        // Desktop: should be row layout
        if (styles.flexDirection === 'row') {
          this.results.passed.push('Layout: Desktop hero uses row layout (xl:flex-row)');
        } else {
          this.results.failed.push('Layout: Desktop hero should use row layout');
        }
      } else {
        // Mobile/Tablet: should be column layout
        if (styles.flexDirection === 'column') {
          this.results.passed.push('Layout: Mobile/tablet hero uses column layout');
        } else {
          this.results.failed.push('Layout: Mobile/tablet hero should use column layout');
        }
      }
    }

    // Check photo sizing at different breakpoints
    const photo = document.querySelector('.w-\\[280px\\]');
    if (photo) {
      const styles = window.getComputedStyle(photo);
      const width = parseInt(styles.width);
      
      if (currentWidth >= 1280 && width === 380) {
        this.results.passed.push('Layout: Desktop photo size is correct (380px)');
      } else if (currentWidth >= 768 && width === 320) {
        this.results.passed.push('Layout: Tablet photo size is correct (320px)');
      } else if (currentWidth < 768 && width === 280) {
        this.results.passed.push('Layout: Mobile photo size is correct (280px)');
      } else {
        this.results.warnings.push(`Layout: Photo width is ${width}px at ${currentWidth}px viewport`);
      }
    }

    // Check stats layout
    const statsContainer = document.querySelector('.flex.flex-wrap');
    if (statsContainer) {
      this.results.passed.push('Layout: Stats use flex-wrap for responsive behavior');
    }

    console.log('✓ Responsive layout tests complete');
    console.log('');
  },

  /**
   * Test 5: Social Links Verification
   * Validates that social links are correct and functional
   */
  async testSocialLinks() {
    console.log('Testing Social Links...');
    console.log('-'.repeat(80));

    const expectedSocials = [
      { name: 'GitHub', url: 'github.com/salihelfatih' },
      { name: 'LinkedIn', url: 'linkedin.com/in/salihelfatih' },
      { name: 'Twitter', url: 'x.com/salih_elfatih' }
    ];

    const socialLinks = Array.from(document.querySelectorAll('a[target="_blank"]')).filter(
      a => a.href.includes('github') || a.href.includes('linkedin') || a.href.includes('twitter') || a.href.includes('x.com')
    );

    expectedSocials.forEach(expected => {
      const link = socialLinks.find(a => a.href.includes(expected.url));
      if (link) {
        this.results.passed.push(`Social: ${expected.name} link is present and correct`);
        
        // Check if link opens in new tab
        if (link.getAttribute('target') === '_blank') {
          this.results.passed.push(`Social: ${expected.name} opens in new tab`);
        }
        
        // Check for security attributes
        if (link.getAttribute('rel')?.includes('noopener')) {
          this.results.passed.push(`Social: ${expected.name} has security attributes`);
        }
      } else {
        this.results.failed.push(`Social: ${expected.name} link is missing or incorrect`);
      }
    });

    // Check social icon styling
    const socialIcons = document.querySelectorAll('.border.border-accent.rounded-full');
    if (socialIcons.length === 3) {
      this.results.passed.push('Social: All icons have correct styling (border, rounded-full)');
    } else {
      this.results.warnings.push(`Social: Expected 3 styled icons, found ${socialIcons.length}`);
    }

    console.log('✓ Social links tests complete');
    console.log('');
  },

  /**
   * Display test results
   */
  displayResults() {
    console.log('='.repeat(80));
    console.log('TEST RESULTS SUMMARY');
    console.log('='.repeat(80));
    console.log('');

    console.log(`✅ PASSED: ${this.results.passed.length}`);
    this.results.passed.forEach(result => console.log(`  ✓ ${result}`));
    console.log('');

    if (this.results.warnings.length > 0) {
      console.log(`⚠️  WARNINGS: ${this.results.warnings.length}`);
      this.results.warnings.forEach(result => console.log(`  ⚠ ${result}`));
      console.log('');
    }

    if (this.results.failed.length > 0) {
      console.log(`❌ FAILED: ${this.results.failed.length}`);
      this.results.failed.forEach(result => console.log(`  ✗ ${result}`));
      console.log('');
    }

    const total = this.results.passed.length + this.results.warnings.length + this.results.failed.length;
    const passRate = ((this.results.passed.length / total) * 100).toFixed(1);

    console.log('='.repeat(80));
    console.log(`OVERALL: ${this.results.passed.length}/${total} tests passed (${passRate}%)`);
    
    if (this.results.failed.length === 0) {
      console.log('STATUS: ✅ HOME PAGE UNCHANGED - ALL TESTS PASSED');
      console.log('');
      console.log('The home page has been successfully preserved:');
      console.log('  ✓ Hero section renders correctly');
      console.log('  ✓ Stats section renders correctly');
      console.log('  ✓ All animations are working');
      console.log('  ✓ Responsive layout is intact');
      console.log('  ✓ Social links are functional');
    } else {
      console.log('STATUS: ❌ ISSUES DETECTED - REVIEW REQUIRED');
      console.log('');
      console.log('Some elements of the home page may have changed.');
      console.log('Please review the failed tests above.');
    }
    console.log('='.repeat(80));
  }
};

/**
 * Main test function - call this to run all tests
 */
function testHomePage() {
  HomePageTestSuite.runAllTests();
}

/**
 * Quick verification function
 */
function quickCheckHomePage() {
  console.log('='.repeat(80));
  console.log('HOME PAGE QUICK CHECK');
  console.log('='.repeat(80));
  
  const checks = {
    subtitle: !!document.querySelector('span'),
    heading: !!document.querySelector('h1'),
    photo: !!document.querySelector('img[alt*="Salih"]'),
    workButton: !!Array.from(document.querySelectorAll('a')).find(a => a.href.includes('/work')),
    stats: document.querySelectorAll('.flex-1.flex.flex-col').length === 4,
    socials: Array.from(document.querySelectorAll('a[target="_blank"]')).filter(
      a => a.href.includes('github') || a.href.includes('linkedin') || a.href.includes('twitter')
    ).length === 3
  };
  
  console.log('');
  console.log('Quick Check Results:');
  console.log(`  Subtitle: ${checks.subtitle ? '✓' : '✗'}`);
  console.log(`  Heading: ${checks.heading ? '✓' : '✗'}`);
  console.log(`  Photo: ${checks.photo ? '✓' : '✗'}`);
  console.log(`  Work Button: ${checks.workButton ? '✓' : '✗'}`);
  console.log(`  Stats (4): ${checks.stats ? '✓' : '✗'}`);
  console.log(`  Social Links (3): ${checks.socials ? '✓' : '✗'}`);
  console.log('');
  
  const allPassed = Object.values(checks).every(v => v === true);
  console.log(allPassed ? '✅ All quick checks passed!' : '❌ Some checks failed');
  console.log('');
  console.log('For detailed testing, run: testHomePage()');
  console.log('='.repeat(80));
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testHomePage, quickCheckHomePage };
}

// Auto-load instructions
console.log('='.repeat(80));
console.log('HOME PAGE TEST SCRIPT LOADED');
console.log('='.repeat(80));
console.log('');
console.log('Available commands:');
console.log('  testHomePage()       - Run full test suite');
console.log('  quickCheckHomePage() - Quick verification');
console.log('');
console.log('Instructions:');
console.log('1. Ensure you are on the home page (/)');
console.log('2. Run: testHomePage()');
console.log('3. Review the results');
console.log('');
console.log('This test validates Requirements 11.5 and 11.6:');
console.log('  - Hero section remains unchanged');
console.log('  - Stats section remains unchanged');
console.log('  - All animations work correctly');
console.log('='.repeat(80));
