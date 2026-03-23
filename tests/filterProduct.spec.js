import {test} from '@playwright/test';
import { FilterProduct } from '../pages/filterProduct';

test('filter product', async ({page})=>{
    const newpage=new FilterProduct(page)
    await newpage.navigate()
    await page.waitForTimeout(3000)
    await newpage.searchProduct('laptop')
    await page.waitForTimeout(3000)
    await newpage.minPriceFilter('10000')
    await newpage.maxPriceFilter('70000')
    await page.waitForTimeout(9000)
    await newpage.checkFilter(10000,70000)
})