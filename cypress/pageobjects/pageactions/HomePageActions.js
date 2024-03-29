/// <reference types="cypress" />

import HomePageElements from '../pageelements/HomePageElements'

export default class HomePageActions{



    constructor(){

        globalThis.homepageelement = new HomePageElements()
    }


    navigateToURL(){

        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')

    }

    validateTitle(){

        return cy.title()
    }

    loginAsBankManager(){

        homepageelement.bankManagerLoginBtn().click()

    }


    loginAsCustomer(){

        homepageelement.customerLoginBtn().click()
    }


}