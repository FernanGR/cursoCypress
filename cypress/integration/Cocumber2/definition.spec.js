Given ("Abrir el navegador principal",()=>{
    cy.visit("https://demoqa.com/text-box");
})

When ("Cargando el nombre {word}",(Name)=>{
    cy.get('#userName').should('be.visible').type(Name)
    cy.wait(500)
})

When ("Cargando el email {word}",(email)=>{
    cy.get('#userEmail').should('be.visible').type(email)
    cy.wait(500)
})

And ("Cargando la Dirección {word}",(dir1)=>{
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.wait(500)
})

Then ("Validar el nombre de la Página",()=>{
    cy.title().should('eq','ToolsQA')
    cy.wait(500)
})

 