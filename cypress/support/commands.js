// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// *** Custom command for getting cart prices 

Cypress.Commands.add('getCartPrices', () => {
    const cartPrices = [];
  
cy.get('table').find('tr[class="woocommerce-cart-form__cart-item cart_item"]').find('td[class="product-price"]').find('span[class="woocommerce-Price-amount amount"]').each(($price) => {
    const priceText = $price.text();
    const priceValue = parseFloat(priceText.replace('$', '').replace(',', '')); // Adjust for your currency format
    cartPrices.push(priceValue);
  });

  return cy.wrap(cartPrices); // returning all the values in a cart
});
