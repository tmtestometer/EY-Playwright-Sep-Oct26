import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../../pages/loginpage.js";
import { DashboardPage } from "../../pages/dashboard.js";

let loginObject = null
let dashboardObject = null;
Given("user navigate to {string}", async function(url) {
    await this.page.goto(url);
    console.log(this.company);
});

Given("user open {string}", function(browser){
    
})

When("user enter {string} in username box", async function(username){
    dashboardObject = new DashboardPage(this.page);
    loginObject = new LoginPage(this.page);
    await loginObject.enterUserName(username);
})

When("user enter {string} in password box",async function(password){
    await loginObject.enterPassword(password);
})

When("user click on login button", async function(){
    await loginObject.clickLogin();
})

Then("user validate dashboard", function(){
    console.log("Step 6")
})

Then("user able to see errormsg {string}", async function(errorMsg){
    let actualErrorMsg = await loginObject.getErrorMsg();
    console.log(actualErrorMsg);
    //expect.soft(actualErrorMsg).toBe(data.errorMsg);
})


Then("user validate below label with values" , async function(dataTable){
    const data = dataTable.rowHash();
    
})

