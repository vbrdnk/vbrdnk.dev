import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('homepage has proper title and navigation links', async ({ page }) => {
  await expect(page).toHaveTitle(/{code•aligned}/);

  // check nav has correct nav
  const navLinks = page.locator('nav button.chakra-button');
  await expect(navLinks).toHaveCount(2);
  await expect(navLinks).toHaveText(['Home', 'Blog']);

  // check all nav links are correct
  const homeLink = page.locator('button.chakra-button a', { hasText: 'Home' });
  const blogLink = page.locator('button.chakra-button a', { hasText: 'Blog' });

  await expect(homeLink).toHaveAttribute('href', '/');
  await expect(blogLink).toHaveAttribute('href', '/blog');
  await blogLink.click();
  await expect(page).toHaveURL(/blog/);
});

test('homepage has correct headings', async ({ page }) => {
  const homePageHeadings = page.locator('h2.chakra-heading');
  await expect(homePageHeadings).toHaveCount(2);
  await expect(homePageHeadings).toHaveText(['Blog', 'Work playlist']);
});
