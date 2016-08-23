define("bundles/ondemand/components/PremiumGradingQuizButton",["require","exports","module","react-with-addons","i18n!nls/ondemand","pages/open-course/common/models/itemMetadata","bundles/ondemand/components/PremiumGradingModal"],function(require,exports,module){"use strict";function _defaults(e,r){for(var a=Object.getOwnPropertyNames(r),t=0;t<a.length;t++){var n=a[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=function(){function defineProperties(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),n=function get(a,c,s){var n=!0;e:for(;n;){var t=a,i=c,u=s;n=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,i);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;a=o,c=i,s=u,n=!0,e=o=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(u)}},e=require("react-with-addons"),o=require("i18n!nls/ondemand"),r=require("pages/open-course/common/models/itemMetadata"),a=require("bundles/ondemand/components/PremiumGradingModal"),i=function(i){function PremiumGradingQuizButton(){_classCallCheck(this,PremiumGradingQuizButton),n(Object.getPrototypeOf(PremiumGradingQuizButton.prototype),"constructor",this).apply(this,arguments),this.state={showModal:!1}}return _inherits(PremiumGradingQuizButton,i),t(PremiumGradingQuizButton,[{key:"render",value:function render(){var t=this;return e.createElement("div",{className:"rc-SubmitButton"},e.createElement("button",{className:"c-open-single-page-action-button primary",onClick:function(){return t.setState({showModal:!0})}},o("Upgrade to submit")),this.state.showModal&&e.createElement(a,{itemMetadata:this.props.itemMetadata,onClose:function(){return t.setState({showModal:!1})}}))}}],[{key:"propTypes",value:{itemMetadata:e.PropTypes.instanceOf(r).isRequired},enumerable:!0}]),PremiumGradingQuizButton}(e.Component);module.exports=i});