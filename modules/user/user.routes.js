const UserController = require('./user.controller');
const Joi = require('joi');

module.exports = [
    {
        path: '/users/signup',
        method: 'POST',
        config: {
            handler: UserController.signup,
            description: 'User can create new Account',
            tags: ['api','Users'],
            notes: 'Returns a signup response',
            cors: false,
            auth: false
        }

    },
    {
    path: '/users/login',
    method: 'POST',
    config: {
        handler: UserController.login,
        description: 'User can Login to his Account',
        tags: ['api','Users'],
        notes: 'Returns a JSON Web Token',
        auth:false
    }
},
]
