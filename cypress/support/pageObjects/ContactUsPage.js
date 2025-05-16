class ContactUsPage {
  fillContactForm(name, email, subject, message) {
    cy.get('input[data-qa="name"]').type(name);
    cy.get('input[data-qa="email"]').type(email);
    cy.get('input[data-qa="subject"]').type(subject);
    cy.get('textarea[data-qa="message"]').type(message);
  }

  uploadFile(fileName) {
    cy.get('input[type="file"]').attachFile(fileName);
  }

  submitForm() {
    cy.get('input[data-qa="submit-button"]').click();
    cy.on('window:confirm', () => true); // Confirm popup
  }

  verifySuccessMessage() {
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
  }

  returnHome() {
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'https://automationexercise.com/');
  }
}

export default ContactUsPage;
