const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of /users for routes created in user routes
router.use('/users', userRoutes);

// add prefix of thoughts for routes created in thought routes
router.use('/thoughts', thoughtRoutes);

module.exports = router;