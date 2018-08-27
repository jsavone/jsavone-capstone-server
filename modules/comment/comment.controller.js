const Comment = require('./comment.model');
const Recipe = require('../recipe/recipe.model');

module.exports = {

    async find(req, reply) {
        try {
            const comments = await Comment.find({})
                .populate('recipe')
                .populate('user')
            reply.response(comments);
        } catch (err) {
            throw err;
        }
    },

    async create(req, reply) {

        try {
            const comment = await Comment.create({
                comment: req.payload.comment,
                user: req.payload.user,
                recipe: req.payload.recipe,
            });

            const _recipe = await Recipe.findById(req.payload.recipe);
            _recipe.comments = [..._recipe.comments, comment];
            await _recipe.save();

            let comments = await Comment.find({})
              .populate('recipe')
              .populate('user')
            return reply.response(comments)
        }
        catch (err) {
            throw err;
        }
    },

    async remove(req, reply) {

        try {
            await Comment.findByIdAndRemove(req.params.commentId)

            const _recipe = await Recipe.findById(req.params.recipeId);
            const filteredRecipe = _recipe.comments.filter(comment=> comment._id !== req.params.commentId)
            _recipe.comments = [...filteredRecipe];
            await _recipe.save();

            let recipes = await Recipe.find({})
              .populate('comments')
              .populate('ingredients.ingredientId')
              .populate('categories')
              .populate('comments')
            return reply.response(recipes)
        }
        catch (err) {
            throw err;
        }
    }
};
