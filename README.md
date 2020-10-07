# TypeScript Testing
A repository for learning TypeScript using TransLoc's OnDemand application.

1. [Tools Used](#tools-used)
2. [Installation](#installation)
3. [Running Tests](#running-tests)

### Tools Used
- Cypress.io
- Fishery
- Faker

Fishery allows for factory generation using JavaScript or TypeScript. Factories are used to generate sets of data prior to (or during) the test run. In order to randomize data, Faker is used. This allows for truly unique testing data each run.

### Installation
Simply input the following once you have cloned:

```npm install```

### Running Tests
Tests will not run without a `cypress.env.json` file. The file structure should resemble the following:

```
{
  "environment": "[ENVIRONMENT]",
  "port": [PORT],
  "team": "[TEAM]",
  "superuser": {
    "username": "[SUPERUSER_USERNAME]",
    "apiPassword": "[SUPERUSER_API_PASSWORD]",
    "password": "[SUPERUSER_PASSWORD]"
  }
}
```

To run via UI:

```npx cypress open```

To run headlessly:

```npx cypress run```
