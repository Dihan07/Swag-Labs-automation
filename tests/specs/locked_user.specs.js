import Login from "../pages/login";
import {test,expect} from "@playwright/test";
import user from "../../resources/loginData.json";


test.describe("Locked out user Test Suite", () => {

    let login;
    test.beforeEach(async ({ page })=>{
    login = new Login(page);
    await page.goto('/');
    });

    test("Error message verification for locked_out_user", async ({ page }) => {
        await login.accountLogin(user.locked,user.password);
        const errorMessage = await login.getErrorMessage();
        expect(errorMessage).toContain('locked out');
        });
    
});