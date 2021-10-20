

describe("Bienvenido al curso de Cypress seccion 1", ()=>{

    it("Mi primer Text -> Hola mundo", ()=>{
        cy.log("Hola mundo");
        cy.wait(3000);
    })

    it("Segundo test --> campo name", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get("#userName").type("Fernando")
        cy.wait(4000)
     })

     
}) // cierre describe