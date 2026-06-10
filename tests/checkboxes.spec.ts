import test, { expect } from '@playwright/test'
test.use({headless:false})
test.describe("Checkboxes Module",{tag: "@checkboxes"}, ()=>{


    test('Validate second checkbox unceheck', {tag : "@smoke"},async ({ page }, testinfo) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const checkboxTextField = await page.getByText("checkboxes");
    checkboxTextField.click();

    const secondCheckBox = await page.locator("//input[@type='checkbox']").nth(1);
    await secondCheckBox.uncheck();

    await expect(secondCheckBox).not.toBeChecked();

})

test('Validate first checkbox checked', {annotation:{type:'issue', description:'jira-123'}},async ({ page }, testInfo) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const checkboxTextField = await page.getByText("checkboxes");
    checkboxTextField.click();

    const firstCheckbox = await page.locator("//input[@type='checkbox']").nth(0);
    await firstCheckbox.check();

    await expect(firstCheckbox).toBeChecked();

})

test('validate second checkbox uncheck then check', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const checkboxTextField = await page.getByText("checkboxes");
    checkboxTextField.click();

    const secondCheckBox = await page.locator("//input[@type='checkbox']").nth(1);

    await secondCheckBox.uncheck();
    await expect(secondCheckBox).not.toBeChecked();

    await secondCheckBox.check();
    await expect(secondCheckBox).toBeChecked();
    console.log('Running "${testInfo.title}" , in worker #$(testInfo.workerIndex}')

   

})
})
