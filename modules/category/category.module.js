const categoryRoutes = require('./category.routes');

const CategoryModule = {
    register: (server, options, next) => {

        server.route(categoryRoutes);
        next();
    }
};

CategoryModule.register.attributes = {
    name: 'CategoryModule',
    pkg: require('../../package.json')
};


module.exports = CategoryModule;
