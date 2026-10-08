# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myfile.spec.js >> testcase 1
- Location: tests/myfile.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForFunction: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - iframe [ref=e2]:
    - generic [ref=f1e1]:
      - text: "Username :"
      - textbox "Enter your name" [ref=f1e2]
      - text: "Password :"
      - textbox "Enter your password" [ref=f1e3]
  - iframe [ref=e3]:
    - generic [ref=f2e1]:
      - text: "Username :"
      - textbox "Enter your name" [ref=f2e2]
      - text: "Password :"
      - textbox "Enter your password" [ref=f2e3]
  - button "click me" [ref=e4]
  - link "Test2 File" [active] [ref=e5] [cursor=pointer]:
    - /url: test2.html
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('testcase 1', async({ page }) => {
  4  |   await page.goto('file:///Users/vaibhavsingh/Desktop/teche-apps/EY-Playwright-Sep-Oct26/html/test1.html');
  5  | //   let frame1 = await page.frameLocator('[id="myframe1"]');
  6  | //   await frame1.locator('[id="username"]').fill("Vaibhav");
  7  | //   await frame1.locator('[id="password"]').fill("Vaibhav");
  8  | //   await page.waitForTimeout(5000);
  9  | 
  10 |     // handle the alert
  11 |     // page.on('dialog', async dialog => {
  12 |     //     console.log(dialog.message());
  13 |     //     await dialog.accept();
  14 |     // })
  15 |     // await page.getByText("click me").click();
  16 | 
  17 |     let popupPromise = page.waitForEvent('popup');
  18 | 
  19 |     await page.getByText("Test2 File").click();
  20 |     let test1Tab = await popupPromise;
  21 | 
  22 |     // page
  23 |     // domcontentloaded - DOM 
  24 |     // load = DOM + all resources associate (image, files etc)
  25 |     // networkidle = network call
  26 |     await test1Tab.waitForLoadState("load", {timeout: 50000});
  27 |     
> 28 | await test1Tab.waitForFunction(() => {
     |                ^ Error: page.waitForFunction: Test timeout of 30000ms exceeded.
  29 |     window.appReady === true , {timeout: 30000 }
  30 | })
  31 | 
  32 |     // element
  33 |     await test1Tab.waitForSelector('[id="username"]', {
  34 |         state: 'visible',
  35 |         timeout: 50000
  36 |     })
  37 | 
  38 |     await test1Tab.locator('[id="username"]').waitFor({
  39 |         state : 'visible', 
  40 |         timeout : 30000
  41 |     });
  42 |     // action chaining 
  43 | 
  44 |     // table, div , input 
  45 |     await page.locator("table").locator("div").waitFor({
  46 |         state:"visible"
  47 |     }).locator("input");
  48 | 
  49 | 
  50 |     let username_locators = ['[data-test="username"]','[id="user-name"]','[name="user-name"]']
  51 | 
  52 | 
  53 |     let price = await page.locator('[data-test="inventory-item"]')
  54 |         .filter({hasText : "Sauce Labs Bike Light"})
  55 |             .locator('data-test="inventory-item-price"').textContent();
  56 | 
  57 | 
  58 |     await test1Tab.locator('[id="username"]').fill("Vaibhav");
  59 |     await test1Tab.locator('[id="password"]').fill("Vaibhav");
  60 |     
  61 |     // wait 5 sec
  62 |     await expect(test1Tab.locator('[id="username"]')).toBeVisible({timeout: 10000})
  63 |     await test1Tab.waitForTimeout(5000);
  64 |     
  65 |     await test1Tab.waitFo
  66 | // 30 sec - locating 
  67 | // 5 sec - assertion
  68 | 
  69 |  });
```