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
                type: 'buy one get one free!',
                free: 1
            };
        }
        if (item.productCode === STRAWBERRIES && item.quantity > 3) {
            item.price = 450; //encoding multiplied 100
            item.promotion = {
                type: 'bulk purchase, discount price',
                newPrice: 450
            };
        }
        return item;
    });
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjlmNDc3YTE2OTkzMTI5MWFkMjUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3RzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9iYXNrZXRSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYXBwbHlSdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLENBQUM7UUFDVixHQUFHLEVBQUUsQ0FBQztLQUNUO0NBRUosQ0FBQztBQUNXLGNBQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQ2I3RDs7Ozs7R0FLRztBQUNILElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFZCxrQkFBVSxHQUFHLFVBQUMsTUFBVztJQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVM7UUFDeEIsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLEVBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsc0JBQXNCO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUM7UUFDRCxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBQztZQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLHlCQUF5QjtZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNiLElBQUksRUFBRSwrQkFBK0I7Z0JBQ3JDLFFBQVEsRUFBRSxHQUFHO2FBQ2hCO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjlmNDc3YTE2OTkzMTI5MWFkMjUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0FQUF9FTlZ9IGZyb20gJy4vZW52JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSByZXF1aXJlKGAuL2NvbmZpZy8ke0FQUF9FTlZ9Lmpzb25gKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHByb2R1Y3RDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgICBcbn0pXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb2RlbC9wcm9kdWN0LnRzIiwiaW1wb3J0IFNlcnZlciBmcm9tICcuL3NlcnZlcic7XG5pbXBvcnQgTW9uZ28gZnJvbSAnLi9zdG9yYWdlL21vbmdvJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtWZXJpZnlVc2VyfSBmcm9tICcuL3ZlcmlmeS11c2VyJztcblxubGV0IHNlcnZlciA9IFNlcnZlci5nZXRJbnN0YW5jZSgpO1xuTW9uZ28uY29ubmVjdCgpO1xuTW9uZ28ucG9wdWxhdGVEQigpO1xuXG5zZXJ2ZXIudXNlKCcvYXBpL3Byb2R1Y3RzJywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMnKSk7XG5zZXJ2ZXIudXNlKCcvYXBpL2Jhc2tldCcsIFZlcmlmeVVzZXIsIHJlcXVpcmUoJy4vcm91dGVzL2Jhc2tldFJvdXRlcycpKTtcblxuXG4vL2dlbmVyaWMgZXJyb3IgaGFuZGxlclxuc2VydmVyLnVzZSgoZXJyOiBFcnJvciwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICBlcnJvcjogNTAwXG4gICAgfSlcbn0pIFxuXG5zZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JULCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApO1xufSlcblxuXG4vL3NlcnZlci5saXN0ZW4oKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtjb3JzTWlkZGxld2FyZX0gZnJvbSAnLi9jb3JzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlciB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBleHByZXNzLkV4cHJlc3M7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIHByaXZhdGUgc3RhdGljIGluaXQoKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlID0gZXhwcmVzcygpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGNvcnNNaWRkbGV3YXJlKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtb3JnYW4oJ2RldicpKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2Ygc2VydmVyXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZighU2VydmVyLmluc3RhbmNlKXtcbiAgICAgICAgICAgIFNlcnZlci5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNlcnZlci5pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIHVzZShtaWRkbGV3YXJlOiBleHByZXNzLlJlcXVlc3RIYW5kbGVyIHwgZXhwcmVzcy5FcnJvclJlcXVlc3RIYW5kbGVyKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtaWRkbGV3YXJlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5leHBvcnQgY29uc3QgY29yc01pZGRsZXdhcmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCByZXEuaGVhZGVyKCdvcmlnaW4nKSB8fCByZXEuaGVhZGVyKCd4LWZvcndhcmRlZC1ob3N0JykgfHwgJyonKTtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCwgT1BUSU9OUywgUFVULCBQQVRDSCwgREVMRVRFJyk7XG4gICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBSZWZlcmVyJyk7XG4gICAgXG4gICAgbmV4dCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JzLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge3BvcHVsYXRlREJ9IGZyb20gJy4vcG9wdWxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nbyB7XG5cbiAgICBzdGF0aWMgZGI6IG1vbmdvb3NlLkNvbm5lY3Rpb247XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlIG1vbmdvIGRiIHdpdGggc29tZSBtb2NrIGRhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgcG9wdWxhdGVEQigpe1xuICAgICAgICAvL3BvcHVsYXRlREIoTW9uZ28uZGIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIG1vbmdvb3NlLkNvbm5lY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgY29ubmVjdCgpIDptb25nb29zZS5Db25uZWN0aW9uIHtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChjb25maWcubW9uZ28udXJpLCB7IHVzZU1vbmdvQ2xpZW50OiB0cnVlIH0pO1xuICAgICAgICBNb25nby5kYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgICAgIE1vbmdvLmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcicpKTtcbiAgICAgICAgTW9uZ28uZGIub25jZSgnb3BlbicsIGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3RlZCBjb3JyZWN0bHkgdG8gbW9uZ28gZGInKSk7XG4gICAgICAgIHJldHVybiBNb25nby5kYjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJleHBvcnQgY29uc3QgQVBQX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudi50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc29uXCI6IDEyLFxuXHRcIi4vcHJvZHVjdGlvbi5qc29uXCI6IDEzLFxuXHRcIi4vcHJvZHVjdHMuanNvblwiOiAxNFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDExO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6OTAwMn0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjgwODB9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb25cbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcInByb2R1Y3RDb2RlXCI6XCJGUjFcIixcIm5hbWVcIjpcIkZydWl0IHRlYVwiLFwicHJpY2VcIjozMTF9LHtcInByb2R1Y3RDb2RlXCI6XCJTUjFcIixcIm5hbWVcIjpcIlN0cmF3YmVycmllc1wiLFwicHJpY2VcIjo1MDB9LHtcInByb2R1Y3RDb2RlXCI6XCJDRjFcIixcIm5hbWVcIjpcIkNvZmZlZVwiLFwicHJpY2VcIjoxMTIzfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvcHJvZHVjdHMuanNvblxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuLyoqXG4gKiBNaWRkbGV3YXJlIHRvIGF1dGhlbnRpY2F0ZSBhIHVzZXJcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXMgXG4gKiBAcGFyYW0gbmV4dCBcbiAqL1xuXG5leHBvcnQgY29uc3QgVmVyaWZ5VXNlciA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuXG4gICAgLy9oZXJlIHRoZXJlIHNob3VsZCBiZSBhbiBhdXRoZW50aWNhdGlvbiBtZWNoYW5pc20gdG8gYXV0aGVudGljYXRlIGVhY2ggcmVxdWVzdCBiZWZvcmUgdHJpZ2dlciB0aGUgbmV4dFxuICAgIC8vbWlkZGxld2FyZSwgZm9yIHRoaXMgc2FtcGxlIHByb2plY3QgaSBqdXN0IGNhbGwgdGhlIG5leHQgbWlkZGxld2FyZSBpbiB0aGUgY2hhaW4gd2l0aG91dCBkb2luZyBhbnlcbiAgICAvL2F1dGhlbnRpY2F0aW9uXG5cbiAgICByZXR1cm4gbmV4dCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZXJpZnktdXNlci50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4uL3N0b3JhZ2UvbW9kZWwvcHJvZHVjdCc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgUHJvZHVjdC5maW5kKHt9LCAoZXJyOiBtb25nb29zZS5FcnJvciwgaWRlYXM6IGFueSkgPT4ge1xuICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihpZGVhcyk7XG4gICAgfSlcbn0pXG5cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9wcm9kdWN0c1JvdXRlcy50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4uL3N0b3JhZ2UvbW9kZWwvcHJvZHVjdCc7XG5pbXBvcnQge0Jhc2tldH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9iYXNrZXQnO1xuaW1wb3J0IHthcHBseVJ1bGVzfSBmcm9tICcuL2FwcGx5UnVsZXMnO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLyoqXG4gKiBhZGQgYW4gZWxlbWVudCB0byB0aGUgYmFza2V0XG4gKi9cbnJvdXRlci5wb3N0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgaWYoIXJlcS5ib2R5LnByb2R1Y3RDb2RlKXtcbiAgICAgICAgcmV0dXJuIG5leHQobmV3IEVycm9yKCdubyBpdGVtIHByb3ZpZGVkJykpO1xuICAgIH1cbiAgICBsZXQgaXRlbSA9IHJlcS5ib2R5O1xuXG4gICAgLy9IRVJFIGkgdXNlIG1vbmdvb3NlIHdpdGggcGxhaW4gY2FsbGJhY2tzXG4gICAgUHJvZHVjdC5maW5kT25lKHtwcm9kdWN0Q29kZTogaXRlbS5wcm9kdWN0Q29kZX0sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBwcm9kX2l0ZW06IGFueSkgPT4ge1xuXG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFwcm9kX2l0ZW0pe1xuICAgICAgICAgICAgcmV0dXJuIG5leHQobmV3IEVycm9yKCdpdGVtIG5vdCBmb3VuZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgcHJvZHVjdENvZGU6IHByb2RfaXRlbS5wcm9kdWN0Q29kZSwgXG4gICAgICAgICAgICBuYW1lOiBwcm9kX2l0ZW0ubmFtZSwgXG4gICAgICAgICAgICBwcmljZTogcHJvZF9pdGVtLnByaWNlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgfHwgMVxuICAgICAgICB9OyBcblxuICAgICAgICBCYXNrZXQuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgICAgICAgIHtwcm9kdWN0Q29kZTogaXRlbS5wcm9kdWN0Q29kZX0sIFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIHsgdXBzZXJ0OiB0cnVlLCBuZXc6IHRydWUsIHNldERlZmF1bHRzT25JbnNlcnQ6IHRydWUsIHJ1blZhbGlkYXRvcnM6IHRydWUgfSxcbiAgICAgICAgICAgIChlcnI6IG1vbmdvb3NlLkVycm9yLCBfaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmV0Y2hBbGxCYXNrZXQoKVxuICAgICAgICAgICAgICAgIC50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXBwbHlSdWxlcyhpdGVtcykpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfSlcblxufSlcblxuLyoqXG4gKiBnZXQgdGhlIHdob2xlIGJhc2tldFxuICovXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgZmV0Y2hBbGxCYXNrZXQoKVxuICAgIC50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXBwbHlSdWxlcyhpdGVtcykpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIG5leHQoZXJyKTtcbiAgICB9KVxufSlcblxuXG4vKipcbiAqICBkZWxldGUgYSBzaW5nbGUgYmFza2V0IGl0ZW0gb3IgdGhlIHdob2xlIGJhc2tldFxuICovXG5yb3V0ZXIuZGVsZXRlKCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgaWYoIXJlcS5ib2R5LnByb2R1Y3RDb2RlKXtcbiAgICAgICAgcmV0dXJuIG5leHQobmV3IEVycm9yKCdubyBpdGVtIHByb3ZpZGVkJykpO1xuICAgIH1cblxuICAgIC8vY291bGQgYmUgYSBzaW5nbGUgcHJvZHVjdCBvciB0aGUgd2hvbGUgY2FydFxuICAgIGxldCB0b1JlbW92ZSA9IHJlcS5ib2R5LnByb2R1Y3RDb2RlID8ge3Byb2R1Y3RDb2RlOiByZXEuYm9keS5wcm9kdWN0Q29kZX06IHt9XG4gICAgXG4gICAgLy9tb25nb29zZSB3aXRoIHByb21pc2VzXG4gICAgQmFza2V0LnJlbW92ZSh0b1JlbW92ZSlcbiAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoQWxsQmFza2V0KCk7XG4gICAgfSlcbiAgICAudGhlbihpdGVtcyA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFwcGx5UnVsZXMoaXRlbXMpKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICBuZXh0KGVycik7XG4gICAgfSlcbn0pXG5cblxuY29uc3QgZmV0Y2hBbGxCYXNrZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XG4gICAgICAgIC8vbW9uZ29vc2UgYW5kIFByb21pc2VzXG4gICAgICAgIGxldCBiYXNrZXRJdGVtczogYW55O1xuICAgICAgICBCYXNrZXQuZmluZCh7fSlcbiAgICAgICAgLnRoZW4oKF9iYXNrZXRJdGVtczogYW55KSA9PiB7XG4gICAgICAgICAgICBiYXNrZXRJdGVtcyA9IF9iYXNrZXRJdGVtcztcbiAgICAgICAgICAgIGxldCBwcm9kdWN0Q29kZXMgPSBiYXNrZXRJdGVtcy5tYXAoKGJhc2tldF9pdGVtOmFueSkgPT4gYmFza2V0X2l0ZW0ucHJvZHVjdENvZGUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb2R1Y3QuZmluZCh7IHByb2R1Y3RDb2RlOiB7XG4gICAgICAgICAgICAgICAgJGluOiBwcm9kdWN0Q29kZXNcbiAgICAgICAgICAgIH19KVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoaXRlbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW1zQW5kUXVhbnRpdHkgPSBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBiSXRlbSA9IGJhc2tldEl0ZW1zLmZpbmQoKGJJdGVtOmFueSkgPT4gYkl0ZW0ucHJvZHVjdENvZGUgPT09IGl0ZW0ucHJvZHVjdENvZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbS50b09iamVjdCgpLCBxdWFudGl0eTogYkl0ZW0ucXVhbnRpdHkgfHwgMX07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzb2x2ZShpdGVtc0FuZFF1YW50aXR5KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgICAgICBcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2Jhc2tldFJvdXRlcy50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGJhc2tldFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHByb2R1Y3RDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHF1YW50aXR5OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgbWluOiAxXG4gICAgfVxuICAgIFxufSlcbmV4cG9ydCBjb25zdCBCYXNrZXQgPSBtb25nb29zZS5tb2RlbCgnQmFza2V0JywgYmFza2V0U2NoZW1hKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vZGVsL2Jhc2tldC50cyIsIi8qKlxuICogIHRoaXMgZnVuY3Rpb24gYXBwbHkgdGhlIHJ1bGVzIGFzIGEgXCJwb3N0IHByb2Nlc3NpbmdcIiBhZnRlciB0aGUgYmFza2V0IGlzIGZldGNoZWRcbiAqICBmcm9tIHRoZSBkYXRhYmFzZVxuICogXG4gKiBAcGFyYW0gYmFza2V0XG4gKi9cbmNvbnN0IEZSVUlUX1RFQSA9ICdGUjEnO1xuY29uc3QgU1RSQVdCRVJSSUVTID0gJ1NSMSc7XG5cbmV4cG9ydCBjb25zdCBhcHBseVJ1bGVzID0gKGJhc2tldDogYW55KSA9PiB7XG4gICAgcmV0dXJuIGJhc2tldC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBpZihpdGVtLnByb2R1Y3RDb2RlID09PSBGUlVJVF9URUEpe1xuICAgICAgICAgICAgaXRlbS5xdWFudGl0eSsrOyAvL2J1eSBvbmUgLSBnZXQgMSBmcmVlXG4gICAgICAgICAgICBpdGVtLnByb21vdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnV5IG9uZSBnZXQgb25lIGZyZWUhJyxcbiAgICAgICAgICAgICAgICBmcmVlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXRlbS5wcm9kdWN0Q29kZSA9PT0gU1RSQVdCRVJSSUVTICYmIGl0ZW0ucXVhbnRpdHkgPiAzKXtcbiAgICAgICAgICAgIGl0ZW0ucHJpY2UgPSA0NTA7IC8vZW5jb2RpbmcgbXVsdGlwbGllZCAxMDBcbiAgICAgICAgICAgIGl0ZW0ucHJvbW90aW9uID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdidWxrIHB1cmNoYXNlLCBkaXNjb3VudCBwcmljZScsXG4gICAgICAgICAgICAgICAgbmV3UHJpY2U6IDQ1MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2FwcGx5UnVsZXMudHMiXSwic291cmNlUm9vdCI6IiJ9