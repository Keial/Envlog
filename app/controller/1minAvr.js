
exports.WrAvr =function (req,res,next) {
const { Sequelize, Model, DataTypes, Op } = require("sequelize");

const sequelize = require ('../models/connect');
const axios = require("axios");

const dbo_1min_avr = require('../models/dbo_1min_avr');
const dbo_raw = require('../models/dbo_raw');

function loop(){

  var now = new Date();
  var nowTime = now.getHours()*60*60*1000+now.getMinutes()*60*1000+now.getSeconds()*1000;
  var Settimer = now.getHours()*60*60*1000+now.getMinutes()*60*1000 - 0*1000;
  var Settimer5min = now.getHours()*60*60*1000+now.getMinutes()*60*1000 - (now.getMinutes()%5)*60*1000;
  var Settimer10min = now.getHours()*60*60*1000+now.getMinutes()*60*1000 - (now.getMinutes()%10)*60*1000;
  var Settimer30min = now.getHours()*60*60*1000+now.getMinutes()*60*1000 - (now.getMinutes()%30)*60*1000;
  var Settimer1hr = now.getHours()*60*60*1000+now.getMinutes()*60*1000 - 0*60*1000;
  var cooldown = Settimer - nowTime;
  if (cooldown <= 0) {
      cooldown +=   60000; // cooldown 1 min.
    //  cooldown +=  300000; // cooldown 5 min.
    //  cooldown +=  600000; // cooldown 10 min.
    //  cooldown += 1800000; // cooldown 30 min.
    //  cooldown += 3600000;    // cooldown 1 hr.
  }
      console.log(now);
      console.log(nowTime);
      console.log(Settimer);
      console.log(cooldown);
  
          setTimeout(function(){

    dbo_raw.findAll()
  .then((data) => {
  let a1= [data[data.length-1].data1,data[data.length-2].data1,data[data.length-3].data1,data[data.length-4].data1,data[data.length-5].data1,data[data.length-6].data1];
  let a2= [data[data.length-1].data2,data[data.length-2].data2,data[data.length-3].data2,data[data.length-4].data2,data[data.length-5].data2,data[data.length-6].data2];
  let a3= [data[data.length-1].data3,data[data.length-2].data3,data[data.length-3].data3,data[data.length-4].data3,data[data.length-5].data3,data[data.length-6].data3];
  let status1 = (data[data.length-1].status1);
  let status2 = (data[data.length-1].status2);
  let status3 = (data[data.length-1].status3);
  console.log(a1);
  console.log(a2);
  console.log(a3);

  let a1Avr = eval(a1.join('+'))/a1.length;
  let a2Avr = eval(a2.join('+'))/a2.length;
  let a3Avr = eval(a3.join('+'))/a3.length;

  console.log(a1Avr);
  console.log(a2Avr);
  console.log(a3Avr);

if (cooldown >= 55000) {
dbo_1min_avr.create({
  datetime:     new Date(),
  data1:        a1Avr,
  status1:      status1,
  data2:        a2Avr,
  status2:      status2,
  data3:        a3Avr,
  status3:      status3,

})}
})
       console.log("=========Match========"+(new Date()));
       loop();
  }, cooldown);
      
  }
  
  loop()
  next()
}
