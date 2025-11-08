import InventoryObjects from "../locators/inventoryObjects";
import { getRandomIndices } from "../../utilities/helper";

export default class Home{
constructor(page){
    this.page = page;
    this.locator = new InventoryObjects(page);
    }

    async clickMenu(){
        await this.locator.menuIcon.click();
    }

    async clickResetAppState(){
        await this.locator.resetAppState.click();
    }

    async clickLogout(){
        await this.locator.logout.click();
    }

    async clickClose(){
        await this.locator.closeMenu.click();
    }
    
    async filterNameZtoA() {
        await this.locator.filterDropdown.selectOption('za');
    }
    
    async clickAddToCart(){
        await this.locator.addToCart.click();
    }

    async selectTheFirstItem(){
        await this.locator.addToCart.first().click();
    }

    async clickCartIcon(){
        await this.locator.cartIcon.click();
    }

    async resetAppState(){
        await this.clickMenu();
        await this.clickResetAppState(); 
    }

    async logoutUser(){
        await this.clickMenu();
        await this.clickLogout();
    }

    async getFirstProductDetails(){
        const name = await this.locator.itemName.nth(0).textContent();
        const priceText = await this.locator.itemPrice.nth(0).textContent();
        const price = parseFloat(priceText.replace('$', '').trim());
        await this.locator.addToCart.nth(0).click();
        return { name: name.trim(), price };
    }

     async addItemsAndGetDetails(count) {
        const totalItems = await this.locator.addToCart.count();
        const randomIndices = getRandomIndices(totalItems, count);
        const selectedProducts = [];

        for (const index of randomIndices) {
            const name = await this.locator.itemName.nth(index).textContent();
            const priceText = await this.locator.itemPrice.nth(index).textContent();
            const price = parseFloat(priceText.replace('$', '').trim());
            await this.locator.addToCart.nth(index).click();
            selectedProducts.push({ name: name.trim(), price });
        }

        return selectedProducts;
    }
}