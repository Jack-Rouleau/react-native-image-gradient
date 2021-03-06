'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNativeLinearGradient = require('react-native-linear-gradient');

var _reactNativeLinearGradient2 = _interopRequireDefault(_reactNativeLinearGradient);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Linear Grandient Image by YannCed ☺☻♥

var ImageGradient = function (_Component) {
    _inherits(ImageGradient, _Component);

    function ImageGradient() {
        _classCallCheck(this, ImageGradient);

        return _possibleConstructorReturn(this, (ImageGradient.__proto__ || Object.getPrototypeOf(ImageGradient)).call(this));
    }

    _createClass(ImageGradient, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$mainStyle = _props.mainStyle,
                mainStyle = _props$mainStyle === undefined ? styles.main : _props$mainStyle,
                _props$gradientStyle = _props.gradientStyle,
                gradientStyle = _props$gradientStyle === undefined ? styles.gradientStyle : _props$gradientStyle,
                _props$imageStyle = _props.imageStyle,
                imageStyle = _props$imageStyle === undefined ? styles.imageStyle : _props$imageStyle,
                _props$imageUrl = _props.imageUrl,
                imageUrl = _props$imageUrl === undefined ? 'http://www.acmetools.com/wcsstore/AuroraStorefrontAssetStore/images/generic-error-icon-lrg.png' : _props$imageUrl,
                _props$startPosition = _props.startPosition,
                startPosition = _props$startPosition === undefined ? { x: 0.0, y: 0.50 } : _props$startPosition,
                _props$endPosition = _props.endPosition,
                endPosition = _props$endPosition === undefined ? { x: 0.0, y: 1 } : _props$endPosition,
                _props$rgbcsvStart = _props.rgbcsvStart,
                rgbcsvStart = _props$rgbcsvStart === undefined ? '255,255,255' : _props$rgbcsvStart,
                _props$rgbcsvEnd = _props.rgbcsvEnd,
                rgbcsvEnd = _props$rgbcsvEnd === undefined ? '0,0,0' : _props$rgbcsvEnd,
                _props$opacityStart = _props.opacityStart,
                opacityStart = _props$opacityStart === undefined ? 0.2 : _props$opacityStart,
                _props$opacityEnd = _props.opacityEnd,
                opacityEnd = _props$opacityEnd === undefined ? 0.9 : _props$opacityEnd;

            return _react2.default.createElement(_reactNative.ImageBackground, { style: mainStyle, imageStyle: imageStyle, source: { uri: imageUrl } }, _react2.default.createElement(_reactNativeLinearGradient2.default, {
                style: gradientStyle,
                start: startPosition,
                end: endPosition,
                colors: ['rgba(' + rgbcsvEnd + ',' + opacityEnd + ')', 'rgba(' + rgbcsvStart + ',' + opacityStart + ')'] }, this.props.children));
        }
    }]);

    return ImageGradient;
}(_react.Component);

exports.default = ImageGradient;


var styles = _reactNative.StyleSheet.create({
    gradientStyle: {
        flex: 1,
        backgroundColor: 'rgba(166,188,204,0.0)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    imageStyle: {
    },
});