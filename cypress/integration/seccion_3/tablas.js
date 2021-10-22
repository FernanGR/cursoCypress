/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

describe("tablas ", ()=>{

    it("children ", ()=>{
        cy.visit("https://demoqa.com/webtables");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

    })
 

}) // cierre describe
 
