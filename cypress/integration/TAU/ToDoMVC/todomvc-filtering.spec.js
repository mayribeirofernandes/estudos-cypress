/// <reference types="cypress" />

import { TodoPage } from "./page-objects/todo-page";

describe('ToDo Filtering', () => {

    context('Simple Model', () => {
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
            cy.contains('2 items left').should('be.visible')
        });        
        it('Should filter "Active" ToDo items', () => {
            cy.contains('Active').click()
            cy.get('.selected').should('have.text','Active')
            cy.get('.todo-list li').should('have.length', 2)
            cy.contains('2 items left').should('be.visible')
        });
    
        it('Should filter "Completed" ToDo items', () => {
            cy.contains('Completed').click()
            cy.get('.selected').should('have.text','Completed')
            cy.get('.todo-list li').should('have.length', 1)
            cy.contains('2 items left').should('be.visible')
        });
    });   
    
    context('Page Object Model', () => {
        
        const todoPage = new TodoPage()
        
        beforeEach(() => {
            todoPage.navigate()
            todoPage.addTodo('Estudar Cypress')
            todoPage.addTodo('Estudar Python')
            todoPage.addTodo('Estudar TDD')
            todoPage.markToDoItemasCompleted(2)
        });
        it('Should filter "All" ToDo items', () => {
            todoPage.clickFilter('All')
            todoPage.validateSelectedFilter('All')
            todoPage.validateNumberOfItemsListed(3)
            todoPage.validateLabelItemsLeft(2)
        });        
        it('Should filter "Active" ToDo items', () => {
            todoPage.clickFilter('Active')
            todoPage.validateSelectedFilter('Active')
            todoPage.validateNumberOfItemsListed(2)
            todoPage.validateLabelItemsLeft(2)
        });

        it('Should filter "Completed" ToDo items', () => {
            todoPage.clickFilter('Completed')
            todoPage.validateSelectedFilter('Completed')
            todoPage.validateNumberOfItemsListed(1)
            todoPage.validateLabelItemsLeft(2)
        });
    });
}); 