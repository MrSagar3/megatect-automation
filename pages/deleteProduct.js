const {expect}= require('@playwright/test')

exports.DeleteProduct=class DeleteProduct{
    constructor(page){
        this.page=page
        this.url='https://mega.com.np/'
        this.searchIcon=page.locator('//*[@id="search-icon"]/i')
        this.searchBar=page.locator('//*[@id="search-box"]')
        this.searchBarIcon=page.locator('form button i').first()
        this.products=page.locator('#grid .col-6')
        this.shoppingCart=page.locator('body > div.main-wrapper > div:nth-child(1) > div.section.header-area-02.d-none.d-lg-block.bg-white > div > div > div > div:nth-child(3) > div > div:nth-child(4) > a')
        this.deleteButton=page.locator('.cart-item-content .cart-remove')
        this.cartBadge=page.locator('.action .number')
    }
async navigate(){
        await this.page.goto(this.url)
    }

    async searchProduct(product){
        await this.searchIcon.click()
        await this.searchBar.fill(product)
        await this.searchBarIcon.click()
    }
 async addToCart(index){
        const singleProduct= this.products.nth(index)
        await singleProduct.getByRole('link',{name:'Add to Cart'}).click()
    }

async clickAddToCart(){
        await this.shoppingCart.click()
    }
async deleteProduct(){
        await this.deleteButton.first().click()
    }

    async checkDelete(){
        await expect(this.cartBadge).toBeHidden()
    }
    
}