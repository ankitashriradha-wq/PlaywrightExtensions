import {test, expect} from '@playwright/test'

test.beforeEach("launch application", async ({page})=>{

    console.log("before Each Test begins")
    await page.goto("https://the-internet.herokuapp.com/");

});

test.afterEach("Clean up", async({page})=>{

    console.log("after Each Test ends now")
});


