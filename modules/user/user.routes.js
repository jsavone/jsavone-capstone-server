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
    }

  },
  {
    path: '/users/login',
    method: 'POST',
    config: {
        handler: UserController.login,
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
    config: {
        handler: UserController.allUsers,
        cors: { origin: ['*'], credentials: true},
        description: 'Gets all users',
        tags: ['api','Users'],
        notes: 'Returns list of all users',
        auth:false
    }
  },
  {
    path: '/users/{id}',
    method: 'GET',
    config: {
        handler: UserController.currUser,
        cors: { origin: ['*'], credentials: true},
        description: 'Gets one user',
        tags: ['api','Users'],
        notes: 'Returns one user',
        auth:false
    }
  },

  {
    path: '/users/add/{userId}/{meal}/{recipeId}',
    method: 'PATCH',
    config: {
        handler: UserController.addMeal,
        cors: { origin: ['*'], credentials: true},
        description: 'Adds recipe to user day',
        tags: ['api','Users'],
        notes: 'Returns a user',
        auth:false
    }
  },
  {
    path: '/users/remove/{userId}/{meal}/{recipeId}',
    method: 'PATCH',
    config: {
        handler: UserController.removeMeal,
        cors: { origin: ['*'], credentials: true},
        description: 'Removes recipe from user day',
        tags: ['api','Users'],
        notes: 'Returns a user',
        auth:false
    }
  }

]
