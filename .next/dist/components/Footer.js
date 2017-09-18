'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement('footer', null, _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactFontawesome2.default, { name: 'facebook' }))), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactFontawesome2.default, { name: 'twitter' }))), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactFontawesome2.default, { name: 'youtube' }))), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactFontawesome2.default, { name: 'google-plus' }))));
};

exports.default = Footer;