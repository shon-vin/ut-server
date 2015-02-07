
/*
 * MOBILE DMY API
 *  auth
 *  attendance_time
 *  quitting_time
 */
 var Async   = require('./async');
exports.auth= function(req, res){
  setHeader(res);
  var authorization = req.headers.authorization;
  console.log("auth.Authorization:" + authorization);
  console.log(req.headers);
  authorization="Basic :dXNlcjAxOnBhc3N3b3Jk";
  var headers = authorization.split(' ');
  var buf = new Buffer(headers[1], 'base64');
  console.log(">Authorization----------------------------------");
  console.log(" AtoB:"+buf.toString());
  var array = buf.toString().split(':');

  console.log(" userid:" +array[0]);
  console.log(" passwd:" +array[1]);
  console.log(">Authorization----------------------------------");
  
  
  flg = true;//★成功true、異常false
  
  if(flg){
    res.statusCode=200;
    var data = {
      "header": {
          "errorcode": "",
          "message": ""
      },
      "body": {
          "access_token": "9a811305e34a16309a811305e34a16302c9e39"
      }
    };
  }else{
    res.statusCode=400;
    var data = {
      "header": {
          "errorcode": "PE00002",
          "message": "ユーザー名または、パスワードが不適切ですs。"
      },
      "body": null
    };
  }
  Async.waterfall ([
    function(callback){
      console.log(" auth>> async 1");
      callback(null);
    },
    function(callback){
      console.log(" auth>> async 2");
      callback(null);
    },
    function(callback){
      console.log(" auth>> async 3");
      //callback(null);
      return res.send(data);
    }
  ],function(err){
    console.log(" auth>> async end");
    
  });

};

exports.attendance_time= function(req, res){
  setHeader(res);
  var authorization = req.headers.authorization;;
  console.log("attendance_time.Authorization:" + authorization);
  console.log(req.headers);

  var data = {
    "header": {
        "errorcode": "",
        "message": ""
    },
    "body": null
  };
  Async.waterfall ([
    function(callback){
      console.log(" attendance_time>> async 1");
      callback(null);
    },
    function(callback){
      console.log(" attendance_time>> async 2");
      callback(null);
    },
    function(callback){
      console.log(" attendance_time>> async 3");
      //callback(null);
      return res.send(data);
    }
  ],function(err){
    console.log(" attendance_time>> async end");
    
  });
};

exports.quitting_time= function(req, res){

  setHeader(res);
  var authorization = req.headers.authorization;
  console.log(req.headers);
  console.log("quitting_time.Authorization:" + authorization);

  var data = {
    "header": {
        "errorcode": "",
        "message": ""
    },
    "body": null
  };
  Async.waterfall ([
    function(callback){
      console.log(" quitting_time>> async 1");
      callback(null);
    },
    function(callback){
      console.log(" quitting_time>> async 2");
      callback(null);
    },
    function(callback){
      console.log(" quitting_time>> async 3");
      //callback(null);
      return res.send(data);
    }
  ],function(err){
    console.log(" quitting_time>> async end");
    
  });
};

function setHeader(res){
  res.setHeader("Content-Type", "application/json;charset=UTF-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Pragma", "no-cache");
}