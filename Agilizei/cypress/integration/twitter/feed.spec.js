/// <reference types="cypress" />

describe('Twitter Clone', () => {
    
    context('Login', () => {
        it('Quando estiver autenticado, devo visualizar o menu navegável', () => {
            cy.visit('https://twitter-clone-example.herokuapp.com/')
            cy.get('input[type=email]').type('ammmayara@hotmail.com')
            cy.get('input[type=password]').type('123456')
            cy.contains('button[type=submit]', 'Login').click()
        });
        
    });
    
});