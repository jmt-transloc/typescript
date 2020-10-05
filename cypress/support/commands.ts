import { buildApiUrl } from '../utilities/helpers/url';

export interface LoginSet {
  username?: string,
  password?: string
}

/**
 * Authenticate using the API for framework login by setting a transloc_authn_cookie.
 *
 * @param username The username for application login.
 * @param password The password for application login.
 */
Cypress.Commands.add('authenticate', ({ username, password }: LoginSet = {}): void => {
  const url: string = buildApiUrl({ path: `/me/login?username=${username}&password=${password}` });

  cy.request({
    method: 'POST',
    url,
    retryOnNetworkFailure: true,
  })
    .then((response) => {
      cy.setCookie('transloc_authn_cookie', response.body.token);
    });
});
