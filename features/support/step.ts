
import * as importCwd from "import-cwd";
import { expect } from "chai";


// @ts-ignore
const { Given, When, Then } = importCwd("@cucumber/cucumber");

Given("a variable set to {int}", function(number) {
    this.setTo(number);
});

When("I increment the variable by {int}", function(number) {
    this.incrementBy(number);
});

Then("the variable should contain {int}", function(number) {
    expect(this.variable).to.eql(number);
});