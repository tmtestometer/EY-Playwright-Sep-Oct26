# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: payment.spec.js >> verify user able to login payment
- Location: tests/payment.spec.js:5:1

# Error details

```
ReferenceError: loginPageObject is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/loginpage.js';
  3  | 
  4  | 
  5  | test('verify user able to login payment', async ({ page }) => {
  6  |   await page.goto('https://www.saucedemo.com/');
> 7  |  loginPageObject = new LoginPage(page);
     |                 ^ ReferenceError: loginPageObject is not defined
  8  |  loginPageObject.performLogin("standard_user", "secret_sauce");
  9  | 
  10 | });
  11 | 
  12 | test('verify user able to login1 payment', async ({ page }) => {
  13 |   await page.goto('https://www.saucedemo.com/');
  14 |   await page.locator('[data-test="username"]').click({button: "right", clickCount : 10})
  15 |   await page.locator('[data-test="username"]').fill('standard_user');
  16 |   await page.locator('[data-test="password"]').dblclick();
  17 |   await page.locator('[data-test="password"]').fill('secret_sauce');
  18 |   await page.locator('[data-test="login-button"]').click();
  19 | });
  20 | 
  21 | test('verify user able to login2 payment', async ({ page }) => {
  22 |   await page.goto('https://www.saucedemo.com/');
  23 |   await page.locator('[data-test="username"]').click();
  24 |   await page.locator('[data-test="username"]').fill('standard_user');
  25 |   await page.locator('[data-test="password"]').click();
  26 |   await page.locator('[data-test="password"]').fill('secret_sauce');
  27 |   await page.locator('[data-test="login-button"]').click();
  28 | });
```