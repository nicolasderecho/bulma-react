'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var MAIN_COLORS = ['primary', 'link', 'info', 'danger', 'success', 'warning'];
var EXTRA_COLORS = ['white', 'dark', 'black'];
var COLORS = __spreadArrays(MAIN_COLORS, EXTRA_COLORS);
var SIZES = ['small', 'normal', 'medium', 'large'];
var HERO_SIZES = __spreadArrays(SIZES, ['fullheight']);
var SIZE_NUMBERS = ['1', 1, '2', 2, '3', 3, '4', 4, '5', 5, '6', 6];
var BUTTON_POSITIONS = ['centered', 'right'];
var ICON_POSITIONS = ['left', 'right'];
var ALIGNMENTS = ['centered', 'right'];
var HIERARCHIES = ['ancestor', 'parent', 'child'];
var ELEMENT_STATES = ['hovered', 'focused', 'normal', 'active'];
var SEPARATORS = ['arrow', 'bullet', 'dot', 'succeeds'];
var POSITIONS = ['top', 'bottom', 'left', 'right'];
var BUTTON_ELEMENTS = ['a', 'input', 'link', 'button', 'div', 'span'];
var BUTTON_TYPES = ['button', 'submit', 'reset'];
var HTML_CONVERSIONS = { link: 'a' };
var IMAGE_DIMENSIONS = ['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128', 'square', '1by1', '5by4', '4by3', '3by2', '5by3', '16by9', '2by1', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3'];
var CHECK_RADIOS = ['radio', 'checkbox'];

var capitalize = function (string) { return string.charAt(0).toUpperCase() + string.slice(1); };
var dashCase = function (string) { return string.replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); }); };
var camelCase = function (string) { return string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }); };

var _a;
var ONE_THIRD_ALIAS = '1/3';
var TWO_THIRDS_ALIAS = '2/3';
var ONE_QUARTER_ALIAS = '1/4';
var HALF_ALIAS = '1/2';
var THREE_QUARTERS_ALIAS = '3/4';
var ONE_FIFTH_ALIAS = '1/5';
var TWO_FIFTHS_ALIAS = '2/5';
var THREE_FIFTHS_ALIAS = '3/5';
var FOURT_FIFTHS_ALIAS = '4/5';
var THREE_QUARTERS = 'three-quarters';
var TWO_THIRDS = 'two-thirds';
var HALF = 'half';
var ONE_THIRD = 'one-third';
var ONE_QUARTER = 'one-quarter';
var FULL = 'full';
var FOURT_FIFTHS = 'four-fifths';
var THREE_FIFTHS = 'three-fifths';
var TWO_FIFTHS = 'two-fifths';
var ONE_FIFTH = 'one-fifth';
var COLUMN_SIZE_NUMBERS = ['1', 1, '2', 2, '3', 3, '4', 4, '5', 5, '6', 6, '7', 7, '8', 8, '9', 9, '10', 10, '11', 11, '12', 12];
var ORIGINAL_COLUMN_SIZES = __spreadArrays(COLUMN_SIZE_NUMBERS, [THREE_QUARTERS, TWO_THIRDS, HALF, ONE_THIRD, ONE_QUARTER, FULL, FOURT_FIFTHS, THREE_FIFTHS, TWO_FIFTHS, ONE_FIFTH]);
var COLUMN_SIZES_ALIASES = [ONE_THIRD_ALIAS, TWO_THIRDS_ALIAS, ONE_QUARTER_ALIAS, HALF_ALIAS, THREE_QUARTERS_ALIAS, ONE_FIFTH_ALIAS, TWO_FIFTHS_ALIAS, THREE_FIFTHS_ALIAS, FOURT_FIFTHS_ALIAS];
var COLUMN_SIZES = __spreadArrays(ORIGINAL_COLUMN_SIZES, COLUMN_SIZES_ALIASES);
var MOBILE = 'mobile';
var TABLET = 'tablet';
var TOUCH = 'touch';
var DESKTOP = 'desktop';
var WIDESCREEN = 'widescreen';
var FULLHD = 'fullhd';
var DEVICES = [MOBILE, TABLET, TOUCH, DESKTOP, WIDESCREEN, FULLHD];
var GAP_SIZES = [0, '0', 1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6', 7, '7', 8, '8'];
var COLUMN_SIZES_ALIASES_HASH = (_a = {},
    _a[ONE_THIRD_ALIAS] = ONE_THIRD,
    _a[TWO_THIRDS_ALIAS] = TWO_THIRDS,
    _a[ONE_QUARTER_ALIAS] = ONE_QUARTER,
    _a[HALF_ALIAS] = HALF,
    _a[THREE_QUARTERS_ALIAS] = THREE_QUARTERS,
    _a[TWO_FIFTHS_ALIAS] = TWO_FIFTHS,
    _a[THREE_FIFTHS_ALIAS] = THREE_FIFTHS,
    _a[FOURT_FIFTHS_ALIAS] = FOURT_FIFTHS,
    _a[ONE_FIFTH_ALIAS] = ONE_FIFTH,
    _a);
var ORIGINAL_COLUMN_SIZES_HASH = ORIGINAL_COLUMN_SIZES.reduce(function (hash, columnSize) {
    var _a;
    return Object.assign({}, hash, (_a = {}, _a[columnSize] = columnSize, _a));
}, {});
var COLUMN_SIZES_HASH = Object.assign({}, ORIGINAL_COLUMN_SIZES_HASH, COLUMN_SIZES_ALIASES_HASH);
var columnDimensionClassFor = function (columnSize, prefix, suffix) {
    var _a;
    if (suffix === void 0) { suffix = ''; }
    var key = prefix + "-" + COLUMN_SIZES_HASH[columnSize];
    var finalKey = !!suffix ? key + "-" + suffix : key;
    return _a = {}, _a[finalKey] = !!COLUMN_SIZES_HASH[columnSize], _a;
};
var columnSizeClassFor = function (columnSize, suffix) {
    if (suffix === void 0) { suffix = ''; }
    return columnDimensionClassFor(columnSize, 'is', suffix);
};
var columnOffsetlassFor = function (columnSize, suffix) {
    if (suffix === void 0) { suffix = ''; }
    return columnDimensionClassFor(columnSize, 'is-offset', suffix);
};
var isDevice = function (value) { return DEVICES.includes(value); };
var isValidGap = function (value) { return GAP_SIZES.includes(value); };
var gapSizeFor = function (gap) {
    var _a;
    return (_a = {}, _a["is-" + gap] = isValidGap(gap), _a);
};
var gapSizeForDevices = function (props) {
    return DEVICES.map(function (device) {
        var _a;
        var gap = props["gap" + capitalize(device)];
        return _a = {}, _a["is-" + gap + "-" + device] = isValidGap(gap), _a;
    });
};
var variableGapClassFor = function (gap, props) {
    var deviceGapValidations = DEVICES.map(function (device) { return isValidGap(props["gap" + capitalize(device)]); }).reduce(function (acum, value) { return acum || value; });
    return { 'is-variable': isValidGap(gap) || deviceGapValidations };
};
var deviceActiveClassFor = function (fromDevice) {
    var _a;
    return (_a = {}, _a["is-" + fromDevice] = isDevice(fromDevice), _a);
};
var isColumnSizeNumber = function (value) { return COLUMN_SIZE_NUMBERS.includes(value); };
var horizontalClassFor = function (sizeNumber) {
    var _a;
    return (_a = {}, _a["is-" + sizeNumber] = isColumnSizeNumber(sizeNumber), _a);
};

var isNil = function (value) { return value === null || value === undefined; };
var isNotNil = function (value) { return !isNil(value); };
var isColor = function (value) { return COLORS.includes(value); };
var isElementState = function (value) { return ELEMENT_STATES.includes(value); };
var isSize = function (value) { return SIZES.includes(value); };
var isSizeNumber = function (value) { return SIZE_NUMBERS.includes(value); };
var isIconPosition = function (value) { return ICON_POSITIONS.includes(value); };
var isButtonPosition = function (value) { return BUTTON_POSITIONS.includes(value); };
var isEnabled = function (props, key) { return props.hasOwnProperty(key) && props[key] !== false && props[key] !== 'false'; };
var isDefined = function (obj, prop) { return obj.hasOwnProperty(prop); };
var isAlignment = function (value) { return ALIGNMENTS.includes(value); };
var isState = function (value) { return ELEMENT_STATES.includes(value); };
var isHierarchy = function (value) { return HIERARCHIES.includes(value); };
var isSeparator = function (value) { return SEPARATORS.includes(value); };
var isPosition = function (value) { return POSITIONS.includes(value); };
//export const lightClassFor = <T extends object>(props: T): ClassNameProp => buildSingularClassNameProp(props, 'light');
//export const outlinedClassFor = <T extends object>(props: T): ClassNameProp => buildSingularClassNameProp(props, 'outlined');
var colorClassFor = function (color) {
    var _a;
    return (_a = {}, _a["is-" + color] = isColor(color), _a);
};
var sizeClassFor = function (size, prefix) {
    var _a;
    if (prefix === void 0) { prefix = 'is'; }
    return (_a = {}, _a[prefix + "-" + size] = isSize(size), _a);
};
var elementStateClassFor = function (state) {
    var _a;
    return (_a = {}, _a["is-" + state] = isElementState(state), _a);
};
var textClassFor = function (textClassName) {
    var _a;
    return (_a = {}, _a["has-text-" + textClassName] = isColor(textClassName), _a);
};
var iconPositionClassFor = function (position) {
    var _a;
    return (_a = {}, _a["is-" + position] = isIconPosition(position), _a);
};
var htmlElementFor = function (tag, defaultIfNil) { return HTML_CONVERSIONS[tag] || tag || defaultIfNil || 'div'; };
var separatorClassFor = function (separator) {
    var _a;
    return (_a = {}, _a["has-" + separator + "-separator"] = isSeparator(separator), _a);
};
var isRenderedAs = function (htmlElement, props, propName) { return (props['as'] === htmlElement) && !!props[propName]; };
var checkEnabledProperty = function (props, property, _a) {
    var _b;
    var _c = (_a === void 0 ? { prefix: 'is' } : _a).prefix, prefix = _c === void 0 ? 'is' : _c;
    var selector = !!prefix ? prefix + "-" + dashCase(property) : dashCase(property);
    return _b = {}, _b[selector] = isEnabled(props, property), _b;
};
var checkEnabledProperties = function (props, properties, options) {
    return properties.reduce(function (classes, property) { return Object.assign({}, classes, checkEnabledProperty(props, property, options)); }, {});
};
var addonsClassFor = function (props, propsName) {
    if (propsName === void 0) { propsName = 'addons'; }
    return checkEnabledProperties(props, [propsName], { prefix: 'has' });
};
var sizeNumberClassFor = function (sizeNumber) {
    var _a;
    return (_a = {}, _a["is-" + sizeNumber] = !!sizeNumber && isSizeNumber(sizeNumber), _a);
};
var buttonPositionClassFor = function (position) {
    var _a;
    return (_a = {}, _a["is-" + position] = isButtonPosition(position), _a);
};
var alignmentClassFor = function (alignment, _a) {
    var _b;
    var _c = (_a === void 0 ? { prefix: 'is' } : _a).prefix, prefix = _c === void 0 ? 'is' : _c;
    return (_b = {}, _b[prefix + "-" + alignment] = isAlignment(alignment), _b);
};
var groupedClassFor = function (props, propsName) {
    if (propsName === void 0) { propsName = 'grouped'; }
    return ({ 'is-grouped': isEnabled(props, propsName) });
};
var stateClassFor = function (state) {
    var _a;
    return (_a = {}, _a["is-" + state] = isState(state), _a);
};
var hierarchyClassFor = function (hierarchy) {
    var _a;
    return (_a = {}, _a["is-" + hierarchy] = isHierarchy(hierarchy), _a);
};
var positionClassFor = function (position, _a) {
    var _b;
    var _c = _a === void 0 ? { device: '', suffix: '' } : _a, _d = _c.device, device = _d === void 0 ? '' : _d, _e = _c.suffix, suffix = _e === void 0 ? '' : _e;
    var prefix = 'is-tooltip';
    var initialClass = !!device && isDevice(device) ? prefix + "-" + position + "-" + device : prefix + "-" + position;
    var className = !!suffix ? initialClass + "-" + suffix : initialClass;
    return _b = {}, _b[className] = isPosition(position), _b;
};

var Button = function (_a) {
    var originalProps = __rest(_a, []);
    var color = originalProps.color, className = originalProps.className, size = originalProps.size, state = originalProps.state, _b = originalProps.as, as = _b === void 0 ? 'button' : _b, _c = originalProps.type, type = _c === void 0 ? 'button' : _c, value = originalProps.value, props = __rest(originalProps, ["color", "light", "className", "outlined", "size", "inverted", "fullwidth", "rounded", "loading", "text", "static", "state", "as", "type", "value"]);
    var classes = classNames__default['default'](className, 'button', colorClassFor(color), sizeClassFor(size), elementStateClassFor(state), checkEnabledProperties(originalProps, ['light', 'outlined', 'inverted', 'rounded', 'fullwidth', 'link', 'loading', 'active', 'text', 'static']));
    var Element = htmlElementFor(as, 'button');
    var finalProps = ['input', 'button'].includes(as) ? __assign(__assign({}, props), { type: type, value: value }) : props;
    return React.createElement(Element, __assign({ className: classes }, finalProps));
};
Button.displayName = 'Button';
Button.propTypes = {
    className: propTypes.string,
    as: propTypes.oneOf(BUTTON_ELEMENTS),
    children: function (props, propName) {
        if (isRenderedAs('input', props, propName)) {
            return new Error('Button cannot receive children prop if it\'s an input. You should pass the content in \'value\' prop instead.');
        }
        return null;
    },
    type: propTypes.oneOf(BUTTON_TYPES),
    color: propTypes.oneOf(COLORS),
    size: propTypes.oneOf(SIZES),
    state: propTypes.oneOf(ELEMENT_STATES)
};

var Box = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'box');
    return React.createElement("div", __assign({ className: classes }, props));
};
Box.displayName = 'Box';
Box.propTypes = {
    className: propTypes.string
};

