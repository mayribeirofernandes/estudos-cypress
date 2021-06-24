/// <reference types="cypress" />

describe('Filtering ToDo Items', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("Estudar Cypress{enter}")
        cy.get('.new-todo').type("Estudar Python{enter}")
        cy.get('.new-todo').type("Estudar TDD{enter}")
        cy.get('.todo-list li:nth-child(2) .toggle').click()
    });
    it('Should filter "All" ToDo items', () => {
        cy.contains('All').click()
        cy.get('.selected').should('have.text','All')
        cy.get('.todo-list li').should('have.length', 3)
        cy.contains('2 items left')
    });        
    it('Should filter "Active" ToDo items', () => {
        cy.contains('Active').click()
        cy.get('.selected').should('have.text','Active')
        cy.get('.todo-list li').should('have.length', 2)
        cy.contains('2 items left')
    });

    it('Should filter "Completed" ToDo items', () => {
        cy.contains('Completed').click()
        cy.get('.selected').should('have.text','Completed')
        cy.get('.todo-list li').should('have.length', 1)
        cy.contains('2 items left')
    });    
}); 