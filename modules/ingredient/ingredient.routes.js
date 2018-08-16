const IngredientController = require('./ingredient.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required(),
    unit: Joi.string().required(),
});

module.exports = [
    {
        path: '/ingredients',
        method: 'POST',
        config: {
            handler: IngredientController.create,
            description: 'Create new Ingredient',
            tags: ['api','Ingredients'],
            notes: 'Returns newly created Ingredient'
        }
    },
    {
        path: '/ingredients',
        method: 'GET',
        config: {
            handler: IngredientController.find,
            tags: ['api','Companies'],
            description: 'Find all the Ingredients',
            notes: 'Returns all the Ingredients',
            }
        }
];
