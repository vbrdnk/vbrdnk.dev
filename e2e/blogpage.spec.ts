import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/blog');
});

test('blogpage has proper title and heading', async ({ page }) => {
  await expect(page).toHaveTitle("Blog – Vladyslav Burdeniuk");
  const blogHeading = page.locator('h3.chakra-heading', { hasText: 'All Posts' });
  await expect(blogHeading).toBeVisible();
});

test('blogpage has correct number of articles', async ({ page }) => {
  const articles = page.locator('article');
  await expect(articles).toHaveCount(3);
});
