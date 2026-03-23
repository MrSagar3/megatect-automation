const {expect}= require('@playwright/test')

exports.Homepage=class Homepage {
    constructor(page){
        this.page=page
        this.url='https://mega.com.np/'
    }

    async navigate(){
        await this.page.goto(this.url)
    }

    async checkTitle(title){
        await expect(this.page).toHaveTitle(title)
    }
}