const Category = require('./category.model');
module.exports = {

    async find(req, reply) {
       try {
           const categories =await Category.find({})

           return reply.response(categories)
       }
       catch(err){
           throw err;
       }
    },

    async create(req, reply) {

        try {
            const category = await Category.create({
                category: req.payload.category
            });
            const categoryList = await Category.find({})
            return reply.response(categoryList);

        }
        catch (err) {
            throw err;
        }
    }
};
