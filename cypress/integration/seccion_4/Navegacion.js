/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
require('@4tw/cypress-drag-drop')


describe('Navegación entre las páginas', ()=>{

    it('Back, forward', ()=>{
        let tiempo = 800;
        cy.visit('https://demoqa.com');
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible').click({force:true})
        cy.wait(tiempo)
        
        cy.go("back")
        cy.wait(tiempo)
        cy.go("back")
        
        cy.wait(tiempo)
        cy.go("forward")
        cy.wait(tiempo)
        cy.go("forward")
    
    })

    it.only('Reload', ()=>{
        let tiempo = 800;
        cy.visit('https://demoqa.com');
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force:true})
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible').click({force:true})
        cy.wait(tiempo)
        
         cy.get('#userName').should('be.visible').type('rodriguez')
         cy.wait(tiempo)

         cy.get('#userEmail').should('be.visible').type('gg@gmail.com')
         cy.wait(tiempo)

         cy.reload()
    })




})