class SignupLoginPage {
  goToSignup() {
    cy.contains('Signup / Login').click();
  }

  signup(name, email) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  fillAccountDetails() {
    cy.get('#id_gender1').check();
    cy.get('#password').type('Test1234');
    cy.get('#days').select('1');
    cy.get('#months').select('January');
    cy.get('#years').select('2000');
    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('User');
    cy.get('#address1').type('123 Test Street');
    cy.get('#state').type('Test State');
    cy.get('#city').type('Test City');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('01000000000');
  }

  submitAccount() {
    cy.get('button[data-qa="create-account"]').click();
  }

  continueAfterAccountCreated() {
    cy.get('a[data-qa="continue-button"]').click();
  }

  deleteAccount() {
    cy.contains('Delete Account').click();
  }

  generateEmail() {
    return `test${Date.now()}@example.com`;
  }
}

export default SignupLoginPage;
