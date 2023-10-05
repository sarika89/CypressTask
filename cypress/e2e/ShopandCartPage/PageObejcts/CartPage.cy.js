class CartPage {
    viewCartPage(){
        cy.visit("https://cms.demo.katalon.com/cart"); // Navigates to Cart page

    }
  visitcartAfteraddingRandomEle() {
    cy.get("table")
      .find('tr[class="woocommerce-cart-form__cart-item cart_item"]')
      .should("have.length", 4); //Validating the count after adding Random Element to a cart
  }
  minamountEle() {
    cy.getCartPrices().then((cartPrices) => {
      // Find the minimum price using JavaScript
      const minPrice = Math.min(...cartPrices);

      // Log the minimum price to the Cypress command log
      cy.log(`The minimum price in the cart is $${minPrice.toFixed(2)}`);
    });
  

//Delete the minimum price item in cart  
  
      const index = cartPrices.indexOf(minPrice);
      cy.log(index);
      cy.get(
        'table[class="shop_table shop_table_responsive cart woocommerce-cart-form__contents"] tr[class="woocommerce-cart-form__cart-item cart_item"]'
      )
        .eq(index)
        .then(($item) => {
          cy.wrap($item).find("a.remove").click(); //Clicking on Delete Icon
        });
    }
  

  validateCountafterdeleting() {
    cy.get("table")
      .find('tr[class="woocommerce-cart-form__cart-item cart_item"]')
      .should("have.length", 3); //After deleting the minimum amount, validating the count of elements in the cart should be 3
  }

}
module.exports = {CartPage}