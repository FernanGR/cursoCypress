/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
require('@4tw/cypress-drag-drop')


describe('Comandos personalizados', ()=>{

    let tiempo = 800;
    before(() => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
    })
    it('Demo uno', ()=>{
        cy.Texto_visible("#userName","Juan",1000)
        cy.Texto_visible("#userEmail","juan@gmail.com",1000)
        cy.Validar_campoEmail("#userEmail","please email valid","juan@gmail",1000)
        cy.Texto_visible_xpath("//textarea[@id='currentAddress']","Dirección uno",1000)
        cy.Texto_visible_xpath("//textarea[@id='permanentAddress']","Dirección dos",1000)

        cy.Click("#submit",1000)
        cy.Click_force("#submit",1000)
        cy.Click_force_xpath("//button[@id='submit']",1000)
    })

    it.only('Demo bloque', ()=>{
         cy.Bloque_ToolsQA("juanito","jnt@gmail","direccion uno","direccion dos");

    })

 
})