/// <reference types="cypress" />

describe("Opciones de click  ", ()=>{

    it("Click sencillo ", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.wait(1000)
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1000)
        
        cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
        cy.wait(1000)
        cy.get("#menu_leave_viewLeaveModule ").should("be.visible").click()
        cy.wait(1000)
    })

    it("Click Force true ", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.wait(1000)
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1000)
        
        cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
        cy.wait(1000)
        cy.get("#menu_leave_viewLeaveModule ").should("be.visible").click({force:true})
        cy.wait(1000)


    })

    it.only("Click por coordenadas (x,y) ", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("#txtUsername").should("be.visible").type("Admin")
        cy.wait(1000)
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.wait(1000)
        cy.get("#btnLogin").should("be.visible").click()
        cy.wait(1500)
         
        cy.get("#branding").should("be.visible").click(50,15)
        cy.get("#branding").should("be.visible").click(60,5)


    })
 

}) // cierre describe
 