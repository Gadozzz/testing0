import 'cypress-file-upload';

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test=username]').type(username);
  cy.get('[data-test=password]').type(password);
  cy.get('[data-test=login-button]').click();
  cy.url().should('include', '/inventory.html');
});
Cypress.Commands.add('fillReviewForm', (name, email, review) => {
    cy.get('input#name').type(name);
    cy.get('input#email').type(email);
    cy.get('textarea#review').type(review);
    cy.get('#button-review').click();
    cy.contains('Thank you for your review.').should('be.visible');
});

Cypress.Commands.add('setProductQuantityAndAddToCart', (quantity = 1) => {
    cy.get('input#quantity').clear().type(quantity);
    cy.get('button[type="button"]').contains('Add to cart').click();
});

Cypress.Commands.add('verifyQuantityInCart', (quantity) => {
    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');
    cy.get('.cart_quantity').should('contain.text', quantity);
});

Cypress.Commands.add('scrollToBottomAndVerifySubscription', () => {
    cy.scrollTo('bottom');
    cy.contains('Subscription').should('be.visible');
});

Cypress.Commands.add('scrollToTopAndVerifyLogo', () => {
    cy.scrollTo('top');
    cy.get('.logo').should('be.visible');
});

Cypress.Commands.add('scrollUpWithArrow', () => {
    cy.get('#scrollUp').click();
    cy.window().its('scrollY').should('eq', 0);
    cy.get('.logo').should('be.visible');
});
