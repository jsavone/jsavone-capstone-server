const IngredientController = require('./ingredient.controller');

module.exports = [
  {
    path: '/ingredients',
    method: 'POST',
    handler: IngredientController.create,
    config: {
        cors: { origin: ['*'], credentials: true},
        description: 'Create new Ingredient',
        tags: ['api','Ingredients'],
        notes: 'Returns newly created Ingredient',
        auth: 'jwt',
    }
  },

  {
    path: '/ingredients',
    method: 'GET',
    handler: IngredientController.find,
    config: {
        cors: { origin: ['*'], credentials: true},
        tags: ['api','Companies'],
        description: 'Find all the Ingredients',
        notes: 'Returns all the Ingredients',
        auth: 'jwt',
    }
  },

  {
    path: '/ingredients/{id}',
    method: 'GET',
    handler: IngredientController.findOne,
    config: {
        cors: { origin: ['*'], credentials: true},
        tags: ['api','Ingredients'],
        description: 'Find Ingredient By Id',
        notes: 'Returns a single Ingredient',
        auth: 'jwt',
    }
  },

  {
    path: '/ingredients/{id}',
    method: 'DELETE',
    handler: IngredientController.delete,
    config: {
        cors: { origin: ['*'], credentials: true},
        tags: ['api','Ingredients'],
        description: 'Delete Ingredient By Id',
        notes: 'Returns a deleted ingredient',
        auth: 'jwt',
    }
  },

  {
    path: '/ingredients/{id}',
    method: 'PUT',
    handler: IngredientController.update,
    config: {
        cors: { origin: ['*'], credentials: true},
        tags: ['api','Ingredients'],
        description: 'Update Ingredient By Id',
        notes: 'Returns a updated Ingredient',
        auth: 'jwt',
    }
  }
];
