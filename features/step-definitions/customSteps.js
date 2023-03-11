const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {expect} = require('chai');
require('chromedriver');
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

let sum = 0;
let driver;
Before(function () {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
    // console.log('Inside Before');
  });

After(function () {
    // console.log('Inside After');
    driver.quit();
});

When('I add {int} and {int}', function (num1, num2) {
    sum = num1 + num2
    });

Then('the result should be {int}', function (result) {
    expect(sum).equal(result)
    });

Given('I visit google homepage', async() => {
    await driver.get('https://google.com')
});

When('I search for Niwaha Edwin', async() => {
    await driver.findElement(By.name('q')).sendKeys('Niwaha Edwin'+'\n');
  });

Then('I should see the result', async() => {
    let text = await driver.findElement(By.id('search')).getText()
    console.log(text);
});