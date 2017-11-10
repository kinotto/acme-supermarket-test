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
var env_1 = __webpack_require__(12);
exports.config = __webpack_require__(13)("./" + env_1.APP_ENV + ".json");


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

__webpack_require__(6);
module.exports = __webpack_require__(22);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __webpack_require__(7);
var mongo_1 = __webpack_require__(11);
var config_1 = __webpack_require__(2);
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
	"./products.json": 16,
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
/* 16 */
/***/ (function(module, exports) {

module.exports = [{"productCode":"FR1","name":"Fruit tea","price":311},{"productCode":"SR1","name":"Strawberries","price":500},{"productCode":"CF1","name":"Coffee","price":1123}]

/***/ }),
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
var product_1 = __webpack_require__(4);
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
/**
 * return the total + any promotion
 */
router.get('/total', function (req, res, next) {
    fetchAllBasket()
        .then(function (basket) {
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

/**
 *  this function check if any promotion is applicable to the basket
 *
 * @param basket
 */
Object.defineProperty(exports, "__esModule", { value: true });
var promotions = __webpack_require__(3);
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


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(23);
var nodeExternals = __webpack_require__(24);

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts?$/
            }
        ]
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
      },
    target: 'node',
    externals: [nodeExternals()],
}
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTliN2UzNGI0Y2U1MjZjMWJiOGQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb21vdGlvbnMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3RzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9iYXNrZXRSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYXBwbHlQcm9tb3Rpb25zLnRzIiwid2VicGFjazovLy8uL3dlYnBhY2suY29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLG9DOzs7Ozs7QUNBQSxxQzs7Ozs7Ozs7O0FDQUEsb0NBQThCO0FBQ2pCLGNBQU0sR0FBRyw0QkFBUSxHQUFZLGFBQU8sVUFBTyxDQUFDLENBQUM7Ozs7Ozs7QUNEMUQsbUJBQW1CLGlFQUFpRSx1QkFBdUIsRUFBRSwwRUFBMEUsNkJBQTZCLEM7Ozs7Ozs7OztBQ0FwTixzQ0FBcUM7QUFDckMsSUFBTSxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3RDLFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtDQUVKLENBQUM7QUFDVyxlQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCaEUsc0NB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bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTliN2UzNGI0Y2U1MjZjMWJiOGQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0FQUF9FTlZ9IGZyb20gJy4vZW52JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSByZXF1aXJlKGAuL2NvbmZpZy8ke0FQUF9FTlZ9Lmpzb25gKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wicHJvZHVjdENvZGVcIjpcIkZSMVwiLFwiZGVzY3JpcHRpb25cIjpcImJ1eSBvbmUgZ2V0IG9uZSBmcmVlXCIsXCJydWxlXCI6e1wicXVhbnRpdHlcIjoxLFwiZnJlZVwiOjF9fSx7XCJwcm9kdWN0Q29kZVwiOlwiU1IxXCIsXCJkZXNjcmlwdGlvblwiOlwiYnVsayBwdXJjaGFzZSwgZGlzY291bnQgcHJpY2VcIixcInJ1bGVcIjp7XCJxdWFudGl0eVwiOjMsXCJuZXdQcmljZVwiOjQ1MH19XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9wcm9tb3Rpb25zLmpzb25cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHByb2R1Y3RDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgICBcbn0pXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb2RlbC9wcm9kdWN0LnRzIiwiaW1wb3J0IFNlcnZlciBmcm9tICcuL3NlcnZlcic7XG5pbXBvcnQgTW9uZ28gZnJvbSAnLi9zdG9yYWdlL21vbmdvJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtWZXJpZnlVc2VyfSBmcm9tICcuL3ZlcmlmeS11c2VyJztcblxubGV0IHNlcnZlciA9IFNlcnZlci5nZXRJbnN0YW5jZSgpO1xuTW9uZ28uY29ubmVjdCgpO1xuTW9uZ28ucG9wdWxhdGVEQigpO1xuXG5zZXJ2ZXIudXNlKCcvYXBpL3Byb2R1Y3RzJywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMnKSk7XG5zZXJ2ZXIudXNlKCcvYXBpL2Jhc2tldCcsIFZlcmlmeVVzZXIsIHJlcXVpcmUoJy4vcm91dGVzL2Jhc2tldFJvdXRlcycpKTtcblxuXG4vL2dlbmVyaWMgZXJyb3IgaGFuZGxlclxuc2VydmVyLnVzZSgoZXJyOiBFcnJvciwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICBlcnJvcjogNTAwXG4gICAgfSlcbn0pIFxuXG5zZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JULCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApO1xufSlcblxuXG4vL3NlcnZlci5saXN0ZW4oKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtjb3JzTWlkZGxld2FyZX0gZnJvbSAnLi9jb3JzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlciB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBleHByZXNzLkV4cHJlc3M7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIHByaXZhdGUgc3RhdGljIGluaXQoKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlID0gZXhwcmVzcygpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGNvcnNNaWRkbGV3YXJlKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtb3JnYW4oJ2RldicpKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2Ygc2VydmVyXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZighU2VydmVyLmluc3RhbmNlKXtcbiAgICAgICAgICAgIFNlcnZlci5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNlcnZlci5pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIHVzZShtaWRkbGV3YXJlOiBleHByZXNzLlJlcXVlc3RIYW5kbGVyIHwgZXhwcmVzcy5FcnJvclJlcXVlc3RIYW5kbGVyKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtaWRkbGV3YXJlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5leHBvcnQgY29uc3QgY29yc01pZGRsZXdhcmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCByZXEuaGVhZGVyKCdvcmlnaW4nKSB8fCByZXEuaGVhZGVyKCd4LWZvcndhcmRlZC1ob3N0JykgfHwgJyonKTtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCwgT1BUSU9OUywgUFVULCBQQVRDSCwgREVMRVRFJyk7XG4gICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBSZWZlcmVyJyk7XG4gICAgXG4gICAgbmV4dCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JzLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge3BvcHVsYXRlREJ9IGZyb20gJy4vcG9wdWxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25nbyB7XG5cbiAgICBzdGF0aWMgZGI6IG1vbmdvb3NlLkNvbm5lY3Rpb247XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlIG1vbmdvIGRiIHdpdGggc29tZSBtb2NrIGRhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgcG9wdWxhdGVEQigpe1xuICAgICAgICAvL3BvcHVsYXRlREIoTW9uZ28uZGIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIG1vbmdvb3NlLkNvbm5lY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgY29ubmVjdCgpIDptb25nb29zZS5Db25uZWN0aW9uIHtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChjb25maWcubW9uZ28udXJpLCB7IHVzZU1vbmdvQ2xpZW50OiB0cnVlIH0pO1xuICAgICAgICBNb25nby5kYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgICAgIE1vbmdvLmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcicpKTtcbiAgICAgICAgTW9uZ28uZGIub25jZSgnb3BlbicsIGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3RlZCBjb3JyZWN0bHkgdG8gbW9uZ28gZGInKSk7XG4gICAgICAgIHJldHVybiBNb25nby5kYjtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJleHBvcnQgY29uc3QgQVBQX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudi50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc29uXCI6IDE0LFxuXHRcIi4vcHJvZHVjdGlvbi5qc29uXCI6IDE1LFxuXHRcIi4vcHJvZHVjdHMuanNvblwiOiAxNixcblx0XCIuL3Byb21vdGlvbnMuanNvblwiOiAzXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo5MDAyfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvblxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6ODA4MH0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wicHJvZHVjdENvZGVcIjpcIkZSMVwiLFwibmFtZVwiOlwiRnJ1aXQgdGVhXCIsXCJwcmljZVwiOjMxMX0se1wicHJvZHVjdENvZGVcIjpcIlNSMVwiLFwibmFtZVwiOlwiU3RyYXdiZXJyaWVzXCIsXCJwcmljZVwiOjUwMH0se1wicHJvZHVjdENvZGVcIjpcIkNGMVwiLFwibmFtZVwiOlwiQ29mZmVlXCIsXCJwcmljZVwiOjExMjN9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9wcm9kdWN0cy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgdG8gYXV0aGVudGljYXRlIGEgdXNlclxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlcyBcbiAqIEBwYXJhbSBuZXh0IFxuICovXG5cbmV4cG9ydCBjb25zdCBWZXJpZnlVc2VyID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG5cbiAgICAvL2hlcmUgdGhlcmUgc2hvdWxkIGJlIGFuIGF1dGhlbnRpY2F0aW9uIG1lY2hhbmlzbSB0byBhdXRoZW50aWNhdGUgZWFjaCByZXF1ZXN0IGJlZm9yZSB0cmlnZ2VyIHRoZSBuZXh0XG4gICAgLy9taWRkbGV3YXJlLCBmb3IgdGhpcyBzYW1wbGUgcHJvamVjdCBpIGp1c3QgY2FsbCB0aGUgbmV4dCBtaWRkbGV3YXJlIGluIHRoZSBjaGFpbiB3aXRob3V0IGRvaW5nIGFueVxuICAgIC8vYXV0aGVudGljYXRpb25cblxuICAgIHJldHVybiBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlcmlmeS11c2VyLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBQcm9kdWN0LmZpbmQoe30sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBpZGVhczogYW55KSA9PiB7XG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGlkZWFzKTtcbiAgICB9KVxufSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL3Byb2R1Y3RzUm91dGVzLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCB7QmFza2V0fSBmcm9tICcuLi9zdG9yYWdlL21vZGVsL2Jhc2tldCc7XG5pbXBvcnQge2FwcGx5UHJvbW90aW9ucywgY2FsY3VsYXRlVG90YWx9IGZyb20gJy4vYXBwbHlQcm9tb3Rpb25zJztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qKlxuICogYWRkIGFuIGVsZW1lbnQgdG8gdGhlIGJhc2tldFxuICovXG5yb3V0ZXIucG9zdCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgIGlmKCFyZXEuYm9keS5wcm9kdWN0Q29kZSl7XG4gICAgICAgIHJldHVybiBuZXh0KG5ldyBFcnJvcignbm8gaXRlbSBwcm92aWRlZCcpKTtcbiAgICB9XG4gICAgbGV0IGl0ZW0gPSByZXEuYm9keTtcblxuICAgIC8vSEVSRSBpIHVzZSBtb25nb29zZSB3aXRoIHBsYWluIGNhbGxiYWNrc1xuICAgIFByb2R1Y3QuZmluZE9uZSh7cHJvZHVjdENvZGU6IGl0ZW0ucHJvZHVjdENvZGV9LCAoZXJyOiBtb25nb29zZS5FcnJvciwgcHJvZF9pdGVtOiBhbnkpID0+IHtcblxuICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBpZighcHJvZF9pdGVtKXtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KG5ldyBFcnJvcignaXRlbSBub3QgZm91bmQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kX2l0ZW0ucHJvZHVjdENvZGUsIFxuICAgICAgICAgICAgbmFtZTogcHJvZF9pdGVtLm5hbWUsIFxuICAgICAgICAgICAgcHJpY2U6IHByb2RfaXRlbS5wcmljZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IHx8IDFcbiAgICAgICAgfTsgXG5cbiAgICAgICAgQmFza2V0LmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgICB7cHJvZHVjdENvZGU6IGl0ZW0ucHJvZHVjdENvZGV9LCBcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICB7IHVwc2VydDogdHJ1ZSwgbmV3OiB0cnVlLCBzZXREZWZhdWx0c09uSW5zZXJ0OiB0cnVlLCBydW5WYWxpZGF0b3JzOiB0cnVlIH0sXG4gICAgICAgICAgICAoZXJyOiBtb25nb29zZS5FcnJvciwgX2l0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZldGNoQWxsQmFza2V0KClcbiAgICAgICAgICAgICAgICAudGhlbihpdGVtcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFwcGx5UHJvbW90aW9ucyhpdGVtcykpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfSlcblxufSlcblxuLyoqXG4gKiBnZXQgdGhlIHdob2xlIGJhc2tldFxuICovXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgZmV0Y2hBbGxCYXNrZXQoKVxuICAgIC50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXBwbHlQcm9tb3Rpb25zKGl0ZW1zKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgbmV4dChlcnIpO1xuICAgIH0pXG59KVxuXG5cbi8qKlxuICogIGRlbGV0ZSBhIHNpbmdsZSBiYXNrZXQgaXRlbSBvciB0aGUgd2hvbGUgYmFza2V0XG4gKi9cbnJvdXRlci5kZWxldGUoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBpZighcmVxLmJvZHkucHJvZHVjdENvZGUpe1xuICAgICAgICByZXR1cm4gbmV4dChuZXcgRXJyb3IoJ25vIGl0ZW0gcHJvdmlkZWQnKSk7XG4gICAgfVxuXG4gICAgLy9jb3VsZCBiZSBhIHNpbmdsZSBwcm9kdWN0IG9yIHRoZSB3aG9sZSBjYXJ0XG4gICAgbGV0IHRvUmVtb3ZlID0gcmVxLmJvZHkucHJvZHVjdENvZGUgPyB7cHJvZHVjdENvZGU6IHJlcS5ib2R5LnByb2R1Y3RDb2RlfToge31cbiAgICBcbiAgICAvL21vbmdvb3NlIHdpdGggcHJvbWlzZXNcbiAgICBCYXNrZXQucmVtb3ZlKHRvUmVtb3ZlKVxuICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hBbGxCYXNrZXQoKTtcbiAgICB9KVxuICAgIC50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXBwbHlQcm9tb3Rpb25zKGl0ZW1zKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgbmV4dChlcnIpO1xuICAgIH0pXG59KVxuXG5cbmNvbnN0IGZldGNoQWxsQmFza2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xuICAgICAgICAvL21vbmdvb3NlIGFuZCBQcm9taXNlc1xuICAgICAgICBsZXQgYmFza2V0SXRlbXM6IGFueTtcbiAgICAgICAgQmFza2V0LmZpbmQoe30pXG4gICAgICAgIC50aGVuKChfYmFza2V0SXRlbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgYmFza2V0SXRlbXMgPSBfYmFza2V0SXRlbXM7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdENvZGVzID0gYmFza2V0SXRlbXMubWFwKChiYXNrZXRfaXRlbTphbnkpID0+IGJhc2tldF9pdGVtLnByb2R1Y3RDb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9kdWN0LmZpbmQoeyBwcm9kdWN0Q29kZToge1xuICAgICAgICAgICAgICAgICRpbjogcHJvZHVjdENvZGVzXG4gICAgICAgICAgICB9fSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtc0FuZFF1YW50aXR5ID0gaXRlbXMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYkl0ZW0gPSBiYXNrZXRJdGVtcy5maW5kKChiSXRlbTphbnkpID0+IGJJdGVtLnByb2R1Y3RDb2RlID09PSBpdGVtLnByb2R1Y3RDb2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLml0ZW0udG9PYmplY3QoKSwgcXVhbnRpdHk6IGJJdGVtLnF1YW50aXR5IHx8IDF9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlc29sdmUoaXRlbXNBbmRRdWFudGl0eSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBtb25nb29zZS5FcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAgICAgXG59XG5cbi8qKlxuICogcmV0dXJuIHRoZSB0b3RhbCArIGFueSBwcm9tb3Rpb25cbiAqL1xucm91dGVyLmdldCgnL3RvdGFsJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgZmV0Y2hBbGxCYXNrZXQoKVxuICAgIC50aGVuKChiYXNrZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dG90YWw6IGNhbGN1bGF0ZVRvdGFsKGJhc2tldCl9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBuZXh0KGVycik7XG4gICAgfSlcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvYmFza2V0Um91dGVzLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgYmFza2V0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgcHJvZHVjdENvZGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcXVhbnRpdHk6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICBtaW46IDFcbiAgICB9XG4gICAgXG59KVxuZXhwb3J0IGNvbnN0IEJhc2tldCA9IG1vbmdvb3NlLm1vZGVsKCdCYXNrZXQnLCBiYXNrZXRTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIiwiLyoqXG4gKiAgdGhpcyBmdW5jdGlvbiBjaGVjayBpZiBhbnkgcHJvbW90aW9uIGlzIGFwcGxpY2FibGUgdG8gdGhlIGJhc2tldCBcbiAqIFxuICogQHBhcmFtIGJhc2tldFxuICovXG5cbmNvbnN0IHByb21vdGlvbnMgPSByZXF1aXJlKCcuLi9jb25maWcvcHJvbW90aW9ucy5qc29uJyk7XG5cbmV4cG9ydCBjb25zdCBhcHBseVByb21vdGlvbnMgPSAoYmFza2V0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gYmFza2V0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG5cbiAgICAgICAgbGV0IHByb21vID0gcHJvbW90aW9ucy5maW5kKFxuICAgICAgICAgICAgKHByb21vdGlvbjogYW55KSA9PiBwcm9tb3Rpb24ucHJvZHVjdENvZGUgPT09IGl0ZW0ucHJvZHVjdENvZGUpO1xuXG4gICAgICAgIC8vaWYgcHJvbW90aW9uIGNhbiBiZSBhcHBsaWVkXG4gICAgICAgIGlmKHByb21vICYmIGl0ZW0ucXVhbnRpdHkgPj0gcHJvbW8ucnVsZS5xdWFudGl0eSl7XG4gICAgICAgICAgICBpdGVtLnByb21vdGlvbiA9IHByb21vO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsID0gKGJhc2tldDogYW55KSA9PiB7XG4gICAgcmV0dXJuIGJhc2tldC5yZWR1Y2UoXG4gICAgICAgIChzdW06YW55LCBpdGVtOmFueSkgPT4ge1xuICAgICAgICAgICAgLy9wcmljZSBjb3VsZCBiZSBwcm9tb3Rpb25hbFxuICAgICAgICAgICAgbGV0IHByaWNlVG9BcHBseSA9IGl0ZW0ucHJvbW90aW9uICYmIGl0ZW0ucHJvbW90aW9uLnJ1bGUgXG4gICAgICAgICAgICAgICAgJiYgaXRlbS5wcm9tb3Rpb24ucnVsZS5uZXdQcmljZSBcbiAgICAgICAgICAgICAgICA/IGl0ZW0ucHJvbW90aW9uLnJ1bGUubmV3UHJpY2UgXG4gICAgICAgICAgICAgICAgOiBpdGVtLnByaWNlO1xuICAgICAgICAgICAgcmV0dXJuICsoc3VtICsgKHByaWNlVG9BcHBseSAvIDEwMCkgKiBpdGVtLnF1YW50aXR5KS50b0ZpeGVkKDIpO1xuICAgICAgICB9LCAwXG4gICAgICk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9hcHBseVByb21vdGlvbnMudHMiLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBub2RlRXh0ZXJuYWxzID0gcmVxdWlyZSgnd2VicGFjay1ub2RlLWV4dGVybmFscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBlbnRyeTogJy4vc3JjL2luZGV4LnRzJyxcbiAgICBkZXZ0b29sOiAnaW5saW5lLXNvdXJjZS1tYXAnLFxuICAgIG91dHB1dDoge1xuICAgICAgICBwdWJsaWNQYXRoOiBcIi9cIixcbiAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2J1aWxkJyksXG4gICAgICAgIGZpbGVuYW1lOiAnYnVuZGxlLmpzJ1xuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBleHRlbnNpb25zOiBbJy50cyddIC8vcmVzb2x2ZSBhbGwgdGhlIG1vZHVsZXMgb3RoZXIgdGhhbiBpbmRleC50c1xuICAgIH0sXG4gICAgbW9kdWxlOiB7XG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9hZGVyOiAndHMtbG9hZGVyJyxcbiAgICAgICAgICAgICAgICB0ZXN0OiAvXFwudHM/JC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgc3RhdHM6IHtcbiAgICAgICAgY29sb3JzOiB0cnVlLFxuICAgICAgICBtb2R1bGVzOiB0cnVlLFxuICAgICAgICByZWFzb25zOiB0cnVlLFxuICAgICAgICBlcnJvckRldGFpbHM6IHRydWVcbiAgICAgIH0sXG4gICAgdGFyZ2V0OiAnbm9kZScsXG4gICAgZXh0ZXJuYWxzOiBbbm9kZUV4dGVybmFscygpXSxcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dlYnBhY2suY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9