var TableCell = function (_a) {
    var className = _a.className, color = _a.color, props = __rest(_a, ["className", "color"]);
    var classes = classNames__default['default'](className, colorClassFor(color));
    return React__default['default'].createElement("td", __assign({ className: classes }, props));
};
TableCell.displayName = 'TableCell';
TableCell.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS),
};

var TableCellHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React__default['default'].createElement("th", __assign({ className: classNames__default['default'](className) }, props));
};
TableCellHeader.displayName = 'TableCellHeader';
TableCellHeader.propTypes = {
    className: propTypes.string
};

var TableRow = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, props = __rest(originalProps, ["className"]);
    var classes = classNames__default['default'](className, { 'is-selected': isEnabled(originalProps, 'selected') });
    return React__default['default'].createElement("tr", __assign({ className: classes }, props));
};
TableRow.displayName = 'TableRow';
TableRow.propTypes = {
    className: propTypes.string,
    selected: propTypes.bool
};
TableRow.Cell = TableCell;
TableRow.CellHeader = TableCellHeader;

var TableHead = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React__default['default'].createElement("thead", __assign({ className: classNames__default['default'](className) }, props));
};
TableHead.displayName = 'TableHead';
TableHead.propTypes = {
    className: propTypes.string
};

var TableFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React__default['default'].createElement("tfoot", __assign({ className: classNames__default['default'](className) }, props));
};
TableFooter.displayName = 'TableFooter';
TableFooter.propTypes = {
    className: propTypes.string
};

var TableBody = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React__default['default'].createElement("tbody", __assign({ className: classNames__default['default'](className) }, props));
};
TableBody.displayName = 'TableBody';
TableBody.propTypes = {
    className: propTypes.string
};

var TableContainer = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'table-container');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
TableContainer.displayName = 'TableContainer';
TableContainer.propTypes = {
    className: propTypes.string
};

var Table = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, props = __rest(originalProps, ["className", "hoverable", "bordered", "striped", "narrow", "fullwidth"]);
    var classes = classNames__default['default'](className, 'table', checkEnabledProperties(originalProps, ['hoverable', 'bordered', 'striped', 'narrow', 'fullwidth']));
    return React__default['default'].createElement("table", __assign({ className: classes }, props));
};
Table.displayName = 'Table';
Table.propTypes = {
    className: propTypes.string
};
Table.Row = TableRow;
Table.Head = TableHead;
Table.Footer = TableFooter;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.CellHeader = TableCellHeader;
Table.Container = TableContainer;

var _a$1;
var INDETERMINATED_PROP_NAME = 'indeterminated';
var ProgressBar = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, color = originalProps.color, size = originalProps.size, value = originalProps.value, props = __rest(originalProps, ["className", "color", "size", "value"]);
    var classes = classNames__default['default'](className, 'progress', sizeClassFor(size), colorClassFor(color), checkEnabledProperties(originalProps, [INDETERMINATED_PROP_NAME]));
    var finalProps = isEnabled(originalProps, INDETERMINATED_PROP_NAME) ? (__assign({}, props)) : (__assign(__assign({}, props), { value: value }));
    return React__default['default'].createElement("progress", __assign({ className: classes }, finalProps));
};
ProgressBar.displayName = 'ProgressBar';
ProgressBar.propTypes = (_a$1 = {
        className: propTypes.string,
        color: propTypes.oneOf(COLORS),
        size: propTypes.oneOf(SIZES)
    },
    _a$1[INDETERMINATED_PROP_NAME] = propTypes.bool,
    _a$1.value = propTypes.oneOfType([propTypes.number, propTypes.string]),
    _a$1.max = propTypes.oneOfType([propTypes.number, propTypes.string]),
    _a$1);

var Notification = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, as = originalProps.as, color = originalProps.color, props = __rest(originalProps, ["className", "as", "color"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'notification', colorClassFor(color), checkEnabledProperties(originalProps, ['light']));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Notification.displayName = 'Notification';
Notification.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS),
    light: propTypes.bool
};

var Content = function (originalProps) {
    var className = originalProps.className, size = originalProps.size, as = originalProps.as, centered = originalProps.centered, props = __rest(originalProps, ["className", "size", "as", "centered"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'content', sizeClassFor(size), { 'has-text-centered': isEnabled(originalProps, 'centered') });
    return React.createElement(Element, __assign({ className: classes }, props));
};
Content.displayName = 'Content';
Content.propTypes = {
    className: propTypes.string,
    centered: propTypes.bool
};

var Delete = function (_a) {
    var className = _a.className, as = _a.as, size = _a.size, props = __rest(_a, ["className", "as", "size"]);
    var Element = htmlElementFor(as, 'a');
    var classes = classNames__default['default'](className, 'delete', sizeClassFor(size));
    return React.createElement(Element, __assign({ className: classes }, props));
};
Delete.displayName = 'Delete';
Delete.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES)
};

var IconWrapper = function (_a) {
    var className = _a.className, as = _a.as, size = _a.size, hasText = _a.hasText, position = _a.position, props = __rest(_a, ["className", "as", "size", "hasText", "position"]);
    var Element = htmlElementFor(as, 'span');
    var classes = classNames__default['default'](className, 'icon', sizeClassFor(size), textClassFor(hasText), iconPositionClassFor(position));
    return React.createElement(Element, __assign({ className: classes }, props));
};
IconWrapper.displayName = 'IconWrapper';
IconWrapper.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES),
    hasText: propTypes.oneOf(COLORS),
    position: propTypes.oneOf(ICON_POSITIONS)
};

