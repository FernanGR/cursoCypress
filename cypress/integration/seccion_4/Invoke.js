/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';

describe("Manejo de Invoke ", ()=>{

    it("Invoke uno", ()=>{
        let tiempo = 800;
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        
        cy.get("#userName-label").invoke("text").as("info");
        
        cy.get("@info").should("contain","Name")


    })


    it("Invoke text", ()=>{
        let tiempo = 800;
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        
        cy.get("#userName-label").invoke("text").as("title_name");     
        cy.get("@title_name").should("contain","Name").then(()=>{
            cy.get("#firstName").type("Rodrigo")
        })


    })


    it("Invoke stilos", ()=>{
        let tiempo = 800;
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        
        cy.get("#userName-label").invoke("attr","style","color:Blue; font-size:35px");     
         
    })


    it("Invoke ocultar y mostrar", ()=>{
        let tiempo = 800;
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get("#userEmail-wrapper > .col-md-3").invoke("hide")
        cy.get("#userEmail").invoke("hide")
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
        
        cy.get("#firstName").should("be.visible").type("Rodriguez")
        .then(()=>{
            cy.wait(tiempo)
            cy.get("#userEmail-wrapper > .col-md-3").invoke("show","3s")
            cy.get("#userEmail").invoke("show","3s")
            cy.get("#userEmail").type("ro@gmail.com")

        })
 
    })

    it("Invoke src", ()=>{
        let tiempo = 800;
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get("#userEmail-wrapper > .col-md-3").invoke("hide")
        cy.get("#userEmail").invoke("hide")
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
        
        cy.get("#app > header > a > img").invoke("attr","src").should("include","/images/Toolsqa.jpg")
      
         
    })
  
  
    it.only("Invoke target", ()=>{
        let tiempo = 800;
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get("#userEmail-wrapper > .col-md-3").invoke("hide")
        cy.get("#userEmail").invoke("hide")
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
        
        cy.get("#text-10 > div > div:nth-child(1) > a").invoke("removeAttr","target").click({force:true})
      
         
    })
 



}) // cierre describe