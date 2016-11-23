# API Rest de Zafiro
Zafiro es una aplicacion que permite elaborar un catalogo de productos para los clientes de la empresa zafiro.

## Metodos HTTP permitidos

|  Método  |              Descripción                 |
| -------- | ---------------------------------------- |
| `GET`    | Obtener un producto o lista de productos |
| `POST`   | Crear un producto                        |
| `PUT`    | Actualizar un producto                   |
| `DELETE` | Eliminar un producto                     |

## Códigos de Respuesta

| Código |                         Descripción                          |
| ------ | ------------------------------------------------------------ |
| `200`  | Success                                                      |
| `201`  | Success - nuevo recurso creado.                              |
| `204`  | Success - no hay contenido para responder                    |
| `400`  | Bad Request - i.e. su solicitud no se pudo evaluar           |
| `401`  | Unauthorized - usuario no esta autenticado para este recurso |
| `404`  | Not Found - recurso no existe                                |
| `422`  | Unprocessable Entity - i.e. errores de validación            |
| `429`  | Limite de uso excedido, intente mas tarde                    |
| `500`  | Error de servidor                                            |
| `503`  | Servicio no disponible                                       |

## Crear un producto nuevo

  Solicitud [POST] /producto
    {
      "producto":{
        "title": "Arete de acero",
        "description": "Acero dorado",
        "price": "25.00"
        "img": "http://placehold.it/350x350?text=arete"
      }
    }

  Respuesta

    {
      "nota":{
        "id": 123,
        "title": "Arete de acero",
        "description": "Acero dorado",
        "price": "25.00"
        "img": "http://placehold.it/350x350?text=arete"
      }
    }

## Obtener una lista de producto
  Solicitud GET /products/

  Respuesta

    [{
      producto:{
        "id": 123,
        "title": "Arete de acero",
        "description": "Acero dorado",
        "price": "25.00"
        "img": "http://placehold.it/350x350?text=arete"
      }
    },
    {
      producto:{
        "id": 123,
        "title": "Cadena de plata",
        "description": "Cadena de plata 10 gr",
        "price": "85.00"
        "img": "http://placehold.it/350x350?text=cadena"
      }
    }]
