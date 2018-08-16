const Ingredient = require('./ingredient.model');
const Boom = require('boom');

module.exports = {

    async create(req, reply) {

        try {
            const ingredient = await Ingredient.create({
                name: req.payload.name,
                unit: req.payload.unit
            });
            return reply.response(ingredient)
        }
        catch(err){
            throw Boom.badImplementation('could not create ingredient',err);
        }

    },
    async find(req, reply) {

        try {
            const ingredients = await Ingredient.find({})

            return reply.response(ingredients);
        }
        catch(err){
            throw err;
        }
    },

};
