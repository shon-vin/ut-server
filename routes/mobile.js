
/*
 * MOBILE DMY API
 *  auth
 *  attendance_time
 *  quitting_time
 */
 var http   = require('http');
exports.auth= function(req, res){
  setHeader(res);
  var authorization = req.headers.authorization;;
  console.log("auth.Authorization:" + authorization);
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
  res.send(data);
};

exports.attendance_time= function(req, res){
  setHeader(res);
  var authorization = req.headers.authorization;;

  console.log("attendance_time.Authorization:" + authorization);

  var data = {
    "header": {
        "errorcode": "",
        "message": ""
    },
    "body": null
  };
  res.send(data);
};

exports.quitting_time= function(req, res){

  setHeader(res);
  var authorization = req.headers.authorization;
  console.log("quitting_time.Authorization:" + authorization);

  var data = {
    "header": {
        "errorcode": "",
        "message": ""
    },
    "body": null
  };
  res.send(data);
};

function setHeader(res){
  res.setHeader("Content-Type", "application/json;charset=UTF-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Pragma", "no-cache");
}