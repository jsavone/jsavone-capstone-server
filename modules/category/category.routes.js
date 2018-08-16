const CategoryController = require('./category.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/categories',
        method: 'GET',
        config: {
            handler: CategoryController.find,
            description:'Find all the Categories',
            tags: ['api','Categories'],
            notes:'Returns all the Categories'
        }
    },
    {
        path: '/categories',
        method: 'POST',
        config: {
            handler: CategoryController.create,
            validate:{
                payload: Joi.object().keys({
                    category: Joi.string().required(),
                })
            },
            description:'Create new Category',
            tags: ['api','Categories'],
            notes:'Returns newly created Category'
        }
    }
];
