Feature: login testcases

  Background:
    Given user navigate to "https://www.saucedemo.com"

  @positive @JIRA-1234 @valid @sanity
  Scenario: verify user able to see dashboard with correct credentials
    When user enter "standard_user" in username box
    And user enter "secret_Sauce" in password box
    And user click on login button
    Then user validate dashboard

  @negative @JIRA012413 @invalid @sanity
  Scenario Outline: verify errormsg for username <username> and password <password>
    When user enter "<username>" in username box
    And user enter "<password>" in password box
    And user click on login button
    Then user able to see errormsg "<errormsg>"

    Examples:
      | username | password     | errormsg                                                                  |
      |          |              | Epic sadface: Username is required                                        |
      | asdf     | asdf         | Epic sadface: Username and password do not match any user in this service |
      |          | secret_sauce | Epic sadface: Username is required                                        |
