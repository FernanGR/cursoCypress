/// <reference types="cypress" />

require('cypress-xpath')

describe("Selectores ", ()=>{

    it("Selector por id ", ()=>{
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
 
        cy.get("#userName").should("be.visible").type("Carlos")
        cy.get("#userEmail").should("be.visible").type("carlos@gg.c")

    })
    
    //selector por atributo
    it("Selector por atributo ", ()=>{
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
 
        cy.get("[placeholder='Full Name']").should("be.visible").type("Carlos")
    })
    
    
    it("Selector por xpath ", ()=>{
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
    
        cy.xpath("//*[@id='userName']").should("be.visible").type("Juan p")
        cy.xpath("(//input[@id='userEmail'])[1]").should("be.visible").type("Juanp@gg.com")
        cy.wait(1000)
        cy.xpath("//textarea[@id='currentAddress']").should("be.visible").type("direccion")
    })


    it("Selector por contains ", ()=>{
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
    
        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
        cy.wait(1000)
        
    })


    it.only("Selector por copy_selector ", ()=>{
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userEmail").should("be.visible").type("23123")
        cy.wait(1000)
     
        
    })




}) // cierre describe
