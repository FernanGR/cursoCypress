/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
describe("Nueva sección Selects ", ()=>{
 
 

    it.only("Opción multi-select ",()=>{

        cy.visit("https://demoqa.com/select-menu");
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)
                 
        cy.xpath("//*[@id='withOptGroup']/div/div[1]/div[1]").
        should("be.visible")

        cy.get("#oldSelectMenu").should("be.visible").
        select("Black")

        cy.get("#cars").should("be.visible").select(["Saab","Opel"]).
        then(()=>{
            cy.wait(1000)
            cy.get("#cars").should("be.visible").select(["Audi","Volvo"])
            .then(()=>{
                cy.wait(1000)
                cy.get("#oldSelectMenu").should("be.visible").
                select("Aqua")
                cy.get("#cars").should("be.visible").select(["Opel"])

            })
        })

  
     })
 

}) // cierre describe
 