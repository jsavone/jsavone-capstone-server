const RecipeController = require('./recipe.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    title: Joi.string().required(),
    directions: Joi.string(),
    img: Joi.string(),
    video: Joi.string(),
    cookTime: Joi.string(),
    servingSize: Joi.number()
})

module.exports = [
    {
        path: '/recipes',
        method: 'GET',
        config :{
            handler: RecipeController.find,
            tags: ['api','Recipes'],
            description: 'Get all the Recipes',
            notes: 'Returns all the Recipes with Ingredients',
            }


    },

    {
        path: '/recipes',
        method: 'POST',
        config: {
            handler: RecipeController.create,
            description: 'Create new Recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly created Recipe'
        }
    }
]
