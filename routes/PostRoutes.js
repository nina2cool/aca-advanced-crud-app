const express = require('express');
const router = express.Router();

// TODO: Add your routes to the route here.

// bring in the controllers
var PostController = require('../controllers/PostsController.js');

// now a route for each type of request
router.get('/', PostController.list);
//
router.get('/:id/show', PostController.show);

router.post('/', PostController.create);

router.put('/:id', PostController.update);

router.delete('/:id', PostController.remove);

router.get('/add', PostController.add);

router.get('/:id/edit', PostController.edit);

module.exports = router;
