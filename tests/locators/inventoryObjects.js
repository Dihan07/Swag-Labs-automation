export default class InventoryObjects{
        constructor(page){

        this.page = page;
        this.menuIcon = this.page.locator("//button[contains(@id,'menu')]");
        this.resetAppState = this.page.locator("//a[contains(@id,'reset')]");
        this.logout = this.page.locator("//a[contains(@id,'logout')]");
        this.closeMenu = this.page.locator("//button[contains(@id,'cross')]");
        this.itemName = this.page.locator("//div[contains(@class,'item_name')]");
        this.itemPrice = this.page.locator("//div[contains(@class,'item_price')]");
        this.addToCart = this.page.locator("//button[contains(@class,'btn_inventory')]");
        this.filterDropdown = this.page.locator("//select[@data-test='product-sort-container']");
        this.cartIcon = this.page.locator("//a[contains(@class,'cart')]");
        }
}

