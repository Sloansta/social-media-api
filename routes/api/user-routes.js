const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser, 
    updateUser,
    addFriend,
    deleteFriend,
    deleteUser
} = require('../../controllers/user-controller');

// setting up getters for user routes
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);



// set up GET one, PUT and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// PUT and DELETE routes for users friend
router
    .route('/:id/friends/:friendId')
    .put(addFriend)
    .delete(deleteFriend);

module.exports = router;