import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
import 'cypress-file-upload';

Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();


Given('Open Browser and Visit Website',()=> {
    cy.visit(data.pickaboo_url);
    });

When('Enter the user login with valid Phone Number & password', () => {
    cy.wait(2000);
    cy.xpath(locator.PhoneNumber).should('be.visible')
    cy.xpath(locator.PhoneNumber).type('01749653931'); // Access email using index [0]
    cy.xpath(locator.Password).should('be.visible')
    cy.xpath(locator.Password).type('sadi1234'); // Access password using index [0]
    });

Then('Click on Login Button with Valid Phone Number & Password',  ()=> {
    cy.wait(2000);
    cy.xpath(locator.Login).should('contain','Login')
    cy.xpath(locator.Login).should('be.visible')
    cy.xpath(locator.Login).click()
    });


//Test Case 1 [Smartphone.feature]------------------------------------------------------------------------------------------

When('Click on Smartphones', () => {
    cy.wait(2000);
    cy.xpath(locator.Smartphone).should('contain','Smartphone')
    cy.xpath(locator.Smartphone).should('be.visible')
    cy.xpath(locator.Smartphone).click({force:true});
    });

Then('Click on Camera Phone', ()=> {
    cy.wait(2000);
    cy.xpath(locator.CameraPhone).should('be.visible')
    cy.xpath(locator.CameraPhone).click()
  });

Then('Click on First Camera Phone', ()=> {
    cy.wait(2000);
    cy.xpath(locator.FirstCP).should('be.visible')
    cy.xpath(locator.FirstCP).click()
    });

Then('Click on Selected Colour', ()=> {
    cy.wait(2000);
    cy.xpath(locator.SelectColour).should('be.visible')
    cy.xpath(locator.SelectColour).click()
    });

Then('Click on Add To Cart', ()=> {
    cy.wait(2000);
    cy.xpath(locator.AddToCart).should('be.visible')
    cy.xpath(locator.AddToCart).click()
    });
    
Then('Click on Cart option', ()=> {
    cy.wait(2000);
    cy.xpath(locator.Cart).should('be.visible')
    cy.xpath(locator.Cart).click()
    });

Then('Click on Proceed to Checkout', ()=> {
    cy.wait(2000);
    cy.xpath(locator.ProceedCheckout).should('be.visible')
    cy.xpath(locator.ProceedCheckout).click()
    });
        
Then('Click on Continue', ()=> {
    cy.wait(2000);
    cy.xpath(locator.Continue).should('be.visible')
    cy.xpath(locator.Continue).click()
    });


//Test Case 2 [Smartphone.feature]------------------------------------------------------------------------------------------

When('Input a product name', () => {
    cy.wait(2000);
    cy.xpath(locator.SearchKeyword).should('be.visible')
    cy.xpath(locator.SearchKeyword).type('Mobile');
    cy.xpath(locator.SearchKeyword).click()
    });

Then('Click on Search Button', ()=> {
    cy.wait(2000);
    cy.xpath(locator.SearchButton).should('be.visible')
    cy.xpath(locator.SearchButton).click()
    });

Then('Click on first search product', ()=> {
    cy.wait(2000);
    cy.xpath(locator.FirstSearchProduct).should('be.visible')
    cy.xpath(locator.FirstSearchProduct).click()
    });
    
    
//Test Case 3 [Smartphone.feature]------------------------------------------------------------------------------------------

When('Click on a specific product', () => {
    cy.wait(2000);
    cy.xpath(locator.SpecificProduct).should('be.visible')
    cy.xpath(locator.SpecificProduct).click()
    });

Then('Click on first specific product', ()=> {
    cy.wait(2000);
    cy.xpath(locator.FirstCP).should('be.visible')
    cy.xpath(locator.FirstCP).click()
    });
        
Then('Click on a remove product', ()=> {
    cy.wait(2000);
    cy.xpath(locator.RemoveProduct).should('be.visible')
    cy.xpath(locator.RemoveProduct).click()
    });
            
    
