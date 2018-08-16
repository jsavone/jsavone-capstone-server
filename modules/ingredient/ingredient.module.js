const ingredientRoutes = require('./ingredient.routes');

const IngredientModule = {
    register: function (server, options, next) {

        server.route(ingredientRoutes);
        next();
    }
};

IngredientModule.register.attributes = {
    name: 'IngredientModule',
    pkg: require('../../package.json')
};

module.exports = IngredientModule;
