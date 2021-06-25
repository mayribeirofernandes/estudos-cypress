/// <reference types="cypress" />

context('advanced cypress lessons', () => {
    beforeEach(() => {
        cy
         .visit('http://localhost:3000/')
         .get('[data-cy=create-board]')
         .click()
         .get('[data-cy=new-board-input]')
         .type('Teste Board')
         .get('[data-cy=new-board-create]')
         .click()
         .get('[data-cy=add-list]')
         .click()
         .get('[data-cy=add-list-input]')
         .type('Teste List')
         .get('[data-cy=save]')
         .click()
         .get('[data-cy=new-task]')
         .click()
         .get('[data-cy=task-input]')
         .type('Test Task')
         .get('[data-cy=add-task]')
         .click()
    });
    after(() => {
        cy
         .get('body')
         .trigger('keydown', { key: "F2", code: "F2", which: 113 })
         .get('#tools > :nth-child(1)')
         .click()
    });
    it('chaining commands', () => {
        cy
         .get('[data-cy=list]')
         .eq(0)
         .contains('Test Task')
    });
});