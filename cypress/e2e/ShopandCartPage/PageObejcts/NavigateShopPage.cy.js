class NavigateShopePage {
  clickonRandomEle() {
    cy.visit("https://cms.demo.katalon.com/");

    for (let i = 0; i < 4; i++) {
      // Finding the length of a element list and iterate thorugh it to click on Random element using Random Function
      cy.get('div[class="columns-3"]')
        .find('ul[class="products columns-3"]')
        .find("li")
        .find(
          'a[class="button product_type_simple add_to_cart_button ajax_add_to_cart"]'
        )
        .its("length")
        .then(($itemnum) => {
          cy.get(
            'a[class="button product_type_simple add_to_cart_button ajax_add_to_cart"]'
          )
            .eq(Math.floor(Math.random() * $itemnum))
            .should("have.text", "Add to cart")
            .click(); //Here the random element is clicked and added to a cart
        });
    }
    
  }
}
module.exports = {NavigateShopePage}