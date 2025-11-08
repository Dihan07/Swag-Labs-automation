import LoginObjects from "../locators/loginObjects";

export default class Login{
constructor(page){
    this.page = page;
    this.locator = new LoginObjects(page);
    }

    async enterUsername(username){
        await this.locator.username.fill(username);
    }

      async enterPassword(password){
        await this.locator.password.fill(password);
    }

      async clickLogin(){
        await this.locator.loginButton.click();
    }

      async getErrorMessage(){
        return await this.locator.errorMessage.textContent();
    }

      async accountLogin(username,password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
     }

}