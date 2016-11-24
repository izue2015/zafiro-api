var request = require('supertest-as-promised');
var api = require('../server.js');
var host = process.env.API_TEST_HOST || api;

request = request(host);

describe('recurso /products', function() {
  describe('POST', function() {
    it('deberia crear un nuevo producto', function(done) {
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
  });
  describe('GET', function() {
    it('deberia obtener un producto existente', function(done) {
      var data = {
        "producto":{
        "title": "Arete de acero",
        "description": "Acero dorado",
        "price": "25.00",
        "img": "http://placehold.it/350x350?text=arete"
      }
    };
    //crear producto nuevo
    request.post('/productos')
          //Acept application/json
          .set('Accept', 'application/json')
          .send(data)
          //Status Code =201
          .expect(201)
          .them(function(res){
            var id = res.body.producto.id;

            return request.get('/productos/' + id)
              .expect(200)
              .expect('Content-Type', /application\/json/)
          }, done())
          .them(function(res){
                var producto = res.body.producto;
                expect(producto).to.have.property('title', 'Arete de acero');
                expect(producto).to.have.property('description', 'Acero dorado');
                expect(producto).to.have.property('price', '25.00');
                expect(producto).to.have.property('img', 'http://placehold.it/350x350?text=arete');
                expect(producto).to.have.property('id');
                done();
          }, done)
    })
  });
});
