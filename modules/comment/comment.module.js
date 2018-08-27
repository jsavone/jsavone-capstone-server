const commentRoutes = require('./comment.routes');

const CommentModule = {
    register: (server, options, next) => {

        server.route(commentRoutes);
        next();
    }
};

CommentModule.register.attributes = {
    name: 'CommentModule',
    pkg: require('../../package.json')
};


module.exports = CommentModule;
