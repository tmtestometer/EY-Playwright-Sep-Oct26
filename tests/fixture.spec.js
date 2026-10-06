import { chromium } from "playwright";


async function openBrowser(){
    // Fixture. predefined object

    // browser - chrome service
    // browser-context - cokkiess-less, session less and fresh session (incognito like)
    // page - tab tab


    let browser = await chromium.launch({headless : false});

    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto("https://www.google.com");
    let page2 = await context1.newPage();
    await page2.goto("https://www.amazon.com");

    let context2 = await browser.newContext();
    let page3 = await context2.newPage();
    await page3.goto("https://www.linkedin.com");
    let page4 = await context2.newPage();
    await page4.goto("https://www.facebook.com");


}

//openBrowser();