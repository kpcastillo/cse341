const express = require('express');
const { Router } = require('express');
const controllers = require('../controllers/index');

const router = Router();

router.get('/', controllers.welcome);
router.get('/karen', controllers.welcomeKaren);
//const controllers = require('./controllers');


// localhost:8080/professional/
module.exports = router;