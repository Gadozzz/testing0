import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignupLoginPage from '../pageObjects/SignupLoginPage'; 
import HomePage from '../pageObjects/HomePage'; // Corrected path

const signupLoginPage = new SignupLoginPage();
const homePage = new HomePage();
let tempEmail;

Given('I am on the Automation Exercise homepage', () => {
  cy.visit('https://automationexercise.com');
});

Given('the homepage is visible', () => {
  cy.title().should('eq', 'Automation Exercise');
  cy.get('img[alt="Website for automation practice"]').should('be.visible');
});

Given('I navigate to the signup/login page', () => {
  cy.log('Executing step: I navigate to the signup/login page - TEST');
});

When('I enter a new name and a unique email for signup', () => {
  tempEmail = signupLoginPage.generateEmail();
  signupLoginPage.signup('Test User', tempEmail);
});

When('I enter a name and the existing email {string} for signup', (email) => {
  signupLoginPage.signup('Test User', email);
});

When('I click the signup button', () => {
  // Already clicked inside signup()
});

When('I fill in the account details', () => {
  signupLoginPage.fillAccountDetails();
});

When('I submit the account creation form', () => {
  signupLoginPage.submitAccount();
});

Then('I should see the {string} message', (message) => {
  cy.contains(message).should('be.visible');
});

When('I click the continue button', () => {
  signupLoginPage.continueAfterAccountCreated();
});

Then('I should see {string} followed by my username', (message) => {
  cy.contains(`${message} Test User`).should('be.visible');
});

When('I click the delete account button', () => {
  signupLoginPage.deleteAccount();
});

Then('I should see the {string} error message', (errorMessage) => {
  cy.contains(errorMessage).should('be.visible');
});

When('I click the continue button after deletion', () => {
  // If there is a continue button after deletion, implement it here.
});
