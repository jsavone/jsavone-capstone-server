const hapi = require('hapi');
const server = new hapi.Server(+process.env.PORT, '0.0.0.0');
const plugins = require('./config/plugins');
const JwtService = require('./services/jwt.service');
const config = require('./config/development');

server.connection();

server.register(plugins, (err) => {

    if (err) {
        throw err;
    }

    server.start(err => {
        if (err) {
            throw err;
        }

        console.log(`Server Running at PORT ${server.info.port}`);
    });
});
