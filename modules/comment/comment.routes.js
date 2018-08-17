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
          notes: 'Returns newly created Comment'
      }
  },

];
