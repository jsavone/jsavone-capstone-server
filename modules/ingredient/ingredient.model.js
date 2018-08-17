const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const IngredientSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    unit: String,
    amount: {type: Number, default: 0}
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
