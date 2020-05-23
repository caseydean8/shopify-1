module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: \"10%\"\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log(\"submission\", this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToggle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? \"Disable\" : \"Enable\";\n    const textStatus = enabled ? \"enabled\" : \"disabled\";\n    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Default discount\",\n      description: \"Add a product to Sample App, it will automatically be discounted.\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      sectioned: true\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n      onSubmit: this.handleSubmit\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n      value: discount,\n      onChange: this.handleChange(\"discount\"),\n      label: \"Discount percentage\",\n      type: \"discount\"\n    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      distribution: \"trailing\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      primary: true,\n      submit: true\n    }, \"Save\")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Price updates\",\n      description: \"Temporarily disable all Sample App price updates\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"SettingToggle\"], {\n      action: {\n        content: contentStatus,\n        onAction: this.handleToggle\n      },\n      enabled: enabled\n    }, \"This setting is\", \" \", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextStyle\"], {\n      variation: \"strong\"\n    }, textStatus)))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJ2YWx1ZSIsImVuYWJsZWQiLCJyZW5kZXIiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZVRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQWFBLE1BQU1BLGVBQU4sU0FBOEJDLDRDQUFLLENBQUNDLFNBQXBDLENBQThDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDcEM7QUFDTkMsY0FBUSxFQUFFO0FBREosS0FEb0M7O0FBQUEsMENBdUQ3QixNQUFNO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYztBQUNaRCxnQkFBUSxFQUFFLEtBQUtFLEtBQUwsQ0FBV0Y7QUFEVCxPQUFkO0FBR0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsS0FBS0YsS0FBL0I7QUFDRCxLQTVEMkM7O0FBQUEsMENBOEQ1QkcsS0FBRCxJQUFXO0FBQ3hCLGFBQVFDLEtBQUQsSUFBVyxLQUFLTCxRQUFMLENBQWM7QUFBRSxTQUFDSSxLQUFELEdBQVNDO0FBQVgsT0FBZCxDQUFsQjtBQUNELEtBaEUyQzs7QUFBQSwwQ0FrRTdCLE1BQU07QUFDbkIsV0FBS0wsUUFBTCxDQUFjLENBQUM7QUFBRU07QUFBRixPQUFELEtBQWlCO0FBQzdCLGVBQU87QUFBRUEsaUJBQU8sRUFBRSxDQUFDQTtBQUFaLFNBQVA7QUFDRCxPQUZEO0FBR0QsS0F0RTJDO0FBQUE7O0FBSzVDQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVSLGNBQUY7QUFBWU87QUFBWixRQUF3QixLQUFLTCxLQUFuQztBQUNBLFVBQU1PLGFBQWEsR0FBR0YsT0FBTyxHQUFHLFNBQUgsR0FBZSxRQUE1QztBQUNBLFVBQU1HLFVBQVUsR0FBR0gsT0FBTyxHQUFHLFNBQUgsR0FBZSxVQUF6QztBQUVBLFdBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsdURBQUQsUUFDRSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDRSxXQUFLLEVBQUMsa0JBRFI7QUFFRSxpQkFBVyxFQUFDO0FBRmQsT0FJRSxNQUFDLHFEQUFEO0FBQU0sZUFBUztBQUFmLE9BQ0UsTUFBQyxxREFBRDtBQUFNLGNBQVEsRUFBRSxLQUFLSTtBQUFyQixPQUNFLE1BQUMsMkRBQUQsUUFDRSxNQUFDLDBEQUFEO0FBQ0UsV0FBSyxFQUFFWCxRQURUO0FBRUUsY0FBUSxFQUFFLEtBQUtZLFlBQUwsQ0FBa0IsVUFBbEIsQ0FGWjtBQUdFLFdBQUssRUFBQyxxQkFIUjtBQUlFLFVBQUksRUFBQztBQUpQLE1BREYsRUFPRSxNQUFDLHNEQUFEO0FBQU8sa0JBQVksRUFBQztBQUFwQixPQUNFLE1BQUMsdURBQUQ7QUFBUSxhQUFPLE1BQWY7QUFBZ0IsWUFBTTtBQUF0QixjQURGLENBUEYsQ0FERixDQURGLENBSkYsQ0FERixFQXVCRSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDRSxXQUFLLEVBQUMsZUFEUjtBQUVFLGlCQUFXLEVBQUM7QUFGZCxPQUlFLE1BQUMsOERBQUQ7QUFDRSxZQUFNLEVBQUU7QUFDTkMsZUFBTyxFQUFFSixhQURIO0FBRU5LLGdCQUFRLEVBQUUsS0FBS0M7QUFGVCxPQURWO0FBS0UsYUFBTyxFQUFFUjtBQUxYLDBCQU9rQixHQVBsQixFQVFFLE1BQUMsMERBQUQ7QUFBVyxlQUFTLEVBQUM7QUFBckIsT0FBK0JHLFVBQS9CLENBUkYsQ0FKRixDQXZCRixDQURGLENBREY7QUEyQ0Q7O0FBckQyQzs7QUF5RS9CYiw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIEZvcm0sXG4gIEZvcm1MYXlvdXQsXG4gIExheW91dCxcbiAgUGFnZSxcbiAgU2V0dGluZ1RvZ2dsZSxcbiAgU3RhY2ssXG4gIFRleHRGaWVsZCxcbiAgVGV4dFN0eWxlLFxufSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuXG5jbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaXNjb3VudDogXCIxMCVcIixcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNjb3VudCwgZW5hYmxlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjb250ZW50U3RhdHVzID0gZW5hYmxlZCA/IFwiRGlzYWJsZVwiIDogXCJFbmFibGVcIjtcbiAgICBjb25zdCB0ZXh0U3RhdHVzID0gZW5hYmxlZCA/IFwiZW5hYmxlZFwiIDogXCJkaXNhYmxlZFwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJEZWZhdWx0IGRpc2NvdW50XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWRkIGEgcHJvZHVjdCB0byBTYW1wbGUgQXBwLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgZGlzY291bnRlZC5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoXCJkaXNjb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudCBwZXJjZW50YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5cbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJQcmljZSB1cGRhdGVzXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGVtcG9yYXJpbHkgZGlzYWJsZSBhbGwgU2FtcGxlIEFwcCBwcmljZSB1cGRhdGVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ1RvZ2dsZVxuICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50U3RhdHVzLFxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiB0aGlzLmhhbmRsZVRvZ2dsZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVGhpcyBzZXR0aW5nIGlze1wiIFwifVxuICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPnt0ZXh0U3RhdHVzfTwvVGV4dFN0eWxlPlxuICAgICAgICAgICAgPC9TZXR0aW5nVG9nZ2xlPlxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pc3Npb25cIiwgdGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7IGVuYWJsZWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHsgZW5hYmxlZDogIWVuYWJsZWQgfTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./pages/annotated-layout.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/caseydean8/Desktop/shopify-apps/shopify-1/pages/annotated-layout.js */"./pages/annotated-layout.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });