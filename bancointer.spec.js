///<reference types="cypress"/>



describe('cypress basico',()=>{

    it('Acessar a pagina e validar o titulo',()=>{
    
        //visitando a URL
        cy.visit('https://www.bancointer.com.br')
    
        //validando o titulo da pagina
        cy.title().should('be.equal',"Inter. Simplifica a vida.")
    
        //validando palavras contidas no titulo da pagina
        cy.title().should('contains','vida')
    
        //clicando no "ok"
        cy.screenshot('Click OK')
        cy.get('#onetrust-accept-btn-handler').click()
    
        //clicando no "abra sua conta"
        cy.get('.styles__ButtonsWrapper-sc-1gbjc3e-9 > :nth-child(1)').click()
    
        //preenchendo o formulario de abertura de conta
        cy.get('#nome').type('Flash Code')
        cy.get('#celular').type('75981111011')
        cy.get('#email').type('aprendendocypress@gmail.com')
        cy.get('#cpf').type('29539138078')
        cy.get('#dataNascimento').type('25101999')
        cy.screenshot('Click Formulario')
        cy.get('.form-label-check').click()
        cy.get('.text-center > .d-none > .btn').click()
    
        //validando o texto de confirmação de abertura de conta
        cy.get('.text-center > .fs-md-16').should('contain','dados')
    
        //tirando print da confirmação de abertura de conta
        cy.screenshot('Aprendendo Cypress')
    
    })
    
    
    })