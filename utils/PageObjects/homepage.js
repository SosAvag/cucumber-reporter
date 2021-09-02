class Homepage {
    constructor() {
        this.sign_out_button = element(by.xpath("//yt-formatted-string[.='Sign out']"));
        this.logo_button = element(by.xpath("//yt-icon[@id='logo-icon']"));
        this.avatarImg=element(by.xpath("//img[@alt='Avatar image']"));
        this.dark = element(by.xpath("//html[@dark='true']"));
        this.first_element = element(by.xpath("(//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'])[1]"));
        this.second_element = element(by.xpath("//ytd-rich-item-renderer[@class='style-scope ytd-rich-grid-renderer'][2]"));
        this.first_video_watch_later = element(by.xpath('(//yt-icon[@id="icon" and @class="style-scope ytd-thumbnail-overlay-toggle-button-renderer"])[1]'));
        this.watch_leter_section_button = element(by.xpath("//yt-formatted-string[.='Watch later']"));
        this.history_section_button = element(by.xpath("//yt-formatted-string[.='History']"));
        this.warning_massage_sign_outed = element(by.xpath("//ytd-modal-with-title-and-button-renderer[@class='style-scope ytd-popup-container']"));
    }  

    get = function (url) {
        return browser.get(url);
    };
    click_on_wathch_later_button = function(){
        return this.first_video_watch_later.click()
    };
    click_on_watch_leter_section = function(){
        return this.watch_leter_section_button.click();
    };
    click_to_play_first_element = function(){
        return this.first_element.click()
    };
    click_on_logo_button = function(){
        return this.logo_button.click();
    };
    click_on_history_section = function(){
        return this.history_section_button.click()
    };
    click_to_play_second_element = function(){
       return this.second_element.click()
    };
    avatarImg_click = function(){
        return this.avatarImg.click()
    };
    click_sign_out_button = function(){
        return this.sign_out_button.click()
    };
    name_of_first_video = function(){
        return this.first_element.getText()
    };
    name_of_second_video = function(){
        return this.second_element.getText()
    };
    text_of_warning_massage = function(){
        return this.warning_massage_sign_outed.getText()
    }
}

module.exports = Homepage;
