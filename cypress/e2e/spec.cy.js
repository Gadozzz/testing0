import SignupLoginPage from '../support/pageObjects/SignupLoginPage';
import ContactUsPage from '../support/pageObjects/ContactUsPage';
import ProductsPage from '../support/pageObjects/ProductsPage';
import HomePage from '../support/pageObjects/HomePage';

const signupLoginPage = new SignupLoginPage();
const contactUsPage = new ContactUsPage();
const productsPage = new ProductsPage();
const homePage = new HomePage();

describe('Automation Exercise - Test Cases', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com');
        cy.get('body').should('be.visible');
    });

    it('Test Case 1: Register User', () => {
        signupLoginPage.goToSignup();
        signupLoginPage.signup('Test User', signupLoginPage.generateEmail());
        signupLoginPage.fillAccountDetails();
        signupLoginPage.submitAccount();
        signupLoginPage.verifyAccountCreated();
        signupLoginPage.continueAfterAccountCreated();
        signupLoginPage.verifyLoggedIn();
        signupLoginPage.deleteAccount();
        signupLoginPage.verifyAccountDeleted();
    });

    it('Test Case 5: Register User with existing email', () => {
        signupLoginPage.goToSignup();
        signupLoginPage.signup('Test User', 'automationtestuser@example.com');
        signupLoginPage.verifyEmailExistsError();
    });

    it('Test Case 7: Verify Test Cases Page', () => {
        homePage.goToTestCases();
        homePage.verifyTestCasesPage();
    });

    it('Test Case 8: Verify All Products and product detail page', () => {
        productsPage.goToProducts();
        productsPage.verifyProductsPage();
        productsPage.viewFirstProduct();
        productsPage.verifyProductDetailPage();
    });

    it('Test Case 9: Search Product', () => {
        productsPage.goToProducts();
        productsPage.searchProduct('dress');
        productsPage.verifySearchResults();
    });

    it('Test Case 10: Verify Subscription in home page', () => {
        homePage.verifySubscriptionSection();
        homePage.subscribe('testuser@example.com');
        homePage.verifySubscriptionSuccess();
    });

    it('Test Case 13: Verify Product quantity in Cart', () => {
        productsPage.goToProducts();
        productsPage.viewFirstProduct();
        cy.get('input#quantity').clear().type('4');
        cy.get('button[type="button"]').contains('Add to cart').click();
        cy.contains('View Cart').click();
        cy.url().should('include', '/view_cart');
        cy.get('.cart_quantity').should('contain.text', '4');
    });

    it('Test Case 20: Add Review on Product', () => {
        productsPage.goToProducts();
        productsPage.viewFirstProduct();
        cy.get('input#name').type('Review User');
        cy.get('input#email').type('reviewuser@example.com');
        cy.get('textarea#review').type('This is a test review.');
        cy.get('#button-review').click();
        cy.contains('Thank you for your review.').should('be.visible');
    });

    it('Test Case 24: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        cy.scrollTo('bottom');
        cy.contains('Subscription').should('be.visible');
        cy.get('#scrollUp').click();
        cy.window().its('scrollY').should('eq', 0);
        cy.get('.logo').should('be.visible');
    });

    it('Test Case 25: Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
        cy.scrollTo('bottom');
        cy.contains('Subscription').should('be.visible');
        cy.scrollTo('top');
        cy.get('.logo').should('be.visible');
    });

});