var Image = function (_a) {
    var _b;
    var originalProps = __rest(_a, []);
    var className = originalProps.className, is = originalProps.is, wrapper = originalProps.wrapper, children = originalProps.children, src = originalProps.src, alt = originalProps.alt, imageClass = originalProps.imageClass, props = __rest(originalProps, ["className", "is", "wrapper", "children", "src", "alt", "imageClass", "rounded", "fullwidth"]);
    var imgAlt = alt || '';
    var Wrapper = htmlElementFor(wrapper, 'figure');
    var classes = classNames__default['default'](className, 'image', (_b = {}, _b["is-" + is] = !!is, _b), checkEnabledProperties(originalProps, ['fullwidth']));
    var childClasses = classNames__default['default'](imageClass, checkEnabledProperties(originalProps, ['rounded']));
    return React__default['default'].createElement(Wrapper, __assign({ className: classes }, props), !!src
        ? React__default['default'].createElement("img", { src: src, alt: imgAlt, className: childClasses })
        : children);
};
Image.displayName = 'Image';
Image.propTypes = {
    className: propTypes.string,
    is: propTypes.oneOf(IMAGE_DIMENSIONS),
    fullwidth: propTypes.bool,
    rounded: propTypes.bool,
    children: function (props, propName) {
        if (!!props['src'] && !!props[propName]) {
            return new Error('Image Can receive the src props or a children to render the img element but It shouldn\'t receive both at the same time. Children will be ignored.');
        }
        return null;
    },
};

var Tag = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, as = originalProps.as, size = originalProps.size, color = originalProps.color, props = __rest(originalProps, ["className", "as", "size", "color", "grouped", "addons", "isDelete", "rounded", "light"]);
    var Element = htmlElementFor(as, 'span');
    var classes = classNames__default['default'](className, 'tag', sizeClassFor(size), colorClassFor(color), checkEnabledProperties(originalProps, ['delete', 'rounded', 'light']), { 'is-delete': isEnabled(originalProps, 'isDelete') });
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Tag.displayName = 'Tag';
Tag.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES),
    color: propTypes.oneOf(COLORS),
    grouped: propTypes.bool,
    addons: propTypes.bool,
    isDelete: propTypes.bool,
    rounded: propTypes.bool,
    light: propTypes.bool,
};

var Tags = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, as = originalProps.as, size = originalProps.size, props = __rest(originalProps, ["className", "as", "size", "addons"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'tags', addonsClassFor(originalProps), sizeClassFor(size, 'are'));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Tags.displayName = 'Tags';
Tags.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES),
    color: propTypes.oneOf(COLORS),
    addons: propTypes.bool
};

var HeadingElement = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, as = originalProps.as, sizeNumber = originalProps.sizeNumber, props = __rest(originalProps, ["className", "as", "sizeNumber", "spaced"]);
    var Element = htmlElementFor(as, 'h1');
    var classes = classNames__default['default'](className, checkEnabledProperties(originalProps, ['spaced']), sizeNumberClassFor(sizeNumber));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
HeadingElement.displayName = 'HeadingElement';
HeadingElement.propTypes = {
    className: propTypes.string,
    spaced: propTypes.bool,
    sizeNumber: function (props, propName) {
        var value = props[propName];
        var isInvalidSizeNumber = !!value && SIZE_NUMBERS.indexOf(value.toString()) === -1;
        if (isInvalidSizeNumber) {
            return new Error(value + " is an invalid size number. must be one of " + SIZE_NUMBERS.join(', '));
        }
        return null;
    }
};

var Title = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'title');
    return React__default['default'].createElement(HeadingElement, __assign({ className: classes }, props));
};
Title.displayName = 'Title';
Title.propTypes = {
    className: propTypes.string
};

var Subtitle = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'subtitle');
    return React__default['default'].createElement(HeadingElement, __assign({ className: classes }, props));
};
Subtitle.displayName = 'Subtitle';
Subtitle.propTypes = {
    className: propTypes.string
};

var ListItem = function (props) {
    return React__default['default'].createElement("li", __assign({}, props));
};
ListItem.displayName = 'ListItem';
ListItem.propTypes = {
    className: propTypes.string
};

var LIST_MARKERS = ['lower-alpha', 'lower-roman', 'upper-alpha', 'upper-roman'];
var LIST_TYPES = ['ul', 'ol', 'dl'];
var elementFor = function (attributes) {
    if (attributes.as !== undefined) {
        return attributes.as;
    }
    else if (isEnabled(attributes, 'unordered')) {
        return 'ul';
    }
    else if (isEnabled(attributes, 'ordered')) {
        return 'ol';
    }
    else if (isEnabled(attributes, 'description')) {
        return 'dl';
    }
    else {
        return 'ul';
    }
};
var List = function (_a) {
    var _b;
    var originalProps = __rest(_a, []);
    var className = originalProps.className, marker = originalProps.marker, props = __rest(originalProps, ["className", "marker", "ordered", "unordered", "description", "as"]);
    var classes = classNames__default['default'](className, (_b = {}, _b["is-" + marker] = isNotNil(marker), _b));
    var Element = elementFor(originalProps);
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
List.displayName = 'List';
List.Item = ListItem;
var moreThanOneExists = function (attributes, key) {
    var extraKeys = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraKeys[_i - 2] = arguments[_i];
    }
    return isDefined(attributes, key) && extraKeys.some(function (anotherKey) { return isDefined(attributes, anotherKey); });
};
var validateFieldsAreMutuallyExclusive = function (attributes, key, extraKeys) {
    if (moreThanOneExists.apply(moreThanOneExists, __spreadArrays([attributes, key], extraKeys))) {
        return new Error('List only supports one possible type (ordered, unordered or description). List also requires to choose between \'as\' prop or any of the list types. So if you introduced both props, you will have to remove one.');
    }
    return null;
};
var mutuallyExclusiveKeysExcept = function (keyToRemove) {
    return ['as', 'description', 'ordered', 'unordered'].filter(function (key) { return key !== keyToRemove; });
};
List.propTypes = {
    className: propTypes.string,
    marker: propTypes.oneOf(LIST_MARKERS),
    ordered: function (props, propName) { return validateFieldsAreMutuallyExclusive(props, propName, mutuallyExclusiveKeysExcept(propName)); },
    unordered: function (props, propName) { return validateFieldsAreMutuallyExclusive(props, propName, mutuallyExclusiveKeysExcept(propName)); },
    description: function (props, propName) { return validateFieldsAreMutuallyExclusive(props, propName, mutuallyExclusiveKeysExcept(propName)); },
    as: propTypes.oneOf(LIST_TYPES)
};

var checkDerivedClasses = function (props, object, device) {
    var _a, _b;
    return Object.assign({}, {
        narrow: object.narrow.concat((_a = {}, _a["is-narrow-" + device] = isEnabled(props, device + "Narrow"), _a)),
        device: object.device.concat((_b = {}, _b["is-" + device] = isEnabled(props, "" + camelCase(device)), _b)),
        deviceColumnSizes: object.deviceColumnSizes.concat(columnSizeClassFor(props[device + "ColumnSize"], device)),
        deviceOffsets: object.deviceOffsets.concat(columnOffsetlassFor(props[device + "Offset"], device))
    });
};
var Column = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, as = originalProps.as, columnSize = originalProps.columnSize, offset = originalProps.offset, props = __rest(originalProps, ["className", "as", "columnSize", "offset", "mobileColumnSize", "tabletColumnSize", "touchColumnSize", "desktopColumnSize", "widescreenColumnSize", "fullhdColumnSize", "mobileOffset", "tabletOffset", "touchOffset", "desktopOffset", "widescreenOffset", "fullhdOffset", "narrow", "mobileNarrow", "tabletNarrow", "touchNarrow", "desktopNarrow", "widescreenNarrow", "fullhdNarrow"]);
    var Element = htmlElementFor(as, 'div');
    var derivedClasses = DEVICES.reduce(function (object, device) { return checkDerivedClasses(originalProps, object, device); }, { narrow: [], device: [], deviceColumnSizes: [], deviceOffsets: [] });
    var classes = classNames__default['default'].apply(void 0, __spreadArrays([className, 'column', columnSizeClassFor(columnSize), columnOffsetlassFor(offset), { 'is-narrow': isEnabled(originalProps, 'narrow') }], derivedClasses.narrow, derivedClasses.device, derivedClasses.deviceColumnSizes, derivedClasses.deviceOffsets));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Column.displayName = 'Column';
Column.propTypes = {
    className: propTypes.string,
    columnSize: propTypes.oneOf(COLUMN_SIZES),
    offset: propTypes.oneOf(COLUMN_SIZES),
    mobileColumnSize: propTypes.oneOf(COLUMN_SIZES),
    tabletColumnSize: propTypes.oneOf(COLUMN_SIZES),
    touchColumnSize: propTypes.oneOf(COLUMN_SIZES),
    desktopColumnSize: propTypes.oneOf(COLUMN_SIZES),
    widescreenColumnSize: propTypes.oneOf(COLUMN_SIZES),
    fullhdColumnSize: propTypes.oneOf(COLUMN_SIZES),
    mobileOffset: propTypes.oneOf(COLUMN_SIZES),
    tabletOffset: propTypes.oneOf(COLUMN_SIZES),
    touchOffset: propTypes.oneOf(COLUMN_SIZES),
    desktopOffset: propTypes.oneOf(COLUMN_SIZES),
    widescreenOffset: propTypes.oneOf(COLUMN_SIZES),
    fullhdOffset: propTypes.oneOf(COLUMN_SIZES),
    narrow: propTypes.bool,
    mobileNarrow: propTypes.bool,
    tabletNarrow: propTypes.bool,
    touchNarrow: propTypes.bool,
    desktopNarrow: propTypes.bool,
    widescreenNarrow: propTypes.bool,
    fullhdNarrow: propTypes.bool,
    mobile: propTypes.bool,
    tablet: propTypes.bool,
    touch: propTypes.bool,
    desktop: propTypes.bool,
    widescreen: propTypes.bool,
    fullhd: propTypes.bool
};

