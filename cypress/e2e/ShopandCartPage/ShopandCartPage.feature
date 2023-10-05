Feature: Visit dummy website and validate the Shop and Cart Page

    Scenario: click on random items and add in cart and deleting the minimum amount value in a cart
Given I add four random items to my cart
When I view my cart
Then I found total four items listed in my cart
When I search for lowestprice item
And Iam able to remove the lowest price item from my cart
Then Iam able to verify three items in my cart


