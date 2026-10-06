
export class DashboardPage{
    constructor(page){
        this.page = page;
        this.usernameBox=  this.page.locator("#username");
    }

    async enterUsername(username){
       await this.usernameBox.fill(username);
    }

        async enterPassword(password){
        await this.page.locator("#pwd").fill(password);
    }

    async clickLogin(){
        await this.page.locator("#loginbtn").click();
    }

}