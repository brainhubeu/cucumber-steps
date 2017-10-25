'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new Promise(resolve => {
  const application = (0, _express2.default)();
  application.use(_bodyParser2.default.json()).get('/api/users/2', (req, res) => {
    res.json({
      data: {
        id: 2,
        firstName: 'lucille',
        lastName: 'bluth',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
      }
    });
  }).post('/api/users', (req, res) => {
    res.status(201).json({
      name: req.body.name,
      job: req.body.job,
      id: `${Math.floor(Math.random() * 1000)}`,
      age: Math.floor(Math.random() * 1000),
      createdAt: new Date()
    });
  }).post('/api/fail/user', (req, res) => {
    res.status(400).json({
      name: req.body.name,
      error: true,
      message: 'You did sth wrong'
    });
  }).get('/header', (req, res) => {
    res.json(req.headers);
  });

  const listener = application.listen(3456, () => {
    resolve(listener);
  });
});