const BookshopModel = require('./bookshops.model');

exports.insert = (req, res) => {
    BookshopModel.createBookshop(req.body)
        .then((result) => {
            res.append('Link', 'http://localhost:5000/bookshops/' + result._id);
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
    BookshopModel.patchBookshop(req.params.bookshopId, req.body)
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