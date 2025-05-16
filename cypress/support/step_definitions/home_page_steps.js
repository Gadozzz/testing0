import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../pageObjects/HomePage'; // Corrected path

const homePage = new HomePage();

// Background steps are in common_steps.js

When('I navigate to the Test Cases page', () => {
  homePage.goToTestCases();
});

Then('I should be on the Test Cases page', () => {
  homePage.verifyTestCasesPage();
  // Common step for URL verification can be used from common_steps.js
  // Then I should see '/test_cases' in the URL
});

Given('the subscription section is visible on the home page', () => {
  homePage.verifySubscriptionSection();
});

When('I subscribe with the email {string}', (email) => {
  homePage.subscribe(email);
});

Then('I should see the subscription success message', () => {
  homePage.verifySubscriptionSuccess();
  // Common step for text verification can be used from common_steps.js
  // Then I should see the text 'You have been successfully subscribed!'
});

When('I scroll to the bottom of the page', () => {
  homePage.scrollToBottom(); // Using Page Object method
});

Then('the {string} section should be visible', (sectionText) => {
  // This can be made more generic or kept specific if the selector is in the Page Object
  homePage.verifySectionVisible(sectionText); // Assuming a method in HomePage.js
});

When('I click the scroll up arrow button', () => {
  homePage.clickScrollUpArrow(); // Using Page Object method
});

Then('the page should scroll to the top', () => {
  homePage.verifyPageScrolledToTop(); // Assuming a method in HomePage.js
});

Then('the site logo should be visible', () => {
  homePage.verifyLogoVisible(); // Using Page Object method
});

When('I scroll to the top of the page', () => {
  homePage.scrollToTop(); // Using Page Object method
});
