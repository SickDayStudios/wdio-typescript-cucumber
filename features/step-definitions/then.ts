import { Then } from "@cucumber/cucumber";
import {expect, $} from '@wdio/globals';
import { sharedData } from "../support/sharedData";
import AxeBuilder from '@axe-core/webdriverio';


Then(/^I should see a message saying {string}$/, async (message) => {
    await expect($('.message')).toBeExisting();
    await expect($('.message')).toHaveText(expect.stringContaining(message));
});

Then('I should see a {string} message', async (message) => {
    const alertText = await $('.alert').getText();
    await expect(alertText).toContain(message);
});

Then(`the page should load within {int} milliseconds`, async (loadTime) => {
    await browser.url(`/${sharedData.currentPage}`);
    const performance = await browser.getMetrics();
    await expect(performance.speedIndex).toBeLessThanOrEqual(loadTime);
});

Then(`the page should meet {string} level standards`, async (standard: string) => {
    const builder = new AxeBuilder({ client: browser }).withTags([standard]);
    const results = await builder.analyze();
    expect(results.violations).toHaveLength(0);
});

Then(`I should see the {string} button`, (buttontext: string) => {
    const button = $(`button=${buttontext}`);
    expect(button).toBeExisting();
    expect(button).toBeClickable();
});