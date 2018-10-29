global.Promise = require('bluebird');
const expect = require('chai').expect
const assert = require('chai').assert
const getFullBreed = require('../lib/getFullBreed')

describe("getFullBreed", () => {
    describe(" - Primera prueba", () => {
        it('deberia retornar el objeto con los 3 campos esperados', (done) => {
            getFullBreed('hound')
                .then(breed => {
                    assert.isObject(breed);
                    expect(breed).to.have.all.keys('breed', 'subBreeds', 'images');
                    done()
                })
                .catch(done)
        })
    })

    describe(" - Segunda prueba", () => {
        it('deberia entrar en el catch', (done) => {
            getFullBreed('houndxxxx')
                .then(breed => done(true))
                .catch(err => done())
        })
    })

})