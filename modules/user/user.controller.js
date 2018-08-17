const User = require('./user.model');
const UtilService = require('../../services/util.service');
const Boom = require('boom');
const JwtService = require('../../services/jwt.service');

module.exports = {

    async signup(req, reply) {
      console.log('signup request: ', req.payload)
        try {
            const user = new User({
                email: req.payload.email,
                password: req.payload.password,
                firstName: req.payload.firstName,
                lastName: req.payload.lastName
            });

            user.password = await UtilService.hashPassword(user.password);
            await user.save();

            return reply.response(user);

        }
        catch(err){
            throw Boom.badImplementation('Signup Failed',err);
        }
    },

    async login(req, reply){

    try {
        const user = await User.findOne({
            email: req.payload.email
        });
        if (!user) {
            reply(Boom.unauthorized('Invalid credentials provided'));
        }

       const matched = await UtilService.comparePassword(req.payload.password, user.password);
        if(matched){
           // const token = JwtService.issue({
           //      payload:{
           //          id: user._id,
           //          email: user.email
           //      },
           //      expiresIn : '1 day'
           //  });
          // reply.response({token:token});
            return reply.response(user);
        }
        else{
            reply(Boom.unauthorized('Invalid credentials provided'));
        }
        }
        catch(err){
            throw Boom.unauthorized('Invalid credentials provided',err);
        }
    },
      async allUsers(req, reply){
        const users = await User.find({})

        return reply.response(users)
    },

    async currUser (req, reply){
      const user = await User.findOne({_id: req.params.id})

      return reply.response(user)
  },
}
