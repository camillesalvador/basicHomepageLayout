'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageLayout = require('../components/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

var _index = require('../styles/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// or, if you work with plain css
// import stylesheet from 'styles/index.css'

exports.default = function () {
  return _react2.default.createElement(_PageLayout2.default, null, _react2.default.createElement('main', null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default } }), _react2.default.createElement('input', { type: 'email', placeholder: 'Subscribe to our newsletter!' })));
};