var Columns = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, as = originalProps.as, from = originalProps.from, gap = originalProps.gap, props = __rest(originalProps, ["className", "as", "from", "gap", "gapless", "multiline", "centered", "vcentered"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'].apply(void 0, __spreadArrays([className, 'columns', checkEnabledProperties(originalProps, ['gapless', 'multiline', 'centered', 'vcentered']), deviceActiveClassFor(from), gapSizeFor(gap), variableGapClassFor(gap, originalProps)], gapSizeForDevices(originalProps)));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Columns.displayName = 'Columns';
Columns.propTypes = {
    className: propTypes.string,
    from: propTypes.oneOf(DEVICES),
    gapless: propTypes.bool,
    multiline: propTypes.bool,
    centered: propTypes.bool,
    vcentered: propTypes.bool,
    gap: propTypes.oneOf(GAP_SIZES),
    gapMobile: propTypes.oneOf(GAP_SIZES),
    gapTablet: propTypes.oneOf(GAP_SIZES),
    gapTouch: propTypes.oneOf(GAP_SIZES),
    gapDesktop: propTypes.oneOf(GAP_SIZES),
    gapWidescreen: propTypes.oneOf(GAP_SIZES),
    gapFullhd: propTypes.oneOf(GAP_SIZES)
};
Columns.Column = Column;

var Buttons = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, size = originalProps.size, position = originalProps.position, props = __rest(originalProps, ["className", "size", "position"]);
    var classes = classNames__default['default'](className, 'buttons', sizeClassFor(size, 'are'), buttonPositionClassFor(position), addonsClassFor(props));
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
Buttons.displayName = 'Buttons';
Buttons.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES),
    addons: propTypes.bool,
    position: propTypes.oneOf(BUTTON_POSITIONS)
};

var OrderedList = function (props) { return React__default['default'].createElement(List, __assign({ as: 'ol' }, props)); };
OrderedList.displayName = 'OrderedList';
OrderedList.Item = ListItem;
var UnorderedList = function (props) { return React__default['default'].createElement(List, __assign({ as: 'ul' }, props)); };
UnorderedList.displayName = 'UnorderedList';
UnorderedList.Item = ListItem;
var DescriptionList = function (props) { return React__default['default'].createElement(List, __assign({ as: 'dl' }, props)); };
DescriptionList.displayName = 'DescriptionList';
DescriptionList.Item = ListItem;

var FieldLabel = function (_a) {
    var className = _a.className, as = _a.as, size = _a.size, props = __rest(_a, ["className", "as", "size"]);
    var classes = classNames__default['default'](className, 'field-label', sizeClassFor(size));
    var Element = htmlElementFor(as, 'div');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
FieldLabel.displayName = 'FieldLabel';
FieldLabel.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES)
};

var FieldBody = function (_a) {
    var className = _a.className, as = _a.as, size = _a.size, props = __rest(_a, ["className", "as", "size"]);
    var classes = classNames__default['default'](className, 'field-body', sizeClassFor(size));
    var Element = htmlElementFor(as, 'div');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
FieldBody.displayName = 'FieldBody';
FieldBody.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES)
};

var Field = function (originalProps) {
    var className = originalProps.className, alignment = originalProps.alignment, grouped = originalProps.grouped, addons = originalProps.addons, groupedCentered = originalProps.groupedCentered, groupedRight = originalProps.groupedRight, groupedMultiline = originalProps.groupedMultiline, horizontal = originalProps.horizontal, props = __rest(originalProps, ["className", "alignment", "grouped", "addons", "groupedCentered", "groupedRight", "groupedMultiline", "horizontal"]);
    var classes = classNames__default['default'](className, 'field', groupedClassFor(originalProps), addonsClassFor(originalProps), { 'is-grouped-centered': isEnabled(originalProps, 'groupedCentered') }, { 'is-grouped-right': isEnabled(originalProps, 'groupedRight') }, { 'is-grouped-multiline': isEnabled(originalProps, 'groupedMultiline') }, checkEnabledProperty(originalProps, 'horizontal'), alignmentClassFor(alignment, { prefix: 'has-addons' }));
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
Field.displayName = 'Field';
Field.propTypes = {
    className: propTypes.string,
    alignment: propTypes.oneOf(ALIGNMENTS)
};
Field.Label = FieldLabel;
Field.Body = FieldBody;

var Control = function (originalProps) {
    var className = originalProps.className, hasIconsLeft = originalProps.hasIconsLeft, hasIconsRight = originalProps.hasIconsRight, expanded = originalProps.expanded, loading = originalProps.loading, size = originalProps.size, props = __rest(originalProps, ["className", "hasIconsLeft", "hasIconsRight", "expanded", "loading", "size"]);
    var classes = classNames__default['default'](className, 'control', checkEnabledProperties(originalProps, ['expanded', 'loading']), checkEnabledProperties(originalProps, ['hasIconsLeft', 'hasIconsRight'], { prefix: '' }), sizeClassFor(size));
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
Control.displayName = 'Control';
Control.propTypes = {
    className: propTypes.string,
    hasIconsLeft: propTypes.bool,
    hasIconsRight: propTypes.bool,
    expanded: propTypes.bool,
    loading: propTypes.bool,
    size: propTypes.oneOf(SIZES)
};

var Input = function (originalProps) {
    var className = originalProps.className, color = originalProps.color, size = originalProps.size, state = originalProps.state, expanded = originalProps.expanded, rounded = originalProps.rounded, isStatic = originalProps.static, htmlSize = originalProps.htmlSize, props = __rest(originalProps, ["className", "color", "size", "state", "expanded", "rounded", "static", "htmlSize"]);
    var classes = classNames__default['default'](className, 'input', colorClassFor(color), checkEnabledProperties(originalProps, ['expanded', 'rounded', 'static']), sizeClassFor(size), stateClassFor(state));
    return React__default['default'].createElement("input", __assign({ className: classes }, props, !!htmlSize ? { size: Number(htmlSize) } : null));
};
Input.displayName = 'Input';
Input.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS),
    size: propTypes.oneOf(SIZES),
    state: propTypes.oneOf(ELEMENT_STATES),
    expanded: propTypes.bool,
    rounded: propTypes.bool,
    static: propTypes.bool
};

var Help = function (originalProps) {
    var className = originalProps.className, color = originalProps.color, props = __rest(originalProps, ["className", "color"]);
    var classes = classNames__default['default'](className, 'help', colorClassFor(color));
    return React__default['default'].createElement("p", __assign({ className: classes }, props));
};
Help.displayName = 'Help';
Help.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS)
};

var SelectWrapper = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, color = originalProps.color, size = originalProps.size, state = originalProps.state, props = __rest(originalProps, ["className", "as", "color", "size", "state"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'select', checkEnabledProperties(originalProps, ['fullwidth', 'multiple']), colorClassFor(color), sizeClassFor(size), stateClassFor(state));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
SelectWrapper.displayName = 'SelectWrapper';
SelectWrapper.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES),
    color: propTypes.oneOf(COLORS),
    state: propTypes.oneOf(ELEMENT_STATES),
    fullwidth: propTypes.bool,
    multiple: propTypes.bool
};

var Textarea = function (originalProps) {
    var className = originalProps.className, color = originalProps.color, size = originalProps.size, state = originalProps.state, props = __rest(originalProps, ["className", "color", "size", "state"]);
    var classes = classNames__default['default'](className, 'textarea', colorClassFor(color), sizeClassFor(size), stateClassFor(state), checkEnabledProperties(originalProps, ['hasFixedSize'], { prefix: '' }));
    return React__default['default'].createElement("textarea", __assign({ className: classes }, props));
};
Textarea.displayName = 'Textarea';
Textarea.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS),
    size: propTypes.oneOf(SIZES),
    state: propTypes.oneOf(ELEMENT_STATES)
};

var SimpleCheckbox = function (_a) {
    var className = _a.className, children = _a.children, wrapperClassName = _a.wrapperClassName, props = __rest(_a, ["className", "children", "wrapperClassName"]);
    var classes = classNames__default['default'](className, 'checkbox');
    var wrapperClasses = classNames__default['default'](wrapperClassName, 'checkbox');
    return React__default['default'].createElement("label", { className: wrapperClasses },
        React__default['default'].createElement("input", __assign({ type: 'checkbox', className: classes }, props)),
        children);
};
SimpleCheckbox.displayName = 'SimpleCheckbox';
SimpleCheckbox.propTypes = {
    wrapperClassName: propTypes.string
};

var SimpleRadio = function (_a) {
    var className = _a.className, children = _a.children, wrapperClassName = _a.wrapperClassName, props = __rest(_a, ["className", "children", "wrapperClassName"]);
    var classes = classNames__default['default'](className, 'radio');
    var wrapperClasses = classNames__default['default'](wrapperClassName, 'radio');
    return React__default['default'].createElement("label", { className: wrapperClasses },
        React__default['default'].createElement("input", __assign({ type: 'radio', className: classes }, props)),
        children);
};
SimpleRadio.displayName = 'SimpleRadio';
SimpleRadio.propTypes = {
    className: propTypes.string
};

var DisabledFieldset = function (props) {
    return React__default['default'].createElement("fieldset", __assign({}, props, { disabled: true }));
};
DisabledFieldset.displayName = 'DisabledFieldset';

var Container = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, fluid = originalProps.fluid, fullhd = originalProps.fullhd, widescreen = originalProps.widescreen, props = __rest(originalProps, ["className", "as", "fluid", "fullhd", "widescreen"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'container', checkEnabledProperties(originalProps, ['fluid', 'fullhd', 'widescreen']));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Container.displayName = 'Container';
Container.propTypes = {
    className: propTypes.string,
    fluid: propTypes.bool,
    fullhd: propTypes.bool,
    widescreen: propTypes.bool
};

var LevelItem = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, centered = originalProps.centered, props = __rest(originalProps, ["className", "as", "centered"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'level-item', { 'has-text-centered': isEnabled(originalProps, 'centered') });
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
LevelItem.displayName = 'LevelItem';
LevelItem.propTypes = {
    className: propTypes.string,
    centered: propTypes.bool
};

var LevelLeft = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'level-left');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
LevelLeft.displayName = 'LevelLeft';
LevelLeft.propTypes = {
    className: propTypes.string
};

var LevelRight = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'level-right');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
LevelRight.displayName = 'LevelRight';
LevelRight.propTypes = {
    className: propTypes.string
};

var Level = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, mobile = originalProps.mobile, props = __rest(originalProps, ["className", "as", "mobile"]);
    var Element = htmlElementFor(as, 'nav');
    var classes = classNames__default['default'](className, 'level', { 'is-mobile': isEnabled(originalProps, 'mobile') });
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Level.displayName = 'Level';
Level.propTypes = {
    className: propTypes.string,
    mobile: propTypes.bool
};
Level.Left = LevelLeft;
Level.Right = LevelRight;
Level.Item = LevelItem;

