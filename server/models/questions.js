const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionSchema = Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  userId: {type: Schema.Types.ObjectId, ref: 'user'},
  answer: [{type: Schema.Types.ObjectId, ref: 'answer'}],
  votes: {type: Number, default: 0},
  slug: String
}, {
  timestamps: true
})

var question = mongoose.model('question', questionSchema );

module.exports = question
