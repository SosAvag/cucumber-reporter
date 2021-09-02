Feature: youtube  homepage 

Scenario: I should change the theme to dark and sign in
Given I have opened web browser and maximized it
When  I should change the theme to dark 
And I should sign in

Scenario:I should add video to watch later section
Given I should hover mouse on first video
And I should click on watch later button
When I should click on watch later section
Then I should see the video in watch later section
Then I should refresh the browser

Scenario:I should add video to history section
Given I should click on second suggested video
Then I should refresh the browser again
And I should click on history section
Then I should see the video in history section 