var MediaContent = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'media-content');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
MediaContent.displayName = 'MediaContent';
MediaContent.propTypes = {
    className: propTypes.string
};

var MediaRight = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'media-right');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
MediaRight.displayName = 'MediaRight';
MediaRight.propTypes = {
    className: propTypes.string
};

var MediaLeft = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'media-left');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
MediaLeft.displayName = 'Media';
MediaLeft.propTypes = {
    className: propTypes.string
};

var Media = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'article');
    var classes = classNames__default['default'](className, 'media');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Media.displayName = 'Media';
Media.propTypes = {
    className: propTypes.string
};
Media.Left = MediaLeft;
Media.Content = MediaContent;
Media.Right = MediaRight;

var Footer = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'footer');
    var classes = classNames__default['default'](className, 'footer');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Footer.displayName = 'Footer';
Footer.propTypes = {
    className: propTypes.string
};

var Section = function (_a) {
    var _b;
    var className = _a.className, as = _a.as, spacing = _a.spacing, props = __rest(_a, ["className", "as", "spacing"]);
    var Element = htmlElementFor(as, 'section');
    var classes = classNames__default['default'](className, 'section', (_b = {}, _b["is-" + spacing] = ['medium', 'large'].includes(spacing), _b));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Section.displayName = 'Section';
Section.propTypes = {
    className: propTypes.string
};

var HeroHead = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'hero-head');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
HeroHead.displayName = 'HeroHead';
HeroHead.propTypes = {
    className: propTypes.string
};

var HeroBody = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'hero-body');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
HeroBody.displayName = 'HeroBody';
HeroBody.propTypes = {
    className: propTypes.string
};

var HeroFoot = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'hero-foot');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
HeroFoot.displayName = 'HeroFoot';
HeroFoot.propTypes = {
    className: propTypes.string
};

var Tile = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, hierarchy = originalProps.hierarchy, horizontalSize = originalProps.horizontalSize, vertical = originalProps.vertical, props = __rest(originalProps, ["className", "as", "hierarchy", "horizontalSize", "vertical"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'tile', { 'is-vertical': isEnabled(originalProps, 'vertical') }, hierarchyClassFor(hierarchy), horizontalClassFor(horizontalSize));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
Tile.displayName = 'Tile';
Tile.propTypes = {
    className: propTypes.string,
    hierarchy: propTypes.oneOf(HIERARCHIES),
    horizontalSize: propTypes.oneOf(COLUMN_SIZE_NUMBERS),
    vertical: propTypes.bool
};

var PanelHeading = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'panel-heading');
    return React__default['default'].createElement("p", __assign({ className: classes }, props));
};
PanelHeading.displayName = 'PanelHeading';
PanelHeading.propTypes = {
    className: propTypes.string
};

var PanelBlock = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, active = originalProps.active, props = __rest(originalProps, ["className", "as", "active"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames__default['default'](className, 'panel-block', checkEnabledProperties(originalProps, ['active']));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
PanelBlock.displayName = 'PanelBlock';
PanelBlock.propTypes = {
    className: propTypes.string,
    active: propTypes.bool
};

var PanelIcon = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'panel-icon');
    return React__default['default'].createElement("span", __assign({ className: classes }, props));
};
PanelIcon.displayName = 'PanelIcon';
PanelIcon.propTypes = {
    className: propTypes.string
};

var PanelTabsItem = function (originalProps) {
    var className = originalProps.className, active = originalProps.active, props = __rest(originalProps, ["className", "active"]);
    var classes = classNames__default['default'](className, checkEnabledProperties(originalProps, ['active']));
    // eslint-disable-next-line
    return React__default['default'].createElement("a", __assign({ className: classes }, props));
};
PanelTabsItem.displayName = 'PanelTabsItem';
PanelTabsItem.propTypes = {
    className: propTypes.string,
    active: propTypes.bool
};

var PanelTabs = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'panel-tabs');
    return React__default['default'].createElement("p", __assign({ className: classes }, props));
};
PanelTabs.displayName = 'PanelTabs';
PanelTabs.Item = PanelTabsItem;
PanelTabs.propTypes = {
    className: propTypes.string
};

var Panel = function (_a) {
    var className = _a.className, color = _a.color, props = __rest(_a, ["className", "color"]);
    var classes = classNames__default['default'](className, 'panel', colorClassFor(color));
    return React__default['default'].createElement("nav", __assign({ className: classes }, props));
};
Panel.displayName = 'Panel';
Panel.Heading = PanelHeading;
Panel.Block = PanelBlock;
Panel.Icon = PanelIcon;
Panel.Tabs = PanelTabs;
Panel.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS)
};

var ModalBackground = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'modal-background');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
ModalBackground.displayName = 'ModalBackground';
ModalBackground.propTypes = {
    className: propTypes.string
};

var OutsideClickContext = React__default['default'].createContext({ onOutsideClick: function () { }, isActive: false });
var OutsideClickProvider = OutsideClickContext.Provider, OutsideClickConsumer = OutsideClickContext.Consumer;
function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function () {
        ref.current = value;
    });
    return ref.current;
}
function useOutsideAlerter(closeOnClickOutside) {
    if (closeOnClickOutside === void 0) { closeOnClickOutside = true; }
    var _a = React.useState(false), clickedOutside = _a[0], setClickedOutside = _a[1];
    var _b = React.useContext(OutsideClickContext), onOutsideClick = _b.onOutsideClick, isActive = _b.isActive;
    var ref = React.useRef(null);
    if (closeOnClickOutside && clickedOutside && isActive) {
        setClickedOutside(false);
        window.setTimeout(onOutsideClick, 0);
    }
    var handleClickOutside = function (event) {
        if (closeOnClickOutside && isActive && ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
            setClickedOutside(true);
        }
    };
    React.useEffect(function () {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive]);
    return { ref: ref, setClickedOutside: setClickedOutside, clickedOutside: clickedOutside };
}
var OutsideAlerter = function (originalProps) {
    var closeOnClickOutside = originalProps.closeOnClickOutside, props = __rest(originalProps, ["closeOnClickOutside"]);
    var wrapperRef = useOutsideAlerter(closeOnClickOutside).ref;
    return React__default['default'].createElement("div", { ref: wrapperRef }, props.children);
};
OutsideAlerter.displayName = 'OutsideAlerter';
var HtmlNotFoundError = function () { throw new Error('Couldn\'t find html dom element'); };
var _a$2 = function () {
    var count = 0;
    var addClipped = function () {
        count += 1;
        if (count > 0) {
            var htmlSelector = document.querySelector('html') || HtmlNotFoundError();
            htmlSelector.classList.add('is-clipped');
        }
    };
    var removeClipped = function () {
        count -= 1;
        if (count <= 0) {
            var htmlSelector = document.querySelector('html') || HtmlNotFoundError();
            htmlSelector.classList.remove('is-clipped');
        }
    };
    return { addClipped: addClipped, removeClipped: removeClipped };
}(), addClipped = _a$2.addClipped, removeClipped = _a$2.removeClipped;

var ModalContent = function (_a) {
    var className = _a.className, _b = _a.closeOnClickOutside, closeOnClickOutside = _b === void 0 ? true : _b, props = __rest(_a, ["className", "closeOnClickOutside"]);
    var classes = classNames__default['default'](className, 'modal-content');
    return React__default['default'].createElement(OutsideAlerter, { closeOnClickOutside: closeOnClickOutside },
        React__default['default'].createElement("div", __assign({ className: classes }, props)));
};
ModalContent.displayName = 'ModalContent';
ModalContent.propTypes = {
    className: propTypes.string,
    closeOnClickOutside: propTypes.bool
};

var ModalClose = function (_a) {
    var className = _a.className, size = _a.size, props = __rest(_a, ["className", "size"]);
    var classes = classNames__default['default'](className, 'modal-close', sizeClassFor(size));
    return React__default['default'].createElement("button", __assign({ className: classes }, props, { "aria-label": 'close' }));
};
ModalClose.displayName = 'ModalClose';
ModalClose.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES)
};

var ModalCardHead = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'modal-card-head');
    return React__default['default'].createElement("header", __assign({ className: classes }, props));
};
ModalCardHead.displayName = 'ModalCardHead';
ModalCardHead.propTypes = {
    className: propTypes.string
};

var ModalCardTitle = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'modal-card-title');
    return React__default['default'].createElement("p", __assign({ className: classes }, props));
};
ModalCardTitle.displayName = 'ModalCardTitle';
ModalCardTitle.propTypes = {
    className: propTypes.string
};

var ModalCardBody = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'modal-card-body');
    return React__default['default'].createElement("section", __assign({ className: classes }, props));
};
ModalCardBody.displayName = 'ModalCardBody';
ModalCardBody.propTypes = {
    className: propTypes.string
};

var ModalCardFoot = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'modal-card-foot');
    return React__default['default'].createElement("footer", __assign({ className: classes }, props));
};
ModalCardFoot.displayName = 'ModalCardFoot';
ModalCardFoot.propTypes = {
    className: propTypes.string
};

var ModalCard = function (_a) {
    var className = _a.className, closeOnClickOutside = _a.closeOnClickOutside, props = __rest(_a, ["className", "closeOnClickOutside"]);
    var classes = classNames__default['default'](className, 'modal-card');
    return React__default['default'].createElement(OutsideAlerter, { closeOnClickOutside: closeOnClickOutside },
        React__default['default'].createElement("div", __assign({ className: classes }, props)),
        ";");
};
ModalCard.displayName = 'ModalCard';
ModalCard.Head = ModalCardHead;
ModalCard.Title = ModalCardTitle;
ModalCard.Body = ModalCardBody;
ModalCard.Foot = ModalCardFoot;
ModalCard.propTypes = {
    className: propTypes.string,
    closeOnClickOutside: propTypes.bool
};

