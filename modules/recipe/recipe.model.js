const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    directions: String,
    img: String,
    video: String,
    cookTime: String,
    servingSize: Number,
    timesAdded: {type: Number, default: 0},
    ingredients: [{
      ingredientId: {type: Schema.Types.ObjectId, ref: 'Ingredient'},
      quantity: {type: Number, default: 1}
    }],
    categories: [{
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
