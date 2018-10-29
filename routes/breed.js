const express = require('express');
const router = express.Router();
const getFullBreed = require('../lib/getFullBreed');

/* GET Breeds listing. */
router.get('/:breed', function(req, res, next) {
    getFullBreed(req.params.breed)
        .then(breed => res.send(breed))
        .catch(err => next());
});

module.exports = router;