Feature: Open Pickaboo End to End

Background: Open Website With Valid url
    Given Open Browser and Visit Website
    # When Enter the user login with valid Phone Number & password
    # Then Click on Login Button with Valid Phone Number & Password
      
Scenario: Verify that the Smartphone section is displayed properly
    When Click on Smartphones
    Then Click on Camera Phone
    Then Click on First Camera Phone
    Then Click on Selected Colour
    Then Click on Add To Cart
    Then Click on Cart option
    Then Click on Proceed to Checkout
    Then Click on Continue
    
Scenario: Verify that the Search product is displayed properly
    When Input a product name
    Then Click on Search Button
    Then Click on first search product
    Then Click on Selected Colour
    Then Click on Add To Cart
    Then Click on Cart option
    Then Click on Proceed to Checkout
    Then Click on Continue
    
Scenario: Verify that the product is removed properly
    When Click on a specific product
    Then Click on first specific product
    Then Click on Add To Cart
    Then Click on Cart option
    Then Click on a remove product
    Then Click on Proceed to Checkout
    Then Click on Continue