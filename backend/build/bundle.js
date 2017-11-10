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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
var mongoose = __webpack_require__(1);
var productSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    img: {
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = __webpack_require__(12);
exports.config = __webpack_require__(13)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [{"productCode":"FR1","img":"https://static.openfoodfacts.org/images/products/322/888/101/0971/front_fr.6.full.jpg","name":"Fruit tea","price":311},{"productCode":"SR1","img":"https://dtgxwmigmg3gc.cloudfront.net/files/56fc78f252ba0b45e70396e9-icon-256x256.png","name":"Strawberries","price":500},{"productCode":"CF1","img":"http://www.odditysoftware.com/_images/db_icons/starbucks_locations.png","name":"Coffee","price":1123}]

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = [{"productCode":"FR1","description":"buy one get one free","rule":{"quantity":1,"free":1}},{"productCode":"SR1","description":"bulk purchase, discount price","rule":{"quantity":3,"newPrice":450}}]

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(7);
var mongo_1 = __webpack_require__(11);
var config_1 = __webpack_require__(3);
var verify_user_1 = __webpack_require__(17);
var server = server_1.default.getInstance();
mongo_1.default.connect();
mongo_1.default.populateDB();
server.use('/api/products', verify_user_1.VerifyUser, __webpack_require__(18));
server.use('/api/basket', verify_user_1.VerifyUser, __webpack_require__(19));
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var morgan = __webpack_require__(8);
var bodyParser = __webpack_require__(9);
var cors_1 = __webpack_require__(10);
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var config_1 = __webpack_require__(3);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.NODE_ENV || 'development';


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 14,
	"./production.json": 15,
	"./products.json": 4,
	"./promotions.json": 5
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
webpackContext.id = 13;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 16 */,
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var product_1 = __webpack_require__(2);
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
/* 19 */
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
var product_1 = __webpack_require__(2);
var basket_1 = __webpack_require__(20);
var applyPromotions_1 = __webpack_require__(21);
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
                res.status(200).json(applyPromotions_1.applyPromotions(items));
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
        res.status(200).json(applyPromotions_1.applyPromotions(items));
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
        res.status(200).json(applyPromotions_1.applyPromotions(items));
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
            var itemsFull = items.map(function (item) {
                var bItem = basketItems.find(function (bItem) { return bItem.productCode === item.productCode; });
                return __assign({}, item.toObject(), { quantity: bItem.quantity || 1 });
            });
            resolve(itemsFull);
        })
            .catch(function (err) {
            reject(err);
        });
    });
};
/**
 * return the total
 */
router.get('/total', function (req, res, next) {
    fetchAllBasket()
        .then(function (basket) {
        basket = applyPromotions_1.applyPromotions(basket);
        res.status(200).json({ total: applyPromotions_1.calculateTotal(basket) });
    })
        .catch(function (err) {
        next(err);
    });
});
module.exports = router;


/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var promotions = __webpack_require__(5);
/**
 *  this function check if any promotion is applicable to the basket
 *
 * @param basket
 */
exports.applyPromotions = function (basket) {
    return basket.map(function (item) {
        var promo = promotions.find(function (promotion) { return promotion.productCode === item.productCode; });
        //if promotion can be applied
        if (promo && item.quantity >= promo.rule.quantity) {
            item.promotion = promo;
        }
        return item;
    });
};
/**
 * calculate the basket total applying the prices according to the promotions
 * @param basket
 */
