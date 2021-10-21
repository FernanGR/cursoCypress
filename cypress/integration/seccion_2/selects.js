/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
describe("Nueva sección Selects ", ()=>{
 
 

     it("Select uno ",()=>{

        cy.visit("https://demoqa.com/select-menu");
        
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)
 
        
        cy.get("#oldSelectMenu").should("be.visible").
        select("Black")
        cy.wait(2000)
        cy.get("#oldSelectMenu").should("be.visible").
        select("Indigo").should("have.value","8")
   
     })

     it("Select dos ",()=>{

        cy.visit("https://www.google.es/");
        
        cy.title().should("eq",'Google')
        cy.wait(1000)
 
        cy.get("#L2AGLb").click()
        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        cy.get("#hdtb-msb > div:nth-child(1) > div > div:nth-child(2) > a").click()
        

     })

     it.only("Opción multi-select ",()=>{

        cy.visit("https://demoqa.com/select-menu");
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)
                 
        cy.get("#cars").should("be.visible").select(["Saab","Opel"]).
        then(()=>{
            cy.wait(1000)
            cy.get("#cars").should("be.visible").select("Audi")
        })
  
     })
 

}) // cierre describe
 