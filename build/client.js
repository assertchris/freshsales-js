"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client =
/*#__PURE__*/
function () {
  function Client(key, domain) {
    _classCallCheck(this, Client);

    _defineProperty(this, "key", undefined);

    _defineProperty(this, "base", undefined);

    if (!key || !domain) {
      try {
        require("dotenv").config();
      } catch (e) {// This can fail for a couple reasons:
        // 1. This is being called on the front-end
        // 2. There's no .env file to load
      }
    }

    if (!key) {
      key = process.env.FRESHSALES_KEY;
    }

    if (!domain) {
      domain = process.env.FRESHSALES_DOMAIN;
    }

    this.key = key;
    this.base = "https://".concat(domain, ".freshsales.io");
  }

  _createClass(Client, [{
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(method, endpoint) {
        var data,
            options,
            response,
            json,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                options = {
                  method: method,
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Token token=".concat(this.key)
                  }
                };

                if (data) {
                  options.body = JSON.stringify(data);
                }

                _context.next = 5;
                return (0, _isomorphicFetch.default)(endpoint, options);

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                json = _context.sent;

                if (!json.errors) {
                  _context.next = 11;
                  break;
                }

                throw json;

              case 11:
                return _context.abrupt("return", json);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x, _x2) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "createLead",
    value: function () {
      var _createLead = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request("POST", "".concat(this.base, "/api/leads"), data);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createLead(_x3) {
        return _createLead.apply(this, arguments);
      }

      return createLead;
    }()
  }, {
    key: "updateLead",
    value: function () {
      var _updateLead = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id, data) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request("PUT", "".concat(this.base, "/api/leads/").concat(id), data);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateLead(_x4, _x5) {
        return _updateLead.apply(this, arguments);
      }

      return updateLead;
    }()
  }, {
    key: "viewLead",
    value: function () {
      var _viewLead = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.request("GET", "".concat(this.base, "/api/leads/").concat(id));

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function viewLead(_x6) {
        return _viewLead.apply(this, arguments);
      }

      return viewLead;
    }()
  }, {
    key: "deleteLead",
    value: function () {
      var _deleteLead = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(id) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request("DELETE", "".concat(this.base, "/api/leads/").concat(id));

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteLead(_x7) {
        return _deleteLead.apply(this, arguments);
      }

      return deleteLead;
    }()
  }]);

  return Client;
}();

exports.Client = Client;