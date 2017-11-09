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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = __webpack_require__(10);
exports.config = __webpack_require__(11)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var productSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
exports.Product = mongoose.model('Product', productSchema);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(5);
var mongo_1 = __webpack_require__(9);
var config_1 = __webpack_require__(2);
var verify_user_1 = __webpack_require__(15);
var server = server_1.default.getInstance();
mongo_1.default.connect();
mongo_1.default.populateDB();
server.use('/api/products', verify_user_1.VerifyUser, __webpack_require__(16));
server.use('/api/basket', verify_user_1.VerifyUser, __webpack_require__(17));
//generic error handler
server.use(function (err, req, res, next) {
    res.json({
        message: err.message,
        error: 500
    });
});
server.listen(process.env.PORT || config_1.config.server.PORT, function (req, res) {
    console.log("server listening on port  " + (process.env.PORT || config_1.config.server.PORT));
});
//server.listen();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var morgan = __webpack_require__(6);
var bodyParser = __webpack_require__(7);
var cors_1 = __webpack_require__(8);
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.init = function () {
        Server.instance = express();
        Server.instance.use(cors_1.corsMiddleware);
        Server.instance.use(morgan('dev'));
        Server.instance.use(bodyParser.json());
        Server.instance.use(bodyParser.urlencoded({ extended: false }));
    };
    /**
     * @returns an instance of server
     */
    Server.getInstance = function () {
        if (!Server.instance) {
            Server.init();
        }
        return Server.instance;
    };
    Server.prototype.use = function (middleware) {
        Server.instance.use(middleware);
    };
    return Server;
}());
exports.default = Server;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.header('origin') || req.header('x-forwarded-host') || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Referer');
    next();
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var config_1 = __webpack_require__(2);
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    /**
     * populate mongo db with some mock data
     */
    Mongo.populateDB = function () {
        //populateDB(Mongo.db);
    };
    /**
     * @returns an instance of mongoose.Connection
     */
    Mongo.connect = function () {
        mongoose.connect(config_1.config.mongo.uri, { useMongoClient: true });
        Mongo.db = mongoose.connection;
        Mongo.db.on('error', console.error.bind(console, 'connection error'));
        Mongo.db.once('open', console.log.bind(console, 'connected correctly to mongo db'));
        return Mongo.db;
    };
    return Mongo;
}());
exports.default = Mongo;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.NODE_ENV || 'development';


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 12,
	"./production.json": 13,
	"./products.json": 14
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = [{"productCode":"FR1","name":"Fruit tea","price":311},{"productCode":"SR1","name":"Strawberries","price":500},{"productCode":"CF1","name":"Coffee","price":1123}]

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware to authenticate a user
 * @param req
 * @param res
 * @param next
 */
