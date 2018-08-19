const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
  },

  password:{
      type: String,
      required:true
  },
  firstName: String,
  lastName: String,
  admin: {
    type: Boolean,
    default: false,
  },
  sundayBfast: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  sundayLunch: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  sundayDinner: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  mondayBfast: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  mondayLunch: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  mondayDinner: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
});


module.exports = mongoose.model('User', UserSchema);
