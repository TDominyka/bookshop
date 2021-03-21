'use strict';
const mongoose = require('./mongoose.service').mongoose;
let Bookshop;
const bookshopSchema = new mongoose.Schema({
    title: String,
    address: String,
    owner: String
});

Bookshop = mongoose.model('Bookshops', bookshopSchema);

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
    const bookshop = new Bookshop(bookshopData);
    return bookshop.save();
};

exports.list = () => {
    return new Promise((resolve, reject) => {
        Bookshop.find()
            .exec(function (err, bookshops) {
                if (err) {
                    reject(err);
                } else {
                    resolve(bookshops);
                }
            })
    });
};

exports.patchBookshop = (id, bookshopData) => {
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

