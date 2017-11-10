# ACME Supermarket
implementation of the backend with Typescript and NodeJS.
the backend interacts with a persistence layer (mongoDB) on heroku cloud.

## install
first download the dependencies
npm install or yarn install

to run the project:
npm run start

to run the test:
npm run test

## storage
there's a first phase that populate the remote db with the products on our supermarket (in the example we have only tree products), available for simplicity in the file products.json.
Once the db is populated the server is ready to handle the requests coming come from the client.

## routes
there are several routes to handle both the basket and the products.
- fetch of the basket (basket is persistent)
- fetch of the products
- remove a product from the basket
- add a product to the basket
- get the total of the basket (promotions included)



