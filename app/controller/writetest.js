const axios = require("axios");
const dbo_raw = require("../models/dbo_raw");
exports.writeurl1 = function (data){


function writedata (){
/*await axios.get("http://localhost:3000/datasim")
           .then(function(resp){
             // console.log(resp.data.test1)
              dbo_raw.create({
                datetime : new Date(),
                data1 : resp.data.test1,
                status1 : "OK",
                data2 : resp.data.test2,
                status2 : "OK",
                data3 : resp.data.test3,
                status3 : "OK",
                   })
           })
           .catch(err => res.send(err));
           
    }*/
    let ajaxRequest = null; 

     function getComments() {
        // cancel  previous ajax if exists
        if (ajaxRequest ) {
            ajaxRequest.cancel(); 
        }
        // creates a new token for upcomming ajax (overwrite the previous one)
        ajaxRequest = axios.CancelToken.source();  

        return axios.get("http://localhost:3000/datasim", { cancelToken: ajaxRequest.token }).then(function(resp){
          // console.log(resp.data.test1)
           dbo_raw.create({
             datetime : new Date(),
             data1 : resp.data.test1,
             status1 : "OK",
             data2 : resp.data.test2,
             status2 : "OK",
             data3 : resp.data.test3,
             status3 : "OK",
                })
        }).catch(function(err) {
            if (axios.isCancel(err)) {
               console.log('Previous request canceled, new request is send', err.message);
            } else {
                   // handle error
            }
        });
    }
    
   getComments();
}

setInterval(writedata,10000);

}
