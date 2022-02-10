//this files for make a connection to database
const {Sequelize} = require ('sequelize');
const dbName = 'esi';
const user = 'root';
const password = '';
const host = '127.0.0.1';
const port = '3306';
const dbType = 'mysql' //one of | mysql | mariadb | sqlite | postgres | mssql |


const sequelize = new Sequelize(dbName,user,password,{
    host,
    port,
    dialect: dbType
});


module.exports = sequelize;
