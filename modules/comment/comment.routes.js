const CommentController = require('./comment.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/comments',
        method: 'GET',
        config: {
            handler: CommentController.find,
            tags: ['api','Comments'],
            description: 'Find all Comments',
            notes: 'Returns all Comments',
        }
    },
    {
        path: '/comments',
        method: 'POST',
        config: {
            handler: CommentController.create,
            validate: {
                payload: Joi.object().keys({
                    comment: Joi.string().required(),
                    user: Joi.string().required(),
                    recipe: Joi.string().required(),
                }),
            },
            tags: ['api','Comments'],
            description:'Create new Comment',
            notes: 'Returns newly created Comment'

        }
    },

];
