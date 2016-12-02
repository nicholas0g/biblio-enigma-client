var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listaBiblioteche', function (req, res) {
   fs.readFile( __dirname + "/" + "biblioteche.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server di test in ascolto su http://%s:%s", host, port)

})
