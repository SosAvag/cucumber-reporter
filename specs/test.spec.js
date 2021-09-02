const PageFactory = require("../utils/pageFactory");
const { browser} = require('protractor');
const { protractor } = require('protractor/built/ptor');

describe('youtube  homepage ', function() {
  let EC = protractor.ExpectedConditions;
  
  
  before(function () {
    browser.manage().window().maximize();
    PageFactory.getPage("home").get("https://www.youtube.com/");
    PageFactory.getPage("settings").click_on_settings();
    browser.sleep(1000)
    PageFactory.getPage("settings").click_on_device_theme();
    browser.sleep(1000)
    PageFactory.getPage("settings").click_on_dark_theme_button();
    browser.sleep(2000)
    browser.wait(EC.visibilityOf(PageFactory.getPage("home").dark), 10000);
    browser.sleep(2000);
    PageFactory.getPage("sign_in").click_on_sign_in();
    browser.sleep(2000);
    PageFactory.getPage("sign_in").enter_userName('ignatpetrosyan66');
    PageFactory.getPage("sign_in").click_next_login()
    browser.sleep(2000);
    PageFactory.getPage("sign_in").enter_password('Armenia$159');
    PageFactory.getPage("sign_in").click_next_password();
    browser.wait(EC.visibilityOf(PageFactory.getPage("home").avatarImg), 5000);
    browser.sleep(2000);
    browser.sleep(2000);
  });

  
  it('should add video to watch later section', async function(){
    await browser.actions().mouseMove(PageFactory.getPage("home").first_element).perform();
    await PageFactory.getPage("home").click_on_wathch_later_button();
    browser.sleep(2000);
    await PageFactory.getPage("home").click_on_watch_leter_section();
    browser.sleep(2000);
    await browser.wait(EC.visibilityOf(PageFactory.getPage("home").first_element), 5000);
    browser.sleep(2000)
  })
 
  it('should add video to history section', async function(){
      PageFactory.getPage("home").click_to_play_second_element();
      browser.sleep(2000);
      await PageFactory.getPage("home").click_on_logo_button();
      browser.sleep(2000);
      await PageFactory.getPage("home").click_on_history_section();
      browser.sleep(3000);
      await browser.wait(EC.visibilityOf(PageFactory.getPage("home").second_element), 5000);
      browser.sleep(2000)
      
    });

  it('should open warning pop up after klicking on whatch leter widhout signing in', async function(){
    await browser.sleep(2000)
    await PageFactory.getPage("home").avatarImg_click();
    await browser.sleep(2000);
    await PageFactory.getPage("home").click_sign_out_button();
    await browser.sleep(2000);
    await browser.actions().mouseMove(PageFactory.getPage("home").first_element).perform();
    await PageFactory.getPage("home").click_on_wathch_later_button();
    await browser.sleep(2000);
    await browser.wait(EC.visibilityOf(PageFactory.getPage("home").warning_massage_sign_outed), 5000);
    await browser.sleep(2000);
  })

});