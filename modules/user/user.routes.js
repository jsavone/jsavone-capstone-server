const UserController = require('./user.controller');
const Joi = require('joi');

module.exports = [

  {
    path: '/users/signup',
    method: 'POST',
    handler: UserController.signup,
    config: {
        cors: { origin: ['*'], credentials: true},
        description: 'User can create new Account',
        tags: ['api','Users'],
        notes: 'Returns a signup response',
        auth: false,
    }
  },

  {
    path: '/users/login',
    method: 'POST',
    handler: UserController.login,
    config: {
        cors: { origin: ['*'], credentials: true},
        description: 'User can Login to his Account',
        tags: ['api','Users'],
        notes: 'Returns a JSON Web Token',
        auth:false
    }
  },

  {
    path: '/users',
    method: 'GET',
    handler: UserController.allUsers,
    config: {
        cors: { origin: ['*'], credentials: true},
        description: 'Gets all users',
        tags: ['api','Users'],
        notes: 'Returns list of all users',
        auth:'jwt'
    }
  },

  {
    path: '/users/{id}',
    method: 'GET',
    handler: UserController.currUser,
    config: {
        cors: { origin: ['*'], credentials: true},
        description: 'Gets one user',
        tags: ['api','Users'],
        notes: 'Returns one user',
        auth: 'jwt'
    }
  },

  {
    path: '/users/add/{userId}/{meal}/{recipeId}',
    method: 'PATCH',
    handler: UserController.addMeal,
    config: {
        cors: { origin: ['*'], credentials: true},
        description: 'Adds recipe to user day',
        tags: ['api','Users'],
        notes: 'Returns a user',
        auth: 'jwt'
    }
  },

  {
    path: '/users/remove/{userId}/{meal}/{recipeId}',
    method: 'PATCH',
    handler: UserController.removeMeal,
    config: {
        cors: { origin: ['*'], credentials: true},
        description: 'Removes recipe from user day',
        tags: ['api','Users'],
        notes: 'Returns a user',
        auth: 'jwt'
    }
  }

]
