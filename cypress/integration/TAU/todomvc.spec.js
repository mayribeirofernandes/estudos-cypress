/// <reference types="cypress" />

it('Should navigate to the TodoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
});

it('Should be able to add a new ToDo to the list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
    cy.get('.new-todo').type("Estudar Cypress{enter}")
});

it('Should be able to add a new ToDo to the list (with delay and timeout)', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')
    cy.get('.new-todo', {timeout: 6000}).type("Estudar Cypress{enter}")
});

it('Should be able to mark a ToDo item as completed', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
    cy.get('.new-todo').type("Estudar Cypress{enter}")
    cy.get('.toggle').click()
});

it.only('Should be able to clear items completed', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
    cy.get('.new-todo').type("Estudar Cypress{enter}")
    cy.get('label').should('have.text', 'Estudar Cypress')
    cy.get('.toggle').should('not.be.checked')
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
});
