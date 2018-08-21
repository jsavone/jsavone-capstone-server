const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

  comment: {
      type: String,
      required: true
  },
  created: {
      type: Date,
      default: Date.now
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  recipe: {
      type: Schema.Types.ObjectId,
      ref: 'Recipe',
      required: true
  },

});


module.exports = mongoose.model('Comment', CommentSchema);
