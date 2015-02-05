
/*
 * GET users listing.
 */

exports.login= function(req, res){
  var authorization = req.headers.authorization;;
  console.log("auth.Authorization:" + authorization);
    var data = {
    "header": {
        "errorcode": "",
        "message": ""
    },
    "body": {username: "テスト太郎"}
  };
  res.send(data);
};

exports.user= function(req, res){
  var data = {
    "header": {
        "errorcode": "",
        "message": ""
    },
    "body": null
  };
  res.send(data);
};
