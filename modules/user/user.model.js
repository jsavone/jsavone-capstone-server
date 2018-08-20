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
  tuesdayBfast: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  tuesdayLunch: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  tuesdayDinner: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  wednesdayBfast: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  wednesdayLunch: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  wednesdayDinner: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  thursdayBfast: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  thursdayLunch: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  thursdayDinner: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  fridayBfast: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  fridayLunch: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  fridayDinner: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  saturdayBfast: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  saturdayLunch: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
  saturdayDinner: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
});


module.exports = mongoose.model('User', UserSchema);
