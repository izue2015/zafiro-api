/**
 *Dependencies
*/

var express = require('express');
var bodyParser = require('body-parser');
/**
 *Local Variable
*/
var app = express();
var db = {};

/**
 * Middleware
 */
app.use(bodyParser.json('application/json'));

/**
 *Routes
 */
 app.route('/productos/:id?')
   .all(function(req, res, next){
     console.log(req.method, req.path, req.body);
     res.set('Content-Type', 'application/json');
     next();
   })
   .post(function(req, res) {
      var productoNuevo = req.body.producto;
      productoNuevo.id = Date.now();

      db[productoNuevo.id] = productoNuevo;

      res.status(201).json({
        producto: productoNuevo
      });
  })
  .get(function(req, res) {
    var id = req.params.id;
    var producto = db[id];
    res.json({
      producto: producto
    });
  });

if(!module.parent){
  app.listen(3000, function() {
    console.log("connect to server to port 3000");
  });

}else {
  module.exports = app;
}
