const axios = require("axios");
const dbo_raw = require("../models/dbo_raw");


const api_url10 ='http://192.169.1.12/cgi-bin/cgi_getvalinst';
const api_url20 ='http://192.169.1.22/cgi-bin/cgi_getvalinst';
const api_url30 ='http://192.169.1.42/cgi-bin/cgi_getvalinst';
const api_url11 ='http://192.169.1.12/cgi-bin/cgi_getstatus';
const api_url21 ='http://192.169.1.22/cgi-bin/cgi_getstatus';
const api_url31 ='http://192.169.1.42/cgi-bin/cgi_getstatus';


exports.GetEmviaData = async function (req,res,next){

 
let one = api_url10
let two = api_url20
let three = api_url30
let four = api_url11
let five = api_url21
let six = api_url31

function loopx() {

        function statutText(mode){
            let status
            switch (mode){
                case 1 :
                    status = "Warm-up";
                    break;
                case 2 :
                    status = "OK";
                    break;
                case 3 :
                    status = "Zero";
                    break;
                case 4 :
                    status = "Span";
                    break;
                case 5 :
                    status = "StandBy";
                    break;
                case 6 :
                    status = "Ref.Zero";
                    break;
                default:
                    break;

            }
            return status;
        }

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSixe = axios.get(six);
 

axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSixe]).then(axios.spread((...responses) => {
  var responseOne = responses[0];
  var responseTwo = responses[1];
  var responseThree = responses[2];
  var responseFour = responses[3];
  var responseFive = responses[4];
  var responseSix = responses[5];

  let mode1 = statutText( responseFour.data.status.mode);
  let mode2 = statutText( responseFive.data.status.mode);
  let mode3 = statutText( responseSix.data.status.mode);

  /*console.log(new Date());
  console.log("res1 = "+ JSON.stringify(responseOne.data));
  console.log("res2 = "+ JSON.stringify(responseTwo.data));
  console.log("res3 = "+ JSON.stringify(responseThree.data));
  console.log("res4 = "+ JSON.stringify(responseFour.data));
  console.log("res5 = "+ JSON.stringify(responseFive.data));
  console.log("res6 = "+ JSON.stringify(responseSix.data));
  console.log("mode1 = "+ mode1);
  console.log("mode2 = "+ mode2);
  console.log("mode3 = "+ mode3); */
  dbo_raw.create({
    datetime : new Date(),
    data1 : responseOne.data.data.M1.inst,
    status1 : mode1 ,
    data2 : responseTwo.data.data.M1.inst,
    status2 : mode2 ,
    data3 : responseThree.data.data.M1.inst,
    status3 : mode3,
       })
  // use/access the results 
})).catch(errors => {
  // react on errors.
})

}

setInterval(loopx,10000);
next();

}