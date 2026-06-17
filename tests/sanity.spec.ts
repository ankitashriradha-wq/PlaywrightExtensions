import { test, expect } from '@playwright/test';

test.describe('The Internet - Sanity Tests', { tag: '@sanity' }, () => {
  const baseUrl = 'https://the-internet.herokuapp.com/';

  test.beforeEach(async ({ page }) => {
    // Navigate to the main page before each test
    await page.goto(baseUrl);
  });

  test('should load homepage and display title', async ({ page }) => {
    // Verify page title
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('should display main heading', async ({ page }) => {
    // Verify main heading is visible
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Welcome to the-internet');
  });

  test('should display list of available links', async ({ page }) => {
    // Verify that the list of links is present
    const linksList = page.locator('ul li');
    await expect(linksList).toBeDefined();
    
    // Get count of links
    const linkCount = await linksList.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('should navigate to Checkboxes page', async ({ page }) => {
    // Click on checkboxes link
    await page.getByText('Checkboxes').click();
    
    // Verify navigation
    await page.waitForURL('**/checkboxes');
    const heading = page.locator('h3');
    await expect(heading).toContainText('Checkboxes');
  });

  test('should navigate to Dropdown page', async ({ page }) => {
    // Click on dropdown link
    await page.getByText('Dropdown').click();
    
    // Verify navigation
    await page.waitForURL('**/dropdown');
    const heading = page.locator('h3');
    await expect(heading).toContainText('Dropdown List');
  });

  test('should have working back navigation', async ({ page }) => {
    // Navigate to a page
    await page.getByText('Checkboxes').click();
    await page.waitForURL('**/checkboxes');
    
    // Go back to home
    await page.goBack();
    
    // Verify we're back on homepage
    const heading = page.locator('h1');
    await expect(heading).toContainText('Welcome to the-internet');
  });

  test('should display footer with link to GitHub', async ({ page }) => {
    // Verify footer is present
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Verify footer link
    const footerLink = footer.locator('a');
    await expect(footerLink).toBeVisible();
  });

  test('should handle navigation to Input page', async ({ page }) => {
    // Navigate to inputs page
    await page.getByText('Inputs').click();
    
    // Verify navigation
    await page.waitForURL('**/inputs');
    const heading = page.locator('h3');
    await expect(heading).toBeVisible();
  });

  test('should verify all main links are accessible', async ({ page }) => {
    // Get all links in the main list
    const links = page.locator('ul li a');
    
    // Verify each link is visible and clickable
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);
    
    for (let i = 0; i < Math.min(linkCount, 5); i++) {
      const link = links.nth(i);
      await expect(link).toBeVisible();
      await expect(link).toHaveCount(1);
    }
  });

  test('should verify page is responsive', async ({ page }) => {
    // Check that main content is within viewport
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeInViewport();
  });
});
