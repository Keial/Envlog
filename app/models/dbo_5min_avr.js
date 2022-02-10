//this file for created model table 





const {DataTypes} = require('sequelize');
const sequelize = require ('./connect');
const dbo_5min_avr = sequelize.define('dbo_5min_avr',{
    datetime:         { type: DataTypes.DATE },
    data1:       { type: DataTypes.FLOAT },
    status1:       { type: DataTypes.STRING },
    data2:       { type: DataTypes.FLOAT },
    status2:       { type: DataTypes.STRING },
    data3:       { type: DataTypes.FLOAT },
    status3:       { type: DataTypes.STRING },
    data4:       { type: DataTypes.FLOAT },
    status4:       { type: DataTypes.STRING },
    data5:       { type: DataTypes.FLOAT },
    status5:       { type: DataTypes.STRING },
    data6:       { type: DataTypes.FLOAT },
    status6:       { type: DataTypes.STRING },
    data7:       { type: DataTypes.FLOAT },
    status7:       { type: DataTypes.STRING },
    data8:       { type: DataTypes.FLOAT },
    status8:       { type: DataTypes.STRING },
    data9:       { type: DataTypes.FLOAT },
    status9:       { type: DataTypes.STRING },
    data10:       { type: DataTypes.FLOAT },
    status10:       { type: DataTypes.STRING },
    data11:       { type: DataTypes.FLOAT },
    status11:       { type: DataTypes.STRING },
    data12:       { type: DataTypes.FLOAT },
    status12:       { type: DataTypes.STRING },
    data13:       { type: DataTypes.FLOAT },
    status13:       { type: DataTypes.STRING },
    data14:       { type: DataTypes.FLOAT },
    status14:       { type: DataTypes.STRING },
    data15:       { type: DataTypes.FLOAT },
    status15:       { type: DataTypes.STRING },
    data16:       { type: DataTypes.FLOAT },
    status16:       { type: DataTypes.STRING },
    
});
//sync code to table, code change = table auto change
dbo_5min_avr.sync({alter:true});

//export module
module.exports = dbo_5min_avr;