const router = require('express').Router();
const apiRoutes = require('./api');

// add prefix of /api to the api routes imported from api
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;