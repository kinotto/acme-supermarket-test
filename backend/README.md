# ACME Supermarket
implementation of the backend with Typescript and NodeJS.
the backend interacts with a persistence layer (mongoDB) on heroku cloud.

## install

- npm install or yarn install

- npm run start

- npm run test (to run the test)

## storage
there's an initial phase that populates the remote db with the products in the supermarket (in the example we have only tree products), available for simplicity in the file products.json.
Once the db is populated the server is ready to handle the requests coming come from the client.

Mongoose library is used to define both the schema of Product and Basket and for general CRUD operations.

## routes
there are several routes to handle both the basket and the products.
- fetch of the basket (basket is persistent)
- fetch of the products
- remove a product from the basket
- add a product to the basket
- get the total of the basket (promotions included)