exports.VerifyUser = function (req, res, next) {
    //here there should be an authentication mechanism to authenticate each request before trigger the next
    //middleware, for this sample project i just call the next middleware in the chain without doing any
    //authentication
    return next();
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var product_1 = __webpack_require__(3);
var router = express.Router();
router.get('/', function (req, res, next) {
    product_1.Product.find({}, function (err, ideas) {
        if (err) {
            return next(err);
        }
        res.status(200).json(ideas);
    });
});
module.exports = router;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var product_1 = __webpack_require__(3);
var basket_1 = __webpack_require__(18);
var applyRules_1 = __webpack_require__(19);
var router = express.Router();
/**
 * add an element to the basket
 */
router.post('/', function (req, res, next) {
    if (!req.body.productCode) {
        return next(new Error('no item provided'));
    }
    var item = req.body;
    //HERE i use mongoose with plain callbacks
    product_1.Product.findOne({ productCode: item.productCode }, function (err, prod_item) {
        if (err) {
            return next(err);
        }
        if (!prod_item) {
            return next(new Error('item not found'));
        }
        item = {
            productCode: prod_item.productCode,
            name: prod_item.name,
            price: prod_item.price,
            quantity: item.quantity || 1
        };
        basket_1.Basket.findOneAndUpdate({ productCode: item.productCode }, item, { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }, function (err, _item) {
            if (err) {
                return next(err);
            }
            fetchAllBasket()
                .then(function (items) {
                res.status(200).json(applyRules_1.applyRules(items));
            })
                .catch(function (err) {
                next(err);
            });
        });
    });
});
/**
 * get the whole basket
 */
router.get('/', function (req, res, next) {
    fetchAllBasket()
        .then(function (items) {
        res.status(200).json(applyRules_1.applyRules(items));
    })
        .catch(function (err) {
        next(err);
    });
});
/**
 *  delete a single basket item or the whole basket
 */
router.delete('/', function (req, res, next) {
    if (!req.body.productCode) {
        return next(new Error('no item provided'));
    }
    //could be a single product or the whole cart
    var toRemove = req.body.productCode ? { productCode: req.body.productCode } : {};
    //mongoose with promises
    basket_1.Basket.remove(toRemove)
        .then(function (resp) {
        return fetchAllBasket();
    })
        .then(function (items) {
        res.status(200).json(applyRules_1.applyRules(items));
    })
        .catch(function (err) {
        next(err);
    });
});
var fetchAllBasket = function () {
    return new Promise(function (resolve, reject) {
        //mongoose and Promises
        var basketItems;
        basket_1.Basket.find({})
            .then(function (_basketItems) {
            basketItems = _basketItems;
            var productCodes = basketItems.map(function (basket_item) { return basket_item.productCode; });
            return product_1.Product.find({ productCode: {
                    $in: productCodes
                } });
        })
            .then(function (items) {
            var itemsAndQuantity = items.map(function (item) {
                var bItem = basketItems.find(function (bItem) { return bItem.productCode === item.productCode; });
                return __assign({}, item.toObject(), { quantity: bItem.quantity || 1 });
            });
            resolve(itemsAndQuantity);
        })
            .catch(function (err) {
            reject(err);
        });
    });
};
module.exports = router;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var basketSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    }
});
exports.Basket = mongoose.model('Basket', basketSchema);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  this function apply the rules as a "post processing" after the basket is fetched
 *  from the database
 *
 * @param basket
 */
