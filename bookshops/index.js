const config = require('./env.config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const UsersRouter = require('./routes.config');

app.use(function (req, res, next) {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
UsersRouter.routesConfig(app);


app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});
