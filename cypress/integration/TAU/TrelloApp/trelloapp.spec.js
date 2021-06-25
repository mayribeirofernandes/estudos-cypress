/// <reference types="cypress" />

import * as trelloPage from "./trello-functions";

context('advanced cypress lessons', () => {

    beforeEach(() => {
        trelloPage.navigate()
        trelloPage.createBoard('Test Board')
        trelloPage.createList('Test List')
        trelloPage.addTask('Item 01')
        trelloPage.addTask('Item 02')
    });

    after(() => {
        trelloPage.clearAll()
    });

    it('chaining commands', () => {
        cy
         .get('[data-cy=task]')
         .eq(0)
         .should('contain.text', 'Item 01')

        cy
         .get('[data-cy=list]')
         .eq(0)
         .contains('Item 01')
    });

    it.only('multiple assertions', () => {
        cy
         .get('[data-cy=task]')

         //Sem retry
         .then( item =>{
             console.log(item)
             expect(item[0]).to.contain.text('Item 01')
             expect(item[1]).to.contain.text('Item 02')
         })

         //Com retry
         .should( item =>{
            console.log(item)
            expect(item[0]).to.contain.text('Item 01')
            expect(item[1]).to.contain.text('Item 02')
        })

         //Com condição lógica
         .should( item =>{
            console.log(item)
            if (item.length !== 3){
                throw new Error('Não há elementos suficientes!')
            }
            expect(item[0]).to.contain.text('Item 01')
            expect(item[1]).to.contain.text('Item 02')
        })        
    });
});