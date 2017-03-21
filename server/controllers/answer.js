var answer = require('../models/answers')
var slug = require('slug')

var answers = {}

// answers.getAnswer = function (req,res,next) {
//   answer.find().populate('answer').then(function (result) {
//     console.log(result[0].answer);
//     res.json(result)
//   })
// }

answers.getAnswer = function (req,res,next) {
  answer.findOne({
    slug: req.params.slug
  }).then(function (result) {
    res.json(result.answer)
  })
}

// answers.createAnswer = function (req,res,next) {
//   answer.create({
//     answer: req.body.answer,
//     userId: req.body.username
//   }).then(function(data) {
//     console.log(data);
//     res.json(data)
//   }).catch(function(err){
//     console.log(err);
//     res.json(err)
//   })
// }

answers.createAnswer = function (req,res,next) {
  answer.findOneAndUpdate({
    slug: req.params.slug
  },{
    $push: {
      answer: req.body.answer
    }
  },{
    safe:true,
    upsert:true
  }, function(data) {
    res.json(data)
  })
}

module.exports = answers
