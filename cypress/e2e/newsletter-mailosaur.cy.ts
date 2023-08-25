import { fakerDE as faker } from '@faker-js/faker';
import selectors from '../fixtures/selectors/mailosaur.json';

describe('Newsletter registration with mailosaur', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const emailAddress = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
    provider: Cypress.env('EMAIL_DOMAIN')
  });

  beforeEach(() => {
    cy.visit('/');
    cy.wait(Cypress.env('waitForPageLoad'));
  });

  it('Registers newsletter', () => {
    cy.get(selectors.newsletterRegistration)
      .should('be.visible')
      .type(emailAddress + '{enter}');
    cy.get(selectors.newsletterConfirmSuccess).should('be.visible');
  });

  it('Confirms E-Mail', () => {
    cy.mailosaurGetMessage(Cypress.env('MAILOSAUR_SERVER'), {
      sentTo: emailAddress,
      subject: selectors.emailSubject
    }).then((email) => {
      expect(email.subject).to.eq(selectors.emailSubject);
      const confirmationLink = email.html.links[0].href;
      cy.visit(confirmationLink);
    });
  });
});
