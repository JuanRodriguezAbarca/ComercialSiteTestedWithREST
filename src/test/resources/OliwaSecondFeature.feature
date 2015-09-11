@TestingREST
Feature: Feature wich makes some tests to the http://www.olivagourmet.pl web site

  Scenario Outline: Selecting one single product and adding to the cart and checking the prices
    Given I order one single Sierra Solana product '<product>'
    Then product '<product>' should be added to the Cart with the correct price
    Examples:
      | product |
      | 18      |
      | 15      |
      | 12      |
      | 20      |
      | 44      |


  Scenario Outline: Selecting product by product, adding to the cart and checking the names
    Given I order one single Sierra Solana product '<product>'
    Then product '<product>' should be added to the Cart with the correct name
    Examples:
      | product |
      | 18      |
      | 15      |
      | 12      |
      | 20      |
      | 44      |


  Scenario Outline: Selecting different products adding to the cart, verifying the total sum
    Given I order three products: '<product1>', '<product2>' and '<product3>' and are added to the cart
    Then the total price should be correct calculated for the products '<product1>', '<product2>' and '<product3>'
    Examples:
      | product1 | product2 | product3 |
      | 44       | 18       | 12       |
      | 15       | 44       | 20       |
      | 12       | 20       | 18       |