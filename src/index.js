var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 8080

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/dist', express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
