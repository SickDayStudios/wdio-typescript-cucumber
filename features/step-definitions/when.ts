import { When } from "@cucumber/cucumber";
import {$} from '@wdio/globals';

When('I set the {string} field to {string}', async (field, value) => {
    const input = await $(`input[name="${field}"]`);
    await input.setValue(value);
});

When(`I click the {string} link`, async (linktext: string) => {
    const link = await $(`a[href="${linktext}"]`);
    await link.click();
});

When('I navigate to the {string} page', async (page) => {
    await browser.url(`/${page}`);
});

When('I click the {string} button', async (buttontext: string) => {
    const button = await $(`button=${buttontext}`);
    await button.click();
});

When('I select {string} from the {string} dropdown', async (option, dropdown) => {
    const select = await $(`select[name="${dropdown}"]`);
    await select.selectByVisibleText(option);
});

When('I check the {string} checkbox', async (checkboxLabel) => {
    const checkbox = await $(`input[type="checkbox"][name="${checkboxLabel}"]`);
    await checkbox.click();
});

When('I uncheck the {string} checkbox', async (checkboxLabel) => {
    const checkbox = await $(`input[type="checkbox"][name="${checkboxLabel}"]`);
    await checkbox.click();
});

When('I select {string} from the {string} radio button group', async (option, groupName) => {
    const radio = await $(`input[type="radio"][name="${groupName}"][value="${option}"]`);
    await radio.click();
});

When('I upload a file to the {string} field', async (field) => {
    const input = await $(`input[type="file"][name="${field}"]`);
    await input.setValue('../support/data/file.txt');
});