import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.js';


test('verify user able to login payment', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 loginPageObject = new LoginPage(page);
 loginPageObject.performLogin("standard_user", "secret_sauce");

});

test('verify user able to login1 payment', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click({button: "right", clickCount : 10})
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').dblclick();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('verify user able to login2 payment', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});