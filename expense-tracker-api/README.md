# Expense Tracker Backend API

This project was generated with [SLC Looback](https://loopback.io/doc/en/lb2/Command-line-tools.html) version 6.0.3.

## Development server

Install Loopack

```npm install -g strongloop```

See [Loopack Getting Started](http://loopback.io/getting-started/)

Note: you should update the SLC tool `slc update` to make sure you have the latest.

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

Run `npm start` or `node .` for a dev server.

The command will generate the mySQL tables as well as some sample data (see [create-sample-model.js](server/boot/create-sample-model.js) for code to create the sample data) anf then it will start the nodejs server. 

Navigate to `http://0.0.0.0:3000/explorer` to browser the REST API. 

As all the API are protected by ACL, you should login and set the token. The format for the login credentials is as below:
```json
{
   "email": "test@example.com",
   "password": "test"
}
```

## Code scaffolding

Run `slc loopback:datasource` to generate a new datasource.
Run `slc loopback:model` to generate a new model.
Run `slc loopback:relations` to generate a new relationship between model.

See [SLC Looback](https://loopback.io/doc/en/lb2/Command-line-tools.html) for more commands.

Under the hood, the command-line tools use Yeoman. If you are already using Yeoman and are comfortable with it, you can use it directly.

## Build

Run `npm run build:sdk` to build the SDK and copy it to the shared folder of the Angular application. 

## Production server

Set the environemnt variables for your setup:

| Environment Variable | Description |
| ---| --- |
| API_HOST | Host for your API |
| API_PORT | Port for your API |
| NODE_ENV | production |
