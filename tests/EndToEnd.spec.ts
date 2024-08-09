import { test, expect, Browser, Page, request } from '@playwright/test';
import * as fs from 'fs/promises';
import data from '../response.json' with { type: "json" };
import { CommonActions } from '../objects/common.spec';
import { BookNow } from '../pages/BookNow';
import { Homepage } from '../pages/Homepage';

test.beforeEach(async ({ request }) => {

    const BASE_URL = 'https://platform-stage.solasalonstudios.com/v1/search-webpages';
    const SERVICE = 'hair';
    //YY-MM-DD
    const DATE = '2024-08-09';
    const DEVICE_ID = '73740244135c16db789a98dbd1f5a16c';
    //values for Garden City, NY, USA
    const LAT = '40.7267682';
    const LONG = '-73.6342954';

    var response = await request.get(`${BASE_URL}?services=${SERVICE}&country=US&page=1&date=${DATE}&platforms=sola_genius&sola_pro_name=&device_id=${DEVICE_ID}&lat=${LAT}&long=${LONG}`);
    var responseJson = await response.json();

    const resbody = JSON.stringify(responseJson, null, 2);
    await fs.writeFile('responseNew.json', resbody, 'utf8');

    var glossName = responseJson.data.platforms.sola_genius[0].name;
    var glossURL = responseJson.data.platforms.sola_genius[0].booking_url;
    console.log("Gloss Name: " + glossName);
    console.log("Gloss URL: " + glossURL);
    
    var numberOfNonGlossGenius = responseJson.data.webpages.length;
    var numberOfGlossGenius = responseJson.data.platforms.sola_genius.length;
    console.log(`\nThis is total number of Sola Pros: ${numberOfNonGlossGenius + numberOfGlossGenius}`);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

//------------------------------------------------------
test('check Book Now', async ({ page }) => {

    await page.goto('https://uat.solasalonstudios.com/');

    await page.getByText('BOOK A SERVICE', { exact: true }).click();

    //try to close location dialog
    page.on('dialog', dialog => dialog.accept());

    await page.getByPlaceholder('Location').fill('Garden City, NY');
    await page.getByText('Garden City, NY, USA', { exact: true }).click();

    await page.getByPlaceholder('Choose Service').fill('Hair');
    await page.getByText('Hair', { exact: true }).click();

    const responsePromise = page.waitForResponse(/\/v1\/search-webpages/);
    await page.getByRole('button', { name: 'Search' }).click();
    const response = await responsePromise;
    const responseStatus = response.status();
    console.log(`\nResponse Status: ${responseStatus}`);

    // this is making sure that we are in the BookNow page and has search results
    await expect(page.locator('p:has-text("Showing results for:")').nth(1)).toBeVisible();
});

test('check clicking of Booknow button', async ({ page }) => {
    
});