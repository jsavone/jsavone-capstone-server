const Comment = require('./comment.model');
const Recipe = require('../recipe/recipe.model');
module.exports = {

    async find(req, reply) {
        try {
            const comments = await Comment.find({})
                .populate('recipe');
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

            return reply.response(comment);
        }
        catch (err) {
            throw err;
        }
    }
};
