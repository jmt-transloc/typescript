/**
 * Construct and set an application URL based on environment data.
 *
 * @param app The application intended to test.
 * @param path An additional path for URL appending.
 */
export const setSiteUrl = (app: string, path?: string | undefined): void => {
  const environment: string = Cypress.env('environment');
  const port: number = Cypress.env('port');
  const team: string = Cypress.env('team');

  if (environment === 'localhost') {
    const localUrl: string = `https://${environment}.transloc.com:${port}${path}`;
    Cypress.config('baseUrl', localUrl);
  } else if (environment === 'stage') {
    const stageUrl: string = `https://${app}.${environment}.transloc.com${path}`;
    Cypress.config('baseUrl', stageUrl);
  }
  const devUrl: string = `https://${app}.${team}.${environment}.transloc.com${path}`;
  Cypress.config('baseUrl', devUrl);
};
