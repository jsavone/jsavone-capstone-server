const Recipe = require('./recipe.model');
const Boom = require('boom')

module.exports = {

    async find(req, reply) {

        try{

            const recipes = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
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
            return reply.response(recipe)
            }

        catch (err) {
            throw Boom.badImplementation('could not add category',err);
        }
    }
}
