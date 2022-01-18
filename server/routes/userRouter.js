const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.authentification);
router.delete('/auth',)

module.exports = router;
