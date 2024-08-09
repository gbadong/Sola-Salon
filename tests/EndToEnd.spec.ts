import { test, expect, Browser, Page, request } from '@playwright/test';
import * as fs from 'fs/promises';
import { data } from '../response.json'
import { CommonActions } from '../objects/common.spec';
import { BookNow } from '../pages/BookNow';
import { Homepage } from '../pages/Homepage';
import { setPriority } from 'os';

test.describe.configure({ mode: 'serial' });

// test.afterAll(async({ page }) => {
//     await page.close();
// });

// Base URL of the API
const BASE_URL = 'https://platform-stage.solasalonstudios.com/v1/search-webpages';

// Example test for GET request
test('API test', async ({ request }) => {
    var response = await request.get(`${BASE_URL}?services=hair&country=US&page=1&date=2024-08-07&platforms=sola_genius&sola_pro_name=&device_id=ef6a7265923e2900e9ce38eeae6bce52&lat=40.7366857&long=-73.617233`);
    var responseBody = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    var resbody = JSON.stringify(responseBody, null, 2);
    await fs.writeFile('response.json', resbody, 'utf8');
    console.log(resbody);

    var numberOfNonGlossGenius = responseBody.data.webpages;
    var numberOfGlossGenius = responseBody.data.platforms.sola_genius;
    console.log(numberOfNonGlossGenius.length+numberOfGlossGenius.length);
});

    // test('test json 1', async ({ request }) => {
    //     var stringVal = data.platforms.sola_genius[0].name;
    //     console.log(stringVal);
    // });

// Opening the website
test('Open website', async ({ page, browser }) => {
    await page.goto("https://uat-temp.solasalonstudios.com/");
    await page.waitForLoadState('load');

    const home = new Homepage(page, browser);
    const com = new CommonActions(page, browser);
    const bn = new BookNow(page, browser);

    await page.click(home.navbarButton_BookAService);
    await com.verifyElementIsVisible(bn.location_Field);

    // input fields
    await page.fill(bn.location_Field, "Garden City, NY, USA");
    await page.locator(bn.location_Field).press('ArrowDown');
    await page.locator(bn.location_Field).press('Enter');
    await page.fill(bn.services_Field, "Hair");
    await page.locator(bn.services_Field).press('ArrowDown');
    await page.locator(bn.services_Field).press('Enter');
    await page.click(bn.searchButton);
    // });

    // // Navigating to Book Now page
    // test('Navigate to booknow page', async ({ page, browser }) => {
    // const home = new Homepage(page, browser);
    // const com = new CommonActions(page, browser);
    // const bn = new BookNow(page, browser);

    // await page.click(home.navbarButton_BookAService);
    // await com.verifyElementIsVisible(bn.location_Field);
    // await page.close();
});

// test('Search Sola', async ({ page }) => {

// });

// test('Click book now button', async ({ page }) => {

// });

// test('Verify if a new tab opens and has the correct URL', async ({ page }) => {

// });







