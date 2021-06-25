export function navigate(params) {
    cy.visit('http://localhost:3000/')
}

export function createBoard(boardName) {
    cy
     .get('[data-cy=create-board]')
     .click()
     .get('[data-cy=new-board-input]')
     .type(boardName)
     .get('[data-cy=new-board-create]')
     .click()    
}

export function createList(listName) {
    cy
     .get('[data-cy=add-list]')
     .click()
     .get('[data-cy=add-list-input]')
     .type(listName)
     .get('[data-cy=save]')
     .click()   
}
export function addTask(taskDescription) {
    cy
     .get('[data-cy=new-task]')
     .click()
     .get('[data-cy=task-input]')
     .type(taskDescription)
     .get('[data-cy=add-task]')
     .click() 
}

export function clearAll(params) {
    cy
     .get('body')
     .trigger('keydown', { key: "F2", code: "F2", which: 113 })
     .get('#tools > :nth-child(1)')
     .click()
}
