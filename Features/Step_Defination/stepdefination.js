"use strict"
const { When, Given, setDefaultTimeout } = require('cucumber');
const PageFactory = require("../../utils/pageFactory");
const { expect } = require('chai');
const { browser} = require('protractor');
const { protractor } = require('protractor/built/ptor');
const EC = protractor.ExpectedConditions;
setDefaultTimeout(60000);
const settingsPage = PageFactory.getPage("settings");
const homepagePage = PageFactory.getPage("home");
const sign_inPage = PageFactory.getPage("sign_in");
let first_video_name_before = '';
let first_video_name_after = '';
let second_video_name_before = '';
let second_video_name_after = '';
let warning_massage_text = '';

Given('I have opened web browser and maximized it',  async () => {
   await browser.manage().window().maximize();
   await PageFactory.getPage("home").get("https://www.youtube.com/");
   });

When('I should change the theme to dark',  async ()=>{
    await settingsPage.click_on_settings();
    await browser.wait(EC.visibilityOf(settingsPage.device_theme_button), 10000);
    await settingsPage.click_on_device_theme();
    await browser.wait(EC.visibilityOf(settingsPage.dark_theme_button), 10000);
    await settingsPage.click_on_dark_theme_button();
    await browser.wait(EC.visibilityOf(homepagePage.dark), 10000);
    });

When('I should change the theme to light',  async ()=>{
    await settingsPage.click_on_settings();
    await browser.wait(EC.visibilityOf(settingsPage.device_theme_button), 10000);
    await settingsPage.click_on_device_theme();
    await browser.wait(EC.visibilityOf(settingsPage.light_theme_button), 10000);
    await settingsPage.click_on_light_theme_button();

});

When('I should sign in',async ()=>{
    await browser.wait(EC.visibilityOf(sign_inPage.sign_in_button), 10000);
    await sign_inPage.click_on_sign_in();
    await browser.wait(EC.visibilityOf(sign_inPage.userName_input_field), 10000);
    await sign_inPage.enter_userName('ignatpetrosyan66');
    await sign_inPage.click_next_login()
    await browser.wait(EC.visibilityOf(sign_inPage.password_input_field), 10000);
    await sign_inPage.enter_password('Armenia$159');
    await sign_inPage.click_next_password();
    await browser.wait(EC.visibilityOf(homepagePage.avatarImg), 10000);
})  

Given('I should hover mouse on first video', async ()=>{
   await browser.wait(EC.visibilityOf(homepagePage.first_element), 10000);
   await browser.actions().mouseMove(homepagePage.first_element).perform();
   first_video_name_before = await homepagePage.name_of_first_video();
});

When('I should click on watch later button', async ()=>{
   await browser.wait(EC.visibilityOf(homepagePage.first_video_watch_later), 10000);
   await homepagePage.click_on_wathch_later_button()
});

When('I should click on watch later section', async ()=>{
   await browser.wait(EC.visibilityOf(homepagePage.watch_leter_section_button), 10000);
   await homepagePage.click_on_watch_leter_section();
});

When('I should see the video in watch later section', async ()=>{
    await browser.wait(EC.visibilityOf(homepagePage.first_element), 7000);
    first_video_name_after = await homepagePage.name_of_first_video()
    expect(JSON.stringify(first_video_name_before).slice(-8)).to.contain(JSON.stringify(first_video_name_after).slice(-8));


});

When('I should refresh the browser',async ()=> {
    await homepagePage.click_on_logo_button();
});
    
Given('I should click on second suggested video', async ()=>{
    await browser.wait(EC.visibilityOf(homepagePage.second_element), 7000);
    await homepagePage.click_to_play_second_element();
    second_video_name_before =await homepagePage.name_of_second_video();
    await browser.sleep(2000)
    });

When('I should refresh the browser again',async ()=> {
    await browser.wait(EC.visibilityOf(homepagePage.logo_button), 7000);
    await homepagePage.click_on_logo_button();
});

When('I should click on history section', async ()=>{
    await browser.wait(EC.visibilityOf(homepagePage.history_section_button), 7000);
    await homepagePage.click_on_history_section();
});

When('I should see the video in history section', async()=>{
    await browser.wait(EC.visibilityOf(homepagePage.second_element), 7000);
    second_video_name_after = await homepagePage.name_of_second_video();
    console.log(second_video_name_before);
    console.log(second_video_name_after);
    expect(JSON.stringify(second_video_name_before).slice(-8)).to.contain(JSON.stringify(second_video_name_after).slice(-8));
});

Given('I should refresh the browser one more time',async ()=> {
    await homepagePage.click_on_logo_button();
    await browser.sleep(2000);
});

When('I should click on avatar image', async()=>{
    await browser.wait(EC.visibilityOf(homepagePage.avatarImg), 7000);
    await homepagePage.avatarImg_click();
});

When('I should sign out', async()=>{
    await browser.wait(EC.visibilityOf(homepagePage.sign_out_button), 7000);
    await homepagePage.click_sign_out_button();
});

When('I should hover mouse on the first video again', async()=>{
    await browser.wait(EC.visibilityOf(homepagePage.first_element), 7000);
    await browser.actions().mouseMove(homepagePage.first_element).perform();
});

When('I should click on watch late button again', async()=>{
    await browser.wait(EC.visibilityOf(homepagePage.first_video_watch_later), 7000);
    await homepagePage.click_on_wathch_later_button();
});

When('I should see warning pop up', async()=>{
    await browser.wait(EC.visibilityOf(homepagePage.warning_massage_sign_outed), 5000);
    warning_massage_text = await homepagePage.text_of_warning_massage();
    expect(JSON.stringify(warning_massage_text)).to.contain('Sign in to add this video to a playlist')

})

