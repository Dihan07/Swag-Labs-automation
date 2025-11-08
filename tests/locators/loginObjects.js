export default class LoginObjects{
    constructor(page){
        this.page = page;
        this.username = this.page.locator("//input[@id='user-name']");
        this.password = this.page.locator("//input[@id='password']");
        this.loginButton = this.page.locator("//input[@id='login-button']");
        this.errorMessage = this.page.locator("//h3[contains(.,'locked')]");
    }
}