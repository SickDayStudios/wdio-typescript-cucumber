Feature: Performance Testing
    As a Tester 
    I want to ensure the Website is performant

    Background:
      Given I initialize the lighthouse service

Scenario:
    Given I navigate to the <page> page
    Then the page should load within <load_time> seconds

    Examples:
      | page      | load_time |
      | login     | 1.5       |
      | about     | 1.8       |
      | contact   | 2.1       |
