//this file for created model table 
const {DataTypes} = require('sequelize');
const sequelize = require ('./connect');
const dbo_config = sequelize.define('dbo_config',{
    site:         { type: DataTypes.STRING },
    address:       { type: DataTypes.INTEGER },
    ip:       { type: DataTypes.STRING },
    channel:       { type: DataTypes.STRING },
    unit:       { type: DataTypes.STRING },
    Analyzer:       { type: DataTypes.STRING },
    
    
});
//sync code to table, code change = table auto change
dbo_config.sync({alter:true});

//export module
module.exports = dbo_config;