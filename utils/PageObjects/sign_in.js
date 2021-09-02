class SignIn {
    constructor() {
    
    this.sign_in_button = element(by.xpath("//yt-formatted-string[@class='style-scope ytd-button-renderer style-suggestive size-small']"));
    this.userName_input_field = element(by.xpath("//input[@id='identifierId']"));
    this.password_input_field = element(by.xpath("//input[@name='password']"));
    this.next_button_login = element(by.id("identifierNext"));
    this.next_button_password = element(by.id("passwordNext"));
    }

    click_on_sign_in = function(){
    return this.sign_in_button.click();
}; 
enter_userName = function(user) {
    return this.userName_input_field.sendKeys(user)
};
enter_password = function(password) {
   return this. password_input_field.sendKeys(password)
};
click_next_login = function(){
    return this.next_button_login.click()
}
click_next_password = function(){
   return this.next_button_password.click()
}
}
module.exports = SignIn;