import {test} from '@playwright/test';
import { SearchProduct } from '../pages/searchProduct';

test('search product',async ({page})=>{

    const newpage=new SearchProduct(page)
    await newpage.navigate()
    await page.waitForTimeout(3000)
    await newpage.searchProduct('laptop')
    await page.waitForTimeout(3000)
    await newpage.checkProduct('Laptop')
})