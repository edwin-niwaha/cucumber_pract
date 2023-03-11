Feature: Searching Niwaha Edwin on google
    Scenario: Searching Niwaha Edwin on google
        Given I visit google homepage
        When I search for Niwaha Edwin
        Then I should see the result