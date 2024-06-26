import { test, expect } from '@playwright/test';
import { CommonActions } from '../objects/common.spec';
import { Homepage } from '../pages/Homepage';

test.beforeEach(async({ page }) => {
    // const commonAct = new CommonActions(page);
    // const url = 'https://qa-new.solasalonstudios.com/';
    // await commonAct.openURL(url);

    const home = new Homepage(page);
    await home.goto_Homepage();
});

test.afterEach(async({ page }) => {
    await page.close();
});

test('verify all elements exists in homepage', async({ page }) => {
    const home = new Homepage(page);
    await home.verify_AllElementsAreVisible();
})

// test('Verify All Elements Are Visible', async ({ page }) => {
//     const commonAct = new CommonActions(page);
//     const expCurURL = 'https://qa-new.solasalonstudios.com/';
//     // verify URL
//     expect.soft(await commonAct.getCurrentPageURL()).toMatch(expCurURL);
//     // Sola logo is visible
//     await commonAct.verifyElementIsVisible("img[src='/images/logo-white.svg'][class='logo-white logo-img']");
//     // Navigation bar buttons
//     await commonAct.verifyElementHasText("//a[@href='/locations']/button[text()='Locations']", "Locations");
//     await commonAct.verifyElementHasText("//a[@href='/about']/button", "About");
//     await commonAct.verifyElementHasText("//a[@href='/why-sola']/button", "Discover Sola");
//     await commonAct.verifyElementHasText("//a[@href='/education']/button", "Education");
//     await commonAct.verifyElementHasText("//a[@href='/news']/button", "News");
//     await commonAct.verifyElementHasText("//a[@href='/contact-us#leaseStudio']/button", "Contact us");
//     await commonAct.verifyElementHasText("[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium button-contained contained-button-slide-effect-secondary navbar-button primary-button css-1ydaw8c']", "Find Your Suite");
//     await commonAct.verifyElementHasText("//a[@href='/booknow']/div/span", "BOOK A SERVICE");
//     await commonAct.verifyElementIsVisible("[class='MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular nav-toolbar css-i6s8oy'] [class='custom-country-box desktop-only MuiBox-root css-0'] [src='/images/us.png'][alt='United States']");
//     // verify form element
//     await commonAct.verifyElementHasText("[class='home-banner-img-content MuiBox-root css-gkupdd'] [class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-5.5 css-1falyz0'] h1", "Your dream. Your space. Your success story.");
//     await commonAct.verifyElementHasText("[class='home-banner-img-content MuiBox-root css-gkupdd'] [class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-5.5 css-1falyz0'] [class='MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary css-1fcx1tb']", "Search for your local Sola");
//     const text1 = await page.locator("[class='home-banner-img-content MuiBox-root css-gkupdd'] [class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-5.5 css-1falyz0'] [name='search']").getAttribute('placeholder');
    
//     if (text1 == "City, or ZIP code") {
//         expect.soft(text1).toMatch("City, or ZIP code");
//         console.log("Element is equal to City, or ZIP code");
//     }else{
//         console.log("Element is not equal to City, or ZIP code");
//         expect.soft(text1).toMatch("City, or ZIP code");
//     }

//     await commonAct.verifyElementHasText("[class='home-banner-img-content MuiBox-root css-gkupdd'] [class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-5.5 css-1falyz0'] button", "FIND A LOCATION");
//     await commonAct.verifyElementIsVisible("[class='home-banner-img-content MuiBox-root css-gkupdd'] [class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-5.5 css-1falyz0'] [src='/images/right-icon.svg']");
//     await commonAct.verifyElementHasText("[class='home-banner-img-content MuiBox-root css-gkupdd'] [class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-5.5 css-1falyz0'] [class='MuiTypography-root MuiTypography-body1 color-primary text-underline css-9l3uo3']", "Looking to book a service instead?");
// });