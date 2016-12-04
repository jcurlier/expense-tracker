# Expense Tracker Backend API

This project was generated with [SLC Looback](https://loopback.io/doc/en/lb2/Command-line-tools.html) version 6.0.3.

## Development server

Install Loopack

```npm install -g strongloop```
See [Loopack Getting Started](http://loopback.io/getting-started/)

Create a mySQL database

```SQL
CREATE SCHEMA `expenseTracker` DEFAULT CHARACTER SET utf8mb4;
```
Set the environemnt variables defining your mySQL server information:

| Environment Variable | Description |
| ---| --- |
| DATABASE_HOST | Hostname for the mySQL database server |
| DATABASE_PORT | Port for the mySQL database server, usually 3306 |
| DATABASE_NAME | Name for the mySQL databse |
| DATABASE_USER | Username credential for the database |
| DATABASE_PASS | Password credential for the database user above |

Run `npm start` or `node .` for a dev server. Navigate to `http://0.0.0.0:3000/explorer` to browser the REST API. 

The command will generate the mySQL tables.

## Code scaffolding

Run `slc loopback:datasource` to generate a new datasource.
Run `slc loopback:model` to generate a new model.
Run `slc loopback:relations` to generate a new relationship between model.

See [SLC Looback](https://loopback.io/doc/en/lb2/Command-line-tools.html) for more commands.

Under the hood, the command-line tools use Yeoman. If you are already using Yeoman and are comfortable with it, you can use it directly.

## Production server

Set the environemnt variables for your setup:

| Environment Variable | Description |
| ---| --- |
| API_HOST | Host for your API |
| API_PORT | Port for your API |
| NODE_ENV | production |