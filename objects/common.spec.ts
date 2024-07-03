import { Page, Dialog, expect, Browser } from '@playwright/test';

export class CommonActions {
    private page: Page;
    browser: Browser;
  
    constructor(page: Page, browser: Browser) {
      this.page = page;
      this.browser = browser;
    }
  
    async openURL(url_used: string){
        await this.page.goto(url_used);
        await this.page.waitForLoadState('domcontentloaded');
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
    }
  
    async verifyElementIsVisible(element: string) {
        expect.soft(await this.page.isVisible(element));
        console.log("Element is visible!");
    }
    
    async verifyTextElementIsVisible(element: string) {
        console.log("Element %s is visible!", await this.page.locator(element).textContent());
        expect.soft(await this.page.isVisible(element));
    }
  
    async type(element: string, text: string) {
        await this.page.fill(element, text);
    }
  
    async click(element: string) {
        await this.page.click(element);
    }
  
    async verifyElementHasText(element: string, text: string) {
        expect.soft(await this.page.locator(element).textContent()).toMatch(text);
        console.log("Element text is equal to \"%s\"", text);
    }
  
    async scrollToElement(element: string) {
      const elementName = this.page.locator(element);
      if (await elementName.isVisible()) {
        console.log("Element already visible!");
      } else {
            await elementName.scrollIntoViewIfNeeded();
            console.log("Element is now visible!");
      }
    }

    async getCurrentPageURL() {
        const currentPageURL = await this.page.url();
        return currentPageURL;
    }

    async fillUp(element: string, text: string) {
        await this.page.fill(element, text);
    }

    async newPage() {
        const context = this.browser.newContext();
        const page = (await context).newPage();
        const [newPage] = await Promise.all ([
          (await context).waitForEvent('page')
        ])
      

    }
    
  
    // Add more reusable methods here
  }
  