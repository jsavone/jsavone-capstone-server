const User = require('./user.model');
const UtilService = require('../../services/util.service');
const Boom = require('boom');
const JwtService = require('../../services/jwt.service');

module.exports = {

    async signup(req, reply) {
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
           const token = JwtService.issue({
                payload:{
                    _id: user._id,
                    email: user.email,
                    isAdmin: user.admin,
                },
                expiresIn : '1 day'
            });
          return reply.response({token:token});
            // return reply.response(user);
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
        .populate('sundayBfast')
        .populate('sundayLunch')
        .populate('sundayDinner')
        .populate('mondayBfast')
        .populate('mondayLunch')
        .populate('mondayDinner')
        .populate('tuesdayBfast')
        .populate('tuesdayLunch')
        .populate('tuesdayDinner')
        .populate('wednesdayBfast')
        .populate('wednesdayLunch')
        .populate('wednesdayDinner')
        .populate('thursdayBfast')
        .populate('thursdayLunch')
        .populate('thursdayDinner')
        .populate('fridayBfast')
        .populate('fridayLunch')
        .populate('fridayDinner')
        .populate('saturdayBfast')
        .populate('saturdayLunch')
        .populate('saturdayDinner')

        return reply.response(users)
    },

    async currUser (req, reply){
      const user = await User.findOne({_id: req.params.id})
        .populate('sundayBfast')
        .populate('sundayLunch')
        .populate('sundayDinner')
        .populate('mondayBfast')
        .populate('mondayLunch')
        .populate('mondayDinner')
        .populate('tuesdayBfast')
        .populate('tuesdayLunch')
        .populate('tuesdayDinner')
        .populate('wednesdayBfast')
        .populate('wednesdayLunch')
        .populate('wednesdayDinner')
        .populate('thursdayBfast')
        .populate('thursdayLunch')
        .populate('thursdayDinner')
        .populate('fridayBfast')
        .populate('fridayLunch')
        .populate('fridayDinner')
        .populate('saturdayBfast')
        .populate('saturdayLunch')
        .populate('saturdayDinner')

      return reply.response(user)
  },

  async addMeal(req, reply) {

      try {

        const user = await User.findById(req.params.userId)
        user[req.params.meal] = req.params.recipeId
        await user.save();
        const updatedUser = await User.findById(req.params.userId)
        .populate('sundayBfast')
        .populate('sundayLunch')
        .populate('sundayDinner')
        .populate('mondayBfast')
        .populate('mondayLunch')
        .populate('mondayDinner')
        .populate('tuesdayBfast')
        .populate('tuesdayLunch')
        .populate('tuesdayDinner')
        .populate('wednesdayBfast')
        .populate('wednesdayLunch')
        .populate('wednesdayDinner')
        .populate('thursdayBfast')
        .populate('thursdayLunch')
        .populate('thursdayDinner')
        .populate('fridayBfast')
        .populate('fridayLunch')
        .populate('fridayDinner')
        .populate('saturdayBfast')
        .populate('saturdayLunch')
        .populate('saturdayDinner')
          return reply.response(updatedUser, req.params.meal)

      }
      catch(err){
          throw Boom.badImplementation('Adding Recipe Failed',err);
      }
  },

  async removeMeal(req, reply) {

      try {

        const user = await User.findById(req.params.userId)
        user[req.params.meal] = undefined
        await user.save();
        const updatedUser = await User.findById(req.params.userId)
        .populate('sundayBfast')
        .populate('sundayLunch')
        .populate('sundayDinner')
        .populate('mondayBfast')
        .populate('mondayLunch')
        .populate('mondayDinner')
        .populate('tuesdayBfast')
        .populate('tuesdayLunch')
        .populate('tuesdayDinner')
        .populate('wednesdayBfast')
        .populate('wednesdayLunch')
        .populate('wednesdayDinner')
        .populate('thursdayBfast')
        .populate('thursdayLunch')
        .populate('thursdayDinner')
        .populate('fridayBfast')
        .populate('fridayLunch')
        .populate('fridayDinner')
        .populate('saturdayBfast')
        .populate('saturdayLunch')
        .populate('saturdayDinner')

          return reply.response(updatedUser)

      }
      catch(err){
          throw Boom.badImplementation('Removing Recipe Failed',err);
      }
  },

}
