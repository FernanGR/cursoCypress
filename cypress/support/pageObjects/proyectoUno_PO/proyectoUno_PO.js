

class ProyectoUno_PO {

    visitHome(){
        let tiempo = 800;
        before(() => {
            cy.visit("http://automationpractice.com/index.php");
            cy.title().should("eq",'My Store')
            cy.wait(tiempo)
           
        })
    }
} //final

export default ProyectoUno_PO;
