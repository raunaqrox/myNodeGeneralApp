/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	/** @jsx React.DOM */// Todo
	// make the array of objects, {name, href}
	'use strict';

	var globals = {
	  'H': { 'name': 'Home', 'href': '/' },
	  'Git': ['add -A', 'commit', 'push'],
	  'Edit': ['copy', 'paste', 'undo', 'redo', 'find', 'replace'],
	  'Editor': ['syntax', 'themes', 'setting']
	};

	var Navbar = React.createClass({
	  displayName: 'Navbar',

	  render: function render() {
	    return React.createElement(
	      'nav',
	      { className: 'navbar navbar-default' },
	      React.createElement(Heading, { val: this.props.txt }),
	      React.createElement(NavOpContainer, null),
	      React.createElement(
	        'div',
	        { id: 'loading' },
	        React.createElement('img', { className: 'pull-right', src: 'img/loading.gif' })
	      )
	    );
	  }
	});

	var Heading = React.createClass({
	  displayName: 'Heading',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'container-fluid' },
	      React.createElement(
	        'div',
	        { className: 'navbar-header' },
	        React.createElement(
	          'a',
	          { className: 'navbar-brand', href: '#' },
	          this.props.val
	        )
	      )
	    );
	  }
	});

	var NavOp = React.createClass({
	  displayName: 'NavOp',

	  render: function render() {
	    return React.createElement(
	      'li',
	      { className: 'nav navbar-nav' },
	      React.createElement(
	        'a',
	        { href: this.props.href },
	        this.props.txt
	      )
	    );
	  }
	});

	var DropOp = React.createClass({
	  displayName: 'DropOp',

	  render: function render() {
	    return React.createElement(
	      'li',
	      null,
	      React.createElement(
	        'a',
	        { href: this.props.href },
	        this.props.txt
	      )
	    );
	  }
	});

	var DropDown = React.createClass({
	  displayName: 'DropDown',

	  render: function render() {
	    return React.createElement(
	      'li',
	      null,
	      React.createElement(
	        'a',
	        { className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-expanded': 'true' },
	        this.props.txt,
	        React.createElement('span', { className: 'caret' })
	      ),
	      React.createElement(DropMenuItems, { items: globals[this.props.txt] })
	    );
	  }
	});

	var DropMenuItems = React.createClass({
	  displayName: 'DropMenuItems',

	  render: function render() {
	    return React.createElement(
	      'ul',
	      { className: 'dropdown-menu', role: 'menu' },
	      this.props.items.map(function (op) {
	        return React.createElement(DropOp, { txt: op });
	      })
	    );
	  }
	});

	var NavOpContainer = React.createClass({
	  displayName: 'NavOpContainer',

	  getInitialState: function getInitialState() {
	    return { optionList: Object.keys(globals) };
	  },
	  render: function render() {
	    return React.createElement(
	      'ul',
	      { className: 'nav navbar-nav' },
	      this.state.optionList.map(function (op) {
	        var items = globals[op];
	        if (items instanceof Array) return React.createElement(DropDown, { txt: op });else return React.createElement(NavOp, { txt: items.name, href: items.href });
	      })
	    );
	  }
	});

	React.render(React.createElement(Navbar, { txt: 'Heading / LOGO' }), document.getElementById('navContainer'));

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	$(document).ready(function () {
	  var $loading = $('#loading').hide();
	  $(document).ajaxStart(function () {
	    $loading.show();
	  }).ajaxStop(function () {
	    $loading.hide();
	  });
	});

/***/ }
/******/ ]);