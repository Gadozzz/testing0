Feature: User Management
  As a user
  I want to be able to register and manage my account
  So that I can use the platform's features

  Background:
    Given I am on the Automation Exercise homepage
    And the homepage is visible

  Scenario: Register a new user
    Given I navigate to the signup/login page
    When I enter a new name and a unique email for signup
    And I click the signup button
    And I fill in the account details
    And I submit the account creation form
    Then I should see the "Account Created!" message
    When I click the continue button
    Then I should see "Logged in as" followed by my username
    When I click the delete account button
    Then I should see the "Account Deleted!" message
    And I click the continue button after deletion

  Scenario: Attempt to register with an existing email
    Given I navigate to the signup/login page
    When I enter a name and the existing email "automationtestuser@example.com" for signup
    And I click the signup button
    Then I should see the "Email Address already exist!" error message