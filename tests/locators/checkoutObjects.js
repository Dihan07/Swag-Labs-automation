export default class CheckoutObjects{
    constructor(page){

        this.page = page;
        this.checkoutButton = this.page.locator("//button[contains(@id,'checkout')]");
        this.firstName = this.page.locator("//input[contains(@id,'first-name')]");
        this.lastName = this.page.locator("//input[contains(@id,'last-name')]");
        this.zipCode = this.page.locator("//input[contains(@id,'postal-code')]");
        this.continueButton = this.page.locator("//input[contains(@id,'continue')]");
        this.productName = this.page.locator("//div[@class='inventory_item_name']");
        this.productPrice = this.page.locator("//div[@class='inventory_item_price']");
        this.itemTotal = this.page.locator("//div[(@class='summary_subtotal_label')]");
        this.taxTotal = this.page.locator("//div[(@class='summary_tax_label')]");
        this.priceTotal = this.page.locator("//div[(@class='summary_total_label')]");
        this.finishButton = this.page.locator("//button[contains(@id,'finish')]");
        this.successfulMessage = this.page.locator("//h2[text()='Thank you for your order!']");
    }

}