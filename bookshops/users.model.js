const mongoose = require('./mongoose.service').mongoose;
const Schema = mongoose.Schema;

const bookshopSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String
});
const Bookshop = mongoose.model('Users', bookshopSchema);

//bookshopSchema.findById = function (cb) {
//    return this.model('Users').find({id: this.id}, cb);
//};

//exports.findByEmail = (email) => {
 //   return Bookshop.find({email: email});
//};

exports.findById = (id) => {
    return Bookshop.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createBookshop = (bookshopData) => {
    const user = new Bookshop(bookshopData);
    return user.save();
};

exports.list = () => {
    return new Promise((resolve, reject) => {
        Bookshop.find()
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.patchUser = (id, bookshopData) => {
    return Bookshop.findOneAndUpdate({
        _id: id
    }, bookshopData);
};

exports.removeById = (bookshopId) => {
    return new Promise((resolve, reject) => {
        Bookshop.deleteMany({_id: bookshopId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

