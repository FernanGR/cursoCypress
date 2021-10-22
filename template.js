/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

describe(" ", ()=>{

    it(" ", ()=>{
        cy.visit("https://demoqa.com/webtables");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

    })
 

}) // cierre describe
 


//

cy.visit("https://demoqa.com/select-menu");
        
cy.title().should("eq",'ToolsQA') // titulo es mismo (comprobar web)
cy.wait(1000)


cy.get("#oldSelectMenu").should("be.visible").  //id y si es visible
select("Black") // selecciona del select

cy.get("#oldSelectMenu").should("be.visible").
select("Indigo").should("have.value","8") //si tiene valor 8


/// tabs y escribir 

cy.get("#firstName").type("Fernando").tab().
type("GR").tab().
type("gr@gmail.com")

// then  
cy.get("#cars").should("be.visible").select(["Saab","Opel"]).
then(()=>{
    cy.wait(1000)
    cy.get("#cars").should("be.visible").select(["Audi","Volvo"])
    .then(()=>{
        cy.wait(1000)
        cy.get("#oldSelectMenu").should("be.visible").
        select("Aqua")
        cy.get("#cars").should("be.visible").select(["Opel"])

    })
})

// if else  logs

cy.get("#our_price_display").then((e)=>{
    cy.log(e.text())
    let precio = e.text()
    precio = precio.slice(1,3)
    cy.log(precio)
    if(precio > 30){
        cy.log("El precio pasa del presupuesto")
        cy.xpath("//*[@id='columns']/div[1]/a[2]").click()
        cy.wait(2000)
        
    }else{
        cy.log("Continua con la compra")
        cy.get("#add_to_cart").click()
        cy.wait(2000)
    }
})

//invoke

cy.get("#sum1").invoke("attr","style","color:blue")

//subir archivos ruta
cy.get("[type='file']").attachFile(ruta)
