const { Sequelize, Model, DataTypes, Op } = require('../models/connect');
const dbo_config = require('../models/dbo_config');
const dbo_raw = require('../models/dbo_raw');
const dbo_1min_avr = require ('../models/dbo_1min_avr');
const dbo_5min_avr = require ('../models/dbo_5min_avr');
const dbo_10min_avr = require ('../models/dbo_10min_avr');
const dbo_30min_avr = require ('../models/dbo_30min_avr');
const dbo_60min_avr = require ('../models/dbo_60min_avr');


exports.views = async function(req,res){

   
   
    
    let dataRaws = async ()=>{
    const dataRaws = await dbo_raw.findAll({
    limit : 1,
    
    order : [['createdAt','DESC']]
    })
    //console.log("Inside:"+ JSON.stringify( dataRaws))
    return dataRaws;
    };

    let data1min = async ()=>{
    const data1min = await dbo_1min_avr.findAll({
    limit : 1,
    
    order : [['createdAt','DESC']]
    })
    //console.log("Inside:"+ JSON.stringify( dataRaws))
    return data1min;
    };

    let data5min = async ()=>{
    const data5min = await dbo_5min_avr.findAll({
    limit : 1,
   
    order : [['createdAt','DESC']]
    })
    //console.log("Inside:"+ JSON.stringify( dataRaws))
    return data5min;
    };

    let data10min = async ()=>{
    const data10min = await dbo_10min_avr.findAll({
    limit : 1,
    
    order : [['createdAt','DESC']]
    })
    //console.log("Inside:"+ JSON.stringify( dataRaws))
    return data10min;
    };
    let data30min = async ()=>{
    const data30min = await dbo_30min_avr.findAll({
    limit : 1,
    
    order : [['createdAt','DESC']]
    })
    //console.log("Inside:"+ JSON.stringify( dataRaws))
    return data30min;
    };
    let data60min = async ()=>{
    const data60min = await dbo_60min_avr.findAll({
    limit : 1,
    
    order : [['createdAt','DESC']]
    })
    //console.log("Inside:"+ JSON.stringify( dataRaws))
    return data60min;
    };

    let dataConfig = async ()=>{
    const dataConfig =  await dbo_config.findAll({
    });
    //console.log("Inside:"+ JSON.stringify(dataConfig))
    return dataConfig
    };
   
     
   

    res.render('viewtable',{
        dataraws: await dataRaws(),
        data1min : await data1min(),
        data5min : await data5min(),
        data10min : await data10min(),
        data30min : await data30min(),
        data60min : await data60min(),
        dataconfig:await dataConfig(),
})
}