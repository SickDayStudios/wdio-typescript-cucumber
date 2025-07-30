import { When } from "@cucumber/cucumber";
import {$} from '@wdio/globals';

When(/^I login with (\w+) and (.+)$/, async (usernamefield, passwordfield, username, password) => {
    await $(usernamefield).setValue(username);
    await $(passwordfield).setValue(password);
});

When('I set the {string} field to {string}', async (field, value) => {
    const input = await $(`input[name="${field}"]`);
    await input.setValue(value);
});