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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
var env_1 = __webpack_require__(11);
exports.config = __webpack_require__(12)("./" + env_1.APP_ENV + ".json");


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [{"productCode":"FR1","description":"buy one get one free","rule":{"quantity":1,"free":1}},{"productCode":"SR1","description":"bulk purchase, discount price","rule":{"quantity":3,"newPrice":450}}]

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(6);
var mongo_1 = __webpack_require__(10);
var config_1 = __webpack_require__(2);
var verify_user_1 = __webpack_require__(16);
var server = server_1.default.getInstance();
mongo_1.default.connect();
mongo_1.default.populateDB();
server.use('/api/products', verify_user_1.VerifyUser, __webpack_require__(17));
server.use('/api/basket', verify_user_1.VerifyUser, __webpack_require__(18));
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var morgan = __webpack_require__(7);
var bodyParser = __webpack_require__(8);
var cors_1 = __webpack_require__(9);
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENV = process.env.NODE_ENV || 'development';


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.json": 13,
	"./production.json": 14,
	"./products.json": 15,
	"./promotions.json": 3
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
webpackContext.id = 12;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":9002},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"server":{"PORT":8080},"mongo":{"uri":"mongodb://heroku_5hqxr481:fk59g4h5ov4p7djvipdk8n3gkc@ds249565.mlab.com:49565/heroku_5hqxr481"}}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = [{"productCode":"FR1","img":"https://static.openfoodfacts.org/images/products/322/888/101/0971/front_fr.6.full.jpg","name":"Fruit tea","price":311},{"productCode":"SR1","img":"https://dtgxwmigmg3gc.cloudfront.net/files/56fc78f252ba0b45e70396e9-icon-256x256.png","name":"Strawberries","price":500},{"productCode":"CF1","img":"http://www.odditysoftware.com/_images/db_icons/starbucks_locations.png","name":"Coffee","price":1123}]

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(0);
var product_1 = __webpack_require__(4);
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
/* 18 */
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
var product_1 = __webpack_require__(4);
var basket_1 = __webpack_require__(19);
var applyPromotions_1 = __webpack_require__(20);
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var promotions = __webpack_require__(3);
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
        return +(sum + priceToApply * item.quantity);
    }, 0);
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODE4YjFmYWJlZmQ3NTY3ZGUzYWQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb21vdGlvbnMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3RzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9iYXNrZXRSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYXBwbHlQcm9tb3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7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MUMsQ0FBMEMsQ0FBQyxDQUFDO1FBRXBFLDZCQUE2QjtRQUM3QixFQUFFLEVBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQ7OztHQUdHO0FBQ1Usc0JBQWMsR0FBRyxVQUFDLE1BQVc7SUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ2hCLFVBQUMsR0FBTyxFQUFFLElBQVE7UUFDZCw0QkFBNEI7UUFDNUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7ZUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNqQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUMsRUFBRSxDQUFDLENBQ04sQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgxOGIxZmFiZWZkNzU2N2RlM2FkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbmdvb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtBUFBfRU5WfSBmcm9tICcuL2Vudic7XG5leHBvcnQgY29uc3QgY29uZmlnID0gcmVxdWlyZShgLi9jb25maWcvJHtBUFBfRU5WfS5qc29uYCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy50cyIsIm1vZHVsZS5leHBvcnRzID0gW3tcInByb2R1Y3RDb2RlXCI6XCJGUjFcIixcImRlc2NyaXB0aW9uXCI6XCJidXkgb25lIGdldCBvbmUgZnJlZVwiLFwicnVsZVwiOntcInF1YW50aXR5XCI6MSxcImZyZWVcIjoxfX0se1wicHJvZHVjdENvZGVcIjpcIlNSMVwiLFwiZGVzY3JpcHRpb25cIjpcImJ1bGsgcHVyY2hhc2UsIGRpc2NvdW50IHByaWNlXCIsXCJydWxlXCI6e1wicXVhbnRpdHlcIjozLFwibmV3UHJpY2VcIjo0NTB9fV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvcHJvbW90aW9ucy5qc29uXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBwcm9kdWN0Q29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICAgIFxufSlcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vZGVsL3Byb2R1Y3QudHMiLCJpbXBvcnQgU2VydmVyIGZyb20gJy4vc2VydmVyJztcbmltcG9ydCBNb25nbyBmcm9tICcuL3N0b3JhZ2UvbW9uZ28nO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1ZlcmlmeVVzZXJ9IGZyb20gJy4vdmVyaWZ5LXVzZXInO1xuXG5sZXQgc2VydmVyID0gU2VydmVyLmdldEluc3RhbmNlKCk7XG5Nb25nby5jb25uZWN0KCk7XG5Nb25nby5wb3B1bGF0ZURCKCk7XG5cbnNlcnZlci51c2UoJy9hcGkvcHJvZHVjdHMnLCBWZXJpZnlVc2VyLCByZXF1aXJlKCcuL3JvdXRlcy9wcm9kdWN0c1JvdXRlcycpKTtcbnNlcnZlci51c2UoJy9hcGkvYmFza2V0JywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvYmFza2V0Um91dGVzJykpO1xuXG5cbi8vZ2VuZXJpYyBlcnJvciBoYW5kbGVyXG5zZXJ2ZXIudXNlKChlcnI6IEVycm9yLCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIHJlcy5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgIGVycm9yOiA1MDBcbiAgICB9KVxufSkgXG5cbnNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlQsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coIGBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgICR7cHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlR9YCk7XG59KVxuXG5cbi8vc2VydmVyLmxpc3RlbigpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2NvcnNNaWRkbGV3YXJlfSBmcm9tICcuL2NvcnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyIHtcbiAgICBzdGF0aWMgaW5zdGFuY2U6IGV4cHJlc3MuRXhwcmVzcztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5pdCgpe1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UgPSBleHByZXNzKCk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoY29yc01pZGRsZXdhcmUpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1vcmdhbignZGV2JykpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBzZXJ2ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmKCFTZXJ2ZXIuaW5zdGFuY2Upe1xuICAgICAgICAgICAgU2VydmVyLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2VydmVyLmluc3RhbmNlO1xuICAgIH1cbiAgICBwdWJsaWMgdXNlKG1pZGRsZXdhcmU6IGV4cHJlc3MuUmVxdWVzdEhhbmRsZXIgfCBleHByZXNzLkVycm9yUmVxdWVzdEhhbmRsZXIpe1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1pZGRsZXdhcmUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmV4cG9ydCBjb25zdCBjb3JzTWlkZGxld2FyZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIHJlcS5oZWFkZXIoJ29yaWdpbicpIHx8IHJlcS5oZWFkZXIoJ3gtZm9yd2FyZGVkLWhvc3QnKSB8fCAnKicpO1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NULCBPUFRJT05TLCBQVVQsIFBBVENILCBERUxFVEUnKTtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIFJlZmVyZXInKTtcbiAgICBcbiAgICBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcnMudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7cG9wdWxhdGVEQn0gZnJvbSAnLi9wb3B1bGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvIHtcblxuICAgIHN0YXRpYyBkYjogbW9uZ29vc2UuQ29ubmVjdGlvbjtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgLyoqXG4gICAgICogcG9wdWxhdGUgbW9uZ28gZGIgd2l0aCBzb21lIG1vY2sgZGF0YVxuICAgICAqL1xuICAgIHN0YXRpYyBwb3B1bGF0ZURCKCl7XG4gICAgICAgIC8vcG9wdWxhdGVEQihNb25nby5kYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgbW9uZ29vc2UuQ29ubmVjdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBjb25uZWN0KCkgOm1vbmdvb3NlLkNvbm5lY3Rpb24ge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5tb25nby51cmksIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XG4gICAgICAgIE1vbmdvLmRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgTW9uZ28uZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uZWN0aW9uIGVycm9yJykpO1xuICAgICAgICBNb25nby5kYi5vbmNlKCdvcGVuJywgY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnY29ubmVjdGVkIGNvcnJlY3RseSB0byBtb25nbyBkYicpKTtcbiAgICAgICAgcmV0dXJuIE1vbmdvLmRiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb25nby50cyIsImV4cG9ydCBjb25zdCBBUFBfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52LnRzIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldmVsb3BtZW50Lmpzb25cIjogMTMsXG5cdFwiLi9wcm9kdWN0aW9uLmpzb25cIjogMTQsXG5cdFwiLi9wcm9kdWN0cy5qc29uXCI6IDE1LFxuXHRcIi4vcHJvbW90aW9ucy5qc29uXCI6IDNcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxMjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjkwMDJ9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo4MDgwfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJwcm9kdWN0Q29kZVwiOlwiRlIxXCIsXCJpbWdcIjpcImh0dHBzOi8vc3RhdGljLm9wZW5mb29kZmFjdHMub3JnL2ltYWdlcy9wcm9kdWN0cy8zMjIvODg4LzEwMS8wOTcxL2Zyb250X2ZyLjYuZnVsbC5qcGdcIixcIm5hbWVcIjpcIkZydWl0IHRlYVwiLFwicHJpY2VcIjozMTF9LHtcInByb2R1Y3RDb2RlXCI6XCJTUjFcIixcImltZ1wiOlwiaHR0cHM6Ly9kdGd4d21pZ21nM2djLmNsb3VkZnJvbnQubmV0L2ZpbGVzLzU2ZmM3OGYyNTJiYTBiNDVlNzAzOTZlOS1pY29uLTI1NngyNTYucG5nXCIsXCJuYW1lXCI6XCJTdHJhd2JlcnJpZXNcIixcInByaWNlXCI6NTAwfSx7XCJwcm9kdWN0Q29kZVwiOlwiQ0YxXCIsXCJpbWdcIjpcImh0dHA6Ly93d3cub2RkaXR5c29mdHdhcmUuY29tL19pbWFnZXMvZGJfaWNvbnMvc3RhcmJ1Y2tzX2xvY2F0aW9ucy5wbmdcIixcIm5hbWVcIjpcIkNvZmZlZVwiLFwicHJpY2VcIjoxMTIzfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvcHJvZHVjdHMuanNvblxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuLyoqXG4gKiBNaWRkbGV3YXJlIHRvIGF1dGhlbnRpY2F0ZSBhIHVzZXJcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXMgXG4gKiBAcGFyYW0gbmV4dCBcbiAqL1xuXG5leHBvcnQgY29uc3QgVmVyaWZ5VXNlciA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuXG4gICAgLy9oZXJlIHRoZXJlIHNob3VsZCBiZSBhbiBhdXRoZW50aWNhdGlvbiBtZWNoYW5pc20gdG8gYXV0aGVudGljYXRlIGVhY2ggcmVxdWVzdCBiZWZvcmUgdHJpZ2dlciB0aGUgbmV4dFxuICAgIC8vbWlkZGxld2FyZSwgZm9yIHRoaXMgc2FtcGxlIHByb2plY3QgaSBqdXN0IGNhbGwgdGhlIG5leHQgbWlkZGxld2FyZSBpbiB0aGUgY2hhaW4gd2l0aG91dCBkb2luZyBhbnlcbiAgICAvL2F1dGhlbnRpY2F0aW9uXG5cbiAgICByZXR1cm4gbmV4dCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZXJpZnktdXNlci50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4uL3N0b3JhZ2UvbW9kZWwvcHJvZHVjdCc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgUHJvZHVjdC5maW5kKHt9LCAoZXJyOiBtb25nb29zZS5FcnJvciwgaWRlYXM6IGFueSkgPT4ge1xuICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihpZGVhcyk7XG4gICAgfSlcbn0pXG5cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9wcm9kdWN0c1JvdXRlcy50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4uL3N0b3JhZ2UvbW9kZWwvcHJvZHVjdCc7XG5pbXBvcnQge0Jhc2tldH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9iYXNrZXQnO1xuaW1wb3J0IHthcHBseVByb21vdGlvbnMsIGNhbGN1bGF0ZVRvdGFsfSBmcm9tICcuL2FwcGx5UHJvbW90aW9ucyc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKipcbiAqIGFkZCBhbiBlbGVtZW50IHRvIHRoZSBiYXNrZXRcbiAqL1xucm91dGVyLnBvc3QoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBpZighcmVxLmJvZHkucHJvZHVjdENvZGUpe1xuICAgICAgICByZXR1cm4gbmV4dChuZXcgRXJyb3IoJ25vIGl0ZW0gcHJvdmlkZWQnKSk7XG4gICAgfVxuICAgIGxldCBpdGVtID0gcmVxLmJvZHk7XG5cbiAgICAvL0hFUkUgaSB1c2UgbW9uZ29vc2Ugd2l0aCBwbGFpbiBjYWxsYmFja3NcbiAgICBQcm9kdWN0LmZpbmRPbmUoe3Byb2R1Y3RDb2RlOiBpdGVtLnByb2R1Y3RDb2RlfSwgKGVycjogbW9uZ29vc2UuRXJyb3IsIHByb2RfaXRlbTogYW55KSA9PiB7XG5cbiAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXByb2RfaXRlbSl7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChuZXcgRXJyb3IoJ2l0ZW0gbm90IGZvdW5kJykpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZF9pdGVtLnByb2R1Y3RDb2RlLCBcbiAgICAgICAgICAgIG5hbWU6IHByb2RfaXRlbS5uYW1lLCBcbiAgICAgICAgICAgIHByaWNlOiBwcm9kX2l0ZW0ucHJpY2UsXG4gICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSB8fCAxXG4gICAgICAgIH07IFxuXG4gICAgICAgIEJhc2tldC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICAgICAge3Byb2R1Y3RDb2RlOiBpdGVtLnByb2R1Y3RDb2RlfSwgXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgeyB1cHNlcnQ6IHRydWUsIG5ldzogdHJ1ZSwgc2V0RGVmYXVsdHNPbkluc2VydDogdHJ1ZSwgcnVuVmFsaWRhdG9yczogdHJ1ZSB9LFxuICAgICAgICAgICAgKGVycjogbW9uZ29vc2UuRXJyb3IsIF9pdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmZXRjaEFsbEJhc2tldCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oaXRlbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhcHBseVByb21vdGlvbnMoaXRlbXMpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH0pXG5cbn0pXG5cbi8qKlxuICogZ2V0IHRoZSB3aG9sZSBiYXNrZXRcbiAqL1xucm91dGVyLmdldCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIGZldGNoQWxsQmFza2V0KClcbiAgICAudGhlbihpdGVtcyA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFwcGx5UHJvbW90aW9ucyhpdGVtcykpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIG5leHQoZXJyKTtcbiAgICB9KVxufSlcblxuXG4vKipcbiAqICBkZWxldGUgYSBzaW5nbGUgYmFza2V0IGl0ZW0gb3IgdGhlIHdob2xlIGJhc2tldFxuICovXG5yb3V0ZXIuZGVsZXRlKCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgaWYoIXJlcS5ib2R5LnByb2R1Y3RDb2RlKXtcbiAgICAgICAgcmV0dXJuIG5leHQobmV3IEVycm9yKCdubyBpdGVtIHByb3ZpZGVkJykpO1xuICAgIH1cblxuICAgIC8vY291bGQgYmUgYSBzaW5nbGUgcHJvZHVjdCBvciB0aGUgd2hvbGUgY2FydFxuICAgIGxldCB0b1JlbW92ZSA9IHJlcS5ib2R5LnByb2R1Y3RDb2RlID8ge3Byb2R1Y3RDb2RlOiByZXEuYm9keS5wcm9kdWN0Q29kZX06IHt9XG4gICAgXG4gICAgLy9tb25nb29zZSB3aXRoIHByb21pc2VzXG4gICAgQmFza2V0LnJlbW92ZSh0b1JlbW92ZSlcbiAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoQWxsQmFza2V0KCk7XG4gICAgfSlcbiAgICAudGhlbihpdGVtcyA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFwcGx5UHJvbW90aW9ucyhpdGVtcykpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIG5leHQoZXJyKTtcbiAgICB9KVxufSlcblxuXG5jb25zdCBmZXRjaEFsbEJhc2tldCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcbiAgICAgICAgLy9tb25nb29zZSBhbmQgUHJvbWlzZXNcbiAgICAgICAgbGV0IGJhc2tldEl0ZW1zOiBhbnk7XG4gICAgICAgIEJhc2tldC5maW5kKHt9KVxuICAgICAgICAudGhlbigoX2Jhc2tldEl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGJhc2tldEl0ZW1zID0gX2Jhc2tldEl0ZW1zO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3RDb2RlcyA9IGJhc2tldEl0ZW1zLm1hcCgoYmFza2V0X2l0ZW06YW55KSA9PiBiYXNrZXRfaXRlbS5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvZHVjdC5maW5kKHsgcHJvZHVjdENvZGU6IHtcbiAgICAgICAgICAgICAgICAkaW46IHByb2R1Y3RDb2Rlc1xuICAgICAgICAgICAgfX0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChpdGVtczogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXNGdWxsID0gaXRlbXMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYkl0ZW0gPSBiYXNrZXRJdGVtcy5maW5kKChiSXRlbTphbnkpID0+IGJJdGVtLnByb2R1Y3RDb2RlID09PSBpdGVtLnByb2R1Y3RDb2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLml0ZW0udG9PYmplY3QoKSwgcXVhbnRpdHk6IGJJdGVtLnF1YW50aXR5IHx8IDF9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlc29sdmUoaXRlbXNGdWxsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgICAgICBcbn1cblxuLyoqXG4gKiByZXR1cm4gdGhlIHRvdGFsXG4gKi9cbnJvdXRlci5nZXQoJy90b3RhbCcsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIGZldGNoQWxsQmFza2V0KClcbiAgICAudGhlbigoYmFza2V0OiBhbnkpID0+IHtcbiAgICAgICAgYmFza2V0ID0gYXBwbHlQcm9tb3Rpb25zKGJhc2tldCk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b3RhbDogY2FsY3VsYXRlVG90YWwoYmFza2V0KX0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIG5leHQoZXJyKTtcbiAgICB9KVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9iYXNrZXRSb3V0ZXMudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCBiYXNrZXRTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBwcm9kdWN0Q29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBxdWFudGl0eToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgIG1pbjogMVxuICAgIH1cbiAgICBcbn0pXG5leHBvcnQgY29uc3QgQmFza2V0ID0gbW9uZ29vc2UubW9kZWwoJ0Jhc2tldCcsIGJhc2tldFNjaGVtYSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb2RlbC9iYXNrZXQudHMiLCJjb25zdCBwcm9tb3Rpb25zID0gcmVxdWlyZSgnLi4vY29uZmlnL3Byb21vdGlvbnMuanNvbicpO1xuXG4vKipcbiAqICB0aGlzIGZ1bmN0aW9uIGNoZWNrIGlmIGFueSBwcm9tb3Rpb24gaXMgYXBwbGljYWJsZSB0byB0aGUgYmFza2V0IFxuICogXG4gKiBAcGFyYW0gYmFza2V0XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBseVByb21vdGlvbnMgPSAoYmFza2V0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gYmFza2V0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG5cbiAgICAgICAgbGV0IHByb21vID0gcHJvbW90aW9ucy5maW5kKFxuICAgICAgICAgICAgKHByb21vdGlvbjogYW55KSA9PiBwcm9tb3Rpb24ucHJvZHVjdENvZGUgPT09IGl0ZW0ucHJvZHVjdENvZGUpO1xuXG4gICAgICAgIC8vaWYgcHJvbW90aW9uIGNhbiBiZSBhcHBsaWVkXG4gICAgICAgIGlmKHByb21vICYmIGl0ZW0ucXVhbnRpdHkgPj0gcHJvbW8ucnVsZS5xdWFudGl0eSl7XG4gICAgICAgICAgICBpdGVtLnByb21vdGlvbiA9IHByb21vO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuLyoqXG4gKiBjYWxjdWxhdGUgdGhlIGJhc2tldCB0b3RhbCBhcHBseWluZyB0aGUgcHJpY2VzIGFjY29yZGluZyB0byB0aGUgcHJvbW90aW9uc1xuICogQHBhcmFtIGJhc2tldFxuICovXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlVG90YWwgPSAoYmFza2V0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gYmFza2V0LnJlZHVjZShcbiAgICAgICAgKHN1bTphbnksIGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAvL3ByaWNlIGNvdWxkIGJlIHByb21vdGlvbmFsXG4gICAgICAgICAgICBsZXQgcHJpY2VUb0FwcGx5ID0gaXRlbS5wcm9tb3Rpb24gJiYgaXRlbS5wcm9tb3Rpb24ucnVsZSBcbiAgICAgICAgICAgICAgICAmJiBpdGVtLnByb21vdGlvbi5ydWxlLm5ld1ByaWNlIFxuICAgICAgICAgICAgICAgID8gaXRlbS5wcm9tb3Rpb24ucnVsZS5uZXdQcmljZSBcbiAgICAgICAgICAgICAgICA6IGl0ZW0ucHJpY2U7XG4gICAgICAgICAgICByZXR1cm4gKyhzdW0gKyBwcmljZVRvQXBwbHkgKiBpdGVtLnF1YW50aXR5KTtcbiAgICAgICAgfSwgMFxuICAgICApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvYXBwbHlQcm9tb3Rpb25zLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==