/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';

describe("Alertas en cypress ", ()=>{

    it("Alerta ", ()=>{
        cy.visit("https://demoqa.com/alerts");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#alertButton").should("be.visible").as("boton") // alias
        cy.get("@boton").click({force:true});


    })
 

}) // cierre describe