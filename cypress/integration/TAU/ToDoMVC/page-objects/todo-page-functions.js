/*
Ao invés de ter uma classe, também posso exportar apenas as funções.
Lá na spec tem que importar elas uma a uma ou com *:
    import * as todoPage from "./page-objects/todo-page-functions";
*/

export function navigate(){
    cy.visit('http://todomvc-app-for-testing.surge.sh')
}

export function addTodo(todoText){
    cy.get('.new-todo').type(todoText + '{enter}')
}

export function markToDoItemAsCompleted(todoIndex){
    cy.get('.todo-list li:nth-child('+ todoIndex +') .toggle').click()
}

export function clickToClearCompletedItems(){
    cy.contains('Clear completed').click()
}

export function clickFilter(filterName){
    cy.contains(filterName).click()
}

//validations
export function validateToDoText(todoIndex, expectedText){
    cy.get('.todo-list li:nth-child('+ todoIndex +') label').should('have.text', expectedText)
}

export function validateToggleUnchecked(todoIndex){
    cy.get('.todo-list li:nth-child('+ todoIndex +') .toggle').should('not.be.checked')
}

export function validateToDoCompleted(todoIndex){
    cy.get('.todo-list li:nth-child('+ todoIndex +') label').should('have.css', 'text-decoration-line', 'line-through')
}

export function validateNoExistsItemsListed(){
    cy.get('.todo-list').should('not.have.descendants', 'li')
}

export function alidateSelectedFilter(filterName){
    cy.get('.selected').should('have.text', filterName)
}

export function validateNumberOfItemsListed(numberItems){
    cy.get('.todo-list li').should('have.length', numberItems)
}

export function validateLabelItemsLeft(numberItemsLeft){
    cy.contains(numberItemsLeft + ' items left').should('be.visible')
}