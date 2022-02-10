exports.setting = {	
  
};
    

exports.zNodes = [
{ id:1,     pId:0,      name:"SITE", page:"/page4", open:true},
{ id:11,    pId:1,      name:"PCD TEST", page:"/page3"},
{ id:111,   pId:11,     name:"Channels", page:"/page1"},
{ id:1111,  pId:111,    name:"CO", page:"/page2"},
{ id:11111, pId:1111,   name:"CalibrateCO", page:"/page5"},
{ id:1112,  pId:111,    name:"SO", page:"/page2"},
{ id:11121, pId:1112,   name:"CalibrateSO", page:"/page5"},
{ id:1113,  pId:111,    name:"O3", page:"/page2"},
{ id:11131, pId:1113,   name:"CalibrateO3", page:"/page5"},

{ id:2, pId:0, name:"strong parent", t:"You can click on me, but you can not click on the sub-node!", open:true},
{ id:21, pId:2, name:"leaf node 2-1", t:"You can't click on me..", click:false},
{ id:22, pId:2, name:"leaf node 2-2", t:"You can't click on me..", click:false},
{ id:23, pId:2, name:"leaf node 2-3", t:"You can't click on me..", click:false},
{ id:3, pId:0, name:"weak parent", t:"You can't click on me, but you can click on the sub-node!", open:true, click:false },
{ id:31, pId:3, name:"leaf node 3-1", t:"please click on me.."},
{ id:32, pId:3, name:"leaf node 3-2", t:"please click on me.."},
{ id:33, pId:3, name:"leaf node 3-3", t:"please click on me.."}
];

