/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
require('@4tw/cypress-drag-drop')


describe('Hooks', ()=>{

        let tiempo = 800;

        before(() => {
            cy.visit("https://demoqa.com/checkbox");
            cy.title().should('eq','ToolsQA')
            cy.wait(tiempo)
        })
        
         
        it('click abrir', ()=>{
            cy.get('#tree-node > ol > li > span > button > svg').should('be.visible').click({force:true})
            cy.wait(tiempo)
    
        })
        it('click abrir2', ()=>{
            cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse > .rct-icon').should('be.visible').click({force:true})
            cy.wait(tiempo)
    
        })

        it('check', ()=>{
            cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon > path').check()
            cy.wait(tiempo)
    
        })
       
       
        it('test tres', ()=>{
            cy.log('test tres')
    
        })
       
       
        it('test cuatro', ()=>{
            cy.log('test cuatro')
    
        })

  


})