var FRUIT_TEA = 'FR1';
var STRAWBERRIES = 'SR1';
exports.applyRules = function (basket) {
    return basket.map(function (item) {
        if (item.productCode === FRUIT_TEA) {
            item.quantity++; //buy one - get 1 free
            item.promotion = {
                type: 'buy one get one free!'
            };
        }
        if (item.productCode === STRAWBERRIES && item.quantity > 3) {
            item.price = 450; //encoding multiplied 100
            item.promotion = {
                type: 'bulk purchase, discount price'
            };
        }
        return item;
    });
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWI0MzY2NjkzMTc5NTY2MDljNzMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3RzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9iYXNrZXRSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYXBwbHlSdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLENBQUM7UUFDVixHQUFHLEVBQUUsQ0FBQztLQUNUO0NBRUosQ0FBQztBQUNXLGNBQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQ2I3RDs7Ozs7R0FLRztBQUNILElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFZCxrQkFBVSxHQUFHLFVBQUMsTUFBVztJQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVM7UUFDeEIsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLEVBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsc0JBQXNCO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLHVCQUF1QjthQUNoQztRQUNMLENBQUM7UUFDRCxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBQztZQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLHlCQUF5QjtZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNiLElBQUksRUFBRSwrQkFBK0I7YUFDeEM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDTixDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhYjQzNjY2OTMxNzk1NjYwOWM3MyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb25nb29zZVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7QVBQX0VOVn0gZnJvbSAnLi9lbnYnO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoYC4vY29uZmlnLyR7QVBQX0VOVn0uanNvbmApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWcudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgcHJvZHVjdENvZGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICAgIFxufSlcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vZGVsL3Byb2R1Y3QudHMiLCJpbXBvcnQgU2VydmVyIGZyb20gJy4vc2VydmVyJztcbmltcG9ydCBNb25nbyBmcm9tICcuL3N0b3JhZ2UvbW9uZ28nO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1ZlcmlmeVVzZXJ9IGZyb20gJy4vdmVyaWZ5LXVzZXInO1xuXG5sZXQgc2VydmVyID0gU2VydmVyLmdldEluc3RhbmNlKCk7XG5Nb25nby5jb25uZWN0KCk7XG5Nb25nby5wb3B1bGF0ZURCKCk7XG5cbnNlcnZlci51c2UoJy9hcGkvcHJvZHVjdHMnLCBWZXJpZnlVc2VyLCByZXF1aXJlKCcuL3JvdXRlcy9wcm9kdWN0c1JvdXRlcycpKTtcbnNlcnZlci51c2UoJy9hcGkvYmFza2V0JywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvYmFza2V0Um91dGVzJykpO1xuXG5cbi8vZ2VuZXJpYyBlcnJvciBoYW5kbGVyXG5zZXJ2ZXIudXNlKChlcnI6IEVycm9yLCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIHJlcy5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgIGVycm9yOiA1MDBcbiAgICB9KVxufSkgXG5cbnNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlQsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coIGBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgICR7cHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlR9YCk7XG59KVxuXG5cbi8vc2VydmVyLmxpc3RlbigpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2NvcnNNaWRkbGV3YXJlfSBmcm9tICcuL2NvcnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyIHtcbiAgICBzdGF0aWMgaW5zdGFuY2U6IGV4cHJlc3MuRXhwcmVzcztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5pdCgpe1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UgPSBleHByZXNzKCk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoY29yc01pZGRsZXdhcmUpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1vcmdhbignZGV2JykpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBzZXJ2ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmKCFTZXJ2ZXIuaW5zdGFuY2Upe1xuICAgICAgICAgICAgU2VydmVyLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2VydmVyLmluc3RhbmNlO1xuICAgIH1cbiAgICBwdWJsaWMgdXNlKG1pZGRsZXdhcmU6IGV4cHJlc3MuUmVxdWVzdEhhbmRsZXIgfCBleHByZXNzLkVycm9yUmVxdWVzdEhhbmRsZXIpe1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1pZGRsZXdhcmUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmV4cG9ydCBjb25zdCBjb3JzTWlkZGxld2FyZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIHJlcS5oZWFkZXIoJ29yaWdpbicpIHx8IHJlcS5oZWFkZXIoJ3gtZm9yd2FyZGVkLWhvc3QnKSB8fCAnKicpO1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NULCBPUFRJT05TLCBQVVQsIFBBVENILCBERUxFVEUnKTtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIFJlZmVyZXInKTtcbiAgICBcbiAgICBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcnMudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7cG9wdWxhdGVEQn0gZnJvbSAnLi9wb3B1bGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvIHtcblxuICAgIHN0YXRpYyBkYjogbW9uZ29vc2UuQ29ubmVjdGlvbjtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgLyoqXG4gICAgICogcG9wdWxhdGUgbW9uZ28gZGIgd2l0aCBzb21lIG1vY2sgZGF0YVxuICAgICAqL1xuICAgIHN0YXRpYyBwb3B1bGF0ZURCKCl7XG4gICAgICAgIC8vcG9wdWxhdGVEQihNb25nby5kYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgbW9uZ29vc2UuQ29ubmVjdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBjb25uZWN0KCkgOm1vbmdvb3NlLkNvbm5lY3Rpb24ge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5tb25nby51cmksIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XG4gICAgICAgIE1vbmdvLmRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgTW9uZ28uZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uZWN0aW9uIGVycm9yJykpO1xuICAgICAgICBNb25nby5kYi5vbmNlKCdvcGVuJywgY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnY29ubmVjdGVkIGNvcnJlY3RseSB0byBtb25nbyBkYicpKTtcbiAgICAgICAgcmV0dXJuIE1vbmdvLmRiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb25nby50cyIsImV4cG9ydCBjb25zdCBBUFBfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52LnRzIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldmVsb3BtZW50Lmpzb25cIjogMTIsXG5cdFwiLi9wcm9kdWN0aW9uLmpzb25cIjogMTMsXG5cdFwiLi9wcm9kdWN0cy5qc29uXCI6IDE0XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo5MDAyfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6ODA4MH0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wicHJvZHVjdENvZGVcIjpcIkZSMVwiLFwibmFtZVwiOlwiRnJ1aXQgdGVhXCIsXCJwcmljZVwiOjMxMX0se1wicHJvZHVjdENvZGVcIjpcIlNSMVwiLFwibmFtZVwiOlwiU3RyYXdiZXJyaWVzXCIsXCJwcmljZVwiOjUwMH0se1wicHJvZHVjdENvZGVcIjpcIkNGMVwiLFwibmFtZVwiOlwiQ29mZmVlXCIsXCJwcmljZVwiOjExMjN9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9wcm9kdWN0cy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgdG8gYXV0aGVudGljYXRlIGEgdXNlclxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlcyBcbiAqIEBwYXJhbSBuZXh0IFxuICovXG5cbmV4cG9ydCBjb25zdCBWZXJpZnlVc2VyID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG5cbiAgICAvL2hlcmUgdGhlcmUgc2hvdWxkIGJlIGFuIGF1dGhlbnRpY2F0aW9uIG1lY2hhbmlzbSB0byBhdXRoZW50aWNhdGUgZWFjaCByZXF1ZXN0IGJlZm9yZSB0cmlnZ2VyIHRoZSBuZXh0XG4gICAgLy9taWRkbGV3YXJlLCBmb3IgdGhpcyBzYW1wbGUgcHJvamVjdCBpIGp1c3QgY2FsbCB0aGUgbmV4dCBtaWRkbGV3YXJlIGluIHRoZSBjaGFpbiB3aXRob3V0IGRvaW5nIGFueVxuICAgIC8vYXV0aGVudGljYXRpb25cblxuICAgIHJldHVybiBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlcmlmeS11c2VyLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBQcm9kdWN0LmZpbmQoe30sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBpZGVhczogYW55KSA9PiB7XG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGlkZWFzKTtcbiAgICB9KVxufSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL3Byb2R1Y3RzUm91dGVzLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCB7QmFza2V0fSBmcm9tICcuLi9zdG9yYWdlL21vZGVsL2Jhc2tldCc7XG5pbXBvcnQge2FwcGx5UnVsZXN9IGZyb20gJy4vYXBwbHlSdWxlcyc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKipcbiAqIGFkZCBhbiBlbGVtZW50IHRvIHRoZSBiYXNrZXRcbiAqL1xucm91dGVyLnBvc3QoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBpZighcmVxLmJvZHkucHJvZHVjdENvZGUpe1xuICAgICAgICByZXR1cm4gbmV4dChuZXcgRXJyb3IoJ25vIGl0ZW0gcHJvdmlkZWQnKSk7XG4gICAgfVxuICAgIGxldCBpdGVtID0gcmVxLmJvZHk7XG5cbiAgICAvL0hFUkUgaSB1c2UgbW9uZ29vc2Ugd2l0aCBwbGFpbiBjYWxsYmFja3NcbiAgICBQcm9kdWN0LmZpbmRPbmUoe3Byb2R1Y3RDb2RlOiBpdGVtLnByb2R1Y3RDb2RlfSwgKGVycjogbW9uZ29vc2UuRXJyb3IsIHByb2RfaXRlbTogYW55KSA9PiB7XG5cbiAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXByb2RfaXRlbSl7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChuZXcgRXJyb3IoJ2l0ZW0gbm90IGZvdW5kJykpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZF9pdGVtLnByb2R1Y3RDb2RlLCBcbiAgICAgICAgICAgIG5hbWU6IHByb2RfaXRlbS5uYW1lLCBcbiAgICAgICAgICAgIHByaWNlOiBwcm9kX2l0ZW0ucHJpY2UsXG4gICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSB8fCAxXG4gICAgICAgIH07IFxuXG4gICAgICAgIEJhc2tldC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICAgICAge3Byb2R1Y3RDb2RlOiBpdGVtLnByb2R1Y3RDb2RlfSwgXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgeyB1cHNlcnQ6IHRydWUsIG5ldzogdHJ1ZSwgc2V0RGVmYXVsdHNPbkluc2VydDogdHJ1ZSwgcnVuVmFsaWRhdG9yczogdHJ1ZSB9LFxuICAgICAgICAgICAgKGVycjogbW9uZ29vc2UuRXJyb3IsIF9pdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmZXRjaEFsbEJhc2tldCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oaXRlbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhcHBseVJ1bGVzKGl0ZW1zKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9KVxuXG59KVxuXG4vKipcbiAqIGdldCB0aGUgd2hvbGUgYmFza2V0XG4gKi9cbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBmZXRjaEFsbEJhc2tldCgpXG4gICAgLnRoZW4oaXRlbXMgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhcHBseVJ1bGVzKGl0ZW1zKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgbmV4dChlcnIpO1xuICAgIH0pXG59KVxuXG5cbi8qKlxuICogIGRlbGV0ZSBhIHNpbmdsZSBiYXNrZXQgaXRlbSBvciB0aGUgd2hvbGUgYmFza2V0XG4gKi9cbnJvdXRlci5kZWxldGUoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBpZighcmVxLmJvZHkucHJvZHVjdENvZGUpe1xuICAgICAgICByZXR1cm4gbmV4dChuZXcgRXJyb3IoJ25vIGl0ZW0gcHJvdmlkZWQnKSk7XG4gICAgfVxuXG4gICAgLy9jb3VsZCBiZSBhIHNpbmdsZSBwcm9kdWN0IG9yIHRoZSB3aG9sZSBjYXJ0XG4gICAgbGV0IHRvUmVtb3ZlID0gcmVxLmJvZHkucHJvZHVjdENvZGUgPyB7cHJvZHVjdENvZGU6IHJlcS5ib2R5LnByb2R1Y3RDb2RlfToge31cbiAgICBcbiAgICAvL21vbmdvb3NlIHdpdGggcHJvbWlzZXNcbiAgICBCYXNrZXQucmVtb3ZlKHRvUmVtb3ZlKVxuICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hBbGxCYXNrZXQoKTtcbiAgICB9KVxuICAgIC50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXBwbHlSdWxlcyhpdGVtcykpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIG5leHQoZXJyKTtcbiAgICB9KVxufSlcblxuXG5jb25zdCBmZXRjaEFsbEJhc2tldCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcbiAgICAgICAgLy9tb25nb29zZSBhbmQgUHJvbWlzZXNcbiAgICAgICAgbGV0IGJhc2tldEl0ZW1zOiBhbnk7XG4gICAgICAgIEJhc2tldC5maW5kKHt9KVxuICAgICAgICAudGhlbigoX2Jhc2tldEl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGJhc2tldEl0ZW1zID0gX2Jhc2tldEl0ZW1zO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3RDb2RlcyA9IGJhc2tldEl0ZW1zLm1hcCgoYmFza2V0X2l0ZW06YW55KSA9PiBiYXNrZXRfaXRlbS5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvZHVjdC5maW5kKHsgcHJvZHVjdENvZGU6IHtcbiAgICAgICAgICAgICAgICAkaW46IHByb2R1Y3RDb2Rlc1xuICAgICAgICAgICAgfX0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChpdGVtczogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXNBbmRRdWFudGl0eSA9IGl0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJJdGVtID0gYmFza2V0SXRlbXMuZmluZCgoYkl0ZW06YW55KSA9PiBiSXRlbS5wcm9kdWN0Q29kZSA9PT0gaXRlbS5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLnRvT2JqZWN0KCksIHF1YW50aXR5OiBiSXRlbS5xdWFudGl0eSB8fCAxfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zQW5kUXVhbnRpdHkpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgICAgIFxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvYmFza2V0Um91dGVzLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgYmFza2V0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgcHJvZHVjdENvZGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcXVhbnRpdHk6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICBtaW46IDFcbiAgICB9XG4gICAgXG59KVxuZXhwb3J0IGNvbnN0IEJhc2tldCA9IG1vbmdvb3NlLm1vZGVsKCdCYXNrZXQnLCBiYXNrZXRTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIiwiLyoqXG4gKiAgdGhpcyBmdW5jdGlvbiBhcHBseSB0aGUgcnVsZXMgYXMgYSBcInBvc3QgcHJvY2Vzc2luZ1wiIGFmdGVyIHRoZSBiYXNrZXQgaXMgZmV0Y2hlZFxuICogIGZyb20gdGhlIGRhdGFiYXNlXG4gKiBcbiAqIEBwYXJhbSBiYXNrZXRcbiAqL1xuY29uc3QgRlJVSVRfVEVBID0gJ0ZSMSc7XG5jb25zdCBTVFJBV0JFUlJJRVMgPSAnU1IxJztcblxuZXhwb3J0IGNvbnN0IGFwcGx5UnVsZXMgPSAoYmFza2V0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gYmFza2V0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGlmKGl0ZW0ucHJvZHVjdENvZGUgPT09IEZSVUlUX1RFQSl7XG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5Kys7IC8vYnV5IG9uZSAtIGdldCAxIGZyZWVcbiAgICAgICAgICAgIGl0ZW0ucHJvbW90aW9uID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdidXkgb25lIGdldCBvbmUgZnJlZSEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXRlbS5wcm9kdWN0Q29kZSA9PT0gU1RSQVdCRVJSSUVTICYmIGl0ZW0ucXVhbnRpdHkgPiAzKXtcbiAgICAgICAgICAgIGl0ZW0ucHJpY2UgPSA0NTA7IC8vZW5jb2RpbmcgbXVsdGlwbGllZCAxMDBcbiAgICAgICAgICAgIGl0ZW0ucHJvbW90aW9uID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdidWxrIHB1cmNoYXNlLCBkaXNjb3VudCBwcmljZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9hcHBseVJ1bGVzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==