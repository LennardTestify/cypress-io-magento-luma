import { CategoryPage } from '@/pages/CategoryPage';
import selectors from '../fixtures/selectors/category.json';

describe('Category page tests', () => {
  const categoryPage: CategoryPage = new CategoryPage();

  beforeEach(() => {
    cy.visit('/women/tops-women.html');
    cy.wait(Cypress.env('waitForPageLoad'));
  });

  it('Filters for color', () => {
    setFilterColor();
    cy.url().should('contain', '?color=');
    expect(selectors.filterValue.toLowerCase).to.contain(selectors.filterColor.toLowerCase);
  });

  it('Sorts products from lowest to highest', () => {
    sortByPrice();
    validatePrices();
  });

  it('Changes amount of displayed products', () => {
    cy.get(selectors.displayedProductsOnPageSelect).select('24');
    cy.get(selectors.displayedArticlesAmount).should('contain.text', '24');
    cy.get(selectors.displayedArticles).should('have.length.lte', 24);
  });

  it('Can change between grind and list view', () => {
    cy.get(selectors.displayedArticlesAmount).then((articlesAmountGridView) => {
      cy.get(selectors.buttonListView).click();
      cy.get(selectors.displayedArticlesAmount).invoke('text').should('not.eq', articlesAmountGridView.text());
    });
  });
});

function setFilterColor() {
  cy.get(selectors.filterCollapsible)
    .contains('Farbe')
    .then((filterColorCollapsibleColor) => {
      if (filterColorCollapsibleColor.attr('aria-expanded') === 'false') {
        cy.contains(selectors.filterColor, { matchCase: false }).click();
      }
    });
  cy.get(selectors.selectColorRed).click();
}

function sortByPrice() {
  cy.get(selectors.sorter).select('Preis');
}

function validatePrices() {
  //push product prices into array
  const pricesArray: number[] = [];
  cy.get(selectors.productPriceID + '>' + selectors.prices)
    .each((price) => {
      const priceTrimmed = price.text().trim().replace(/,/g, '.').replace(/€/g, '');
      pricesArray.push(parseFloat(priceTrimmed));
    })
    //then validate prices are increasing
    .then(() => {
      pricesArray.forEach((price, i) => {
        if (i + 1 < pricesArray.length) {
          expect(price).to.be.lte(pricesArray[i + 1]);
        }
      });
    });
}
