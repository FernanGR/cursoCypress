/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
require('@4tw/cypress-drag-drop')

describe("Snippets ", ()=>{

    it("Snippets uno ", ()=>{
        let tiempo = 800;
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get("#userName").should("be.visible").click({force:true})
        cy.wait(tiempo)

        cy.get("#userName").should("be.visible").type("Rodriguez")

        cy.get('').should('be.visible').type('')
        cy.wait(tiempo)

    })
 

}) // cierre describe

 