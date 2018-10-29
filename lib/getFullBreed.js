'use strict'
const getDataByBreed = require('./getDataByBreed');
const formatUrl = require('./formatUrl');

module.exports = (breed) => new Promise(function(resolve, reject) {
    if (!breed) reject();

    const getSubBreeds = getDataByBreed(breed, 'list');
    const getImages = getDataByBreed(breed, 'images');

    Promise.resolve([ getSubBreeds, getImages ])
        .spread((subBreeds, images) => resolve({
            breed,
            subBreeds,
            images: images.map(formatUrl)
        }))
        .catch(reject);
});