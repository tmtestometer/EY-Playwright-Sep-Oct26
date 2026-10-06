
export class LoginPage{
    constructor(page){
        this.page = page;
        this.username_box = page.locator("(//html//input)[1]");
    }

    async enterUserName(username){
        await  this.username_box.click(); 
        await  this.username_box.fill(username); 
    }

    async enterPassword(password){
         await this.page.locator("//html/body/div/div/div/div/div/div/form/div[2]/input").click();
         await this.page.locator("//html/body/div/div/div/div/div/div/form/div[2]/input").fill(password);
    }

    async clickLogin(){
        await this.page.locator("[data-test=\"login-button\"]").click();
    }

    async performLogin(username, password){
        await this.enterUserName(username);
        await this.enterPassword(password)
        await this.clickLogin();
    }

    async getErrorMsg(){
        let actualErrorMsg = await this.page.locator('[data-test="error"]').textContent();
        return actualErrorMsg;
    }
}