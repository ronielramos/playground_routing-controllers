# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

## .ENV defaults

* PORT=3000

* TYPEORM_CONNECTION=mysql
* TYPEORM_HOST=localhost
* TYPEORM_PORT=3306
* TYPEORM_USERNAME=root
* TYPEORM_PASSWORD=root
* TYPEORM_DATABASE=test_store

* TYPEORM_ENTITIES=src/entities/*.ts
* TYPEORM_MIGRATIONS=src/migrations/*.ts

* TYPEORM_ENTITIES_DIR=src/entities
* TYPEORM_MIGRATIONS_DIR=src/migrations

* TYPEORM_SYNCHRONIZE=true
