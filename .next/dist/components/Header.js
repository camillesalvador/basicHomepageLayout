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

var Header = function Header() {
  return _react2.default.createElement('nav', null, _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, _react2.default.createElement(_reactFontawesome2.default, { name: 'snowflake-o' }))), _react2.default.createElement(_reactFontawesome2.default, { name: 'bars' }), _react2.default.createElement('div', null, _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, 'Home')), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, 'About')), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, 'Blog')), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', null, 'Contact'))));
};

exports.default = Header;