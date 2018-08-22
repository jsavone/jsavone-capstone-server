const JwtService = require('../services/jwt.service');
const config = require('../config/development');

const AuthPlugin = {
  register: function (server, options, next) {

    server.auth.strategy('jwt','jwt',{
       key: config.secret,
       verifyOptions:{
           algorithm: ['HS256']
       },
       validateFunc: JwtService.validate
    });

    server.auth.default('jwt');
    next();
  }
}
AuthPlugin.register.attributes ={
  name: 'AuthPlugin',
  version: '1.0.0',
  once: true
}

module.exports = AuthPlugin;
