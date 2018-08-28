const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const AuthPlugin = require('../plugins/jwt.plugin');
const MongoosePlugin = require('../plugins/mongoose.plugin');
const IngredientModule = require('../modules/ingredient/ingredient.module');
const CategoryModule = require('../modules/category/category.module');
const CommentModule = require('../modules/comment/comment.module');
const RecipeModule = require('../modules/recipe/recipe.module');
const UserModule = require('../modules/user/user.module');

const goodOptions = {
    ops: {
        interval: 1000
    },
    reporters: {
        myConsoleReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{log: '*', response: '*'}]
        }, {
            module: 'good-console'
        }, 'stdout'],
        myFileReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ ops: '*' }]
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'
        }]

    }
};


module.exports = [
    {
      register: require('hapi-auth-jwt2')
    },
    {
        register: MongoosePlugin,
        options: {
            mongoDbUri: 'mongodb://jsavone:galvanize1@ds137102.mlab.com:37102/preptastic'
        }
    },
    Inert,
    Vision,
    {
        register: HapiSwagger,
        options: {
            info: {
                title: 'API Documentation',
                version: '0.0.1'
            }
        }
    },
    {
        register: require('good'),
        options: goodOptions
    },
    {
      register: AuthPlugin
    },
    IngredientModule,
    CategoryModule,
    CommentModule,
    RecipeModule,
    UserModule,
];
