const UserController = require('./user.controller');
const Joi = require('joi');

module.exports = [
    {
        path: '/users/signup',
        method: 'POST',
        handler: UserController.signup,
        config: {
            cors: {
             origin: ['*'],
             credentials: true
            },
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
        cors: {
         origin: ['*'],
         credentials: true
        },
        description: 'User can Login to his Account',
        tags: ['api','Users'],
        notes: 'Returns a JSON Web Token',
        auth:false
    }
},
]
