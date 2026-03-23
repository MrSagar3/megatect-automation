import {test} from '@playwright/test';
import { UpdateCart } from '../pages/updateCart';
test('update cart',async({page})=>{
    const newpage=new UpdateCart(page)
    await newpage.navigate()
    await page.waitForTimeout(3000)
    await newpage.searchProduct('laptop')
    await page.waitForTimeout(3000)
    await newpage.addToCart(0)
    await page.waitForTimeout(3000)
    await newpage.clickAddToCart()
    await newpage.goToCartPage()
    await page.waitForTimeout(3000)
    await newpage.updateCart()
    await page.waitForTimeout(3000)
    await newpage.updateCheck()
    await page.waitForTimeout(3000)


})