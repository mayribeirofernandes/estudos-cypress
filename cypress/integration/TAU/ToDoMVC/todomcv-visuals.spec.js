/// <reference types="cypress" />

import * as todoPage from "./page-objects/todo-page-functions";

describe('Visual Validation with Applitools Eyes Cypress', () => {
    
    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hey!'}))

    afterEach(() => cy.eyesClose())

    it('Should Look Good', () => {
        cy.eyesCheckWindow('empty todo list')
        todoPage.addTodo('Estudar Cypress')
        todoPage.addTodo('Estudar Python')
        todoPage.addTodo('Estudar TDD')
        cy.eyesCheckWindow('two todos')
        todoPage.markToDoItemAsCompleted(2)
        cy.eyesCheckWindow('mark as completed')
    });
    
});