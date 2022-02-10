/*  เรียกใช้งานแพกเกจ  */
var express = require('express');
var router = express.Router();

/* ------------------------------------ */

/*  เรียกใช้งานคอนโทรลเลอร์  */
var treeview = require('../controller/treeview');
const { getAll, getDate, downloadCSV } = require("../controller");
const GetDEmvia = require("../controller/getInsRawData");
const min1Avr = require("../controller/1minAvr");
const min5Avr = require("../controller/5minAvr");
const min10Avr = require("../controller/10minAvr");
const min30Avr = require("../controller/30minAvr");
const min60Avr = require("../controller/60minAvr");
const view =require("../controller/view.controller");
/* ------------------------------------ */


/* กำหนดเส้นทางไปยัง view  */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Treeview sidebar */
router.get('/side',function(req, res) {
  res.render('partials/treeview', { 
    setting : treeview.setting,
    zNodes : treeview.zNodes,

  });
});

router.get('/page1',function (req,res){
  res.render('AddCh',{});
})
router.get('/page2',function (req,res){
  res.render('insertpm-10',{});
})
router.get('/page3',function (req,res){
  res.render('Pcd76t',{});
})
router.get('/page4',function (req,res){
  res.render('Sites',{});
})
router.get('/page5',function (req,res){
  res.render('Calibration',{});
})

router.get("/page6", view.views);
router.get("/page6/get/:date/:endDate", getDate);
router.get("/page6/get/download/:date/:endDate", downloadCSV);
router.get('/all', function(req, res,next){  
  res.render('all', { });
  next();
  },GetDEmvia.GetEmviaData,min1Avr.WrAvr,min5Avr.WrAvr,min10Avr.WrAvr,min30Avr.WrAvr,min60Avr.WrAvr);
router.get('/h1', function(req, res){  
  res.render('partials/header', { });
  });



module.exports = router;