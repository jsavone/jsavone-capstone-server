const CategoryController = require('./category.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/categories',
        method: 'GET',
        config: {
            handler: CategoryController.find,
            cors: { origin: ['*'], credentials: true},
            description:'Find all the Categories',
            tags: ['api','Categories'],
            notes:'Returns all the Categories',
            auth: 'jwt',
        }
    },
    {
        path: '/categories',
        method: 'POST',
        config: {
            handler: CategoryController.create,
            cors: { origin: ['*'], credentials: true},
            description:'Create new Category',
            tags: ['api','Categories'],
            notes:'Returns newly created Category',
            auth: 'jwt',
        }
    }
];
