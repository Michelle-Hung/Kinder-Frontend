/// <reference types="Cypress" />

describe('My First Test', () => {
    it('visit github should success', () =>{
        cy.visit('https://github.com');
    });
    it('udemy class test', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca') //type: input 'ca'
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
    })
})