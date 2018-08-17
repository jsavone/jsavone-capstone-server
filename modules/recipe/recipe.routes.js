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
            cors: {
             origin: ['*'],
             credentials: true
            },
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
            cors: {
             origin: ['*'],
             credentials: true
            },
            description: 'Create new Recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly created Recipe'
        }
    },

    {
        path: '/recipes/ingredient/{recipeId}/{ingredientId}',
        method: 'PATCH',
        config: {
            cors: {
             origin: ['*'],
             credentials: true
            },
            handler: RecipeController.addIngredient,
            description: 'Add igredient to recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly updated recipe'
        }
    },
    {
        path: '/recipes/categories/{recipeId}/{categoryId}',
        method: 'PATCH',
        config: {
            cors: {
             origin: ['*'],
             credentials: true
            },
            handler: RecipeController.addCategory,
            description: 'Add category to recipe',
            tags: ['api','Categories'],
            notes: 'Returns newly updated recipe'
        }
    },
]
