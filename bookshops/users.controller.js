const BookshopModel = require('./users.model');

exports.insert = (req, res) => {
    BookshopModel.createBookshop(req.body)
        .then((result) => {
            res.status(201).send(result);
        });
};

exports.list = (req, res) => {
    BookshopModel.list()
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {
    BookshopModel.findById(req.params.bookshopId)
        .then((result) => {
            res.status(200).send(result);
        });
};
exports.patchById = (req, res) => {
    BookshopModel.patchUser(req.params.bookshopId, req.body)
        .then((result) => {
            res.status(204).send({});
        });

};

exports.removeById = (req, res) => {
    BookshopModel.removeById(req.params.bookshopId)
        .then((result)=>{
            res.status(204).send({});
        });
};