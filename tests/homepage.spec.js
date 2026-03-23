import {test} from '@playwright/test';
import { Homepage } from '../pages/homepage';

test('navigate to homepage', async ({page}) => {
    const newpage=new Homepage(page)
    await newpage.navigate()
    await page.waitForTimeout(3000)
    await newpage.checkTitle('Megatech Group - Multi-brand computer & electronics distributor in Nepal')
});