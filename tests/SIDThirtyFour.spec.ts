import { test, expect } from '@playwright/test';
import { CommonActions } from '../objects/common.spec';
import { SolaConnect } from '../pages/SolaConnect';

test.afterEach(async({ page }) => {
    await page.close();
});

test('test SID-34', async({ page, browser }) => {
    const sc = new SolaConnect(page, browser);
    await sc.goto_CMS_AllSolaPro_ExportPopup();
    await sc.test_SID34();
});