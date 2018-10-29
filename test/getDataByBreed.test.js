const assert = require('chai').assert
const getDataByBreed = require('../lib/getDataByBreed')

describe("getDataByBreed", () => {
    describe(" - Primera prueba", () => {
        it('deberia retornar el array con las imagenes', (done) => {
            getDataByBreed('sheepdog', 'images')
                .then(images => {
                    assert.isArray(images);
                    done()
                })
                .catch(done)
        })
    })

    describe(" - Segunda prueba", () => {
        it('deberia entrar en el catch', (done) => {
            getDataByBreed('sheepdogXXX', 'images')
                .then(images => done(true))
                .catch(err => done())
        })
    })

    describe(" - Tercera prueba", () => {
        it('deberia retornar el array con las subBreeds', (done) => {
            getDataByBreed('sheepdog', 'list')
                .then(subBreeds => {
                    assert.isArray(subBreeds);
                    done()
                })
                .catch(done)
        })
    })

    describe(" - Cuarta prueba", () => {
        it('deberia entrar en el catch', (done) => {
            getDataByBreed('sheepdogXXX', 'list')
                .then(subBreeds => done(true))
                .catch(err => done())
        })
    })

})