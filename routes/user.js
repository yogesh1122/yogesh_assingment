const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/getReports', userController.getReports );
 

//hello
module.exports = router;
