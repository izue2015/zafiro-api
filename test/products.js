var request = require('supertest');
var api = require('../server.js');
var host = process.env.API_TEST_HOST || api;

request = request(host);

describe('recurso /products', function() {
  describe('POST', function() {
    it('debera crear un nuevo producto', function(done) {
      var data = {
        "producto":{
        "title": "Arete de acero",
        "description": "Acero dorado",
        "price": "25.00",
        "img": "http://placehold.it/350x350?text=arete"
      }
    };
      //crear solicitud de http enviando data
      request.post('/productos')
            //Acept application/json
            .set('Accept', 'application/json')
            .send(data)
            //Status Code =201
            .expect(201)
            .expect('Content-Type', /application\/json/)
            .end(function(err, res) {
              var body = res.body;

              expect(body).to.have.property('producto');

              producto = body.producto;

              expect(producto).to.have.property('title', 'Arete de acero');
              expect(producto).to.have.property('description', 'Acero dorado');
              expect(producto).to.have.property('price', '25.00');
              expect(producto).to.have.property('img', 'http://placehold.it/350x350?text=arete');
              expect(producto).to.have.property('id');
              done();
            });

            //cuerpo de la solicitud debe tener una nota en json
            //producto debe tener una propiedad

    });
  })
})
