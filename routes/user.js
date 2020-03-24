const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/getReports', userController.getReports );



//check it git 
module.exports = router;