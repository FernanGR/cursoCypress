/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
describe("Nueva sección Checkbox ", ()=>{

    it("Check uno ",()=>{

        cy.visit("https://demoqa.com/automation-practice-form");
        
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)

        cy.get("[type='checkbox']").check({force:true}).should("be.checked")
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck({force:true}).should("not.be.checked")



    })


    it("Check por seleccion ",()=>{

        cy.visit("https://demoqa.com/automation-practice-form");
        
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)

        // cy.get("#hobbies-checkbox-1").check({force:true}).should("be.checked")
        // cy.wait(1000)
        // cy.get("#hobbies-checkbox-1").uncheck({force:true}).should("not.be.checked")
        
        
        cy.get("#hobbies-checkbox-1").click({force:true})
        cy.wait(1000)
        cy.get("#hobbies-checkbox-1").click({force:true})
 
     })


     it.only("Radio Button ",()=>{
        // cy.pause()
        cy.visit("https://demoqa.com/automation-practice-form");
        
        cy.title().should("eq",'ToolsQA')
        // .debug()
        cy.wait(1000)
 
        
        cy.get("#gender-radio-1").check({force:true})
        cy.wait(1000)
        cy.get("#gender-radio-2").click({force:true})
     })
 

}) // cierre describe
 