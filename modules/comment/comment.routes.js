const CommentController = require('./comment.controller');

module.exports = [
  {
      path: '/comments',
      method: 'GET',
      handler: CommentController.find,
      config: {
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
      handler: CommentController.create,
      config: {
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
      handler: CommentController.remove,
      config: {
          cors: { origin: ['*'], credentials: true},
          tags: ['api','Comments'],
          description:'Delete comment',
          notes: 'Returns recipes without the deleted comment',
          auth: 'jwt',
      }
  },

];
