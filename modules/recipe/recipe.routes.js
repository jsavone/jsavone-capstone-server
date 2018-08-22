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
            auth: false,
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
            auth: false,
            description: 'Create new Recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly created Recipe'
        }
    },

    {
        path: '/recipes',
        method: 'PATCH',
        config: {
            handler: RecipeController.edit,
            cors: {
             origin: ['*'],
             credentials: true
            },
            auth: false,
            description: 'Edit existing recipe',
            tags: ['api','Recipes'],
            notes: 'Returns new list of recipes'
        }
    },

    {
        path: '/recipes/ingredient/{recipeId}/{ingredientId}/{amount}',
        method: 'PATCH',
        config: {
            cors: {
             origin: ['*'],
             credentials: true
            },
            auth: false,
            handler: RecipeController.addIngredient,
            description: 'Add igredient to recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly updated recipe'
        }
    },

    {
        path: '/recipes/ingredient/remove/{recipeId}/{ingredientId}',
        method: 'PATCH',
        config: {
            cors: {
             origin: ['*'],
             credentials: true
            },
            auth: false,
            handler: RecipeController.removeIngredient,
            description: 'Remove ingredient from recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly updated recipes'
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
            auth: false,
            handler: RecipeController.addCategory,
            description: 'Add category to recipe',
            tags: ['api','Categories'],
            notes: 'Returns newly updated recipe'
        }
    },

    {
        path: '/recipes/categories/remove/{recipeId}/{categoryId}',
        method: 'PATCH',
        config: {
            cors: {
             origin: ['*'],
             credentials: true
            },
            auth: false,
            handler: RecipeController.removeCategory,
            description: 'Remove category from recipe',
            tags: ['api','Categories'],
            notes: 'Returns newly updated list of recipes'
        }
    },
]
