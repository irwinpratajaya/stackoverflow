const mongoose = require('mongoose');
var express =  require('express');
mongoose.connect('mongodb://localhost/stackoverflow')

let user = require('./models/users')
let question = require('./models/questions')
let answer = require('./models/answers')

// let title = new question({
//   userId: '58c90e56aeb6e366d8c6911f',
//   title: 'belajar javascript',
//   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   votes: 0,
//   answer: []
// })
//
// title.save(function(err,res) {
//   if(err) {
//     return console.log(err);
//   } else {
//     console.log('data input berhasil');
//   }
// })

// let ans = new answer({
//   userId: '58c90e56aeb6e366d8c6911f',
//   question: '58c93ab1aff52b0d4fbc266d',
//   answer: 'PERTAMAX GAN!!!',
//   votes: 0
// })
//
// ans.save(function(err,res) {
//   if(err) {
//     return console.log(err);
//   } else {
//     console.log('data input berhasil');
//   }
// })

// question.findByIdAndUpdate(
//   '58c93ab1aff52b0d4fbc266d', { // question id
//     $push: {
//       answer: '58c93ae02baaa00d817663d2' // answer id
//     }
//   }, {
//     safe: true,
//     upsert: true
//   },
//   function(err,model) {
//     console.log(model);
//   }
// )

question.find().populate('question').then(function(result) {
  console.log(result);
})
