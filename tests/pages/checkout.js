import CheckoutObjects from "../locators/checkoutObjects";
import { expect } from '@playwright/test';

export default class Checkout{
constructor(page){
    this.page = page;
    this.locator = new CheckoutObjects(page);
    }

    async clickCheckout(){
        await this.locator.checkoutButton.click();
    }

    async enterFirstName(firstname){
        await this.locator.firstName.fill(firstname);
    }
    
     async enterLastName(lastname){
        await this.locator.lastName.fill(lastname);
    }

     async enterZipCode(zipcode){
        await this.locator.zipCode.fill(zipcode);
    }

    async clickContinue(){
        await this.locator.continueButton.click();
    }

    async getItemTotal(){
        const text = await this.locator.itemTotal.textContent();
        return parseFloat(text.replace('Item total: $', ''));
    }
    
    async getTotalTax(){
        const text = await this.locator.taxTotal.textContent();
        return parseFloat(text.replace('Tax: $', ''));
    }

    async getTotalPrice(){
        const text = await this.locator.priceTotal.textContent();
        return parseFloat(text.replace('Total: $', ''));

    }

    async clickFinish(){
        await this.locator.finishButton.click();
    }

    async verifySuccessMessage(){
        const successMessage =  await this.locator.successfulMessage.textContent();
        expect(successMessage).toBe("Thank you for your order!");
    }

    async fillBillingInformation(firstname,lastName,zipcode){
        await this.enterFirstName(firstname);
        await this.enterLastName(lastName);
        await this.enterZipCode(zipcode);
        await this.clickContinue();
    }

    async verifyProductDetails(product){
        const itemTotal = await this.getItemTotal();
        const tax = await this.getTotalTax();
        const total = await this.getTotalPrice();
        expect(itemTotal).toBeCloseTo(product.price, 2);
        expect(total).toBeCloseTo(itemTotal + tax, 2);
    }

    async verifyAllProducts(products) {
        const productNames = await this.locator.productName.allTextContents();
        for (const product of products) {
            expect(productNames).toContain(product.name);
        }
        const expectedItemTotal = products.reduce((sum, p) => sum + p.price, 0);
        const itemTotal = await this.getItemTotal();
        const tax = await this.getTotalTax();
        const total = await this.getTotalPrice();
        expect(itemTotal).toBeCloseTo(expectedItemTotal, 2);
        expect(total).toBeCloseTo(itemTotal + tax, 2);
    }

}