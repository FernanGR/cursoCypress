/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';

describe(" ", ()=>{

    it(" ", ()=>{
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        const ruta = "imgcy.jpg"
        cy.get("[type='file']").attachFile(ruta)
        cy.wait(1000)
        
    })
 

}) // cierre describe
 