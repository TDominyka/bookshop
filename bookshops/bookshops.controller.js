const BookshopModel = require('./bookshops.model');

exports.insert = (req, res) => {
    if (req.get('content-type')==="application/json") {
        BookshopModel.createBookshop(req.body)
            .then((result) => {
                res.append('Link', 'http://localhost:5000/bookshops/' + result._id);
                res.status(201).send(result);
            });
    }else{
        res.append('Error', 'Bad request. Not JSON format.');
        res.status(400).send({});
    }
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
        }).catch(err => {
            res.append('Error', 'Bad request. Id not found');
            res.status(404).send({});
    });
};
exports.patchById = (req, res) => {
    BookshopModel.patchBookshop(req.params.bookshopId, req.body)
        .then((result) => {
            res.status(204).send({});
        }).catch(err => {
            res.append('Error', 'Bad request. Id not found');
            res.status(404).send({});
    });

};

exports.removeById = (req, res) => {
    BookshopModel.removeById(req.params.bookshopId)
        .then((result)=>{
            res.status(204).send({});
        }).catch(err => {
            res.append('Error', 'Bad request. Id not found');
            res.status(404).send({});
    });
};
