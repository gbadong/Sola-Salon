import { test, expect } from '@playwright/test';
import { CommonActions } from '../objects/common.spec';

test.beforeEach(async({ page, browser }) => {
    const commonAct = new CommonActions(page, browser);
    const url = 'https://qa-connect.solasalonstudios.com';
    await commonAct.openURL(url);
    });

test.afterEach(async({ page }) => {
    await page.close();
    });
        
test('Check content tree buttons - system admin', async ({ page, browser }) => {
    const commonAct = new CommonActions(page, browser);
    await commonAct.login('glenn.badong@outliant.com', 'Lolzka24!');
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Home']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Users & Roles']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Sola Pro Leads']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Contact Inquiries']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Franchisee Inquiries']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Import Deals']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Locations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Associations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Phone Numbers']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Approval']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Sola Pros']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Stylist Messages']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Web pages']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Update Web Pages Request']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Testimonials']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='News']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Blog']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Categories']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Tags']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Bookings']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Brands']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Class Images']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Deals']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Education Hero images']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Events And Classes']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Home Buttons']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Home Hero Images']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Notifications']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Production Information']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Regions']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Side Menu']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='State Regions']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Tools And Resources']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Videos']");
  
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Users & Roles']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Users & Roles']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Users']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Users & Roles']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='User Permissions']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Users & Roles']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Roles']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='RM Data Sync']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Stylist Units']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Nav Events']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='RM Events']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Units']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Externals']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Callfire Logs']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='New Relic Logs**']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Gloss Logs']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Sola 10k Images']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='My Sola Images']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='FAQs']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Amenities']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Self Service Helpdesk']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Occupancy']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Scorecard']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Royalty']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Master Data']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='CMS Reports']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Download Center']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Open Locations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Leads']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Analytics']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Phone Numbers']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Contacts']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='r_m_conversations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='r_m_tickets']");

});

test('Check content tree buttons - admin', async ({ page, browser }) => {
    const commonAct = new CommonActions(page, browser);
    await commonAct.login('glenn.badong+admin@outliant.com', 'T3$tAccount');
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Sola Pro Leads']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Contact Inquiries']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Franchisee Inquiries']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Import Deals']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Sola Pros']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Stylist Messages']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Web pages']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Update Web Pages Request']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Testimonials']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='News']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Blog']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Categories']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Tags']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Bookings']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Brands']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Class Images']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Deals']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Education Hero images']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Events And Classes']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Home Buttons']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Home Hero Images']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Notifications']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Production Information']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Regions']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Side Menu']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='State Regions']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Tools And Resources']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Videos']");
  
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Occupancy']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Scorecard']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Royalty']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Master Data']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='CMS Reports']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Download Center']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Open Locations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Leads']");

});
        
test('Check content tree buttons - franchisee', async ({ page, browser }) => {
    const commonAct = new CommonActions(page, browser);
    await commonAct.login('glenn.badong+franchisee@outliant.com', 'T3$tAccount');
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Contact Inquiries']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Import Deals']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Locations']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Sola Pros']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Web pages']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Update Web Pages Request']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='News']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Events And Classes']");
  
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Download Center']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Contacts']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='r_m_conversations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='r_m_tickets']");

});
        
test('Check content tree buttons - franchisee CRM tester', async ({ page, browser }) => {
    const commonAct = new CommonActions(page, browser);
    await commonAct.login('glenn.badong+franchiseeTester@outliant.com', 'T3$tAccount');
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']");

    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Sola Pro Leads']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Contact Inquiries']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Import Deals']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Locations']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='All Sola Pros']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Web pages']");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Update Web Pages Request']");
    
    await page.click("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/ancestor::li");
    await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']/parent::div/parent::div/parent::li/following-sibling::div//span[text()='Download Center']");

});
        
// test('Check content tree buttons - system admin', async ({ page }) => {
//     const commonAct = new CommonActions(page);
//     await commonAct.login('glenn.badong@outliant.com', 'Lolzka24!');
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Home']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='CRM']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Locations']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Pros']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Sola Website']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Mobile App']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Users & Roles']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='System Admin']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='Reports']");
//     await commonAct.verifyTextElementIsVisible("//span[@class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-wbk34u'][text()='R&M']");

   
// });