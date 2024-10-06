class locatorsPage {
  /******************************************
     *  Case Register locators  *
     * ****************************************/
  
  PhoneNumber = "//input[@placeholder='Mobile Number/Email']"
  Password = "//input[@placeholder='Password']"
  Login = "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-text custom-buttons']"
  
  Smartphone = "//div[@class='home-banner__menu']//a[@class='a-tag'][normalize-space()='Smartphones']"
  CameraPhone = "//section[@class='ProductTwo__StyledProductTwo-sc-1cxokfi-0 fwGDQy product-layout-two pt-30 pb-30']//div[@class='row']//div[1]//div[1]//div[1]//img[1]"
  FirstCP = "//div[@class='row']//div[1]//div[1]//a[1]//div[1]//div[1]//div[2]"
  SelectColour = "//div[@class='views']//div[1]//center[1]//img[1]"
  AddToCart = "//span[normalize-space()='ADD TO CART']"
  Cart = "//p[normalize-space()='cart']"
  ProceedCheckout = "//span[normalize-space()='Proceed to checkout']"
  Continue = "//span[normalize-space()='CONTINUE']"

  SearchKeyword = "//div[@class='menu-search col']//input[@placeholder='Search for products, brands and more']"
  SearchButton = "//button[@type='submit']"
  FirstSearchProduct = "//div[@class='row']//div[1]//div[1]//a[1]//div[1]//div[1]//div[2]"

  SpecificProduct = "//a[@href='/product/top-smartwatch/']//div[@class='offer-category__single__inner a-tag']//div[@class='offer-category__single__inner__content']"
  RemoveProduct = "(//div[@class='save-button' and text()='Remove'])[1]"

}
export default locatorsPage;