import React, { createElement } from 'react';
import classNames from 'classnames';

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
var SIZE_NUMBERS = ['1', '2', '3', '4', '5', '6'];
var ELEMENT_STATES = ['hovered', 'focused', 'normal', 'active'];
var BUTTON_ELEMENTS = ['a', 'input', 'link', 'button', 'div', 'span'];
var BUTTON_TYPES = ['button', 'submit', 'reset'];
var HTML_CONVERSIONS = { link: 'a' };
var IMAGE_DIMENSIONS = ['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128', 'square', '1by1', '5by4', '4by3', '3by2', '5by3', '16by9', '2by1', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3'];

var dashCase = function (string) { return string.replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); }); };

var isNil = function (value) { return value === null || value === undefined; };
var isNotNil = function (value) { return !isNil(value); };
var isColor = function (value) { return COLORS.includes(value); };
var isElementState = function (value) { return ELEMENT_STATES.includes(value); };
var isSize = function (value) { return SIZES.includes(value); };
var isSizeNumber = function (value) { return SIZE_NUMBERS.includes(value); };
var isEnabled = function (props, key) { return props.hasOwnProperty(key) && props[key] !== false && props[key] !== 'false'; };
var isDefined = function (obj, prop) { return obj.hasOwnProperty(prop); };
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
var htmlElementFor = function (tag, defaultIfNil) { return HTML_CONVERSIONS[tag] || tag || defaultIfNil || 'div'; };
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

var Button = function (_a) {
    var originalProps = __rest(_a, []);
    var color = originalProps.color, className = originalProps.className, size = originalProps.size, state = originalProps.state, _b = originalProps.as, as = _b === void 0 ? 'button' : _b, _c = originalProps.type, type = _c === void 0 ? 'button' : _c, value = originalProps.value, props = __rest(originalProps, ["color", "light", "className", "outlined", "size", "inverted", "fullwidth", "rounded", "loading", "text", "static", "state", "as", "type", "value"]);
    var classes = classNames(className, 'button', colorClassFor(color), sizeClassFor(size), elementStateClassFor(state), checkEnabledProperties(originalProps, ['light', 'outlined', 'inverted', 'rounded', 'fullwidth', 'link', 'loading', 'active', 'text', 'static']));
    var Element = htmlElementFor(as, 'button');
    var finalProps = ['input', 'button'].includes(as) ? __assign(__assign({}, props), { type: type, value: value }) : props;
    return createElement(Element, __assign({ className: classes }, finalProps));
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
    var classes = classNames(className, 'box');
    return createElement("div", __assign({ className: classes }, props));
};
Box.displayName = 'Box';
Box.propTypes = {
    className: propTypes.string
};

var TableCell = function (_a) {
    var className = _a.className, color = _a.color, props = __rest(_a, ["className", "color"]);
    var classes = classNames(className, colorClassFor(color));
    return React.createElement("td", __assign({ className: classes }, props));
};
TableCell.displayName = 'TableCell';
TableCell.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS),
};

var TableCellHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement("th", __assign({ className: classNames(className) }, props));
};
TableCellHeader.displayName = 'TableCellHeader';
TableCellHeader.propTypes = {
    className: propTypes.string
};

var TableRow = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, props = __rest(originalProps, ["className"]);
    var classes = classNames(className, { 'is-selected': isEnabled(originalProps, 'selected') });
    return React.createElement("tr", __assign({ className: classes }, props));
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
    return React.createElement("thead", __assign({ className: classNames(className) }, props));
};
TableHead.displayName = 'TableHead';
TableHead.propTypes = {
    className: propTypes.string
};

var TableFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement("tfoot", __assign({ className: classNames(className) }, props));
};
TableFooter.displayName = 'TableFooter';
TableFooter.propTypes = {
    className: propTypes.string
};

var TableBody = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement("tbody", __assign({ className: classNames(className) }, props));
};
TableBody.displayName = 'TableBody';
TableBody.propTypes = {
    className: propTypes.string
};

