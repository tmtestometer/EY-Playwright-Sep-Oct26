import {test as base , expect } from '@playwright/test';


const myFixtures = base.extend({
    loginPage: async ({page}, use) => {
        await page.goto('https://www.saucedemo.com');
        await page.locator('[data-test="username"]').click()
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        // sending this fix to this page.
        await use(page);
    },
    

})


export {myFixtures, expect}
