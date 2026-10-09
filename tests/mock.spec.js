import { test, expect } from '@playwright/test';



test('credentialSetup @credentialSetup', async ({ page }) => {
  await page.route("**/BookStore/v1/Books", async route => {
    // await route.continue();
    await route.fulfill({
        status : 200, 
        contentType: 'application/json',
        body: JSON.stringify({
                "books": [
                    {
                        "isbn": "9781449325862",
                        "title": "Vaibhav Book",
                        "subTitle": "XYZ",
                        "author": "Training",
                        "publish_date": "2020-06-04T08:48:39.000Z",
                        "publisher": "O'Reilly Media",
                        "pages": 234,
                        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                        "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                    }
                ]
            })
        });
  })
  await page.goto('https://demoqa.com/books');
  await page.waitForTimeout(5000);

  // https://demoqa.com/BookStore/v1/Books

});
