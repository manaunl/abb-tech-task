import mocks from '../fixtures/mocks.json';

describe('Registration Form', () => {
    const usernameSelector = '#username';
    const passwordSelector = '#password';
    const emailSelector = '#email';
    const fullNameSelector = '#fullName';
    const submitSelector = 'form button[type="submit"]';
    const notificationMessage = 'abb-notification-message span';
    const loader = '.loader';

    beforeEach(()=>{
        cy.visit('/');
    })

    it('should display registration form with username, email, password, full name fields and a button', () => {
        cy.get(usernameSelector).should('be.visible');
        cy.get(passwordSelector).should('be.visible');
        cy.get(emailSelector).should('be.visible');
        cy.get(fullNameSelector).should('be.visible');
        cy.get(submitSelector).should('be.visible')
    });

    it('should display validation errors for required fields after blur for each element', () => {
        cy.get(usernameSelector).focus().blur();
        cy.contains(mocks.validations.usernameRequired).should('be.visible');
        cy.get(passwordSelector).focus().blur();
        cy.contains(mocks.validations.passwordRequired).should('be.visible');
        cy.get(emailSelector).focus().blur();
        cy.contains(mocks.validations.emailRequired).should('be.visible');
        cy.get(fullNameSelector).focus().blur();
    });

    it('should display validation errors for required fields after click submit', () => {
        cy.get(submitSelector).click();
        cy.contains(mocks.validations.usernameRequired).should('be.visible');
        cy.contains(mocks.validations.passwordRequired).should('be.visible');
        cy.contains(mocks.validations.emailRequired).should('be.visible');
    });

    it('should display email validation errors', () => {
        cy.get(emailSelector).focus().type(mocks.user.invalidEmail).blur();
        cy.contains(mocks.validations.emailValid).should('be.visible');
    });

    describe('submit the form', () => {
        beforeEach(()=> {
            cy.get(usernameSelector).focus().type(mocks.user.username);
            cy.get(passwordSelector).focus().type(mocks.user.password);
            cy.get(emailSelector).focus().type(mocks.user.email);
            cy.get(submitSelector).click();
        });

        it('should successfully submit the form with valid data', () => {
            cy.get(notificationMessage).contains(mocks.responses.success).should('be.visible');
        });

        it('should display error after submit the form with mock invalid response', () => {
            cy.intercept('POST', '/api/register', (req) => {
                req.reply((res) => {
                    res.send(mocks.errorResponse);
                });
            }).as('register');

            cy.wait('@register');
            cy.get(notificationMessage).contains(mocks.responses.error).should('be.visible');
        });

        it('should display loader when request took longer time', () => {
            cy.intercept('POST', '/api/register', {
                delayMs: 10000
            }).as('register');

            cy.get(loader).should('be.visible');
        });

    });
});
