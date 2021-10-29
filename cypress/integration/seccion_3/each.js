/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';

describe("bucles for y each ", ()=>{

    it("Each uno ", ()=>{
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should('eq','My Store')
        cy.wait(1000)

        cy.get(".product-name").each(($el,index,$list)=>{
            // cy.log(index)
            //  cy.log($list)
            let vestido = $el.text()
            cy.log(vestido)
        })
    })
 
    it("Each dos ", ()=>{
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should('eq','My Store')
        cy.wait(1000)

        cy.get(".product-name").each(($el,index,$list)=>{
            // cy.log(index)
            //  cy.log($list)
            let vestido = $el.text()
            if(vestido.includes("Summer")){
                cy.wrap($el).click()
            }
        })
    })
 
    it("Each tres ", ()=>{
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should('eq','My Store')
        cy.wait(1000)

        cy.get(".product-name").each(($el,index,$list)=>{
            // cy.log(index)
            //  cy.log($list)
            let vestido = $el.text()
            if(vestido.includes("Summer")){
                cy.wrap($el).click()
            }
        })
        
    })
    
    
    it.only("Each 4 ", ()=>{
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should('eq','My Store')
        cy.wait(1000)
        
        const datos=[];
        cy.get(".product-name").each(($el,index,$list)=>{
            datos[index]=$el.text()

        }).then(()=>{
            for(let x = 0; x<=datos.length; x++){
                cy.get("#center_column .product-name").eq(x).click({force:true})
                cy.wait(100)
                cy.get("#quantity_wanted").should("be.visible").clear().type("5")
                cy.get("#group_1").select("M")
                .should("have.value","2")
                cy.get("#add_to_cart > button > span").should("be.visible").click({force:true})
                cy.get(".button-medium > span").should("be.visible").click({force:true})
                cy.wait(100)
                cy.get(".home").should("be.visible").click({force:true})
            }

        })
        cy.log(datos)


 
    })





}) // cierre describe