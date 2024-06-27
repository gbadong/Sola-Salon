import { test, expect } from '@playwright/test';
import { CommonActions } from '../objects/common.spec';
import exp from 'constants';

test.describe.configure({ mode: 'serial' });

const state = "input[id=':R12las6jad6:']";
const location = "input[id=':R13las6jad6:']";
const fullname = "input[name='first_name']";
const email = "input[name='email']";
const number = "input[name='phone_number']";
const service = "input[id=':R17las6jad6:']";
const dateToMove = "input[id=':R18las6jad6:']";
const message = "textarea[name='leave_message']";
const getStarterButton = "button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium contained-button-slide-effect-secondary primary-button css-1knd8v4']";
const conf_allSet = "//p[@class='MuiTypography-root MuiTypography-body1 thankyou-text css-9l3uo3'][text()=\"You're \"]/span[text()=\"All Set!\"]"
const conf_copyText = "//p[@class=\"MuiTypography-root MuiTypography-body1 thankyou-sub-text css-9l3uo3\"][text()=\"We'll be in touch via phone or email within 1-2 business days with more Sola Salons information.\"]";
const conf_location = "//p[@class='MuiTypography-root MuiTypography-body1 contact-main-title css-9l3uo3']";

test.afterEach(async({ page }) => {
    await page.close();
});

test('Fill up form', async({ page }) => {
    const commonAct = new CommonActions(page);
    const url = 'https://qa-new.solasalonstudios.com/why-sola';

    await commonAct.openURL(url);
    
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('We value your privacy');
        await dialog.accept();
    })

    await commonAct.type(state, 'AR');
    await commonAct.click("//li[@role='option'][text()='AR']");
    await commonAct.type(location, 'Sola Uptown');
    await commonAct.click("//li[@role='option'][text()='Sola Uptown']");
    await commonAct.type(fullname, 'Test Fullname');
    await commonAct.type(email, 'testgb@gmail.com');
    await commonAct.type(number, '2345678922');
    await commonAct.type(service, 'Hair');
    await commonAct.click("//li[@role='option'][text()='Hair']");
    await commonAct.type(dateToMove, '7-11 months');
    await commonAct.click("//li[@role='option'][text()='7-11 months']");
    await commonAct.type(message, 'This is a test');
    await commonAct.click(getStarterButton);

    await commonAct.verifyTextElementIsVisible(conf_allSet);
    await commonAct.verifyTextElementIsVisible(conf_copyText);
    await commonAct.verifyElementHasText(conf_location, 'Sola Uptown');
});

test('Verify inquiry in CMS', async({ page }) => {
    const commonAct = new CommonActions(page);
    const url = 'https://qa-connect.solasalonstudios.com/crm/contact-inquiries';
    await commonAct.openURL(url);
    await commonAct.login('glenn.badong@outliant.com', 'Lolzka24!');

    await commonAct.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/ancestor::li");
    await commonAct.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Contact Inquiries']");

    expect.soft(await page.locator("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='Test Fullname']").textContent()).toMatch("Test Fullname");
    expect.soft(await page.locator("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='testgb@gmail.com']").textContent()).toMatch("testgb@gmail.com");
    expect.soft(await page.locator("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='Test Fullname']/parent::td/following-sibling::td/div[text()='(234) 567-8922']").textContent()).toMatch("(234) 567-8922");
    expect.soft(await page.locator("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='Test Fullname']/parent::td/following-sibling::td/div[text()='Sola Uptown']").textContent()).toMatch("Sola Uptown");

    await commonAct.click("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='Test Fullname']/parent::td/following-sibling::td/div/span[@aria-label='Delete']");
    await page.waitForTimeout(1000);
    await commonAct.click("[class='MuiDialogActions-root MuiDialogActions-spacing css-15dgj6o'] [class='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-1r0s1us']");
    await page.waitForTimeout(1000);
    
    expect.soft(await page.isHidden("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='Test Fullname']"));
    expect.soft(await page.isHidden("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='testgb@gmail.com']"));
    expect.soft(await page.isHidden("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='(234) 567-8916']"));
    expect.soft(await page.isHidden("//tr[@class='MuiTableRow-root listing-table-cell css-1kuqfbs']/td/div[text()='Sola Uptown']"));
});