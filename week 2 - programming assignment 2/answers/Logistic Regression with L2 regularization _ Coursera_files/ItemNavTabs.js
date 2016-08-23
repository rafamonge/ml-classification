define("bundles/ondemand/components/item/ItemNavTabs",["require","exports","module","react-with-addons","classnames","bundles/iconfont/Icon","i18n!nls/ondemand","css!./__styles__/ItemNavTabs"],function(require,exports,module){"use strict";function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),t=0;t<s.length;t++){var n=s[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=function(){function defineProperties(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),n=function get(s,c,l){var n=!0;e:for(;n;){var t=s,a=c,i=l;n=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;s=o,c=a,l=i,n=!0,e=o=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(i)}},e=require("react-with-addons"),o=require("classnames"),r=require("bundles/iconfont/Icon"),s=require("i18n!nls/ondemand");require("css!./__styles__/ItemNavTabs");var a=function(a){function ItemNavTabs(){_classCallCheck(this,ItemNavTabs),n(Object.getPrototypeOf(ItemNavTabs.prototype),"constructor",this).apply(this,arguments)}return _inherits(ItemNavTabs,a),t(ItemNavTabs,[{key:"render",value:function render(){var t=this.props.showDrawer?"close":"course-list",n=o("nostyle","lessons-tab","horizontal-box","align-items-absolute-center",{"drawer-closed":!this.props.showDrawer});return e.createElement("div",{className:"rc-ItemNavTabs horizontal-box theme-white"},e.createElement("button",{className:n,onClick:this.props.onLessonsClick},e.createElement(r,{name:t,className:"lessons-tab-icon color-hint-text"}),e.createElement("span",null,s("Lessons"))),e.createElement("div",{className:"caption-text border-placeholder flex-1"}))}}],[{key:"propTypes",value:{onLessonsClick:e.PropTypes.func.isRequired,showDrawer:e.PropTypes.bool.isRequired},enumerable:!0}]),ItemNavTabs}(e.Component);module.exports=a});