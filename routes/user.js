const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/getReports', userController.getReports );
 
<<<<<<< HEAD
module.exports = router;

//here are router codes


=======

//hello
module.exports = router;
>>>>>>> 1233dcf3b495a17822c7a51b9054d211a17313a1
