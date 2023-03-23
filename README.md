# Testing for magento

![Magento_Logo](https://user-images.githubusercontent.com/108877931/214883559-6ff3d5a2-af1d-4f66-9eb2-4595e1c5a64c.png)

# Important 

This project is inspired by elgentos/magento2-cypress-testing-suite: https://github.com/elgentos/magento2-cypress-testing-suite

## Installation

Clone repository.

`$ git clone git@github.com:ncatestify/cypress-io-magento-luma.git`

Navigate into project folder and install dependencies.

```bash 
$ cd <project-folder>
$ npm install
```

## Setup

Update BaseUrl in cypress.config.ts.

`baseUrl: 'https://demoshops.splendid-internet.de/magento/demoshop-magento2-daily'`

If necessary update selectors under cypress/fixtures/selectors.

## Run

`$ npx cypress run`

Or if you want to use the GUI

`$ npx cypress open` or `$ npm run cypress:open`

### Open Source project by TESTIFY.TEAM

[TESTIFY.TEAM](https://testify.team) - WE FIND BUGS. **AUTOMATED**.

[German YouTube Cypress.IO Live Coding Playlist](https://www.youtube.com/watch?v=mb_PTxDeJKI&list=PLKrKzhBjw2Y9ceCxO3ollOc4eIVPAjiHs)

[How to start with this Cypress.IO template on YouTube](https://youtu.be/b27PciNzreY)
