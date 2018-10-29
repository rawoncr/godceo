const expect = require('chai').expect
const formatUrl = require('../lib/formatUrl.js')
const urls = ['www.google.com',  'amazon.com']
const urlsExpected = [{ url : 'www.google.com'}, { url : 'amazon.com'}]

describe("formatUrl", () => {
    describe(" - Primera prueba", () => {
        it('deberia retornar el objeto con el atributo ulr', () => {
            expect({ url : 'www.google.com'}).to.deep.equal(formatUrl(urls[0]))
        })
    })

    describe(" - Segunda prueba", () => {
        it('deberia retornar el array de objetos con el atributo url', () => {
            expect(urlsExpected).to.deep.equal(urls.map(formatUrl))
        })
    })

})