var isEscape = function (event) {
    var key = event.key || event.keyCode;
    return key === 'Escape' || key === 'Esc' || key === 27;
};
var Modal = function (originalProps) {
    var className = originalProps.className, active = originalProps.active, _a = originalProps.closeModal, closeModal = _a === void 0 ? Function.prototype : _a, _b = originalProps.onOpen, onOpen = _b === void 0 ? Function.prototype : _b, _c = originalProps.onClose, onClose = _c === void 0 ? Function.prototype : _c, _d = originalProps.onMount, onMount = _d === void 0 ? Function.prototype : _d, _e = originalProps.onUnmount, onUnmount = _e === void 0 ? Function.prototype : _e, _f = originalProps.closeOnEscape, closeOnEscape = _f === void 0 ? false : _f, children = originalProps.children, background = originalProps.background, clipped = originalProps.clipped, props = __rest(originalProps, ["className", "active", "closeModal", "onOpen", "onClose", "onMount", "onUnmount", "closeOnEscape", "children", "background", "clipped"]);
    var previousActive = usePrevious(active);
    var isOpening = active === true && previousActive !== true;
    var isClosing = active !== true && previousActive === true;
    var onKeyDown = React.useCallback(function (event) {
        if (isEscape(event) && closeOnEscape && active) {
            closeModal();
        }
    }, [closeOnEscape, active]);
    var onOutsideClick = React.useCallback(function () { return closeModal(); }, [closeModal]);
    React.useEffect(function () {
        onMount();
        return function () { onUnmount(); };
    }, []);
    React.useEffect(function () {
        document.addEventListener('keydown', onKeyDown);
        return function () {
            document.removeEventListener('keydown', onKeyDown);
        };
    });
    if (isOpening) {
        onOpen();
        if (clipped) {
            addClipped();
        }
    }
    if (isClosing) {
        onClose();
        if (clipped) {
            removeClipped();
        }
    }
    var classes = classNames__default['default'](className, 'modal', checkEnabledProperties(originalProps, ['active']));
    return React__default['default'].createElement("div", __assign({ className: classes }, props),
        React__default['default'].createElement(OutsideClickProvider, { value: { onOutsideClick: onOutsideClick, isActive: !!active } },
            background === false ? null : React__default['default'].createElement(ModalBackground, null),
            children));
};
Modal.displayName = 'Modal';
Modal.Background = ModalBackground;
Modal.Content = ModalContent;
Modal.Close = ModalClose;
Modal.Card = ModalCard;
Modal.propTypes = {
    closeModal: propTypes.func,
    onOpen: propTypes.func,
    onClose: propTypes.func,
    onMount: propTypes.func,
    onUnmount: propTypes.func,
    closeOnEscape: propTypes.bool,
    clipped: propTypes.bool,
    background: propTypes.bool
};

var CheckRadio = React.forwardRef(function (originalProps, ref) {
    var inputClass = originalProps.inputClass, text = originalProps.text, id = originalProps.id, name = originalProps.name, type = originalProps.type, color = originalProps.color, size = originalProps.size, rtl = originalProps.rtl, circle = originalProps.circle, block = originalProps.block, hasNoBorder = originalProps.hasNoBorder, hasBackgroundColor = originalProps.hasBackgroundColor, htmlSize = originalProps.htmlSize, props = __rest(originalProps, ["inputClass", "text", "id", "name", "type", "color", "size", "rtl", "circle", "block", "hasNoBorder", "hasBackgroundColor", "htmlSize"]);
    var classes = classNames__default['default'](inputClass, 'is-checkradio', colorClassFor(color), sizeClassFor(size), checkEnabledProperties(originalProps, ['rtl', 'circle', 'block']), checkEnabledProperties(originalProps, ['hasNoBorder', 'hasBackgroundColor'], { prefix: '' }));
    return React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("input", __assign({ id: id, type: type, className: classes, name: name, ref: ref }, props, !!htmlSize ? { size: Number(htmlSize) } : null)),
        React__default['default'].createElement("label", { htmlFor: id }, text));
});
CheckRadio.displayName = 'CheckRadio';
CheckRadio.propTypes = {
    inputClass: propTypes.string,
    id: propTypes.string.isRequired,
    name: propTypes.string,
    type: propTypes.oneOf(CHECK_RADIOS).isRequired,
    color: propTypes.oneOf(COLORS),
    size: propTypes.oneOf(SIZES),
    rtl: propTypes.bool,
    circle: propTypes.bool,
    block: propTypes.bool,
    hasNoBorder: propTypes.bool,
    hasBackgroundColor: propTypes.bool
};

var Radio = function (props) {
    return React__default['default'].createElement(CheckRadio, __assign({ type: 'radio' }, props));
};
Radio.displayName = 'Radio';
Radio.propTypes = {
    inputClass: propTypes.string,
    id: propTypes.string.isRequired,
    name: propTypes.string,
    color: propTypes.oneOf(COLORS),
    size: propTypes.oneOf(SIZES),
    rtl: propTypes.bool,
    circle: propTypes.bool,
    block: propTypes.bool,
    hasNoBorder: propTypes.bool,
    hasBackgroundColor: propTypes.bool
};

var CheckBox = React.forwardRef(function (originalProps) {
    var indeterminate = originalProps.indeterminate, props = __rest(originalProps, ["indeterminate"]);
    var inputRef = React.useRef(null);
    React.useEffect(function () {
        var input = inputRef.current;
        if (!!input) {
            input.indeterminate = isEnabled(originalProps, 'indeterminate');
        }
    });
    return React__default['default'].createElement(CheckRadio, __assign({ type: 'checkbox', ref: inputRef }, props));
});
CheckBox.displayName = 'CheckBox';
CheckBox.propTypes = {
    inputClass: propTypes.string,
    id: propTypes.string.isRequired,
    name: propTypes.string,
    color: propTypes.oneOf(COLORS),
    size: propTypes.oneOf(SIZES),
    rtl: propTypes.bool,
    circle: propTypes.bool,
    block: propTypes.bool,
    hasNoBorder: propTypes.bool,
    hasBackgroundColor: propTypes.bool,
    indeterminate: propTypes.bool
};

var Tooltip = function (originalProps) {
    var _a;
    var className = originalProps.className, text = originalProps.text, color = originalProps.color, position = originalProps.position, positionMobile = originalProps.positionMobile, positionTablet = originalProps.positionTablet, positionTouch = originalProps.positionTouch, positionDesktop = originalProps.positionDesktop, positionWidescreen = originalProps.positionWidescreen, positionFullhd = originalProps.positionFullhd, positionMobileOnly = originalProps.positionMobileOnly, positionTabletOnly = originalProps.positionTabletOnly, positionTouchOnly = originalProps.positionTouchOnly, positionDesktopOnly = originalProps.positionDesktopOnly, positionWidescreenOnly = originalProps.positionWidescreenOnly, positionFullhdOnly = originalProps.positionFullhdOnly, children = originalProps.children, active = originalProps.active, multiline = originalProps.multiline, props = __rest(originalProps, ["className", "text", "color", "position", "positionMobile", "positionTablet", "positionTouch", "positionDesktop", "positionWidescreen", "positionFullhd", "positionMobileOnly", "positionTabletOnly", "positionTouchOnly", "positionDesktopOnly", "positionWidescreenOnly", "positionFullhdOnly", "children", "active", "multiline"]);
    var classes = classNames__default['default'](className, 'tooltip', positionClassFor(position), positionClassFor(positionMobile, { device: 'mobile' }), positionClassFor(positionTablet, { device: 'tablet' }), positionClassFor(positionTouch, { device: 'touch' }), positionClassFor(positionDesktop, { device: 'desktop' }), positionClassFor(positionWidescreen, { device: 'widescreen' }), positionClassFor(positionFullhd, { device: 'fullhd' }), positionClassFor(positionMobileOnly, { device: 'mobile', suffix: 'only' }), positionClassFor(positionTabletOnly, { device: 'tablet', suffix: 'only' }), positionClassFor(positionTouchOnly, { device: 'touch', suffix: 'only' }), positionClassFor(positionDesktopOnly, { device: 'desktop', suffix: 'only' }), positionClassFor(positionWidescreenOnly, { device: 'widescreen', suffix: 'only' }), positionClassFor(positionFullhdOnly, { device: 'fullhd', suffix: 'only' }), checkEnabledProperties(originalProps, ['active', 'multiline'], { prefix: 'is-tooltip' }), (_a = {}, _a["is-tooltip-" + color] = isColor(color), _a));
    return React__default['default'].createElement("div", __assign({ className: classes }, props, { "data-tooltip": text }), children);
};
Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
    className: propTypes.string,
    text: propTypes.string.isRequired,
    position: propTypes.oneOf(POSITIONS),
    positionMobile: propTypes.oneOf(POSITIONS),
    positionTablet: propTypes.oneOf(POSITIONS),
    positionTouch: propTypes.oneOf(POSITIONS),
    positionDesktop: propTypes.oneOf(POSITIONS),
    positionWidescreen: propTypes.oneOf(POSITIONS),
    positionFullhd: propTypes.oneOf(POSITIONS),
    color: propTypes.oneOf(COLORS),
    active: propTypes.bool,
    multiline: propTypes.bool,
    positionMobileOnly: propTypes.oneOf(POSITIONS),
    positionTabletOnly: propTypes.oneOf(POSITIONS),
    positionTouchOnly: propTypes.oneOf(POSITIONS),
    positionDesktopOnly: propTypes.oneOf(POSITIONS),
    positionWidescreenOnly: propTypes.oneOf(POSITIONS),
    positionFullhdOnly: propTypes.oneOf(POSITIONS)
};

var BreadcrumbItem = function (originalProps) {
    var className = originalProps.className, active = originalProps.active, props = __rest(originalProps, ["className", "active"]);
    var classes = classNames__default['default'](className, checkEnabledProperties(originalProps, ['active']));
    return React__default['default'].createElement("li", __assign({ className: classes }, props));
};
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.propTypes = {
    className: propTypes.string,
    active: propTypes.bool
};

