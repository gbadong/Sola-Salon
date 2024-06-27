import { Page, expect } from '@playwright/test';
import { CommonActions } from '../objects/common.spec';

export class BookNow {
    private page: Page;
    location_Field: string;
    services_Field: string;
    date_Field: string;
    nearLocation_button: string;
    searchButton: string;
    locationAndServices_Text : string;
  
    constructor(page: Page) {
        this.page = page;
        
        this.location_Field = "input[name=\"location\"]";
        this.services_Field = "input[name=\"services\"]";
        this.date_Field = "input[id=\":r4:\"]";
        this.nearLocation_button = "img[alt=\"menu icon\"][src=\"/images/location/nearby-locations.svg\"]";
        this.searchButton = "button[id=\"search-component-btn\"][class=\"MuiButtonBase-root Mui-disabled MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium contained-button-slide-effect-secondary primary-button css-qnld9o\"]";
        this.locationAndServices_Text = "p[class=\"MuiTypography-root MuiTypography-body1 font16 css-1w0mdri\"]";
    }
  
    // async goto_BookNowPage(){
    //     const comAct = new CommonActions(this.page);
    //     await comAct.openURL("https://feature-st-119-gloss-genius-book-now.dqcpcoh2cfgcv.amplifyapp.com/booknow");
    //     await this.page.waitForLoadState('domcontentloaded');
    // }

    async check_BookNow_Default() {
        const comAct = new CommonActions(this.page);
        await expect.soft(this.page.locator(this.location_Field)).toBeFocused();
        await expect.soft(this.page.locator(this.services_Field)).not.toBeFocused();
        await expect.soft(this.page.locator(this.date_Field)).not.toBeFocused();
        await expect.soft(this.page.locator(this.nearLocation_button)).not.toBeFocused();
        await expect.soft(this.page.locator(this.searchButton)).not.toBeFocused();

        // console.log(await this.page.locator(this.locationAndServices_Text).textContent());
        await comAct.verifyElementHasText(this.locationAndServices_Text, "Pick a Location and Service above to show results.");
    }

}