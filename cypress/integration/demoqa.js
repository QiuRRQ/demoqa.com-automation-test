/// <reference types="cypress" />

context('form validation testing ', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    describe('submit form using valid input', () => {
        it('isi form dan submit', () => {
            cy.get('#firstName').type('azizur')
            cy.get('#lastName').type('rohim')
            cy.get('#userEmail').type('azizurrohim13@gmail.com')
            cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
            cy.get('#userNumber').type('082227239963')
            cy.get('#dateOfBirthInput').click()
            cy.get('.react-datepicker__month-select').select('October')
            cy.get('.react-datepicker__year-select').select('1997')
            cy.get(':nth-child(2) > .react-datepicker__day--008').click()
            cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#currentAddress').type('desa ambeng-ambeng')

            cy.get('#submit').click()
            cy.get('#example-modal-sizes-title-lg').should('be.visible')
        })
    })

    describe('submit form using invalid input', () => {
        it('isi form dan submit using invalid email', () => {
            cy.get('#firstName').type('azizur')
            cy.get('#lastName').type('rohim')
            cy.get('#userEmail').type('invalidEmail')
            cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
            cy.get('#userNumber').type('082227239963')
            cy.get('#dateOfBirthInput').click()
            cy.get('.react-datepicker__month-select').select('October')
            cy.get('.react-datepicker__year-select').select('1997')
            cy.get(':nth-child(2) > .react-datepicker__day--008').click()
            cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#currentAddress').type('desa ambeng-ambeng')
            cy.get('#submit').click()
            cy.get('#userEmail').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)')
        })

        it('isi form dan submit using empty last name or first name', () => {

            cy.get('#lastName').type('rohim')
            cy.get('#userEmail').type('azizurrohim13@gmail.com')
            cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
            cy.get('#userNumber').type('082227239963')
            cy.get('#dateOfBirthInput').click()
            cy.get('.react-datepicker__month-select').select('October')
            cy.get('.react-datepicker__year-select').select('1997')
            cy.get(':nth-child(2) > .react-datepicker__day--008').click()
            cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#currentAddress').type('desa ambeng-ambeng')
            cy.get('#submit').click()
            cy.get('#firstName').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)')
        })

        it('isi form dan submit using empty number', () => {
            cy.get('#firstName').type('azizur')
            cy.get('#lastName').type('rohim')
            cy.get('#userEmail').type('azizurrohim13@gmail.com')
            cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()

            cy.get('#dateOfBirthInput').click()
            cy.get('.react-datepicker__month-select').select('October')
            cy.get('.react-datepicker__year-select').select('1997')
            cy.get(':nth-child(2) > .react-datepicker__day--008').click()
            cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#currentAddress').type('desa ambeng-ambeng')
            cy.get('#submit').click()
            cy.get('#userNumber').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)')
        })
    })
})