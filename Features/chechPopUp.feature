Feature: Check warning pop-up without logging in

  Scenario Outline: I should change the theme to dark and sign in
    Given I have opened web browser and maximized it
    When  I should change the theme to <color>
    And I should sign in

    Examples:
    |color|
    |dark |
    |light|

  Scenario: I should see warning pop up after Clicking on watch letter without signing in
    Given I should refresh the browser one more time
    And I should click on avatar image
    And I should sign out
    And I should hover mouse on the first video again
    And I should click on watch late button again
    Then I should see warning pop up