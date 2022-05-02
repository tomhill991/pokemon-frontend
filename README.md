# Pokemon Shakespeare Frontend
## Description
What if the description of each Pokemon were to be written in Shakespearean style? Well this is
the frontend for displaying these descriptions!

## Technologies used
React was used with typescript in order to enforce types across the app and (fingers crossed) reduce
bugs. Create React App was also used to speed up development. Cypress was used for its ease of
end to end testing
## Versions
* node v17.9.0
* npm v8.5.5
* react v18.1.0

## Installation
* Run `npm install`
* Create `.env` and define constants (see .env.example)
* Run `npm start` to start server

## PokeAPI
To fetch all the suggested pokemon, the app makes use of the [PokeAPI](https://pokeapi.co/docs/v2#pokemon-section)

*** Note *** the PokeAPI only allows 5 pokemon to be created per hour. Sometimes a pokemon may not
appear, even though it is on the suggested list, because the PokeAPI has stopped a pokemon being returned. To overcome this, please wait for an hour!
## Testing
### Cypress
The testing library [Cypress](https://docs.cypress.io/guides/overview/why-cypress) was used to
create end to end tests. These tests evaluate searching for a pokemon and are defined in
`/cypress/integration/search_spec.js`

Make sure that the "baseUrl" in `cypress.json` matches the url of the server. Create React
App uses http://localhost:3000 by default so this is the default setting. This will allow Cypress to
run properly

### To run tests
* Start backend server (see backend README to start this server)
* Run `npm start`
* Run `npm test`

This will start Cypress
