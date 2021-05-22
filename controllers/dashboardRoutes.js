const router = require('express').Router();

router.get('/dashboard', async (req,res) => {
    res.render('dashboard');
});

module.exports = router;