/* This file contains instructions knex needs to connect to the database

Each key on the exported object has the configuration for a database environment (dev, production, testing, etc.)

// Update with your config settings.

*/

module.exports = {
  // teaches knex to connect to the development database
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // only needed when using SQLite3
    connection: {
      filename: './data/produce.db3' // where the database file is
    },
    migrations: {
      directory: './data/migrations'// will be created automatically
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
