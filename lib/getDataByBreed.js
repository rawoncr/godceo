'use strict'
const _ = {
    get: require('lodash/get')
};
const axios = require('axios');

module.exports = (breed, option) => new Promise(function(resolve, reject) {
    if (!breed || !option) reject();

    axios.get(`https://dog.ceo/api/breed/${breed}/${option}`)
        .then(breeds => resolve(_.get(breeds, 'data.message', [])))
        .catch(reject);
});