exports.calculateTotal = function (basket) {
    return basket.reduce(function (sum, item) {
        //price could be promotional
        var priceToApply = item.promotion && item.promotion.rule
            && item.promotion.rule.newPrice
            ? item.promotion.rule.newPrice
            : item.price;
        return +(sum + (priceToApply / 100) * item.quantity).toFixed(2);
    }, 0);
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGU0NjQxMjViYTgyOTZkODllZDMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvcHJvZHVjdHMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb21vdGlvbnMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9iYXNrZXRSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYXBwbHlQcm9tb3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7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QTFDLENBQTBDLENBQUMsQ0FBQztRQUVwRSw2QkFBNkI7UUFDN0IsRUFBRSxFQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7R0FHRztBQUNVLHNCQUFjLEdBQUcsVUFBQyxNQUFXO0lBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNoQixVQUFDLEdBQU8sRUFBRSxJQUFRO1FBQ2QsNEJBQTRCO1FBQzVCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO2VBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLEVBQUUsQ0FBQyxDQUNOLENBQUM7QUFDUCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZTQ2NDEyNWJhODI5NmQ4OWVkMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb25nb29zZVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBwcm9kdWN0Q29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICAgIFxufSlcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vZGVsL3Byb2R1Y3QudHMiLCJpbXBvcnQge0FQUF9FTlZ9IGZyb20gJy4vZW52JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSByZXF1aXJlKGAuL2NvbmZpZy8ke0FQUF9FTlZ9Lmpzb25gKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wicHJvZHVjdENvZGVcIjpcIkZSMVwiLFwiaW1nXCI6XCJodHRwczovL3N0YXRpYy5vcGVuZm9vZGZhY3RzLm9yZy9pbWFnZXMvcHJvZHVjdHMvMzIyLzg4OC8xMDEvMDk3MS9mcm9udF9mci42LmZ1bGwuanBnXCIsXCJuYW1lXCI6XCJGcnVpdCB0ZWFcIixcInByaWNlXCI6MzExfSx7XCJwcm9kdWN0Q29kZVwiOlwiU1IxXCIsXCJpbWdcIjpcImh0dHBzOi8vZHRneHdtaWdtZzNnYy5jbG91ZGZyb250Lm5ldC9maWxlcy81NmZjNzhmMjUyYmEwYjQ1ZTcwMzk2ZTktaWNvbi0yNTZ4MjU2LnBuZ1wiLFwibmFtZVwiOlwiU3RyYXdiZXJyaWVzXCIsXCJwcmljZVwiOjUwMH0se1wicHJvZHVjdENvZGVcIjpcIkNGMVwiLFwiaW1nXCI6XCJodHRwOi8vd3d3Lm9kZGl0eXNvZnR3YXJlLmNvbS9faW1hZ2VzL2RiX2ljb25zL3N0YXJidWNrc19sb2NhdGlvbnMucG5nXCIsXCJuYW1lXCI6XCJDb2ZmZWVcIixcInByaWNlXCI6MTEyM31dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3RzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wicHJvZHVjdENvZGVcIjpcIkZSMVwiLFwiZGVzY3JpcHRpb25cIjpcImJ1eSBvbmUgZ2V0IG9uZSBmcmVlXCIsXCJydWxlXCI6e1wicXVhbnRpdHlcIjoxLFwiZnJlZVwiOjF9fSx7XCJwcm9kdWN0Q29kZVwiOlwiU1IxXCIsXCJkZXNjcmlwdGlvblwiOlwiYnVsayBwdXJjaGFzZSwgZGlzY291bnQgcHJpY2VcIixcInJ1bGVcIjp7XCJxdWFudGl0eVwiOjMsXCJuZXdQcmljZVwiOjQ1MH19XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9wcm9tb3Rpb25zLmpzb25cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNlcnZlciBmcm9tICcuL3NlcnZlcic7XG5pbXBvcnQgTW9uZ28gZnJvbSAnLi9zdG9yYWdlL21vbmdvJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtWZXJpZnlVc2VyfSBmcm9tICcuL3ZlcmlmeS11c2VyJztcblxubGV0IHNlcnZlciA9IFNlcnZlci5nZXRJbnN0YW5jZSgpO1xuTW9uZ28uY29ubmVjdCgpO1xuTW9uZ28ucG9wdWxhdGVEQigpO1xuXG5zZXJ2ZXIudXNlKCcvYXBpL3Byb2R1Y3RzJywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMnKSk7XG5zZXJ2ZXIudXNlKCcvYXBpL2Jhc2tldCcsIFZlcmlmeVVzZXIsIHJlcXVpcmUoJy4vcm91dGVzL2Jhc2tldFJvdXRlcycpKTtcblxuXG4vL2dlbmVyaWMgZXJyb3IgaGFuZGxlclxuc2VydmVyLnVzZSgoZXJyOiBFcnJvciwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICBlcnJvcjogNTAwXG4gICAgfSlcbn0pIFxuXG5zZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JULCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApO1xufSlcblxuXG4vL3NlcnZlci5saXN0ZW4oKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtjb3JzTWlkZGxld2FyZX0gZnJvbSAnLi9jb3JzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlciB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBleHByZXNzLkV4cHJlc3M7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIHByaXZhdGUgc3RhdGljIGluaXQoKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlID0gZXhwcmVzcygpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGNvcnNNaWRkbGV3YXJlKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtb3JnYW4oJ2RldicpKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2Ygc2VydmVyXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZighU2VydmVyLmluc3RhbmNlKXtcbiAgICAgICAgICAgIFNlcnZlci5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNlcnZlci5pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIHVzZShtaWRkbGV3YXJlOiBleHByZXNzLlJlcXVlc3RIYW5kbGVyIHwgZXhwcmVzcy5FcnJvclJlcXVlc3RIYW5kbGVyKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtaWRkbGV3YXJlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5leHBvcnQgY29uc3QgY29yc01pZGRsZXdhcmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCByZXEuaGVhZGVyKCdvcmlnaW4nKSB8fCByZXEuaGVhZGVyKCd4LWZvcndhcmRlZC1ob3N0JykgfHwgJyonKTtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCwgT1BUSU9OUywgUFVULCBQQVRDSCwgREVMRVRFJyk7XG4gICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBSZWZlcmVyJyk7XG4gICAgXG4gICAgbmV4dCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JzLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge3BvcHVsYXRlREJ9IGZyb20gJy4vcG9wdWxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nbyB7XG5cbiAgICBzdGF0aWMgZGI6IG1vbmdvb3NlLkNvbm5lY3Rpb247XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlIG1vbmdvIGRiIHdpdGggc29tZSBtb2NrIGRhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgcG9wdWxhdGVEQigpe1xuICAgICAgICAvL3BvcHVsYXRlREIoTW9uZ28uZGIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIG1vbmdvb3NlLkNvbm5lY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgY29ubmVjdCgpIDptb25nb29zZS5Db25uZWN0aW9uIHtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChjb25maWcubW9uZ28udXJpLCB7IHVzZU1vbmdvQ2xpZW50OiB0cnVlIH0pO1xuICAgICAgICBNb25nby5kYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgICAgIE1vbmdvLmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcicpKTtcbiAgICAgICAgTW9uZ28uZGIub25jZSgnb3BlbicsIGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3RlZCBjb3JyZWN0bHkgdG8gbW9uZ28gZGInKSk7XG4gICAgICAgIHJldHVybiBNb25nby5kYjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJleHBvcnQgY29uc3QgQVBQX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudi50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc29uXCI6IDE0LFxuXHRcIi4vcHJvZHVjdGlvbi5qc29uXCI6IDE1LFxuXHRcIi4vcHJvZHVjdHMuanNvblwiOiA0LFxuXHRcIi4vcHJvbW90aW9ucy5qc29uXCI6IDVcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxMztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjkwMDJ9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo4MDgwfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgdG8gYXV0aGVudGljYXRlIGEgdXNlclxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlcyBcbiAqIEBwYXJhbSBuZXh0IFxuICovXG5cbmV4cG9ydCBjb25zdCBWZXJpZnlVc2VyID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG5cbiAgICAvL2hlcmUgdGhlcmUgc2hvdWxkIGJlIGFuIGF1dGhlbnRpY2F0aW9uIG1lY2hhbmlzbSB0byBhdXRoZW50aWNhdGUgZWFjaCByZXF1ZXN0IGJlZm9yZSB0cmlnZ2VyIHRoZSBuZXh0XG4gICAgLy9taWRkbGV3YXJlLCBmb3IgdGhpcyBzYW1wbGUgcHJvamVjdCBpIGp1c3QgY2FsbCB0aGUgbmV4dCBtaWRkbGV3YXJlIGluIHRoZSBjaGFpbiB3aXRob3V0IGRvaW5nIGFueVxuICAgIC8vYXV0aGVudGljYXRpb25cblxuICAgIHJldHVybiBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlcmlmeS11c2VyLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBQcm9kdWN0LmZpbmQoe30sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBpZGVhczogYW55KSA9PiB7XG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGlkZWFzKTtcbiAgICB9KVxufSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL3Byb2R1Y3RzUm91dGVzLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCB7QmFza2V0fSBmcm9tICcuLi9zdG9yYWdlL21vZGVsL2Jhc2tldCc7XG5pbXBvcnQge2FwcGx5UHJvbW90aW9ucywgY2FsY3VsYXRlVG90YWx9IGZyb20gJy4vYXBwbHlQcm9tb3Rpb25zJztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qKlxuICogYWRkIGFuIGVsZW1lbnQgdG8gdGhlIGJhc2tldFxuICovXG5yb3V0ZXIucG9zdCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIGlmKCFyZXEuYm9keS5wcm9kdWN0Q29kZSl7XG4gICAgICAgIHJldHVybiBuZXh0KG5ldyBFcnJvcignbm8gaXRlbSBwcm92aWRlZCcpKTtcbiAgICB9XG4gICAgbGV0IGl0ZW0gPSByZXEuYm9keTtcblxuICAgIC8vSEVSRSBpIHVzZSBtb25nb29zZSB3aXRoIHBsYWluIGNhbGxiYWNrc1xuICAgIFByb2R1Y3QuZmluZE9uZSh7cHJvZHVjdENvZGU6IGl0ZW0ucHJvZHVjdENvZGV9LCAoZXJyOiBtb25nb29zZS5FcnJvciwgcHJvZF9pdGVtOiBhbnkpID0+IHtcblxuICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBpZighcHJvZF9pdGVtKXtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KG5ldyBFcnJvcignaXRlbSBub3QgZm91bmQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kX2l0ZW0ucHJvZHVjdENvZGUsIFxuICAgICAgICAgICAgbmFtZTogcHJvZF9pdGVtLm5hbWUsIFxuICAgICAgICAgICAgcHJpY2U6IHByb2RfaXRlbS5wcmljZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IHx8IDFcbiAgICAgICAgfTsgXG5cbiAgICAgICAgQmFza2V0LmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgICB7cHJvZHVjdENvZGU6IGl0ZW0ucHJvZHVjdENvZGV9LCBcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICB7IHVwc2VydDogdHJ1ZSwgbmV3OiB0cnVlLCBzZXREZWZhdWx0c09uSW5zZXJ0OiB0cnVlLCBydW5WYWxpZGF0b3JzOiB0cnVlIH0sXG4gICAgICAgICAgICAoZXJyOiBtb25nb29zZS5FcnJvciwgX2l0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZldGNoQWxsQmFza2V0KClcbiAgICAgICAgICAgICAgICAudGhlbihpdGVtcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFwcGx5UHJvbW90aW9ucyhpdGVtcykpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfSlcblxufSlcblxuLyoqXG4gKiBnZXQgdGhlIHdob2xlIGJhc2tldFxuICovXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgZmV0Y2hBbGxCYXNrZXQoKVxuICAgIC50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXBwbHlQcm9tb3Rpb25zKGl0ZW1zKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgbmV4dChlcnIpO1xuICAgIH0pXG59KVxuXG5cbi8qKlxuICogIGRlbGV0ZSBhIHNpbmdsZSBiYXNrZXQgaXRlbSBvciB0aGUgd2hvbGUgYmFza2V0XG4gKi9cbnJvdXRlci5kZWxldGUoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBpZighcmVxLmJvZHkucHJvZHVjdENvZGUpe1xuICAgICAgICByZXR1cm4gbmV4dChuZXcgRXJyb3IoJ25vIGl0ZW0gcHJvdmlkZWQnKSk7XG4gICAgfVxuXG4gICAgLy9jb3VsZCBiZSBhIHNpbmdsZSBwcm9kdWN0IG9yIHRoZSB3aG9sZSBjYXJ0XG4gICAgbGV0IHRvUmVtb3ZlID0gcmVxLmJvZHkucHJvZHVjdENvZGUgPyB7cHJvZHVjdENvZGU6IHJlcS5ib2R5LnByb2R1Y3RDb2RlfToge31cbiAgICBcbiAgICAvL21vbmdvb3NlIHdpdGggcHJvbWlzZXNcbiAgICBCYXNrZXQucmVtb3ZlKHRvUmVtb3ZlKVxuICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hBbGxCYXNrZXQoKTtcbiAgICB9KVxuICAgIC50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXBwbHlQcm9tb3Rpb25zKGl0ZW1zKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgbmV4dChlcnIpO1xuICAgIH0pXG59KVxuXG5cbmNvbnN0IGZldGNoQWxsQmFza2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xuICAgICAgICAvL21vbmdvb3NlIGFuZCBQcm9taXNlc1xuICAgICAgICBsZXQgYmFza2V0SXRlbXM6IGFueTtcbiAgICAgICAgQmFza2V0LmZpbmQoe30pXG4gICAgICAgIC50aGVuKChfYmFza2V0SXRlbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgYmFza2V0SXRlbXMgPSBfYmFza2V0SXRlbXM7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdENvZGVzID0gYmFza2V0SXRlbXMubWFwKChiYXNrZXRfaXRlbTphbnkpID0+IGJhc2tldF9pdGVtLnByb2R1Y3RDb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9kdWN0LmZpbmQoeyBwcm9kdWN0Q29kZToge1xuICAgICAgICAgICAgICAgICRpbjogcHJvZHVjdENvZGVzXG4gICAgICAgICAgICB9fSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtc0Z1bGwgPSBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBiSXRlbSA9IGJhc2tldEl0ZW1zLmZpbmQoKGJJdGVtOmFueSkgPT4gYkl0ZW0ucHJvZHVjdENvZGUgPT09IGl0ZW0ucHJvZHVjdENvZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbS50b09iamVjdCgpLCBxdWFudGl0eTogYkl0ZW0ucXVhbnRpdHkgfHwgMX07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzb2x2ZShpdGVtc0Z1bGwpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgICAgIFxufVxuXG4vKipcbiAqIHJldHVybiB0aGUgdG90YWxcbiAqL1xucm91dGVyLmdldCgnL3RvdGFsJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgZmV0Y2hBbGxCYXNrZXQoKVxuICAgIC50aGVuKChiYXNrZXQ6IGFueSkgPT4ge1xuICAgICAgICBiYXNrZXQgPSBhcHBseVByb21vdGlvbnMoYmFza2V0KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3RvdGFsOiBjYWxjdWxhdGVUb3RhbChiYXNrZXQpfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgbmV4dChlcnIpO1xuICAgIH0pXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2Jhc2tldFJvdXRlcy50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGJhc2tldFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHByb2R1Y3RDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHF1YW50aXR5OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgbWluOiAxXG4gICAgfVxuICAgIFxufSlcbmV4cG9ydCBjb25zdCBCYXNrZXQgPSBtb25nb29zZS5tb2RlbCgnQmFza2V0JywgYmFza2V0U2NoZW1hKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vZGVsL2Jhc2tldC50cyIsImNvbnN0IHByb21vdGlvbnMgPSByZXF1aXJlKCcuLi9jb25maWcvcHJvbW90aW9ucy5qc29uJyk7XG5cbi8qKlxuICogIHRoaXMgZnVuY3Rpb24gY2hlY2sgaWYgYW55IHByb21vdGlvbiBpcyBhcHBsaWNhYmxlIHRvIHRoZSBiYXNrZXQgXG4gKiBcbiAqIEBwYXJhbSBiYXNrZXRcbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5UHJvbW90aW9ucyA9IChiYXNrZXQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBiYXNrZXQubWFwKChpdGVtOiBhbnkpID0+IHtcblxuICAgICAgICBsZXQgcHJvbW8gPSBwcm9tb3Rpb25zLmZpbmQoXG4gICAgICAgICAgICAocHJvbW90aW9uOiBhbnkpID0+IHByb21vdGlvbi5wcm9kdWN0Q29kZSA9PT0gaXRlbS5wcm9kdWN0Q29kZSk7XG5cbiAgICAgICAgLy9pZiBwcm9tb3Rpb24gY2FuIGJlIGFwcGxpZWRcbiAgICAgICAgaWYocHJvbW8gJiYgaXRlbS5xdWFudGl0eSA+PSBwcm9tby5ydWxlLnF1YW50aXR5KXtcbiAgICAgICAgICAgIGl0ZW0ucHJvbW90aW9uID0gcHJvbW87XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KVxufVxuXG4vKipcbiAqIGNhbGN1bGF0ZSB0aGUgYmFza2V0IHRvdGFsIGFwcGx5aW5nIHRoZSBwcmljZXMgYWNjb3JkaW5nIHRvIHRoZSBwcm9tb3Rpb25zXG4gKiBAcGFyYW0gYmFza2V0XG4gKi9cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVUb3RhbCA9IChiYXNrZXQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBiYXNrZXQucmVkdWNlKFxuICAgICAgICAoc3VtOmFueSwgaXRlbTphbnkpID0+IHtcbiAgICAgICAgICAgIC8vcHJpY2UgY291bGQgYmUgcHJvbW90aW9uYWxcbiAgICAgICAgICAgIGxldCBwcmljZVRvQXBwbHkgPSBpdGVtLnByb21vdGlvbiAmJiBpdGVtLnByb21vdGlvbi5ydWxlIFxuICAgICAgICAgICAgICAgICYmIGl0ZW0ucHJvbW90aW9uLnJ1bGUubmV3UHJpY2UgXG4gICAgICAgICAgICAgICAgPyBpdGVtLnByb21vdGlvbi5ydWxlLm5ld1ByaWNlIFxuICAgICAgICAgICAgICAgIDogaXRlbS5wcmljZTtcbiAgICAgICAgICAgIHJldHVybiArKHN1bSArIChwcmljZVRvQXBwbHkgLyAxMDApICogaXRlbS5xdWFudGl0eSkudG9GaXhlZCgyKTtcbiAgICAgICAgfSwgMFxuICAgICApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvYXBwbHlQcm9tb3Rpb25zLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==