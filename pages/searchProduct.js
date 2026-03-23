const {expect}  = require('@playwright/test')

exports.SearchProduct=class SearchProduct{
    constructor(page){
        this.page=page
        this.url='https://mega.com.np/'
        this.searchIcon=page.locator('//*[@id="search-icon"]/i')
        this.searchBar=page.locator('//*[@id="search-box"]')
        this.searchBarIcon=page.locator('form button i').first()
        this.products=page.locator('#grid .col-6')
    }

    async navigate(){
        await this.page.goto(this.url)
    }

    async searchProduct(product){
        await this.searchIcon.click()
        await this.searchBar.fill(product)
        await this.searchBarIcon.click()
    }

    async checkProduct(product){
        await expect(this.products.filter({hasText:product}).first()).toBeVisible()
    }
} 