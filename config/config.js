require('dotenv').config();

const development = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_Database,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_Dialect
  }
};

const production = {
  use_env_variable: "POSTGRES_URL",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};

Module.exports = { 
  development, 
  production 
};



// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
