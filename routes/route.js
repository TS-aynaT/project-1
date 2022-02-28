const route = require('express').Router();
const func = require('../controllers/function')

route.post('/signup',func.signup)

module.exports=route;