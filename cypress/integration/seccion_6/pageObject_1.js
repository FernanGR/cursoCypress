
/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO';
require('@4tw/cypress-drag-drop')


describe('Page objects Models', ()=>{

    const master = new ProyectoUno_PO()

    master.visitHome()

    Cypress.on('uncaught:exception', (err,runnable)=>{
        return false
    })
    it('Test uno', ()=>{
        console.log("hola")
    })

})