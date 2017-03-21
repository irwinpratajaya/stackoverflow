var question = require('../models/questions')
var slug = require('slug')

var questions = {}

questions.createQuestion = function (req,res,next) {
  question.create({
    title: req.body.title,
    content: req.body.content,
    slug: slug(req.body.title).toLowerCase()
  }).then(function(data) {
    res.json(data)
  }).catch(function(err) {
    res.json(err)
  })
}

questions.getAllQuestions = function (req,res,next) {
  question.find().populate('userId').then(function(data) {
    console.log(data.userId);
    res.json(data)
  }).catch(function (err) {
    res.json(err)
  })
}

// questions.getQuestion = function (req,res,next) {
//   question.findOne({_id:req.params.id}).populate('userId').then(function(data,err) {
//     res.json(data)
//   }).catch(function (err) {
//     res.json(err)
//   })
// }

questions.getQuestion = function (req,res,next) {
  question.find({slug:req.params.slug}).populate('answer').then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

questions.updateQuestions = function (req,res,next) {
  question.update({
    _id: req.params.id
  }, {
    $set: req.body
  }).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}


module.exports = questions
