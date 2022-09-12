import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://vbrdnk.dev/');
});

test('homepage has proper title and navigation links', async ({ page }) => {
  await expect(page).toHaveTitle(/{code•aligned}/);

  // check nav has correct nav
  const navLinks = page.locator('nav a.chakra-button');
  await expect(navLinks).toHaveCount(3);
  await expect(navLinks).toHaveText(['Home', 'Dashboard', 'Blog']);

  // check all nav links are correct
  const homeLink = page.locator('a.chakra-button', { hasText: 'Home' });
  const dashboardLink = page.locator('a.chakra-button', { hasText: 'Dashboard' });
  const blogLink = page.locator('a.chakra-button', { hasText: 'Blog' });

  await expect(homeLink).toHaveAttribute('href', '/');
  await expect(dashboardLink).toHaveAttribute('href', '/dashboard');
  await expect(blogLink).toHaveAttribute('href', '/blog');
  await dashboardLink.click();
  await expect(page).toHaveURL(/dashboard/);
  await blogLink.click();
  await expect(page).toHaveURL(/blog/);
});

test('homepage has correct headings', async ({ page }) => {
  const homePageHeadings = page.locator('h2.chakra-heading');
  await expect(homePageHeadings).toHaveCount(2);
  await expect(homePageHeadings).toHaveText(['Blog', 'Dashboard']);
});
