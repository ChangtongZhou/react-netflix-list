const express = require('express');
const router = express.Router();

const movie_controller = require('../controllers/movie.controller');

router.get('/movies', movie_controller.getAll);
router.put('/movie/:id', movie_controller.addMovie);
router.delete('/movie/:id', movie_controller.removeMovie);

module.exports = router;