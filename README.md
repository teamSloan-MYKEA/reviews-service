# Project Name

> Project description

This is the reviews module for hrr47 team O'malley's FEC project. The project is a front-end clone of the IKEA website built using react.

## Related Projects

  - https://github.com/hrr47-fec-omalley/main-title-pictures-service
  - https://github.com/hrr47-fec-omalley/add-to-bag-service
  - https://github.com/hrr47-fec-omalley/similar-products-service


## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Endpoints

### GET - /:id/reviews/:id
Returns selected set of reviews from database

### POST - /:id/reviews/:id
Posts a review to selected product

### PUT - /:id/reviews/:id
Edits a review at particular id

### DELETE - /:id/reviews/:id
Removes selected review from database
