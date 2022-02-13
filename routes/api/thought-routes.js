const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');


// GET all thoughts that exist
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// Single routes thought by id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;
