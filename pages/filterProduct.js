const {expect}  = require('@playwright/test')

exports.FilterProduct=class FilterProduct{
    constructor(page){
        this.page=page
        this.url='https://mega.com.np/'
        this.searchIcon=page.locator('//*[@id="search-icon"]/i')
        this.searchBar=page.locator('//*[@id="search-box"]')
        this.searchBarIcon=page.locator('form button i').first()
        this.products=page.locator('#grid .col-6')
        this.minPrice=page.getByPlaceholder('Min')
        this.maxPrice=page.getByPlaceholder('Max')
        this.singleProductPrice=page.locator('.product-price .sele-price')
    }

    async navigate(){
        await this.page.goto(this.url)
    }

    async searchProduct(product){
        await this.searchIcon.click()
        await this.searchBar.fill(product)
        await this.searchBarIcon.click()
    }

    async minPriceFilter(price){
        await this.minPrice.fill(price)
    }

    async maxPriceFilter(price){
        await this.maxPrice.fill(price)
    }

    
    async checkFilter(minPrice,maxPrice){
        const count=await this.products.count()
        console.log(count)
        for(let i=0; i<count;i++){
        const priceText= await this.products.nth(i).locator(this.singleProductPrice).textContent()
        console.log(priceText)
        const price=Number(priceText.replace(/[^\d]/g,''))
        console.log(price)
        expect(price).toBeGreaterThanOrEqual(minPrice)
        expect(price).toBeLessThanOrEqual(maxPrice)
    }
}

}