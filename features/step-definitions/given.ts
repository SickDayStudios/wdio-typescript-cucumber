import { Given } from "@cucumber/cucumber";
import { sharedData } from '../support/sharedData';


Given(`I initialize the lighthouse service`, async () => {
    await browser.enablePerformanceAudits();
});

Given(`I am on the {string} page`, async (page: string) => {
    await browser.url(`/${page}`);
    expect(await browser.getTitle()).toContain(page);
    sharedData.currentPage = page; // Store the current page for later use
});