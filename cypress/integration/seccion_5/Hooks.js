/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
require('@4tw/cypress-drag-drop')


describe('Hooks', ()=>{
  
        before(() => {
            cy.log("################### Principio de todo #####################")
        })
        
        beforeEach(() => {
            cy.log("Esto se repite en cada uno de los test muy importantes")
          })
          
        afterEach(() => {
            cy.log("Esto se hace al final de todos los test")
        })
          
        after(() => {
            cy.log("################### Final de todo #####################")
        })

        it('test uno', ()=>{
            cy.log('test uno')
    
        })

        it('test dos', ()=>{
            cy.log('test dos')
    
        })
       
       
        it('test tres', ()=>{
            cy.log('test tres')
    
        })
       
       
        it('test cuatro', ()=>{
            cy.log('test cuatro')
    
        })

  


})