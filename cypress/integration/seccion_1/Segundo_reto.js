/// <reference types="cypress" />
require('cypress-plugin-tab')
require('cypress-xpath')

describe(" ", ()=>{


    it.only("Selector por copy_selector ", ()=>{
        cy.visit("https://computer-database.gatling.io/computers");
        cy.title().should('eq','Computers database')
        cy.wait(1000)

        cy.xpath("//input[@id='searchbox']").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)
        
        //add
        cy.get("#add").should("be.visible").click()
        cy.get("#name").should("be.visible").type("cypress")
        cy.get("[name='introduced']").should("be.visible").type("2021-03-15").
        tab().type("2025-03-15")
        //combo
        cy.get("#company").should("be.visible").select("Nokia").
        should("have.value","16").wait(1500)
        cy.get(".primary").should("be.visible").click()
        cy.wait(1000)
        cy.xpath("//input[@id='searchbox']").type("cypress")
        cy.get("#searchsubmit").should("be.visible").click()
    })

}) // cierre describe
 