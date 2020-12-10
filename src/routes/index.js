const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.status(200).render('index')
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;