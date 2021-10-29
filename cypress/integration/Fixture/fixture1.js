/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
require('@4tw/cypress-drag-drop')


describe('descripcion', ()=>{

    let tiempo = 800;
    before(() => {
    //    cy.fixture("datos2").then((data)=>{
    //        globalThis.data = data;
    //    }),
       cy.fixture("datos3").then((data)=>{
        globalThis.data = data;
        })
    })


    it('Test uno cargando desde json', ()=>{
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
        cy.get('#userName').should('be.visible').type(data.nombre)
        cy.wait(tiempo)
        cy.get('#userEmail').should('be.visible').type(data.email)
        cy.wait(tiempo)
        cy.get('#currentAddress').should('be.visible').type(data.dir1)
        cy.wait(tiempo)
        cy.get('#permanentAddress').should('be.visible').type(data.dir2)
        cy.wait(tiempo)
        cy.get('#submit').should('be.visible').click({force:true})
        cy.wait(tiempo)

    })
  
    it.only('Test uno cargando desde json', ()=>{
        cy.fixture("datos3").then((dataTest)=>{
          
            dataTest.forEach(data => {
                const d_nombre = data.nombre;
                const d_email = data.email;
                const d_dir1 = data.dir1;
                const d_dir2 = data.dir2;
                
                cy.visit('https://demoqa.com/text-box');
                cy.title().should('eq','ToolsQA')
                cy.wait(tiempo)
                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.wait(tiempo)
                cy.get('#userEmail').should('be.visible').type(d_email)
                cy.wait(tiempo)
                cy.get('#currentAddress').should('be.visible').type(d_dir1)
                cy.wait(tiempo)
                cy.get('#permanentAddress').should('be.visible').type(d_dir2)
                cy.wait(tiempo)
                cy.get('#submit').should('be.visible').click({force:true})
                cy.wait(tiempo)
            })
            
        })
    })
        
        
})