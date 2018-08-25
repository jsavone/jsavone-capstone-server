const CommentController = require('./comment.controller');
const Joi = require('joi');
module.exports = [
  {
      path: '/comments',
      method: 'GET',
      config: {
          handler: CommentController.find,
          cors: { origin: ['*'], credentials: true},
          tags: ['api','Comments'],
          description: 'Find all Comments',
          notes: 'Returns all Comments',
          auth: 'jwt',
      }
  },

  {
      path: '/comments',
      method: 'POST',
      config: {
          handler: CommentController.create,
          cors: { origin: ['*'], credentials: true},
          tags: ['api','Comments'],
          description:'Create new Comment',
          notes: 'Returns newly created Comment',
          auth: 'jwt',
      }
  },

  {
      path: '/comments/remove/{recipeId}/{commentId}',
      method: 'DELETE',
      config: {
          handler: CommentController.remove,
          cors: { origin: ['*'], credentials: true},
          tags: ['api','Comments'],
          description:'Delete comment',
          notes: 'Returns recipes without the deleted comment',
          auth: 'jwt',
      }
  },

];
