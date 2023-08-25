import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://m2.demo.wilma.dev'
  },
  env: {
    waitForPageLoad: 3000,
    MAILOSAUR_EMAIL_DOMAIN: 'MAILOSAUR_EMAIL_DOMAIN',
    MAILOSAUR_SERVER_ID: 'MAILOSAUR_SERVER_ID',
    MAILOSAUR_API_KEY: 'MAILOSAUR_API_KEY'
  },
  viewportWidth: 1200
});
