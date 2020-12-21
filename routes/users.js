var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/newuser', userController.newuser) 


module.exports = router;
