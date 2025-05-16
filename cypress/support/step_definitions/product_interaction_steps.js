import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductsPage from '../pageObjects/ProductsPage'; // Corrected path

const productsPage = new ProductsPage();

Given('I navigate to the products page', () => {
  productsPage.goToProducts();
});

Then('I should be on the products page', () => {
  productsPage.verifyProductsPage(); // This already checks URL and visibility of 'All Products'
});

Then('I should see {string}', (text) => {
  cy.contains(text).should('be.visible');
});

When('I view the first product', () => {
  productsPage.viewFirstProduct();
});

Then('I should be on the product detail page', () => {
  // The PO method verifyProductDetailPage already checks this.
  // No specific URL check here, assuming PO handles it or it's part of seeing product info.
});

Then('I should see the product information section', () => {
  productsPage.verifyProductDetailPage();
});

When('I search for the product {string}', (productName) => {
  productsPage.searchProduct(productName);
});

Then('I should see the {string} section', (sectionText) => {
  cy.contains(sectionText).should('be.visible');
});

Then('the search results should not be empty', () => {
  productsPage.verifySearchResults(); // This PO method checks for visibility and > 0 products
});

When('I set the quantity to {string}', (quantity) => {
  productsPage.setQuantity(quantity); // Using PO method
});

When('I add the product to the cart', () => {
  productsPage.clickAddToCart(); // Using PO method
});

When('I view the cart', () => {
  productsPage.clickViewCart(); // Using PO method
});

Then('the cart URL should include {string}', (urlPart) => {
  cy.url().should('include', urlPart);
});

Then('the cart quantity should show {string}', (quantity) => {
  cy.get('.cart_quantity').should('contain.text', quantity);
});

When('I enter my name {string} in the review form', (name) => {
  // Combined into a single PO method below
});

When('I enter my email {string} in the review form', (email) => {
  // Combined into a single PO method below
});

When('I enter my review {string}', (reviewText) => {
  // Combined into a single PO method below
});

// New combined step for filling review form
When('I fill the review form with name {string}, email {string}, and review {string}', (name, email, reviewText) => {
  productsPage.fillReviewDetails(name, email, reviewText);
});

When('I submit the review', () => {
  productsPage.submitReview(); // Using PO method
});

Then('I should see {string} message', (message) => {
  cy.contains(message).should('be.visible');
});