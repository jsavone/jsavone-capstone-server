const IngredientController = require('./ingredient.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required(),
    unit: Joi.string().required(),
});

module.exports = [
  {
    path: '/ingredients',
    method: 'POST',
    config: {
        cors: { origin: ['*'], credentials: true},
        handler: IngredientController.create,
        description: 'Create new Ingredient',
        tags: ['api','Ingredients'],
        notes: 'Returns newly created Ingredient'
    }
  },

  {
    path: '/ingredients',
    method: 'GET',
    config: {
        cors: { origin: ['*'], credentials: true},
        handler: IngredientController.find,
        tags: ['api','Companies'],
        description: 'Find all the Ingredients',
        notes: 'Returns all the Ingredients',
        }
  },

  {
    path: '/ingredients/{id}',
    method: 'GET',
    config: {
        cors: { origin: ['*'], credentials: true},
        handler: IngredientController.findOne,
        tags: ['api','Ingredients'],
        description: 'Find Ingredient By Id',
        notes: 'Returns a single Ingredient'
    }
  },

  {
    path: '/ingredients/{id}',
    method: 'DELETE',
    config: {
        cors: { origin: ['*'], credentials: true},
        handler: IngredientController.delete,
        tags: ['api','Ingredients'],
        description: 'Delete Ingredient By Id',
        notes: 'Returns a deleted ingredient'
    }
  },

  {
    path: '/ingredients/{id}',
    method: 'PUT',
    config: {
        cors: { origin: ['*'], credentials: true},
        handler: IngredientController.update,
        tags: ['api','Ingredients'],
        description: 'Update Ingredient By Id',
        notes: 'Returns a updated Ingredient'

    }
  }
];
