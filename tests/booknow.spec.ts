import { test, expect } from '@playwright/test';
import { CommonActions } from '../objects/common.spec';
import { Homepage } from '../pages/Homepage';


// test.describe.configure({ mode: 'parallel' });

// test.beforeEach(async({ page }) => {
//     // const url = 'https://uat-temp.solasalonstudios.com/';
//     await page.goto('https://uat-temp.solasalonstudios.com/');
//     await page.waitForLoadState('domcontentloaded');
//     });

test.afterEach(async ({ page }) => {
    await page.close();
});

test('navigate to booknow 1', async ({ page, browser }) => {
    const com = new CommonActions(page, browser);
    // const home = new Homepage( page, browser );

    await com.scrollToElement("a[aria-label=\"Book a service button which will take you to book a service page\"][href=\"/booknow\"]");
    await page.locator("a[aria-label=\"Book a service button which will take you to book a service page\"][href=\"/booknow\"]").click();
    await page.locator("a[aria-label=\"Book a service button which will take you to book a service page\"][href=\"/booknow\"]").click();
    await page.waitForLoadState('domcontentloaded');
    expect(await com.getCurrentPageURL()).toMatch('https://uat-temp.solasalonstudios.com/booknow');
});

test('navigate to booknow 2', async ({ page, browser }) => {
    const com = new CommonActions(page, browser);

    await com.scrollToElement("a[class=\"cursor-pointer\"][href=\"/booknow\"]");
    await page.click("a[class=\"cursor-pointer\"][href=\"/booknow\"]");
    expect(await com.getCurrentPageURL()).toMatch('https://uat-temp.solasalonstudios.com/booknow');
});

test('navigate to booknow 3', async ({ page, browser }) => {
    const com = new CommonActions(page, browser);
    // const home = new Homepage( page, browser );

    // await com.scrollToElement("div[class=\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-n4dn4n\"] input");
    await page.locator("[role=\"main\"] input[class=\"MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq\"]").fill("Garden City");
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.click("button[class=\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium contained-button-slide-effect-secondary primary-button css-c7vqku\"]");
    // await page.click("a[class=\"cursor-pointer\"][href=\"/booknow\"]");
    expect(await com.getCurrentPageURL()).toMatch('https://uat-temp.solasalonstudios.com/booknow');
});

test('test', async ({ page, browser }) => {
    const com = new CommonActions(page, browser);
    await page.goto('https://uat-temp.solasalonstudios.com/');
    await page.getByPlaceholder('City, or ZIP code').click();
    await page.getByPlaceholder('City, or ZIP code').fill('Garden city');
    await page.getByPlaceholder('City, or ZIP code').press('ArrowDown');
    await page.getByPlaceholder('City, or ZIP code').press('Enter');
    await page.getByLabel('Clients').click();
    await page.locator('.location-result-btn > a:nth-child(2) > .MuiButtonBase-root').first().click();
    expect(await com.getCurrentPageURL()).toMatch('https://uat-temp.solasalonstudios.com/booknow');
});