# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> verify error message for empty credentials
- Location: tests/login.spec.js:8:3

# Error details

```
ReferenceError: loginPageObject is not defined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import data from '../testdata/onedata.json' with {"type":"json"}
  3  | import { textbox_username, textbox_password } from '../locator/loginLocator.js';
  4  | import { LoginPage } from '../pages/loginpage.js';
  5  | 
  6  | 
  7  | //for(let data of testdata){
  8  |   test(`${data.testname}`,  async ({ browser, context, page }) => {
  9  | 
> 10 |     loginPageObject = new LoginPage(page);
     |                    ^ ReferenceError: loginPageObject is not defined
  11 |     await page.goto('https://www.saucedemo.com/'); // 200 ms
  12 |     await loginPageObject.performLogin(data.username, data.password);
  13 |     let actualErrorMsg = await loginPageObject.getErrorMsg();
  14 |     expect.soft(actualErrorMsg).toBe(data.errorMsg);
  15 | 
  16 | 
  17 |   });
  18 | //}
  19 | 
  20 | // absolute xpath = single slash . exact child
  21 | // Relative xpath = double slash 
  22 | 
  23 | //. /html/body/div/div/div/div/div/div/form/div[1]/input
  24 | 
  25 | 
  26 | // test('verify user able to login payment @locator', async ({ page }) => {
  27 | //   await page.goto('https://www.saucedemo.com/');
  28 | //     await page.getByPlaceholder("Username").click();
  29 | //     await page.getByPlaceholder("Username").fill("Abcd");
  30 | //     await page.getByPlaceholder("Password").click();
  31 | //     await page.getByPlaceholder("Password").fill("XYZ");
  32 | //     await page.getByText("Login").click();
  33 | 
  34 | //     let actualErrorMsg = await page.locator('[data-test="error"]').textContent();
  35 | //     expect.soft(actualErrorMsg).toBe("Epic sadface: Username and password do not match any user in this service1");
  36 | //     console.log("I am the last of line of this testcase")
  37 | // // 2 type of assertion 
  38 | // // hard assertion - if assertion is failed then next step wont execute, test will failed 
  39 | // // soft assertion  - if assertion if fialed next step will execute but test will failed
  40 | 
  41 | // });
  42 | 
  43 | 
  44 | 
  45 | // validating a user profile
  46 | // login to application 
  47 | // validate dashboard - hard assertion
  48 | // go to profile page
  49 | // validate username 
  50 | // validate password
  51 | // validate dob
  52 | 
  53 | 
  54 | 
  55 | 
```