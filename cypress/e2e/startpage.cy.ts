import selectors from '../fixtures/selectors/startpage.json';
import { StartPage } from '@/pages/StartPage';

describe('Startpage tests', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    cy.visit('/');
    cy.wait(Cypress.env('waitForPageLoad'));
  });

  it('Startpage valid and contains products', () => {
    cy.get(selectors.welcomeMessage).should('be.visible');
    cy.contains(selectors.loginButton, { matchCase: false }).should('be.visible');
    cy.contains(selectors.registerButton, { matchCase: false }).should('be.visible');
    cy.get('footer').should('be.visible');
    cy.get(selectors.search).should('be.visible');
    cy.get(selectors.mainContent).should('be.visible').should('not.be.empty');
    cy.get(selectors.productItems).should('be.visible').should('have.length.gte', 1);
  });

  it('Can open category', () => {
    cy.contains('Women').click();
    cy.url().should('contain', 'women');
  });

  it('Validate newsletter', () => {
    cy.get(selectors.newsletterRegistration).should('be.visible').type(selectors.validEmail + '{enter}');
    cy.get(selectors.newsletterConfirmSuccess).should('be.visible');
    cy.get(selectors.newsletterRegistration).type('.invalidEmail. {enter}');
    cy.get(selectors.newsletterError).should('be.visible');
  });

  it('Cant register newsletter twice', () => {
    cy.get(selectors.newsletterRegistration).should('be.visible').type('TESTIFY@mail.test {enter}');
    cy.get(selectors.newsletterConfirmFail).should('be.visible');
  });
});
