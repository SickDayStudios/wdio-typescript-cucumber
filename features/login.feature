Feature: The Internet Guinea Pig Website
As a Tester, 
I can login to the Website

  Scenario: Test Login Flow
    Given I am on the login page
    When I set the "<usernamefield>" field to "<username>"
    And I set the "<passwordfield>" field to "<password>"
    Then I should see a "<message>" message

    Examples:
      | usernamefield  | username | passwordfield   | password            | message                        |
      | .username      | username | .password      | SuperSecretPassword! | You logged into a secure area! |
      | .username      | username | .password      | barfoo               | Your username is invalid!      |
