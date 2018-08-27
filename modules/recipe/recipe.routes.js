const RecipeController = require('./recipe.controller');

module.exports = [

    {
        path: '/recipes',
        method: 'GET',
        handler: RecipeController.find,
        config :{
            auth: 'jwt',
            cors: {origin: ['*'], credentials: true},
            tags: ['api','Recipes'],
            description: 'Get all the Recipes',
            notes: 'Returns all the Recipes with Ingredients',
        }
    },

    {
        path: '/recipes',
        method: 'POST',
        handler: RecipeController.create,
        config: {
            cors: {origin: ['*'], credentials: true},
            auth: 'jwt',
            description: 'Create new Recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly created Recipe'
        }
    },

    {
        path: '/recipes',
        method: 'PATCH',
        handler: RecipeController.edit,
        config: {
            cors: {origin: ['*'], credentials: true},
            auth: 'jwt',
            description: 'Edit existing recipe',
            tags: ['api','Recipes'],
            notes: 'Returns new list of recipes'
        }
    },

    {
        path: '/recipes/ingredient/{recipeId}/{ingredientId}/{amount}',
        method: 'PATCH',
        handler: RecipeController.addIngredient,
        config: {
            cors: {origin: ['*'], credentials: true},
            auth: 'jwt',
            description: 'Add igredient to recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly updated recipe'
        }
    },

    {
        path: '/recipes/ingredient/remove/{recipeId}/{ingredientId}',
        method: 'PATCH',
        handler: RecipeController.removeIngredient,
        config: {
            cors: {origin: ['*'], credentials: true},
            auth: 'jwt',
            description: 'Remove ingredient from recipe',
            tags: ['api','Recipes'],
            notes: 'Returns newly updated recipes'
        }
    },

    {
        path: '/recipes/categories/{recipeId}/{categoryId}',
        method: 'PATCH',
        handler: RecipeController.addCategory,
        config: {
            cors: {origin: ['*'], credentials: true},
            auth: 'jwt',
            description: 'Add category to recipe',
            tags: ['api','Categories'],
            notes: 'Returns newly updated recipe'
        }
    },

    {
        path: '/recipes/categories/remove/{recipeId}/{categoryId}',
        method: 'PATCH',
        handler: RecipeController.removeCategory,
        config: {
            cors: {origin: ['*'], credentials: true},
            auth: 'jwt',
            description: 'Remove category from recipe',
            tags: ['api','Categories'],
            notes: 'Returns newly updated list of recipes'
        }
    },
]
