import { Given } from "@cucumber/cucumber";
import { sharedData } from '../support/sharedData';

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`/${page}`);
    sharedData.currentPage = page; // Store the current page for later use
});

Given(/^I navigate to the (\w+) page$/, async (page) => {
    await browser.url(`/${page}`);
    sharedData.currentPage = page; // Store the current page for later use
});

Given(`I initialize the lighthouse service`, async () => {
    await browser.enablePerformanceAudits();
});
