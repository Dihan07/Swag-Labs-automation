import Login from "../pages/login";
import Inventory from"../pages/inventory";
import Checkout from "../pages/checkout";
import {test} from "@playwright/test";
import user from "../../resources/loginData.json";
import bill from "../../resources/billingInformation.json";

test.describe.configure({  mode : "serial"});
test.describe("Standard user Test Suite", () => {

    let page,context,login,inventory,checkout;
    test.beforeAll(async ({ browser })=>{
    context = await browser.newContext();
    page = await context.newPage();
    login = new Login(page);
    inventory = new Inventory(page);
    checkout = new Checkout(page);
    await page.goto('/');
    
    });

    test("Add 3 item to the cart and verify their names and total price", async () => {
        await login.accountLogin(user.standard,user.password);
        await inventory.resetAppState();
        const selectedProducts = await inventory.addItemsAndGetDetails(3);
        await inventory.clickCartIcon();
        await checkout.clickCheckout();
        await checkout.fillBillingInformation(bill.firstname,bill.lastname,bill.zipcode);
        await checkout.verifyAllProducts(selectedProducts);

        });

    test("Finish the purchase journey and verify the successful order message", async () => {
        await checkout.clickFinish();
        await checkout.verifySuccessMessage();
        await inventory.resetAppState();
        await inventory.clickLogout();
               
        });
});