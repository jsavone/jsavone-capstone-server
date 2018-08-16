const recipeRoutes = require('./recipe.routes');
const RecipeModule = {
    register: (server, options, next) => {

        server.route(recipeRoutes);
        next();
    }
};

RecipeModule.register.attributes = {
    name: 'RecipeModule',
    pkg: require('../../package.json')
};


module.exports = RecipeModule;
