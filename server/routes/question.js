var express = require('express');
var router = express.Router();
var question = require('../controllers/question')
var answer = require('../controllers/answer')

/* GET home page. */
router.get('/', question.getAllQuestions)

router.get('/:slug', question.getQuestion)

router.post('/', question.createQuestion)

router.get('/answer', answer.getAnswer)

router.post('/answer', answer.createAnswer)

// router.delete('/:id', question.deleteUser)
//
// router.put('/:id', question.updateUser)


module.exports = router;
