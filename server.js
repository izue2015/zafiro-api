/**
 *Dependencies
*/

var express = require('express');
var bodyParser = require('body-parser');
/**
 *Local Variable
*/
var app = express();

/**
 * Middleware
 */
app.use(bodyParser.json('application/json'));

/**
 *Routes
 */
app.post('/productos', function(req, res) {
  console.log('POST', req.body.producto);
  var producto = req.body.producto;
  producto.id = 123;
  
  res.status(201).json({
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
