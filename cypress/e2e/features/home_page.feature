Feature: Home Page Features
  As a user
  I want to interact with various features on the home page
  To ensure they are working correctly

  Background:
    Given I am on the Automation Exercise homepage
    And the homepage is visible

  Scenario: Verify Test Cases Page
    When I navigate to the Test Cases page
    Then I should be on the Test Cases page

  Scenario: Verify Subscription in home page
    Given the subscription section is visible on the home page
    When I subscribe with the email "testuser@example.com"
    Then I should see the subscription success message

  Scenario: Verify Scroll Up using Arrow button and Scroll Down functionality
    When I scroll to the bottom of the page
    Then the "Subscription" section should be visible
    When I click the scroll up arrow button
    Then the page should scroll to the top
    And the site logo should be visible

  Scenario: Verify Scroll Up without Arrow button and Scroll Down functionality
    When I scroll to the bottom of the page
    Then the "Subscription" section should be visible
    When I scroll to the top of the page
    Then the site logo should be visible