var Breadcrumb = function (_a) {
    var className = _a.className, children = _a.children, ulClassName = _a.ulClassName, alignment = _a.alignment, size = _a.size, separator = _a.separator, props = __rest(_a, ["className", "children", "ulClassName", "alignment", "size", "separator"]);
    var classes = classNames__default['default'](className, 'breadcrumb', alignmentClassFor(alignment), sizeClassFor(size), separatorClassFor(separator));
    var ulClasses = classNames__default['default'](ulClassName);
    return React__default['default'].createElement("nav", __assign({ "aria-label": 'breadcrumbs', className: classes }, props),
        React__default['default'].createElement("ul", { className: ulClasses }, children));
};
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.propTypes = {
    className: propTypes.string,
    alignment: propTypes.oneOf(ALIGNMENTS),
    size: propTypes.oneOf(SIZES),
    separator: propTypes.oneOf(SEPARATORS)
};

var CardImage = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'card-image');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
CardImage.displayName = 'CardImage';
CardImage.propTypes = {
    className: propTypes.string
};

var CardContent = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'card-content');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
CardContent.displayName = 'CardContent';
CardContent.propTypes = {
    className: propTypes.string
};

var CardFooterItem = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var classes = classNames__default['default'](className, 'card-footer-item');
    var Element = htmlElementFor(as, 'p');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
CardFooterItem.displayName = 'CardFooterItem';
CardFooterItem.propTypes = {
    className: propTypes.string
};

var CardFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'card-footer');
    return React__default['default'].createElement("footer", __assign({ className: classes }, props));
};
CardFooter.displayName = 'CardFooter';
CardFooter.Item = CardFooterItem;
CardFooter.propTypes = {
    className: propTypes.string
};

var CardHeaderTitle = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, centered = originalProps.centered, props = __rest(originalProps, ["className", "as", "centered"]);
    var Element = htmlElementFor(as, 'p');
    var classes = classNames__default['default'](className, 'card-header-title', checkEnabledProperties(originalProps, ['centered']));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
CardHeaderTitle.displayName = 'CardHeaderTitle';
CardHeaderTitle.propTypes = {
    className: propTypes.string,
    centered: propTypes.bool
};

var CardHeaderIcon = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'span');
    var classes = classNames__default['default'](className, 'card-header-icon');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
CardHeaderIcon.displayName = 'CardHeaderIcon';
CardHeaderIcon.propTypes = {
    className: propTypes.string
};

var CardHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'card-header');
    return React__default['default'].createElement("header", __assign({ className: classes }, props));
};
CardHeader.displayName = 'CardHeader';
CardHeader.Title = CardHeaderTitle;
CardHeader.Icon = CardHeaderIcon;
CardHeader.propTypes = {
    className: propTypes.string
};

var Card = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'card');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
Card.displayName = 'Card';
Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.propTypes = {
    className: propTypes.string
};

var DropdownTrigger = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'dropdown-trigger');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
DropdownTrigger.displayName = 'DropdownTrigger';
DropdownTrigger.propTypes = {
    className: propTypes.string
};

var DropdownMenu = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'dropdown-menu');
    return React__default['default'].createElement("div", __assign({ className: classes }, props, { role: 'menu' }));
};
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = {
    className: propTypes.string
};

var DropdownContent = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'dropdown-content');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
DropdownContent.displayName = 'DropdownContent';
DropdownContent.propTypes = {
    className: propTypes.string
};

var DropdownDivider = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'dropdown-divider');
    return React__default['default'].createElement("hr", __assign({ className: classes }, props));
};
DropdownDivider.displayName = 'DropdownDivider';
DropdownDivider.propTypes = {
    className: propTypes.string
};

var DropdownItem = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, active = originalProps.active, props = __rest(originalProps, ["className", "as", "active"]);
    var Element = htmlElementFor(as, 'a');
    var classes = classNames__default['default'](className, 'dropdown-item', checkEnabledProperties(originalProps, ['active']));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
DropdownItem.displayName = 'DropdownItem';
DropdownItem.propTypes = {
    className: propTypes.string
};

var Dropdown = function (originalProps) {
    var className = originalProps.className, active = originalProps.active, up = originalProps.up, right = originalProps.right, hoverable = originalProps.hoverable, props = __rest(originalProps, ["className", "active", "up", "right", "hoverable"]);
    var classes = classNames__default['default'](className, 'dropdown', checkEnabledProperties(originalProps, ['active', 'up', 'right', 'hoverable']));
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
Dropdown.displayName = 'Dropdown';
Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Content = DropdownContent;
Dropdown.Divider = DropdownDivider;
Dropdown.Item = DropdownItem;
Dropdown.propTypes = {
    className: propTypes.string,
    active: propTypes.bool,
    up: propTypes.bool,
    right: propTypes.bool,
    hoverable: propTypes.bool
};

var MenuLabel = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'menu-label');
    return React__default['default'].createElement("p", __assign({ className: classes }, props));
};
MenuLabel.displayName = 'MenuLabel';
MenuLabel.propTypes = {
    className: propTypes.string
};

var MenuList = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'ul');
    var classes = classNames__default['default'](className, 'menu-list');
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
MenuList.displayName = 'MenuList';
MenuList.propTypes = {
    className: propTypes.string
};

var Menu = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'menu');
    return React__default['default'].createElement("aside", __assign({ className: classes }, props));
};
Menu.displayName = 'Menu';
Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.propTypes = {
    className: propTypes.string
};

var MessageBody = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'message-body');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
MessageBody.displayName = 'MessageBody';
MessageBody.propTypes = {
    className: propTypes.string
};

var MessageHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'message-header');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
MessageHeader.displayName = 'MessageHeader';
MessageHeader.propTypes = {
    className: propTypes.string
};

var Message = function (_a) {
    var className = _a.className, color = _a.color, size = _a.size, props = __rest(_a, ["className", "color", "size"]);
    var classes = classNames__default['default'](className, 'message', colorClassFor(color), sizeClassFor(size));
    return React__default['default'].createElement("article", __assign({ className: classes }, props));
};
Message.displayName = 'Message';
Message.Header = MessageHeader;
Message.Body = MessageBody;
Message.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES),
    color: propTypes.oneOf(COLORS)
};

var TabsItem = function (originalProps) {
    var className = originalProps.className, children = originalProps.children, active = originalProps.active, _a = originalProps.includeLink, includeLink = _a === void 0 ? true : _a, props = __rest(originalProps, ["className", "children", "active", "includeLink"]);
    var classes = classNames__default['default'](className, checkEnabledProperties(originalProps, ['active']));
    // eslint-disable-next-line
    var element = includeLink
        ? React__default['default'].createElement("li", __assign({ className: classes }, props),
            " ",
            React__default['default'].createElement("a", null, children),
            " ")
        : React__default['default'].createElement("li", __assign({ className: classes }, props, { children: children }));
    return element;
};
TabsItem.displayName = 'TabsItem';
TabsItem.propTypes = {
    className: propTypes.string,
    active: propTypes.bool,
    includeLink: propTypes.bool
};

var Tabs = function (originalProps) {
    var className = originalProps.className, size = originalProps.size, alignment = originalProps.alignment, ulClassName = originalProps.ulClassName, children = originalProps.children, boxed = originalProps.boxed, rounded = originalProps.rounded, fullwidth = originalProps.fullwidth, toggle = originalProps.toggle, toggleRounded = originalProps.toggleRounded, props = __rest(originalProps, ["className", "size", "alignment", "ulClassName", "children", "boxed", "rounded", "fullwidth", "toggle", "toggleRounded"]);
    var classes = classNames__default['default'](className, 'tabs', sizeClassFor(size), alignmentClassFor(alignment), checkEnabledProperties(originalProps, ['boxed', 'rounded', 'fullwidth', 'toggle', 'toggleRounded']));
    var ulClasses = classNames__default['default'](ulClassName);
    return React__default['default'].createElement("div", __assign({ className: classes }, props),
        React__default['default'].createElement("ul", { className: ulClasses }, children));
};
Tabs.displayName = 'Tabs';
Tabs.Item = TabsItem;
Tabs.propTypes = {
    className: propTypes.string,
    ulClassName: propTypes.string,
    alignment: propTypes.oneOf(ALIGNMENTS),
    size: propTypes.oneOf(SIZES),
    boxed: propTypes.bool,
    rounded: propTypes.bool,
    fullwidth: propTypes.bool,
    toggle: propTypes.bool,
    toggleRounded: propTypes.bool
};

var NavbarBrand = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'navbar-brand');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
NavbarBrand.displayName = 'NavbarBrand';
NavbarBrand.propTypes = {
    className: propTypes.string
};

var NavbarBurger = function (originalProps) {
    var className = originalProps.className, active = originalProps.active, props = __rest(originalProps, ["className", "active"]);
    var classes = classNames__default['default'](className, 'navbar-burger', 'burger', checkEnabledProperties(originalProps, ['active']));
    return React__default['default'].createElement("a", __assign({ className: classes }, props, { role: 'button', "aria-label": 'menu', "aria-expanded": 'false' }),
        React__default['default'].createElement("span", { "aria-hidden": 'true' }),
        React__default['default'].createElement("span", { "aria-hidden": 'true' }),
        React__default['default'].createElement("span", { "aria-hidden": 'true' }));
};
NavbarBurger.displayName = 'NavbarBurger';
NavbarBurger.propTypes = {
    className: propTypes.string,
    active: propTypes.bool
};

var NavbarMenu = function (originalProps) {
    var className = originalProps.className, active = originalProps.active, props = __rest(originalProps, ["className", "active"]);
    var classes = classNames__default['default'](className, 'navbar-menu', checkEnabledProperties(originalProps, ['active']));
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
NavbarMenu.displayName = 'NavbarMenu';
NavbarMenu.propTypes = {
    className: propTypes.string,
    active: propTypes.bool
};

var NavbarStart = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'navbar-start');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
NavbarStart.displayName = 'NavbarStart';
NavbarStart.propTypes = {
    className: propTypes.string
};

var NavbarEnd = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'navbar-end');
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
NavbarEnd.displayName = 'NavbarEnd';
NavbarEnd.propTypes = {
    className: propTypes.string
};

