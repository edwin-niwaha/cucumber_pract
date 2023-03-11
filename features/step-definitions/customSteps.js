const {When, Then, Before, After} = require('@cucumber/cucumber');
const {expect} = require('chai');

let sum = 0;

Before(function () {
    console.log('Inside Before');
  });

After(function () {
    console.log('Inside After');
});
When('I add {int} and {int}', function (num1, num2) {
    sum = num1 + num2
    });

Then('the result should be {int}', function (result) {
    expect(sum).equal(result)
    });
