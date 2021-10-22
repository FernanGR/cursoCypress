/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

describe("cypress eventos Mouse ", ()=>{

    it("Drag and Drop", ()=>{
        let tiempo = 1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
        cy.title().should('eq','The Internet')
        cy.wait(tiempo)

        cy.get("#column-a").drag("#column-b")


    })

    it.only("Drag and Drop", ()=>{
        let tiempo = 1000
        cy.visit("https://www.way2automation.com/");
        cy.title().should('eq','Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial')
        cy.wait(tiempo)

        cy.get("#menu-item-25089 > [href='https://www.selenium-tutorial.com/courses/'] > .menu-text").contains("Video Tutorial").trigger("mouseover")
        
        cy.get("#slider >.range >input").invoke("attr","value","80")
    })
 

}) // cierre describe