var NavbarItem = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, component = originalProps.component, expanded = originalProps.expanded, tab = originalProps.tab, active = originalProps.active, hoverable = originalProps.hoverable, dropdown = originalProps.dropdown, dropdownUp = originalProps.dropdownUp, props = __rest(originalProps, ["className", "as", "component", "expanded", "tab", "active", "hoverable", "dropdown", "dropdownUp"]);
    var defaultElement = isEnabled(originalProps, 'dropdown') ? 'div' : 'a';
    var Element = component || htmlElementFor(as, defaultElement);
    var classes = classNames__default['default'](className, 'navbar-item', checkEnabledProperties(originalProps, ['dropdown', 'dropdownUp'], { prefix: 'has' }), checkEnabledProperties(originalProps, ['expanded', 'tab', 'active', 'hoverable']));
    return React__default['default'].createElement(Element, __assign({ className: classes }, props));
};
NavbarItem.displayName = 'NavbarItem';
NavbarItem.propTypes = {
    className: propTypes.string,
    expanded: propTypes.bool,
    tab: propTypes.bool,
    active: propTypes.bool,
    hoverable: propTypes.bool,
    dropdown: propTypes.bool,
    dropdownUp: propTypes.bool
};

var NavbarLink = function (originalProps) {
    var className = originalProps.className, arrowless = originalProps.arrowless, props = __rest(originalProps, ["className", "arrowless"]);
    var classes = classNames__default['default'](className, 'navbar-link', checkEnabledProperties(originalProps, ['arrowless']));
    // eslint-disable-next-line
    return React__default['default'].createElement("a", __assign({ className: classes }, props));
};
NavbarLink.displayName = 'NavbarLink';
NavbarLink.propTypes = {
    className: propTypes.string,
    arrowless: propTypes.bool
};

var NavbarDropdown = function (originalProps) {
    var className = originalProps.className, right = originalProps.right, props = __rest(originalProps, ["className", "right"]);
    var classes = classNames__default['default'](className, 'navbar-dropdown', checkEnabledProperties(props, ['right']));
    return React__default['default'].createElement("div", __assign({ className: classes }, props));
};
NavbarDropdown.displayName = 'NavbarDropdown';
NavbarDropdown.propTypes = {
    className: propTypes.string
};

var NavbarDivider = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'navbar-divider');
    return React__default['default'].createElement("hr", __assign({ className: classes }, props));
};
NavbarDivider.displayName = 'NavbarDivider';
NavbarDivider.propTypes = {
    className: propTypes.string
};

var Navbar = function (originalProps) {
    var className = originalProps.className, color = originalProps.color, fixedTop = originalProps.fixedTop, fixedBottom = originalProps.fixedBottom, transparent = originalProps.transparent, spaced = originalProps.spaced, props = __rest(originalProps, ["className", "color", "fixedTop", "fixedBottom", "transparent", "spaced"]);
    var classes = classNames__default['default'](className, 'navbar', checkEnabledProperties(originalProps, ['fixedTop', 'fixedBottom', 'transparent', 'spaced']), colorClassFor(color));
    return React__default['default'].createElement("nav", __assign({ className: classes }, props, { role: 'navigation', "aria-label": 'main navigation' }));
};
Navbar.displayName = 'Navbar';
Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Menu = NavbarMenu;
Navbar.Start = NavbarStart;
Navbar.End = NavbarEnd;
Navbar.Item = NavbarItem;
Navbar.Link = NavbarLink;
Navbar.Dropdown = NavbarDropdown;
Navbar.Divider = NavbarDivider;
Navbar.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS),
    fixedTop: propTypes.bool,
    fixedBottom: propTypes.bool,
    transparent: propTypes.bool,
    spaced: propTypes.bool
};

var PaginationEllipsis = function (_a) {
    var className = _a.className, text = _a.text, props = __rest(_a, ["className", "text"]);
    var ellipsisText = text || '...';
    var classes = classNames__default['default'](className, 'pagination-ellipsis');
    return React__default['default'].createElement("li", null,
        React__default['default'].createElement("span", __assign({ className: classes }, props), ellipsisText));
};
PaginationEllipsis.displayName = 'PaginationEllipsis';
PaginationEllipsis.propTypes = {
    className: propTypes.string,
    text: propTypes.string
};

var PaginationPrevious = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'pagination-previous');
    // eslint-disable-next-line
    return React__default['default'].createElement("a", __assign({ className: classes }, props));
};
PaginationPrevious.displayName = 'PaginationPrevious';
PaginationPrevious.propTypes = {
    className: propTypes.string
};

var PaginationNext = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'pagination-next');
    // eslint-disable-next-line
    return React__default['default'].createElement("a", __assign({ className: classes }, props));
};
PaginationNext.displayName = 'PaginationNext';
PaginationNext.propTypes = {
    className: propTypes.string
};

var PaginationList = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames__default['default'](className, 'pagination-list');
    return React__default['default'].createElement("ul", __assign({ className: classes }, props));
};
PaginationList.displayName = 'PaginationList';
PaginationList.propTypes = {
    className: propTypes.string
};

var PaginationLink = function (originalProps) {
    var className = originalProps.className, as = originalProps.as, current = originalProps.current, props = __rest(originalProps, ["className", "as", "current"]);
    var Element = htmlElementFor(as, 'a');
    var classes = classNames__default['default'](className, 'pagination-link', checkEnabledProperties(originalProps, ['current']));
    return React__default['default'].createElement("li", null,
        React__default['default'].createElement(Element, __assign({ className: classes }, props)));
};
PaginationLink.displayName = 'PaginationLink';
PaginationLink.propTypes = {
    className: propTypes.string,
    current: propTypes.bool
};

var Pagination = function (originalProps) {
    var className = originalProps.className, size = originalProps.size, alignment = originalProps.alignment, rounded = originalProps.rounded, props = __rest(originalProps, ["className", "size", "alignment", "rounded"]);
    var classes = classNames__default['default'](className, 'pagination', sizeClassFor(size), alignmentClassFor(alignment), checkEnabledProperties(originalProps, ['rounded']));
    return React__default['default'].createElement("nav", __assign({ className: classes }, props, { role: 'navigation', "aria-label": 'pagination' }));
};
Pagination.displayName = 'Pagination';
Pagination.Previous = PaginationPrevious;
Pagination.Next = PaginationNext;
Pagination.List = PaginationList;
Pagination.Link = PaginationLink;
Pagination.Ellipsis = PaginationEllipsis;
Pagination.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES),
    alignment: propTypes.oneOf(ALIGNMENTS),
    rounded: propTypes.bool
};

exports.Box = Box;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.Buttons = Buttons;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardFooter = CardFooter;
exports.CardFooterItem = CardFooterItem;
exports.CardHeader = CardHeader;
exports.CardHeaderIcon = CardHeaderIcon;
exports.CardHeaderTitle = CardHeaderTitle;
exports.CardImage = CardImage;
exports.CheckBox = CheckBox;
exports.CheckRadio = CheckRadio;
exports.Column = Column;
exports.Columns = Columns;
exports.Container = Container;
exports.Content = Content;
exports.Control = Control;
exports.Delete = Delete;
exports.DescriptionList = DescriptionList;
exports.DisabledFieldset = DisabledFieldset;
exports.Dropdown = Dropdown;
exports.DropdownContent = DropdownContent;
exports.DropdownDivider = DropdownDivider;
exports.DropdownItem = DropdownItem;
exports.DropdownMenu = DropdownMenu;
exports.DropdownTrigger = DropdownTrigger;
exports.Field = Field;
exports.FieldBody = FieldBody;
exports.FieldLabel = FieldLabel;
exports.Footer = Footer;
exports.HeadingElement = HeadingElement;
exports.Help = Help;
exports.HeroBody = HeroBody;
exports.HeroFoot = HeroFoot;
exports.HeroHead = HeroHead;
exports.IconWrapper = IconWrapper;
exports.Image = Image;
exports.Input = Input;
exports.Level = Level;
exports.LevelItem = LevelItem;
exports.LevelLeft = LevelLeft;
exports.LevelRight = LevelRight;
exports.List = List;
exports.ListItem = ListItem;
exports.Media = Media;
exports.MediaContent = MediaContent;
exports.MediaLeft = MediaLeft;
exports.MediaRight = MediaRight;
exports.Menu = Menu;
exports.MenuLabel = MenuLabel;
exports.MenuList = MenuList;
exports.Message = Message;
exports.MessageBody = MessageBody;
exports.MessageHeader = MessageHeader;
exports.Modal = Modal;
exports.ModalBackground = ModalBackground;
exports.ModalCard = ModalCard;
exports.ModalCardBody = ModalCardBody;
exports.ModalCardFoot = ModalCardFoot;
exports.ModalCardHead = ModalCardHead;
exports.ModalCardTitle = ModalCardTitle;
exports.ModalClose = ModalClose;
exports.ModalContent = ModalContent;
exports.Navbar = Navbar;
exports.NavbarBrand = NavbarBrand;
exports.NavbarBurger = NavbarBurger;
exports.NavbarDivider = NavbarDivider;
exports.NavbarDropdown = NavbarDropdown;
exports.NavbarEnd = NavbarEnd;
exports.NavbarItem = NavbarItem;
exports.NavbarLink = NavbarLink;
exports.NavbarMenu = NavbarMenu;
exports.NavbarStart = NavbarStart;
exports.Notification = Notification;
exports.OrderedList = OrderedList;
exports.Pagination = Pagination;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationLink = PaginationLink;
exports.PaginationList = PaginationList;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Panel = Panel;
exports.PanelBlock = PanelBlock;
exports.PanelHeading = PanelHeading;
exports.PanelIcon = PanelIcon;
exports.PanelTabs = PanelTabs;
exports.PanelTabsItem = PanelTabsItem;
exports.ProgressBar = ProgressBar;
exports.Radio = Radio;
exports.Section = Section;
exports.SelectWrapper = SelectWrapper;
exports.SimpleCheckbox = SimpleCheckbox;
exports.SimpleRadio = SimpleRadio;
exports.Subtitle = Subtitle;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableCellHeader = TableCellHeader;
exports.TableContainer = TableContainer;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsItem = TabsItem;
exports.Tag = Tag;
exports.Tags = Tags;
exports.Textarea = Textarea;
exports.Tile = Tile;
exports.Title = Title;
exports.Tooltip = Tooltip;
exports.UnorderedList = UnorderedList;
//# sourceMappingURL=index.js.map
