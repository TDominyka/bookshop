const config = require('./env.config.js');
const Bookshop = require('./bookshops.model');
const Controller = require('./bookshops.controller');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const BookshopsRouter = require('./routes.config');

app.use(function (req, res, next) {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());

BookshopsRouter.routesConfig(app);

app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});
Bookshop.createBookshop({
    title: "VU",
    address: "Ramuniu g. 10",
    owner: "Petras Petraitis"
});
app.set();