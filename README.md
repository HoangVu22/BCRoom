# GUIDE LINE

## CREATE NEW MYSQL USER

- Open Mysql Workbench Or Mysql Command:
    - New user with username and password is 'bcroom'

`
    CREATE USER 'bcroom'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bcroom';
`

`
    GRANT ALL PRIVILEGES ON *.* TO 'bcroom'@'localhost' WITH GRANT OPTION;
`

`
    FLUSH PRIVILEGES;
`
## CREATE A DATABASE

- Create a new empty database is naming 'bcroom_dev'

`
    CREATE DATABASE bcroom_dev;
`

## Running Migrations

`
    npx sequelize-cli db:migrate
`

## Running Seeds

`
    npx sequelize-cli db:seed:all
`

if already run this command 1 time, use:

`
    npx sequelize-cli db:seed --seed <newest file's name>
`

## TO START TESTING API

- make sure you are in BackEnd folder, and all packages installed

`
    cd BackEnd
`

`
    npm install
`

- run dev server

`
    npm run dev
`
