class Settings {
    constructor() {
    

        this.settings_button = element(by.css("#button[aria-label='Settings'] > .style-scope"));
        this.device_theme_button = element(by.xpath('//yt-icon[@id="secondary-icon"]'));
        this.dark_theme_button = element(by.xpath("//yt-formatted-string[.='Dark theme']"));
        this.light_theme_button = element(by.xpath("//yt-formatted-string[.='Light theme']"))
     

    }
       
    click_on_settings = function () {
        return this.settings_button.click();
    };
    click_on_device_theme = function(){
       return this.device_theme_button.click()
    };
    click_on_dark_theme_button = function(){
        return this.dark_theme_button.click()
    };
    click_on_light_theme_button = function(){
        return this.light_theme_button.click()
    };
      
    }

    module.exports = Settings;
    