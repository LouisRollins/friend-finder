var express = require('express')
var path = require('path')
var app = express()
var PORT = process.env.PORT || 8080
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
console.log('///')