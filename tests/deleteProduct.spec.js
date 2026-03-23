import {test} from '@playwright/test';
import { DeleteProduct } from '../pages/deleteProduct';

test('delete product', async({page})=>{
    const newpage=new DeleteProduct(page)
    await newpage.navigate()
    await page.waitForTimeout(3000)
    await newpage.searchProduct('laptop')
    await page.waitForTimeout(3000)
    await newpage.addToCart(0)
    await page.waitForTimeout(7000)
    await newpage.clickAddToCart()
    await page.waitForTimeout(3000)
    await newpage.deleteProduct()
    await page.waitForTimeout(3000)
    await newpage.checkDelete()
})