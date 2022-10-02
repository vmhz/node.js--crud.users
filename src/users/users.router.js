const router = require('express').Router()
const services = require('./users.services')

/* IN /users */
router.get('/users', services.usersGetAll)
router.post('/users', services.usersCreateOne)

/* IN /user */  
router.get('/user/:uuid', services.userGetByUuid)

//? Export default : 
module.exports = router