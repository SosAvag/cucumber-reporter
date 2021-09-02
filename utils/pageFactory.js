const Homepage = require("./PageObjects/homepage")
const Settings = require("./pageObjects/settings");
const SignIn = require("./pageObjects/sign_in");


class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "home":
                return new Homepage();
            case "settings":
                return new Settings();
            case "sign_in":
                return new SignIn();        
        };
    };
};

module.exports = PageFactory;