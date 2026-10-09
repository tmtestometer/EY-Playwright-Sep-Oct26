import { test, expect } from '@playwright/test';


test('verify user able to login1 payment', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.waitForTimeout(5000);

  // capacha, otp , 

// 

  // await page.locator('[data-test="username"]').click()
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('secret_sauce');
  // await page.locator('[data-test="login-button"]').click();
  
  // await page.context().storageState({
  //   path: 'auth/sauceuser.json'
  // }) 


});

// test.use({
//   storageState : 'auth/sauceuser.json'
// })


test('credentialSetup @credentialSetup', async ({ page }) => {

  // await page.goto('https://www.saucedemo.com/inventory.html');
  // await page.waitForTimeout(5000);

  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').click()
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await page.context().storageState({
    path: 'auth/sauceuser.json'
  }) 
});
