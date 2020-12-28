(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/pages.json ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!****************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/eat-good.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 18 */
/*!*********************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/eat-good-long.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 19 */
/*!************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/live.svg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/live.3289ecc6.svg";

/***/ }),
/* 20 */
/*!*****************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/mb-search.svg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/mb-search.2bfc397d.svg";

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/*!***************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/swiper1.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/swiper1.png";

/***/ }),
/* 35 */
/*!***************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/swiper2.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/swiper2.png";

/***/ }),
/* 36 */
/*!***************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/swiper3.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/assets/images/swiper3.png";

/***/ }),
/* 37 */
/*!**************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/block3.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 38 */
/*!**************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/block4.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 39 */
/*!**************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/block5.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 40 */
/*!**************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/block6.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 41 */
/*!**************************************************************************!*\
  !*** D:/code/project-summary/red-mall/red-mall/assets/images/block7.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADCCAMAAAAoyj0+AAADAFBMVEX////++vj//v/x7Of//vn//vT/+/P+//////v///7+//r8///17uP++PL/++3+/v747N7r5NX/8976///569b+8+v++Orz8+T48uz68eTx69bz7N7+7M768t/07+rs6dr/+uTj2cr+9Obv273z9Ozo2b395b/r3c/59/j7yp3/8tf38On//u/t7uP5+OX95Mb49/Lp3Mb+7t338fP/7dX5/vr/9OPu8ej//f35+ezy5dT06NrgzLT2683+6+Tx5M3n07X35Mr7+/Pzy5725cTo4s7/yZT95czl2tLv06/u6OPn0q3x2rP+7Mb34L3v4sTw2cfr4Nru1Lr97evz26rbwZ73ypX32bv6+P7+8tHp1Mfx89z98/Hi1cHzzqjjzrz93avw7fXy1KDhyZ/qz6P/+v793LfYzqrNllT8/vX36ej407P13sT+5bbdxqv449HhqUX24rTty5b++Nn48dhbNhjh3cPrx3H83cPXr2zm6t/d1LPazr7KspP91Z715ODv9PLb1MfmyqpKKxX00pX+6NPnrVby3tLov2fOnD7tyop3Ti395t309fv43Zywkm3d3M3etFbaoVPmvpG7j1761ao2HwzNjD3ut170xXydeE/iyI/NpXvTunr0//+qhF/ApoT7yomrh03AnHBuPSBJWhBScBWCXzhkRCSVaT06cg771I7ankL/7rlykj3ZvpDNsoTlwYKKb1ZYfCXfvHbTupj+7ffYsYrZv4PBmEiaf2S+nl92RxLh5dbMo0u6jzf3vGnOq13Uxbf75qimwGnlsmm8fjTanzBhijDNuqT+9Mj4x24rYwOGTRLo7uvo88jrw6BqZCHktn1akh1IHgPz0YGKWylygCyucDb7z6c5SQWBlDdFgxmDpk3Frm+jfT+YXh5toC5ZJgO1m36LlEimayXq2pJrNgUaUACerFDMnma0wYG9hUqJdTmoq2np4anT4aOGskO/0Yt3XEggDgXM0Zvs67tkSznc6rShjXy7x26TuV5QOiyZnVq2ppve1ICD6DtuAAAgAElEQVR42syY309TaR7GPVigLf0FtKWlnAIFWyJYSgukLZbaThFXt6iLToZQMwQsCxOZodqEsNlhkgkSMIYJZAywrpugl22jJu5GYoIa4hjhYhMT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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map