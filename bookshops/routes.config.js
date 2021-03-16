const BookshopsController = require('./users.controller');
//const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
    app.post('/bookshops', [
        BookshopsController.insert
    ]);
    app.get('/bookshops', [
        BookshopsController.list
    ]);
    app.get('/bookshops/:bookshopId', [
        BookshopsController.getById
    ]);
    app.put('/bookshops/:bookshopId', [
        BookshopsController.patchById
    ]);
    app.delete('/bookshops/:bookshopId', [
        BookshopsController.removeById
    ]);
};