var TableContainer = function (_a) {
    var className = _a.className, as = _a.as, props = __rest(_a, ["className", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames(className, 'table-container');
    return React.createElement(Element, __assign({ className: classes }, props));
};
TableContainer.displayName = 'TableContainer';
TableContainer.propTypes = {
    className: propTypes.string
};

var Table = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, props = __rest(originalProps, ["className", "hoverable", "bordered", "striped", "narrow", "fullwidth"]);
    var classes = classNames(className, 'table', checkEnabledProperties(originalProps, ['hoverable', 'bordered', 'striped', 'narrow', 'fullwidth']));
    return React.createElement("table", __assign({ className: classes }, props));
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

var _a;
var INDETERMINATED_PROP_NAME = 'indeterminated';
var ProgressBar = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, color = originalProps.color, size = originalProps.size, value = originalProps.value, props = __rest(originalProps, ["className", "color", "size", "value"]);
    var classes = classNames(className, 'progress', sizeClassFor(size), colorClassFor(color), checkEnabledProperties(originalProps, [INDETERMINATED_PROP_NAME]));
    var finalProps = isEnabled(originalProps, INDETERMINATED_PROP_NAME) ? (__assign({}, props)) : (__assign(__assign({}, props), { value: value }));
    return React.createElement("progress", __assign({ className: classes }, finalProps));
};
ProgressBar.displayName = 'ProgressBar';
ProgressBar.propTypes = (_a = {
        className: propTypes.string,
        color: propTypes.oneOf(COLORS),
        size: propTypes.oneOf(SIZES)
    },
    _a[INDETERMINATED_PROP_NAME] = propTypes.bool,
    _a.value = propTypes.oneOfType([propTypes.number, propTypes.string]),
    _a.max = propTypes.oneOfType([propTypes.number, propTypes.string]),
    _a);

var Notification = function (_a) {
    var originalProps = __rest(_a, []);
    var className = originalProps.className, as = originalProps.as, color = originalProps.color, props = __rest(originalProps, ["className", "as", "color"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames(className, 'notification', colorClassFor(color), checkEnabledProperties(originalProps, ['light']));
    return React.createElement(Element, __assign({ className: classes }, props));
};
Notification.displayName = 'Notification';
Notification.propTypes = {
    className: propTypes.string,
    color: propTypes.oneOf(COLORS),
    light: propTypes.bool
};

var Content = function (_a) {
    var className = _a.className, size = _a.size, as = _a.as, props = __rest(_a, ["className", "size", "as"]);
    var Element = htmlElementFor(as, 'div');
    var classes = classNames(className, 'content', sizeClassFor(size));
    return createElement(Element, __assign({ className: classes }, props));
};
Content.displayName = 'Content';
Content.propTypes = {
    className: propTypes.string
};

var Delete = function (_a) {
    var className = _a.className, as = _a.as, size = _a.size, props = __rest(_a, ["className", "as", "size"]);
    var Element = htmlElementFor(as, 'a');
    var classes = classNames(className, 'delete', sizeClassFor(size));
    return createElement(Element, __assign({ className: classes }, props));
};
Delete.displayName = 'Delete';
Delete.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES)
};

var IconWrapper = function (_a) {
    var className = _a.className, as = _a.as, size = _a.size, hasText = _a.hasText, props = __rest(_a, ["className", "as", "size", "hasText"]);
    var Element = htmlElementFor(as, 'span');
    var classes = classNames(className, 'icon', sizeClassFor(size), textClassFor(hasText));
    return createElement(Element, __assign({ className: classes }, props));
};
IconWrapper.displayName = 'IconWrapper';
IconWrapper.propTypes = {
    className: propTypes.string,
    size: propTypes.oneOf(SIZES),
    hasText: propTypes.oneOf(COLORS)
};

var Image = function (_a) {
    var _b;
    var originalProps = __rest(_a, []);
    var className = originalProps.className, is = originalProps.is, wrapper = originalProps.wrapper, children = originalProps.children, src = originalProps.src, alt = originalProps.alt, imageClass = originalProps.imageClass, props = __rest(originalProps, ["className", "is", "wrapper", "children", "src", "alt", "imageClass", "rounded"]);
    var imgAlt = alt || '';
    var Wrapper = htmlElementFor(wrapper, 'figure');
    var classes = classNames(className, 'image', (_b = {}, _b["is-" + is] = !!is, _b));
    var childClasses = classNames(imageClass, { 'is-rounded': isEnabled(originalProps, 'rounded') });
    return React.createElement(Wrapper, __assign({ className: classes }, props), !!src
        ? React.createElement("img", { src: src, alt: imgAlt, className: childClasses })
        : children);
};
Image.displayName = 'Image';
Image.propTypes = {
    className: propTypes.string,
    is: propTypes.oneOf(IMAGE_DIMENSIONS),
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
    var classes = classNames(className, 'tag', sizeClassFor(size), colorClassFor(color), checkEnabledProperties(originalProps, ['delete', 'rounded', 'light']), { 'is-delete': isEnabled(originalProps, 'isDelete') });
    return React.createElement(Element, __assign({ className: classes }, props));
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
    var classes = classNames(className, 'tags', addonsClassFor(originalProps), sizeClassFor(size, 'are'));
    return React.createElement(Element, __assign({ className: classes }, props));
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
    var classes = classNames(className, checkEnabledProperties(originalProps, ['spaced']), sizeNumberClassFor(sizeNumber));
    return React.createElement(Element, __assign({ className: classes }, props));
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
    var classes = classNames(className, 'title');
    return React.createElement(HeadingElement, __assign({ className: classes }, props));
};
Title.displayName = 'Title';
Title.propTypes = {
    className: propTypes.string
};

var Subtitle = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classes = classNames(className, 'subtitle');
    return React.createElement(HeadingElement, __assign({ className: classes }, props));
};
Subtitle.displayName = 'Subtitle';
Subtitle.propTypes = {
    className: propTypes.string
};

var ListItem = function (props) {
    return React.createElement("li", __assign({}, props));
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
    var classes = classNames(className, (_b = {}, _b["is-" + marker] = isNotNil(marker), _b));
    var Element = elementFor(originalProps);
    return React.createElement(Element, __assign({ className: classes }, props));
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

export { Box, Button, Content, Delete, HeadingElement, IconWrapper, Image, List, ListItem as ListItemProps, Notification, ProgressBar, Subtitle, Table, TableBody, TableCell, TableCellHeader, TableContainer, TableFooter, TableHead, TableRow, Tag, Tags, Title };
//# sourceMappingURL=index.es.js.map
