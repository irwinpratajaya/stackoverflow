var express = require('express');
var router = express.Router();
var user = require('../controllers/user')

/* GET home page. */
router.get('/', user.getUsers)

router.get('/:id', user.getUser)

router.post('/', user.createUser)

router.delete('/:id', user.deleteUser)

router.put('/:id', user.updateUser)


module.exports = router;
