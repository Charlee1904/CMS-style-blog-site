const router = require('express').Router();

const api = require('./api');

const homeRoutes = require('./homeRoutes');
const dashRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/', dashRoutes);
router.use('/api', api);


module.exports = router;