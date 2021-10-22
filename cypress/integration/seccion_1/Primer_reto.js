/// <reference types="cypress" />

require('cypress-plugin-tab') //tabs

describe(" ", ()=>{

    it("Type pageDown", ()=>{
        cy.visit("https://demoqa.com/webtables");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
 
        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1000);
        cy.get("#searchBox").should("be.visible").clear()
        cy.wait(1000)


        //agregando campo
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000);

        // con id//
        // cy.get("#firstName").should("be.visible").type("juan")
        // cy.get("#lastName").should("be.visible").type("gr")
        // cy.get("#userEmail").should("be.visible").type("jgr@gmail.com")
        // cy.get("#age").should("be.visible").type("33")
        // cy.get("#salary").should("be.visible").type("1500")
        // cy.get("#department").should("be.visible").type("IT")
        // cy.get("#submit").should("be.visible").click()
        
        //con tabs//
        cy.get("#firstName").should("be.visible").type("juan").
        tab().type("gr").
        tab().type("jgr@gmail.com").
        tab().type("33").
        tab().type("1500").
        tab().type("IT")
        cy.get("#submit").should("be.visible").click()
        cy.wait(1500)
        //buscar juan
        cy.get("#searchBox").should("be.visible").type("Juan")
        cy.wait(1000);
        cy.get("#searchBox").should("be.visible").clear()
        cy.wait(1000)
        
        //Editar un campo
        cy.get("#edit-record-2 > svg").click()
        cy.wait(1000)
        cy.get("#userEmail").should("be.visible").clear().type("acaden@gmail.com")
        cy.get("#age").should("be.visible").type("44")
        cy.get("#salary").should("be.visible").clear().type("15000")
        cy.get("#department").should("be.visible").clear().type("IT")
        cy.get("#submit").should("be.visible").click()
        

        //Borrando el campo
        cy.wait(2000)
        cy.get("#delete-record-4 > svg > path").click()
    })

}) // cierre describe
 