var express = require('express');
var app = express();
var fs = require("fs");

//questa funzione get restituisce la lista totale delle biblioteche
app.get('/listaBiblioteche', function (req, res) {
   fs.readFile( __dirname + "/" + "biblioteche.json", 'utf8', function (err, data) {
       console.log('Richiesta GET generica');
       res.end( data );
   });
})
//questa funzione restituisce la lista delle informazioni per una determinata biblioteca
app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "biblioteche.json", 'utf8', function (err, data) {
       biblioteche = JSON.parse( data );
       var biblioteca = biblioteche["biblioteca" + req.params.id] 
       console.log('Richiesta GET su biblioteca con id %d',id);
       res.end( JSON.stringify(biblioteca));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server di test in ascolto su http://%s:%s", host, port)

})
