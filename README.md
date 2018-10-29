# API DOG-CEO

## Objetivo
El objetivo de este proyecto es complementar la API publica [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/) unificando la información retornada por los endpoints:
  
- `https://dog.ceo/dog-api/api/breed/{breed name}/list`

- `https://dog.ceo/dog-api/api/breed/{breed name}/images`

Para formar un nuevo endpoint

- `/breed/{breed name}`

que retorne el siguiente JSON

    {
        "breed": "breed name",
        "subBreeds": ["subBreedA", "subBreedB", "subBreedC"],
        "images": [
    	    {
    		    "url": "http://some.url.com"
    	    },
    	    {
    		    "url": "http://some.other.url"
    	    }
        ]
    }

## Instalación

 1. `git clone`
 2. `cd dogceo`
 3. `npm i` (o yarn)
 4. `npm start`
 5. Consultar API en la ruta `http://localhost:3000/breed/{breed name}`

http://localhost:3000/breed/sheepdog

## Test

    npm test
Para los test se hace uso de [mocha](https://www.npmjs.com/package/mocha) y [chai](https://www.npmjs.com/package/chai)

## Easter Egg
Para dar valor a la palabra "**complementar**" utilizada en el objetivo de este proyecto, se pueden hacer consultas directamente al API de https://dog.ceo sin salir de nuestro localhost. 

 - http://localhost:3000/breed/sheepdog/list
 - http://localhost:3000/breed/sheepdog/images
 - http://localhost:3000/breeds/list
 - http://localhost:3000/breeds/list/all

Estas y cualquier otra ruta soportada por dog-ceo responderá como su homóloga.

 - http://localhost:3000/breed/sheepdog/list -> https://dog.ceo/api/breed/sheepdog/list

