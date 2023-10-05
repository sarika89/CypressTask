import { Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import { NavigateShopePage } from "../../e2e/ShopandCartPage/PageObjects/NavigateShopPage.cy"
import { CartPage } from "../../e2e/ShopandCartPage/PageObjects/CartPage.cy"
const cartpage = new CartPage();
Given('I add four random items to my cart',()=>{
  
  const randomEleclick = new NavigateShopePage()
  randomEleclick.clickonRandomEle()

  })  
  When('I view my cart',()=>{
      cartpage.viewCartPage()
  })
  
  Then('I found total four items listed in my cart',()=>{
      cartpage.visitcartAfteraddingRandomEle()

  })

  When('I search for lowestprice item',() => {
    cartpage.minamountEle()
  })
    
    And('Iam able to remove the lowest price item from my cart',() => {
      cartpage.minamountEle()
    })
    
  
  Then('Iam able to verify three items in my cart',() => {
      cartpage.validateCountafterdeleting()
  })
