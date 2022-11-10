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