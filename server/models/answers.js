const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let answerSchema = Schema({
  question: {type: Schema.Types.ObjectId, ref: 'question'},
  answer: {type: String, required: true},
  userId: {type: Schema.Types.ObjectId, ref: 'user'},
  votes: {type: Number, default: 0}
}, {
  timestamps: true
})

var answer = mongoose.model('answer', answerSchema );

module.exports = answer
