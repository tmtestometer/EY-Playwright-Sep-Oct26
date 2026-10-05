import { test, expect } from '@playwright/test';
import data from '../testdata/onedata.json' with {"type":"json"}
import { textbox_username, textbox_password } from '../locator/loginLocator.js';
import { LoginPage } from '../pages/loginpage.js';


//for(let data of testdata){
  test(`${data.testname}`,  async ({ page }) => {

    loginPageObject = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/'); // 200 ms
    await loginPageObject.performLogin(data.username, data.password);
    let actualErrorMsg = await loginPageObject.getErrorMsg();
    expect.soft(actualErrorMsg).toBe(data.errorMsg);


  });
//}

// absolute xpath = single slash . exact child
// Relative xpath = double slash 

//. /html/body/div/div/div/div/div/div/form/div[1]/input


// test('verify user able to login payment @locator', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//     await page.getByPlaceholder("Username").click();
//     await page.getByPlaceholder("Username").fill("Abcd");
//     await page.getByPlaceholder("Password").click();
//     await page.getByPlaceholder("Password").fill("XYZ");
//     await page.getByText("Login").click();

//     let actualErrorMsg = await page.locator('[data-test="error"]').textContent();
//     expect.soft(actualErrorMsg).toBe("Epic sadface: Username and password do not match any user in this service1");
//     console.log("I am the last of line of this testcase")
// // 2 type of assertion 
// // hard assertion - if assertion is failed then next step wont execute, test will failed 
// // soft assertion  - if assertion if fialed next step will execute but test will failed

// });



// validating a user profile
// login to application 
// validate dashboard - hard assertion
// go to profile page
// validate username 
// validate password
// validate dob



