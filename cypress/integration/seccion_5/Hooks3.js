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
        cy.visit('url web');
        cy.title().should('eq','title')
        cy.wait(tiempo)
    })
    it('descripcion', ()=>{

    })

})