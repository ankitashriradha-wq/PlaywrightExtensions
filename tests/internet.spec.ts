import test, { expect } from '@playwright/test'

test.describe("Main module",{tag: "@main"},()=>{

    test('Validate checboxes link', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const checboxesLink = await page.getByText("checkboxes");
    await expect(checboxesLink).toBeVisible();
    
    })
})
