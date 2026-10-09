import { After, Before } from "@cucumber/cucumber";
import { chromium } from "playwright";


Before(async function(){
    this.browser = await chromium.launch({headless : false});
    this.context = await this.browser.newContext(
    //     {
    //     storageState : ''
    // }
);s
    this.page = await this.context.newPage();

    this.company = "EY";
})


After(async function(){
    this.browser.close();
})


