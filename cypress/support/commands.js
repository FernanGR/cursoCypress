// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Texto_visible', (selector,texto,t) => {
    let tiempo = t
    cy.get(selector).should('be.visible').clear().type(texto)
    cy.wait(tiempo)
 })

Cypress.Commands.add('Texto_visible_xpath', (selector,texto,t) => {
    let tiempo = t
    cy.xpath(selector).should('be.visible').clear().type(texto)
    cy.wait(tiempo)
 })


Cypress.Commands.add('Click', (selector,t) => {
    let tiempo = t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)     
 })
 
Cypress.Commands.add('Click_force', (selector,t) => {
    let tiempo = t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)     
 })

Cypress.Commands.add('Click_force_xpath', (selector,t) => {
    let tiempo = t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)     
 })




 // Funciones por conjunto o completas
//creando la funcion ToolsQA

 
Cypress.Commands.add('Bloque_ToolsQA', (name,email,dir1,dir2) => { 
    cy.Texto_visible("#userName",name,1000)
    cy.Texto_visible("#userEmail",email,1000)
    cy.Texto_visible_xpath("//textarea[@id='currentAddress']",dir1,1000)
    cy.Texto_visible_xpath("//textarea[@id='permanentAddress']",dir2,1000)

    cy.Click_force("#submit",1000)
})

Cypress.Commands.add('Validar_campoEmail', (selector,msg,nombre_campo,t) => { 
    let dato = val.texto()
    let mensaje = msg
    cy.log(dato)
    expect(dato).to.equal(mensaje)
    if(dato==mensaje){
        cy.log("#############")
        cy.log("El " + nombre_campo + " no es valido")
        cy.log("#############")
    }
})

