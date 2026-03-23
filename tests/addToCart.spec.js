import {test} from '@playwright/test';
import { AddToCart } from '../pages/addToCart';

test('add to cart the product', async ({page})=>{
    const newpage=new AddToCart(page)
    await newpage.navigate()
    await page.waitForTimeout(3000)
    await newpage.searchProduct('laptop')
    await page.waitForTimeout(3000)
    await newpage.addToCart(0)
    await newpage.addToCart(1)
    await page.waitForTimeout(3000)
    await newpage.clickAddToCart()
    await newpage.checkCart(2)
    await page.waitForTimeout(3000)

})