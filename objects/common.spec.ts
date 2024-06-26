import { Page, test, expect } from '@playwright/test';
import { Console } from 'console';

export class CommonActions {
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async openURL(url_used: string){
        await this.page.goto(url_used);
        await this.page.waitForLoadState('domcontentloaded');
        if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
            await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
        }
    }

    async login(username: string, password: string) {
      await this.page.fill('[name="email"]', username);
      if (await this.page.locator('#standard-adornment-password').isVisible()) {
          await this.page.fill('#standard-adornment-password', password);
      } else{
        await this.page.fill('[name="password"]', password);
      }
      await this.page.click("[class=\"MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-fullWidth MuiButtonBase-root css-18mvbgy\"]");
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.locator("[class=\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11 MuiGrid-grid-sm-9 MuiGrid-grid-md-5 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3 css-1etbfcs\"]").isHidden();

      if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
        await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
    }
    }
  
    async verifyElementIsVisible(element: string) {
        if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
            await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
        }
        expect.soft(await this.page.isVisible(element));
        console.log("Element is visible!");
    }
    
    async verifyTextElementIsVisible(element: string) {
        // const textCont = await this.page.locator(element).textContent();
        if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
            await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
        }
        console.log("Element %s is visible!", await this.page.locator(element).textContent());
        expect.soft(await this.page.isVisible(element));
    }
  
    async type(element: string, text: string) {
        if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
            await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
        }
        await this.page.fill(element, text);
    }
  
    async click(element: string) {
        if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
            await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
        }
        await this.page.click(element);
    }
  
    async verifyElementHasText(element: string, text: string) {
        if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
            await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
        }
        // expect.soft(await this.page.locator(element)).toHaveText(text);
        expect.soft(await this.page.locator(element).textContent()).toMatch(text);
        console.log("Element text is equal to \"%s\"", text);
    }
  
    async scrollToElement(element: string) {
      const elementName = this.page.locator(element);
      if (await elementName.isVisible()) {
        console.log("Element already visible!");
        if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
            await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
        }
      } else {
            await elementName.scrollIntoViewIfNeeded();
            if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
                await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
            }
            console.log("Element is now visible!");
      }
    }

    async getCurrentPageURL() {
        const currentPageURL = await this.page.url();
        if (await this.page.locator("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']").isVisible()) {
            await this.page.click("[class='cky-consent-container cky-box-bottom-left'] button[class='cky-btn cky-btn-accept'][aria-label='Accept All']");
        }
        return currentPageURL;
    }
  
    // Add more reusable methods here
  }
  