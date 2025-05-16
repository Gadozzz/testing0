import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the Automation Exercise homepage', () => {
  cy.visit('https://automationexercise.com');
});

Given('the homepage is visible', () => {
  cy.title().should('eq', 'Automation Exercise'); // More specific check
  cy.get('img[alt="Website for automation practice"]').should('be.visible'); // Check for a key element
});

// Add new common steps
Then('I should see {string} in the URL', (urlPart) => {
  cy.url().should('include', urlPart);
});

Then('I should see the text {string}', (text) => {
  cy.contains(text).should('be.visible');
});
