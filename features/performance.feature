Feature: Performance Testing
    As a Tester 
    I want to ensure the Website is performant

    Background:
      Given I initialize the lighthouse service

Scenario:
    When I navigate to the "<page>" page
    Then the page should load within <load_time> milliseconds

    Examples:
      | page      | load_time  |
      | login     | 1500       |
      | about     | 1800       |
      | contact   | 2100       |
