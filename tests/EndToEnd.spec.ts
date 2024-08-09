import { test, expect, Browser, Page, request } from '@playwright/test';
import * as fs from 'fs/promises';
import data from '../response.json' with { type: "json" };
import { CommonActions } from '../objects/common.spec';
import { BookNow } from '../pages/BookNow';
import { Homepage } from '../pages/Homepage';
import { setPriority } from 'os';


test.beforeEach(async ({ request }) => {

    const BASE_URL = 'https://platform-stage.solasalonstudios.com/v1/search-webpages';
    const SERVICE = 'hair';
    //YY-MM-DD
    const DATE = '2024-08-09';
    const DEVICE_ID = '73740244135c16db789a98dbd1f5a16c';
    //values for Garden City, NY, USA
    const LAT = '40.7267682';
    const LONG = '-73.6342954'

    var response = await request.get(`${BASE_URL}?services=${SERVICE}&country=US&page=1&date=${DATE}&platforms=sola_genius&sola_pro_name=&device_id=${DEVICE_ID}&lat=${LAT}&long=${LONG}`);
    var responseJson = await response.json();

    const resbody = JSON.stringify(responseJson, null, 2);
    await fs.writeFile('responseNew.json', resbody, 'utf8');

    var glossName = responseJson.data.platforms.sola_genius[0].name;
    var glossURL = responseJson.data.platforms.sola_genius[0].booking_url;
    console.log("Gloss Name: " + glossName);
    console.log("Gloss URL: " + glossURL);
});

test.afterEach(async ({ page }) => {
    await page.close();
});


// test.afterAll(async({ page }) => {
//     await page.close();
// });

    // Base URL of the API
    const BASE_URL = 'https://platform-stage.solasalonstudios.com/';
    // const BASE_URL = 'https://reqres.in/';

    // Example test for GET request
    test('GET /posts/1', async ({ request }) => {
        // const response = new data();
        // const response = await request.get(`${BASE_URL}api/users?page=2`);
        var response1 = await request.get(`${BASE_URL}v1/search-webpages?services=hair&country=US&page=1&date=2024-08-07&platforms=sola_genius&sola_pro_name=&device_id=ef6a7265923e2900e9ce38eeae6bce52&lat=40.7267682&long=-73.6342954`);
        var responseBody = await response1.json();
        expect(response1.ok()).toBeTruthy();
        expect(response1.status()).toBe(200);

        const resbody = JSON.stringify(responseBody, null, 2);
        await fs.writeFile('response.json', resbody, 'utf8');
        // console.log(resbody);

        var stringVal = responseBody.data.platforms.sola_genius[0].name;
        console.log(stringVal);

    });

    test('test json 1', async ({ request }) => {
        var stringVal = data.data.platforms.sola_genius[0].name;
        console.log(stringVal);
    });

    test('Open website', async ({ page }) => {
        await page.goto("https://uat-temp.solasalonstudios.com/");
        await page.waitForLoadState('load');
    });

    test('Navigate to booknow page', async ({ page, browser }) => {
        const home = new Homepage(page, browser);
        const com = new CommonActions(page, browser);
        const bn = new BookNow(page, browser);

        await page.click(home.navbarButton_BookAService);
        await com.verifyElementIsVisible(bn.location_Field);
    });

    // test('Search Sola', async ({ page }) => {


    var numberOfNonGlossGenius = responseBody.data.webpages;
    var numberOfGlossGenius = responseBody.data.platforms.sola_genius;
    console.log(numberOfNonGlossGenius.length+numberOfGlossGenius.length);
});

    // test('test json 1', async ({ request }) => {
    //     var stringVal = data.platforms.sola_genius[0].name;
    //     console.log(stringVal);
    // });

    // test('Click book now button', async ({ page }) => {


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

        const responsePromise = page.waitForResponse(/\/v1\/search-webpages/)
        await page.getByRole('button', { name: 'Search' }).click()
        const response = await responsePromise
        const responseStatus = response.status()
        console.log(responseStatus);

        await expect(page.locator('p:has-text("Showing results for:")').nth(1)).toBeVisible();
    })

});

// test('Search Sola', async ({ page }) => {

// });

// test('Click book now button', async ({ page }) => {

// });

// test('Verify if a new tab opens and has the correct URL', async ({ page }) => {

// });







