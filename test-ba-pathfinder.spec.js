import { test, expect, devices } from '@playwright/test';

test.describe('BA Pathfinder - Core Functionality', () => {
  test('Page loads successfully', async ({ page }) => {
    const response = await page.goto('https://ba-pathfinder.vercel.app');
    expect(response.status()).toBe(200);
  });

  test('Title contains BA Pathfinder', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    const title = await page.title();
    expect(title).toContain('BA Pathfinder');
  });

  test('Main heading visible', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    await page.waitForLoadState('networkidle');
    const h1 = page.locator('h1');
    await expect(h1.first()).toBeVisible();
  });

  test('Junior BA roadmap link works', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    await page.waitForLoadState('networkidle');
    const juniorLink = page.locator('text=Junior Business Analyst');
    await expect(juniorLink).toBeVisible();
  });

  test('GitHub link present', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    await page.waitForLoadState('networkidle');
    const githubLink = page.locator('a[href*="github"]');
    await expect(githubLink.first()).toBeVisible();
  });
});

test.describe('BA Pathfinder - Junior Roadmap Page', () => {
  test('Junior roadmap page loads', async ({ page }) => {
    const response = await page.goto('https://ba-pathfinder.vercel.app/roadmap/junior');
    expect(response.status()).toBe(200);
  });

  test('Roadmap visualization appears', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app/roadmap/junior');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    const svg = page.locator('svg');
    await expect(svg.first()).toBeVisible();
  });

  test('Milestones section visible', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app/roadmap/junior');
    await page.waitForLoadState('networkidle');
    const milestone = page.locator('text=MILESTONE');
    await expect(milestone.first()).toBeVisible();
  });

  test('Practice projects section visible', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app/roadmap/junior');
    await page.waitForLoadState('networkidle');
    const projects = page.locator('text=Practice Projects');
    await expect(projects).toBeVisible();
  });

  test('Back to home link works', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app/roadmap/junior');
    await page.waitForLoadState('networkidle');
    const backLink = page.locator('text=Back to Home');
    await expect(backLink).toBeVisible();
  });
});

test.describe('BA Pathfinder - SEO & Meta Tags', () => {
  test('Meta description present', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toBeAttached();
  });

  test('OG image present', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toBeAttached();
    const content = await ogImage.getAttribute('content');
    expect(content).toContain('og-image');
  });

  test('Viewport meta present', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toBeAttached();
  });
});

test.describe('BA Pathfinder - Mobile Responsiveness', () => {
  test('No horizontal overflow on mobile', async ({ browser }) => {
    const context = await browser.newContext({ ...devices['iPhone 12'] });
    const page = await context.newPage();
    await page.goto('https://ba-pathfinder.vercel.app');
    await page.waitForLoadState('networkidle');

    const hasOverflow = await page.evaluate(() => {
      return document.body.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasOverflow).toBe(false);
    await context.close();
  });

  test('Touch targets meet 44px minimum on homepage', async ({ browser }) => {
    const context = await browser.newContext({ ...devices['iPhone 12'] });
    const page = await context.newPage();
    await page.goto('https://ba-pathfinder.vercel.app');
    await page.waitForLoadState('networkidle');

    const smallTargets = await page.evaluate(() => {
      const elements = [...document.querySelectorAll('a, button')];
      return elements.filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44);
      }).map(el => ({
        text: el.textContent?.slice(0, 30),
        width: Math.round(el.getBoundingClientRect().width),
        height: Math.round(el.getBoundingClientRect().height)
      }));
    });

    console.log('Small touch targets found:', JSON.stringify(smallTargets, null, 2));
    expect(smallTargets).toHaveLength(0);
    await context.close();
  });

  test('Touch targets meet 44px minimum on roadmap page', async ({ browser }) => {
    const context = await browser.newContext({ ...devices['iPhone 12'] });
    const page = await context.newPage();
    await page.goto('https://ba-pathfinder.vercel.app/roadmap/junior');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const smallTargets = await page.evaluate(() => {
      const elements = [...document.querySelectorAll('a, button')];
      return elements.filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44);
      }).map(el => ({
        text: el.textContent?.slice(0, 30),
        width: Math.round(el.getBoundingClientRect().width),
        height: Math.round(el.getBoundingClientRect().height)
      }));
    });

    console.log('Small touch targets on roadmap:', JSON.stringify(smallTargets, null, 2));
    expect(smallTargets).toHaveLength(0);
    await context.close();
  });

  test('Junior roadmap accessible on mobile', async ({ browser }) => {
    const context = await browser.newContext({ ...devices['iPhone 12'] });
    const page = await context.newPage();
    await page.goto('https://ba-pathfinder.vercel.app');
    await page.waitForLoadState('networkidle');

    await page.click('text=Junior Business Analyst');
    await page.waitForLoadState('networkidle');

    const h1 = page.locator('h1');
    await expect(h1.first()).toContainText('Junior');
    await context.close();
  });
});

test.describe('BA Pathfinder - Accessibility', () => {
  test('Links are focusable', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    await page.waitForLoadState('networkidle');

    const juniorLink = page.locator('text=Explore Junior BA Path');
    await juniorLink.focus();
    const isFocused = await juniorLink.evaluate(el => el === document.activeElement || el.contains(document.activeElement));
    expect(isFocused).toBe(true);
  });

  test('Interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('https://ba-pathfinder.vercel.app');
    await page.waitForLoadState('networkidle');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });
});
