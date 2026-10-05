
test('verify user able to login1 payment', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});



Gherkin langauge 


user open chrome
user navidate to "https://www.saucedemo.com"
user enter "standard_user" in username box
user enter "secret_Sauce" in password box
user click on login button
user validate dashboard


1 - feature file
2 - Feature and scenario
3 - 
Given - prerequisite 