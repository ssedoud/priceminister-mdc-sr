import express from "express";
import React from "react";
import Router from "react-router";
import ajax from 'superagent';
const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

import routes from "../shared/routes";


app.get('/*', function (req, res) {
  console.log("SERVER");
  console.log(req.url);
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});


var server = app.listen(3000, function () {

var host = server.address().address;
var port = server.address().port;

console.log('Example app listening at http://%s:%s', host, port);

});
