/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: template, Commander */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commander", function() { return Commander; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var template = "<style>\n  .save-warning {\n    position: absolute;\n    z-index: 100;\n\n    top: 0;\n    left: 50%;\n    max-height: 50%;\n    transform: translateX(-50%);\n\n    opacity: 1;\n    transition: 500ms opacity;\n  }\n  .save-warning__icon {\n    height: 20vh;\n    width: 100%;\n    margin: 0 auto;\n  }\n  .save-warning__text {\n    padding: 1em;\n    margin: 0.2em;\n\n    background: #0d1b2a;\n    border-radius: 5px;\n\n    color: #f57900;\n    font-size: 2.5em;\n    text-align: center;\n  }\n  .save-warning__emphasis {\n    display: block;\n  }\n  .save-warning--hide {\n    opacity: 0;\n    pointer-events: none;\n  }\n</style>\n<section class=\"save-warning\">\n  <img class=\"save-warning__icon\" src=\"/images/svg/warning.svg\">\n  <p class=\"save-warning__text\">\n    <strong>The PDF will not work if you save this page locally.</strong>\n    <em class=\"save-warning__emphasis\">use the download button</em>\n  </p>\n</section>";

var Invoker =
/*#__PURE__*/
function () {
  function Invoker(name, seq, action) {
    _classCallCheck(this, Invoker);

    this.name = name;
    this.seq = seq;
    this.execute = action;
    this.seqNumber = 0;
  }

  _createClass(Invoker, [{
    key: "check",
    value: function check(event) {
      var code = this.seq[this.seqNumber].code;
      var ctrl = this.seq[this.seqNumber].ctrl || false;

      if (event.code === code && (event.ctrlKey || event.metaKey) === ctrl) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "sequenceMatching",
    value: function sequenceMatching(event) {
      if (this.check(event)) {
        if (this.seqNumber === this.seq.length - 1) {
          this.execute(event);
          this.seqNumber = 0;
        } else {
          this.seqNumber += 1;
        }
      } else {
        this.seqNumber = 0;
      }
    }
  }, {
    key: "matching",
    value: function matching(event) {
      if (this.check(event)) {
        this.execute(event);
      }
    }
  }]);

  return Invoker;
}();

var Commander =
/*#__PURE__*/
function () {
  function Commander() {
    _classCallCheck(this, Commander);

    this.commands = [];
  }

  _createClass(Commander, [{
    key: "addCommand",
    value: function addCommand(name, seq, action) {
      this.commands.push(new Invoker(name, seq, action));
    }
  }, {
    key: "keyHandler",
    value: function keyHandler(event) {
      this.commands.forEach(function (c) {
        if (c.seq.length > 1) {
          c.sequenceMatching(event);
        } else {
          c.matching(event);
        }
      });
    }
  }]);

  return Commander;
}();

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dotnet/napp/babel-issue2/index.js */"./index.js");


/***/ })

/******/ });