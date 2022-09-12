import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://vbrdnk.dev/dashboard');
})

test('dashboardpage has proper title', async ({ page }) => {
  await expect(page).toHaveTitle("Dashboard – Vladyslav Burdeniuk");
});

test('dashboardpage has correct block headings', async ({ page }) => {
  const homePageHeadings = page.locator('h2.chakra-heading');
  await expect(homePageHeadings).toHaveCount(3);
  await expect(homePageHeadings).toHaveText(['Dashboard', 'Top repositories', 'Top tracks']);
});
