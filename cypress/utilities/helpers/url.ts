const environment: string = Cypress.env('environment');
const port: number = Cypress.env('port');
const team: string = Cypress.env('team');

/**
 * Construct an API URL based on environment data.
 *
 * @param path An additional path for URL appending.
 */
export const buildApiUrl = ({ path }: { path?: string | undefined } = {}): string => {
  if (environment === 'localhost') {
    return `http://${environment}.transloc.com:${port}/v1${path}`;
  }
  return `https://api.${team}.${environment}.transloc.com/v1${path}`;
};

interface urlSet {
  app?: string,
  path?: string
}

/**
 * Construct and set an application URL based on environment data.
 *
 * @param app The application intended to test.
 * @param path An additional path for URL appending.
 */
export const setSiteUrl = ({ app, path }: urlSet = {}): void => {
  if (environment === 'localhost') {
    const localUrl: string = `https://${environment}.transloc.com:${port}${path}`;
    Cypress.config('baseUrl', localUrl);
  }
  const devUrl: string = `https://${app}.${team}.${environment}.transloc.com${path}`;
  Cypress.config('baseUrl', devUrl);
};
