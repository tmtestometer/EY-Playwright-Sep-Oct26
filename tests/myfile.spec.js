import { test, expect } from '@playwright/test';

test('testcase 1', async({ page }) => {
  await page.goto('file:///Users/vaibhavsingh/Desktop/teche-apps/EY-Playwright-Sep-Oct26/html/test1.html');
//   let frame1 = await page.frameLocator('[id="myframe1"]');
//   await frame1.locator('[id="username"]').fill("Vaibhav");
//   await frame1.locator('[id="password"]').fill("Vaibhav");
//   await page.waitForTimeout(5000);

    // handle the alert
    // page.on('dialog', async dialog => {
    //     console.log(dialog.message());
    //     await dialog.accept();
    // })
    // await page.getByText("click me").click();

    let popupPromise = page.waitForEvent('popup');

    await page.getByText("Test2 File").click();
    let test1Tab = await popupPromise;

    // page
    // domcontentloaded - DOM 
    // load = DOM + all resources associate (image, files etc)
    // networkidle = network call
    await test1Tab.waitForLoadState("load", {timeout: 50000});
    
await test1Tab.waitForFunction(() => {
    window.appReady === true , {timeout: 30000 }
})

    // element
    await test1Tab.waitForSelector('[id="username"]', {
        state: 'visible',
        timeout: 50000
    })

    await test1Tab.locator('[id="username"]').waitFor({
        state : 'visible', 
        timeout : 30000
    });
    // action chaining 

    // table, div , input 
    await page.locator("table").locator("div").waitFor({
        state:"visible"
    }).locator("input");


    let username_locators = ['[data-test="username"]','[id="user-name"]','[name="user-name"]']


    let price = await page.locator('[data-test="inventory-item"]')
        .filter({hasText : "Sauce Labs Bike Light"})
            .locator('data-test="inventory-item-price"').textContent();


    await test1Tab.locator('[id="username"]').fill("Vaibhav");
    await test1Tab.locator('[id="password"]').fill("Vaibhav");
    
    // wait 5 sec
    await expect(test1Tab.locator('[id="username"]')).toBeVisible({timeout: 10000})
    await test1Tab.waitForTimeout(5000);
    
    await test1Tab.waitFo
// 30 sec - locating 
// 5 sec - assertion

 });