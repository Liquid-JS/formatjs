'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactIntl = require('react-intl');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Foo = function (_React$Component) {
    _inherits(Foo, _React$Component);

    function Foo() {
        _classCallCheck(this, Foo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Foo).apply(this, arguments));
    }

    _createClass(Foo, [{
        key: 'render',
        value: function render() {
            var msgs = (0, _reactIntl.defineMessages)({
                header: {
                    id: 'foo.bar.baz',
                    defaultMessage: 'Hello World!',
                    description: 'The default message'
                },
                content: {
                    id: 'foo.bar.biff',
                    defaultMessage: 'Hello Nurse!',
                    description: 'Another message'
                }
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    this.props.intl.formatMessage(msgs.header)
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.intl.formatMessage(msgs.content)
                )
            );
        }
    }]);

    return Foo;
}(_react2.default.Component);

exports.default = Foo;