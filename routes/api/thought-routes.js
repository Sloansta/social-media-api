const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    addReaction,
    deleteReaction,
    deleteThought
} = require('../../controllers/thought-controller');


// GET all thoughts that exist
router
    .route('/')
    .get(getAllThoughts);

// Single routes thought by id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


// Single routes for thought by id and userId
router
    .route('/:userId')
    .post(createThought)

router
    .route('/:id/reactions')
    .post(addReaction);

// Single routes for reactions
router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;
