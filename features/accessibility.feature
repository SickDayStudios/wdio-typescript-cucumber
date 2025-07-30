Feature: Accessibility Compliance

  Scenario Outline: As a Tester, 
    I want to ensure every page is WCAG 2.1 compliant

    Given I am on the <page> page
    Then the page should meet wcag2aa level standards

    Examples:
      | page     |
      | login    |
      | home     |
      | about    |
      | contact  |
