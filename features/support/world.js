import { defineSupportCode } from 'cucumber';
// var seleniumWebdriver = require('selenium-webdriver');

function CustomWorld() {
  // this.driver = new seleniumWebdriver.Builder()
  //   .forBrowser('firefox')
  //   .build();

  // Returns a promise that resolves to the element
  this.waitForElement = function(locator) {
    // var condition = seleniumWebdriver.until.elementLocated(locator);
    // return this.driver.wait(condition)
  }
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
});
