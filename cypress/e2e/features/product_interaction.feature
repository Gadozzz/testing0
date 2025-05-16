Feature: Product Interaction
  As a user
  I want to be able to view and interact with products
  So that I can make informed purchasing decisions and share feedback

  Background:
    Given I am on the Automation Exercise homepage
    And the homepage is visible

  Scenario: Verify All Products and product detail page
    Given I navigate to the products page
    Then I should be on the products page
    And I should see "All Products"
    When I view the first product
    Then I should be on the product detail page
    And I should see the product information section

  Scenario: Search for a Product
    Given I navigate to the products page
    When I search for the product "dress"
    Then I should see the "Searched Products" section
    And the search results should not be empty

  Scenario: Verify Product quantity in Cart
    Given I navigate to the products page
    When I view the first product
    And I set the quantity to "4"
    And I add the product to the cart
    And I view the cart
    Then the cart URL should include "/view_cart"
    And the cart quantity should show "4"

  Scenario: Add Review on Product
    Given I navigate to the products page
    When I view the first product
    And I fill the review form with name "Review User", email "reviewuser@example.com", and review "This is a test review."
    And I submit the review
    Then I should see "Thank you for your review." message
