class HomePage {
  goToTestCases() {
    cy.contains('Test Cases').click();
  }

  verifyTestCasesPage() {
    cy.url().should('include', '/test_cases');
    cy.contains('Test Cases').should('be.visible');
  }

  verifySubscriptionSection() {
    cy.contains('Subscription').scrollIntoView().should('be.visible');
    cy.get('#susbscribe_email').should('be.visible'); // Added assertion for email input
    cy.get('#subscribe').should('be.visible'); // Added assertion for subscribe button
  }

  subscribe(email) {
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();
  }

  verifySubscriptionSuccess() {
    // Using a more robust selector if available, or a less brittle text match
    cy.get('.alert-success.alert').should('contain.text', 'You have been successfully subscribed!');
  }

  goToContactUs() {
    cy.contains('Contact us').click();
  }

  scrollToBottom() {
    cy.scrollTo('bottom');
  }

  scrollToTop() {
    cy.scrollTo('top');
  }

  clickScrollUpArrow() {
    cy.get('#scrollUp').should('be.visible').click(); // Added visibility check
  }

  verifyLogoVisible() {
    cy.get('.logo img').should('be.visible'); // More specific selector for the logo image
  }

  // New methods based on refactored steps
  verifySectionVisible(sectionText) {
    cy.contains(sectionText).scrollIntoView().should('be.visible');
  }

  verifyPageScrolledToTop() {
    cy.window().its('scrollY').should('eq', 0);
  }
}

export default HomePage;
