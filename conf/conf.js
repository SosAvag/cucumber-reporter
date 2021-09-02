const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');
const path = require('path');
const cucumberJunitConvert = require('cucumber-junit-convert');

const junitOptions = {
  inputJsonFile: path.join(__dirname, '../reports/report.json'),
  outputXmlFile: path.join(__dirname, '../reports/Jreport.xml')
}

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname,'../reports/report.json'),
  output: path.join(__dirname,'../reports/cucumber_report.html'),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
};


exports.config = {
  //seleniumAddress:'http://localhost:4444/wd/hub/',
  directConnect: true,
       
    Capabilities:{
        'browserName': 'chrome'
      }, 
  
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    onPrepare: function(){
      browser.waitForAngularEnabled(false)
    },
    onComplete: function(){
        browser.close()
    },

    afterLaunch: ()=>{
      cucumberJunitConvert.convert(junitOptions);
      return reporter.generate(options);
      
    },
    
    specs: ['../Features/**.feature'],
   // baseUrl = 'https://www.youtube.com/',
  
   cucumberOpts: {
    require: ('../Features/Step_Defination/stepdefination.js'),
    ignoreUncaughtExceptions: true,
    format: ['json:./reports/report.json', './node_modules/cucumber-pretty'],

   },

    getPageTimeout: 10000,
    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    }
  };