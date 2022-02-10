//this file for created model table 
const {DataTypes} = require('sequelize');
const sequelize = require ('./connect');
const dbo_test = sequelize.define('dbo_test',{
    test1:         { type: DataTypes.STRING },
    test2:       { type: DataTypes.STRING },
  
});
//sync code to table, code change = table auto change
dbo_test.sync({alter:true});
   

   

//export module
module.exports = dbo_test;