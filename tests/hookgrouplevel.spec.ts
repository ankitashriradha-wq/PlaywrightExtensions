import {test, expect} from '@playwright/test' 

test.beforeEach("launch application", async ({page})=>{

    console.log("before Each Test begins")
    await page.goto("https://the-internet.herokuapp.com/");
    

});

test.afterEach("Clean up", async({page})=>{

    console.log("after Each Test ends now")
});

test.beforeAll(()=>{

        console.log("Connecting to db")

});

test.afterAll(()=>{

    console.log("Disconnecting to db")
});

test.describe("Main Page",()=>{

    test('Validate checboxes link', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const checboxesLink = await page.getByText("checkboxes");
    await expect(checboxesLink).toBeVisible();

})

test.describe("checkboxes page", ()=>{
    test('Validate second checkbox unceheck', {tag : "@smoke"},async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const checkboxTextField = await page.getByText("checkboxes");
    checkboxTextField.click();

    const secondCheckBox = await page.locator("//input[@type='checkbox']").nth(1);
    await secondCheckBox.uncheck();

    await expect(secondCheckBox).not.toBeChecked();
})