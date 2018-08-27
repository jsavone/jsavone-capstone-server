const CategoryController = require('./category.controller');

module.exports = [
  {
      path: '/categories',
      method: 'GET',
      handler: CategoryController.find,
      config: {
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
      handler: CategoryController.create,
      config: {
          cors: { origin: ['*'], credentials: true},
          description:'Create new Category',
          tags: ['api','Categories'],
          notes:'Returns newly created Category',
          auth: 'jwt',
      }
  }
];
