export class TodoPage{
    //actions
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText){
        cy.get('.new-todo').type(todoText + '{enter}')
    }

    markToDoItemasCompleted(todoIndex){
        cy.get('.todo-list li:nth-child('+ todoIndex +') .toggle').click()
    }

    clickToClearCompletedItems(){
        cy.contains('Clear completed').click()
    }

    clickFilter(filterName){
        cy.contains(filterName).click()
    }

    //validations
    validateToDoText(todoIndex, expectedText){
        cy.get('.todo-list li:nth-child('+ todoIndex +') label').should('have.text', expectedText)
    }

    validateToggleUnchecked(todoIndex){
        cy.get('.todo-list li:nth-child('+ todoIndex +') .toggle').should('not.be.checked')
    }

    validateToDoCompleted(todoIndex){
        cy.get('.todo-list li:nth-child('+ todoIndex +') label').should('have.css', 'text-decoration-line', 'line-through')
    }

    validateNoExistsItemsListed(){
        cy.get('.todo-list').should('not.have.descendants', 'li')
    }

    validateSelectedFilter(filterName){
        cy.get('.selected').should('have.text', filterName)
    }

    validateNumberOfItemsListed(numberItems){
        cy.get('.todo-list li').should('have.length', numberItems)
    }
    
    validateLabelItemsLeft(numberItemsLeft){
        cy.contains(numberItemsLeft + ' items left').should('be.visible')
    }
}