const Recipe = require('./recipe.model');
const Boom = require('boom')

module.exports = {

    async find(req, reply) {

        try{

            const recipes = await Recipe.find({})
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

            return reply.response(newRecipe)
        }
        catch (err) {
            throw Boom.badImplementation('could not create recipe',err);
        }
    },
}
