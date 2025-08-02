Feature: The Internet Guinea Pig Website
As a Tester, 
I can login to the Website

  Scenario: Test Login Flow
    Given I am on the "Public/Home" page
    When I set the "<usernamefield>" field to "<username>"
    And I set the "<passwordfield>" field to "<password>"
    Then I should see a "<message>" message

    Examples:
      | usernamefield  | username | passwordfield   | password            | message                        |
      | Email          | username | Password          | SuperSecretPassword! | You logged into a secure area! |
      | Email          | username | Password          | barfoo               | Your username is invalid!      |
