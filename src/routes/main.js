var express = require('express');
var router = express.Router();

var Default = require('../api/default');
var userController = require('../api/userController');

router.get('/', Default.index);
router.get('/user', userController.userList);
router.get('/user/:id', userController.userInfo);
router.post('/user/create', userController.userCreate);
router.post('/user/update/:id', userController.userUpdateById);
router.post('/user/delete/:id', userController.userDeleteById);

module.exports = router;