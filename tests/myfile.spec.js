import { test, expect } from '@playwright/test';

test('testcase 1', async({ page }) => {
  await page.goto('file:///Users/vaibhavsingh/Desktop/teche-apps/EY-Playwright-Sep-Oct26/html/test1.html');
  let frame1 = await page.frameLocator('[id="myframe1"]');
  await frame1.locator('[id="username"]').fill("Vaibhav");
  await frame1.locator('[id="password"]').fill("Vaibhav");
  await page.waitForTimeout(5000);



 });