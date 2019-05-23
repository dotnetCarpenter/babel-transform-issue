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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save_warning_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-warning.mjs */ "./save-warning.mjs");

var commander = new _save_warning_mjs__WEBPACK_IMPORTED_MODULE_0__["Commander"]();

function showWarning() {
  var warning = document.querySelector('.save-warning');

  if (warning) {
    warning.classList.remove('save-warning--hide');
  } else {
    document.body.insertAdjacentHTML('afterbegin', _save_warning_mjs__WEBPACK_IMPORTED_MODULE_0__["template"]);
    warning = document.querySelector('.save-warning');
  }

  return warning;
}

commander.addCommand('saveWarning', [{
  ctrl: true,
  key: 's'
}], function (event) {
  event.preventDefault();
  var warning = showWarning();
  setTimeout(function () {
    warning.classList.add('save-warning--hide');
  }, 10000);
});
commander.addCommand('hello', [{
  key: 'h'
}, {
  key: 'e'
}, {
  key: 'l'
}, {
  key: 'l'
}, {
  key: 'o'
}], function () {
  return alert('⚠ Hello World');
});
document.addEventListener('keydown', commander.keyHandler.bind(commander), {
  passive: false
});

if (/file:\/{2}/.test(location.href)) {
  showWarning();
}

/***/ }),

/***/ "./save-warning.mjs":
/*!**************************!*\
  !*** ./save-warning.mjs ***!
  \**************************/
/*! exports provided: template, Commander */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commander", function() { return Commander; });
const template =
`<style>
  .save-warning {
    position: absolute;
    z-index: 100;

    top: 0;
    left: 50%;
    max-height: 50%;
    transform: translateX(-50%);

    opacity: 1;
    transition: 500ms opacity;
  }
  .save-warning__icon {
    height: 20vh;
    width: 100%;
    margin: 0 auto;
  }
  .save-warning__text {
    padding: 1em;
    margin: 0.2em;

    background: #0d1b2a;
    border-radius: 5px;

    color: #f57900;
    font-size: 2.5em;
    text-align: center;
  }
  .save-warning__emphasis {
    display: block;
  }
  .save-warning--hide {
    opacity: 0;
    pointer-events: none;
  }
</style>
<section class="save-warning">
  <img class="save-warning__icon" src="/images/svg/warning.svg">
  <p class="save-warning__text">
    <strong>The PDF will not work if you save this page locally.</strong>
    <em class="save-warning__emphasis">use the download button</em>
  </p>
</section>`

class Invoker {
  constructor (name, seq, action) {
    this.name = name
    this.seq = seq
    this.execute = action
    this.seqNumber = 0
  }

  check (event) {
    const key = this.seq[this.seqNumber].key
    const ctrl = this.seq[this.seqNumber].ctrl || false

    if (
      event.key === key &&
      (event.ctrlKey || event.metaKey) === ctrl
    ) {
      return true
    } else {
      return false
    }
  }

  sequenceMatching (event) {
    if (this.check(event)) {
      if (this.seqNumber === this.seq.length - 1) {
        this.execute(event)
        this.seqNumber = 0
      } else {
        this.seqNumber += 1
      }
    } else {
      this.seqNumber = 0
    }
  }

  matching (event) {
    if (this.check(event)) {
      this.execute(event)
    }
  }
}

class Commander {
  constructor () {
    this.commands = []
  }

  addCommand (name, seq, action) {
    this.commands.push(new Invoker(name, seq, action))
  }

  keyHandler (event) {
    this.commands.forEach(c => {
      if (c.seq.length > 1) {
        c.sequenceMatching(event)
      } else {
        c.matching(event)
      }
    })
  }
}



/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dotnet/napp/babel-transform-issue/app.js */"./app.js");


/***/ })

/******/ });