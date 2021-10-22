/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
describe("Asserts ", ()=>{
 
 

    it("Asserts contain ",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq",'My Store')
        cy.wait(1000)
       
        cy.get("#block_top_menu").contains("Women").click()
        
     })

    it("Asserts find, eq ",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq",'My Store')
        cy.wait(1000)
       
        cy.get(".product-container").find(".product-image-container").eq(2).click()
        // cy.get("#block_top_menu").contains("Women").click()
        
     })


    it("Asserts find, eq, validando vestido nuevo ",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq",'My Store')
        cy.wait(1000)

        //clickea imagen 2
        cy.get(".product-container").find(".product-image-container").eq(3).click()
        
        //condicion
        cy.get("#product_condition .editable").then((e)=>{
            // cy.log(e.text())
            let estado=e.text();
            // cy.log(estado)
            if(estado === "New"){
                cy.log("El vestido es Nuevo")
            }            
        })
        //precio
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
        
     })

     it("Asserts contain.text y have.text ",()=>{

        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("rodrigo")
        cy.get("#userEmail").should("be.visible").type("rodri@gg.com")
        cy.get("#submit").should("be.visible").click()

        cy.get("#name").should("have.text","Name:rodrigo")
        cy.get("#name").should("contain.text","rodrigo")
        
     })

     it("Asserts contain.text y then ",()=>{

        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("rodrigo")
        // cy.get("#userName").should("have.value","rodrigo") // exacto
        cy.get("#userName").should("contain.value","rodrigo") // solo contiene
            .then(()=>{
                cy.get("#userEmail").should("be.visible").type("rodri@gg.com")
                cy.get("#submit").should("be.visible").click()

            })

        cy.get("#name").should("have.text","Name:rodrigo")
        cy.get("#name").should("contain.text","rodrigo")
        
     })
 

     it("Asserts  ",()=>{

        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").should("have.class","mr-sm-2")
            .then(()=>{
                cy.get("#userName").type("rodrigo")

            })
       
     })


     it("Asserts have.class y and ",()=>{

        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").and("have.class","mr-sm-2")
            .then(()=>{
                cy.get("#userName").type("rodrigo")

            })
       
     })


     it("Asserts  tabla length y css",()=>{

        cy.visit("https://demoqa.com/webtables");
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)

        //ver cuantos elementos
        cy.get("#myTable >tr >td").should("have.length",91).and("have.css","padding","8px")
       
     })

     it.only("Asserts  tabla length y css",()=>{

        cy.visit("https://demoqa.com/webtables");
        cy.title().should("eq",'ToolsQA')
        cy.wait(1000)

        //ver cuantos elementos
        cy.get("#myTable >tr >td").should("have.length",91).and("have.css","padding","8px")
       
     })

}) // cierre describe
 