class ProductsPage {
  goToProducts() {
    cy.contains('Products').click();
  }

  verifyProductsPage() {
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');
  }

  viewFirstProduct() {
    cy.get('.product-image-wrapper').first().contains('View Product').click();
  }

  verifyProductDetailPage() {
    cy.get('.product-information').should('be.visible'); 
  }

  searchProduct(productName) {
    cy.get('#search_product').type(productName);
    cy.get('#submit_search').click();
  }

  verifySearchResults() {
    cy.contains('Searched Products').should('be.visible');
    cy.get('.productinfo').should('have.length.greaterThan', 0);
  }

  // --- Start of Added/Modified Methods for BDD Refactor ---

  setQuantity(quantity) {
    cy.get('input#quantity').clear().type(quantity);
  }

  clickAddToCart() {
    cy.get('button[type="button"]').contains('Add to cart').click();
  }

  clickViewCart() {
    // Assuming 'View Cart' link appears after adding to cart,
    // or is otherwise accessible.
    cy.contains('View Cart').click();
  }

  fillReviewDetails(name, email, reviewText) {
    cy.get('input#name').type(name);
    cy.get('input#email').type(email);
    cy.get('textarea#review').type(reviewText);
  }

  submitReview() {
    cy.get('#button-review').click();
  }

  // verifyReviewSubmitted() is already present and good.
  // --- End of Added/Modified Methods for BDD Refactor ---

  addProductToCart(quantity = 1) {
    cy.get('input#quantity').clear().type(quantity);
    cy.get('button[type="button"]').contains('Add to cart').click();
    cy.contains('View Cart').click();
  }

  verifyCartQuantity(quantity) {
    cy.url().should('include', '/view_cart');
    cy.get('.cart_quantity').should('contain.text', quantity);
  }

  submitProductReview(name, email, reviewText) {
    cy.get('input#name').type(name);
    cy.get('input#email').type(email);
    cy.get('textarea#review').type(reviewText);
    cy.get('#button-review').click();
  }

  verifyReviewSubmitted() {
    cy.contains('Thank you for your review.').should('be.visible');
  }
}

export default ProductsPage;
