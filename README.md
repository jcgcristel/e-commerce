# e-commerce back end

## Description
Back end script for e-commerce that handles creating, updating, and deleting:
- Products
- Tags
- Categories

As there is no front-end, usage of an API Client will be needed to test this script.

## Table of Contents
- [Installation](#installation)
- [Test](#Test)
- [Question](#questions)

## Installation

### Required Packages
- sequelize
- express
- mysql2

To install:

    npm i sequelize express mysql2

### Database Requirements
With Sequelize, an empty database named **ecommerce_db** is all that is needed.

It will create the following tables:
- category
- product
- product_tag
- tag

## Test
While in the ```/db``` folder, run:

    mysql -u <user> -p

If there is a password, enter the password for that user.

To create the database, run:

    source schema.sql

Back in the root directory of the script, we can proceed to populate the database with:

    npm run seed

And with that, you're done! You can now send requests to the server.

### Demo
https://youtu.be/romD_LKhBy0

## Questions
[jcgcristel's GitHub](https://github.com/jcgcristel)

For additional questions, you can email me at [jcg.cristel@gmail.com](mailto:jcg.cristel@gmail.com.).
