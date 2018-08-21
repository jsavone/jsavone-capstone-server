const Recipe = require('./recipe.model');
const Boom = require('boom')

module.exports = {

    async find(req, reply) {

        try{

            const recipes = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
              .populate('comments')
            return reply.response(recipes);
        }
        catch(err){
            throw err;
        }
    },
    async create (req, reply) {

        try {
            const newRecipe = await Recipe.create({
                title: req.payload.title,
                directions: req.payload.directions,
                img: req.payload.img,
                video: req.payload.video,
                cookTime: req.payload.cookTime,
                servingSize: req.payload.servingSize
            });
            const recipeList = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
              .populate('comments')
            return reply.response(recipeList)
        }
        catch (err) {
            throw Boom.badImplementation('could not create recipe',err);
        }
    },

    async edit (req, reply) {

        try {
            const recipe = await Recipe.findOne({_id: req.payload._id})

                if (req.payload.title !== '') {
                  recipe.title = req.payload.title
                }
                if (req.payload.directions !== '') {
                  recipe.directions = req.payload.directions
                }
                if (req.payload.img !== '') {
                  recipe.img = req.payload.img
                }
                if (req.payload.video !== '') {
                  recipe.video = req.payload.video
                }
                if (req.payload.cookTime !== '') {
                  recipe.cookTime = req.payload.cookTime
                }
                if (req.payload.servingSize !== '') {
                  recipe.servingSize = req.payload.servingSize
                }

                await recipe.save()

            const recipeList = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
              .populate('comments')
            return reply.response(recipeList)
        }
        catch (err) {
            throw Boom.badImplementation('could not create recipe',err);
        }
    },

    async addIngredient (req, reply) {

        try {
            let recipe = await Recipe.findOne({_id: req.params.recipeId})
            recipe.ingredients = [...recipe.ingredients, {ingredientId:req.params.ingredientId, amount: req.params.amount}]
            await recipe.save()
            let recipes = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
              .populate('comments')
            return reply.response(recipes)
            }

        catch (err) {
            throw Boom.badImplementation('could not create recipe',err);
        }
    },

    async removeIngredient (req, reply) {

        try {
            let recipe = await Recipe.findOne({_id: req.params.recipeId})
            let ingredients = recipe.ingredients.filter(ingredient=> ingredient._id != req.params.ingredientId)
            recipe.ingredients = [...ingredients]
            await recipe.save()

            let recipes = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
              .populate('comments')
            return reply.response(recipes)
            }

        catch (err) {
            throw Boom.badImplementation('could not create recipe',err);
        }
    },

    async addCategory (req, reply) {

        try {
            let recipe = await Recipe.findOne({_id: req.params.recipeId})
            recipe.categories = [...recipe.categories, req.params.categoryId]
            await recipe.save()
            let recipes = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
              .populate('comments')
            return reply.response(recipes)
            }

        catch (err) {
            throw Boom.badImplementation('could not add category',err);
        }
    },

    async removeCategory (req, reply) {

        try {
            let recipe = await Recipe.findOne({_id: req.params.recipeId})
            let categories = recipe.categories.filter(category=> category._id != req.params.categoryId)
            recipe.categories = [...categories]
            await recipe.save()

            let recipes = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
              .populate('comments')
            return reply.response(recipes)
            }

        catch (err) {
            throw Boom.badImplementation('could not create recipe',err);
        }
    },
}
