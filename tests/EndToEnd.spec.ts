import { test, expect, Browser, Page, request } from '@playwright/test';
import * as fs from 'fs/promises';
import { data } from '../response.json'
import { CommonActions } from '../objects/common.spec';
import { BookNow } from '../pages/BookNow';
import { Homepage } from '../pages/Homepage';

test.afterEach(async({ page }) => {
    await page.close();
});

test.describe('press book now button', () => {

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
        var stringVal = data.platforms.sola_genius[0].name;
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

    // });
    
    // test('Click book now button', async ({ page }) => {

    // });
});
