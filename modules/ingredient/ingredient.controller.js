const Ingredient = require('./ingredient.model');
const Boom = require('boom');

module.exports = {

  async create(req, reply) {

    try {
        const ingredient = await Ingredient.create({
            name: req.payload.name,
            unit: req.payload.unit
        });
        const allIngredients = await Ingredient.find({})
        return reply.response(allIngredients)
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

  async findOne(req, reply) {

    try {
        const ingredient = await Ingredient.findById(req.params.id)

        return reply.response(ingredient);
    }
    catch(err){
        throw err;
    }

  },

  update(req, reply) {

      let attributes = {};

      if (req.payload.name) {
          attributes.name = req.payload.name;
      }
      if (req.payload.unit) {
          attributes.unit = req.payload.unit;
      }

      Ingredient.findByIdAndUpdate(req.params.id, attributes, {new: true}, (err, ingredient) => {
          if (err) {
              return reply(err).code(500);
          }
          return reply.response(ingredient);
      })

  },

  delete(req, reply) {

      Ingredient.findByIdAndRemove(req.params.id, (err, result) => {

          if (err) {
              return reply(err).code(500);
          }

          return reply.response({msg: `ingredient has deleted with id ${req.params.id}`});
      })
  }

};
