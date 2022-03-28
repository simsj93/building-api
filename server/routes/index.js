const express = require('express'); 
const chirpsRouter = require('./chirps');


let router = express.Router(); 

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter); 

module.exports = router; 

