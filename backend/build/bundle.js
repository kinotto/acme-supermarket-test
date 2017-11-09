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
var router = express.Router();
/**
 * add an element to the basket
 */
router.post('/', function (req, res, next) {
    if (!req.body.item) {
        return next(new Error('no item provided'));
    }
    var item = req.body.item;
    //HERE i use mongoose with plain callbacks
    product_1.Product.findOne({ productCode: item.productCode }, function (err, prod_item) {
        if (err) {
            return next(err);
        }
        if (!prod_item) {
            return next(new Error('item not found'));
        }
        item = __assign({}, item, { name: prod_item.name, price: prod_item.price });
        basket_1.Basket.findOneAndUpdate({ productCode: item.productCode }, item, { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }, function (err, _item) {
            if (err) {
                return next(err);
            }
            fetchAllBasket()
                .then(function (items) {
                res.status(200).json(items);
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
        res.status(200).json(items);
    })
        .catch(function (err) {
        next(err);
    });
});
/**
 *  delete a single basket item or the whole basket
 */
router.delete('/', function (req, res, next) {
    if (!req.body.item) {
        return next(new Error('no item provided'));
    }
    //could be a single product or the whole cart
    var toRemove = req.body.item.productCode ? { productCode: req.body.item.productCode } : {};
    //mongoose with promises
    basket_1.Basket.remove(toRemove)
        .then(function (resp) {
        return fetchAllBasket();
    })
        .then(function (items) {
        res.status(200).json(items);
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDQ3NTNlODNlOTUzOTM4YWI4YTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS9tb2RlbC9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9uZ28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3RzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9iYXNrZXRSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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VyxFQUFFO29CQUMvQixHQUFHLEVBQUUsWUFBWTtpQkFDcEIsRUFBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsS0FBVTtZQUNiLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVM7Z0JBQ3ZDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFTLElBQUssWUFBSyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7Z0JBQ3BGLE1BQU0sY0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFFO1lBQy9ELENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQW1CO1lBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7QUFFTixDQUFDO0FBR0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7Ozs7QUNySHhCLHNDQUFxQztBQUNyQyxJQUFNLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLENBQUM7UUFDVixHQUFHLEVBQUUsQ0FBQztLQUNUO0NBRUosQ0FBQztBQUNXLGNBQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDQ3NTNlODNlOTUzOTM4YWI4YTMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0FQUF9FTlZ9IGZyb20gJy4vZW52JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSByZXF1aXJlKGAuL2NvbmZpZy8ke0FQUF9FTlZ9Lmpzb25gKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHByb2R1Y3RDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgICBcbn0pXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb2RlbC9wcm9kdWN0LnRzIiwiaW1wb3J0IFNlcnZlciBmcm9tICcuL3NlcnZlcic7XG5pbXBvcnQgTW9uZ28gZnJvbSAnLi9zdG9yYWdlL21vbmdvJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtWZXJpZnlVc2VyfSBmcm9tICcuL3ZlcmlmeS11c2VyJztcblxubGV0IHNlcnZlciA9IFNlcnZlci5nZXRJbnN0YW5jZSgpO1xuTW9uZ28uY29ubmVjdCgpO1xuTW9uZ28ucG9wdWxhdGVEQigpO1xuXG5zZXJ2ZXIudXNlKCcvYXBpL3Byb2R1Y3RzJywgVmVyaWZ5VXNlciwgcmVxdWlyZSgnLi9yb3V0ZXMvcHJvZHVjdHNSb3V0ZXMnKSk7XG5zZXJ2ZXIudXNlKCcvYXBpL2Jhc2tldCcsIFZlcmlmeVVzZXIsIHJlcXVpcmUoJy4vcm91dGVzL2Jhc2tldFJvdXRlcycpKTtcblxuXG4vL2dlbmVyaWMgZXJyb3IgaGFuZGxlclxuc2VydmVyLnVzZSgoZXJyOiBFcnJvciwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICBlcnJvcjogNTAwXG4gICAgfSlcbn0pIFxuXG5zZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JULCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCBgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICAke3Byb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLnNlcnZlci5QT1JUfWApO1xufSlcblxuXG4vL3NlcnZlci5saXN0ZW4oKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtjb3JzTWlkZGxld2FyZX0gZnJvbSAnLi9jb3JzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlciB7XG4gICAgc3RhdGljIGluc3RhbmNlOiBleHByZXNzLkV4cHJlc3M7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIHByaXZhdGUgc3RhdGljIGluaXQoKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlID0gZXhwcmVzcygpO1xuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKGNvcnNNaWRkbGV3YXJlKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtb3JnYW4oJ2RldicpKTtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2Ygc2VydmVyXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZighU2VydmVyLmluc3RhbmNlKXtcbiAgICAgICAgICAgIFNlcnZlci5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNlcnZlci5pbnN0YW5jZTtcbiAgICB9XG4gICAgcHVibGljIHVzZShtaWRkbGV3YXJlOiBleHByZXNzLlJlcXVlc3RIYW5kbGVyIHwgZXhwcmVzcy5FcnJvclJlcXVlc3RIYW5kbGVyKXtcbiAgICAgICAgU2VydmVyLmluc3RhbmNlLnVzZShtaWRkbGV3YXJlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5leHBvcnQgY29uc3QgY29yc01pZGRsZXdhcmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCByZXEuaGVhZGVyKCdvcmlnaW4nKSB8fCByZXEuaGVhZGVyKCd4LWZvcndhcmRlZC1ob3N0JykgfHwgJyonKTtcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCwgT1BUSU9OUywgUFVULCBQQVRDSCwgREVMRVRFJyk7XG5cbiAgICBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcnMudHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7cG9wdWxhdGVEQn0gZnJvbSAnLi9wb3B1bGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvIHtcblxuICAgIHN0YXRpYyBkYjogbW9uZ29vc2UuQ29ubmVjdGlvbjtcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgLyoqXG4gICAgICogcG9wdWxhdGUgbW9uZ28gZGIgd2l0aCBzb21lIG1vY2sgZGF0YVxuICAgICAqL1xuICAgIHN0YXRpYyBwb3B1bGF0ZURCKCl7XG4gICAgICAgIC8vcG9wdWxhdGVEQihNb25nby5kYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgbW9uZ29vc2UuQ29ubmVjdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBjb25uZWN0KCkgOm1vbmdvb3NlLkNvbm5lY3Rpb24ge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5tb25nby51cmksIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XG4gICAgICAgIE1vbmdvLmRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgTW9uZ28uZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uZWN0aW9uIGVycm9yJykpO1xuICAgICAgICBNb25nby5kYi5vbmNlKCdvcGVuJywgY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnY29ubmVjdGVkIGNvcnJlY3RseSB0byBtb25nbyBkYicpKTtcbiAgICAgICAgcmV0dXJuIE1vbmdvLmRiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb25nby50cyIsImV4cG9ydCBjb25zdCBBUFBfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52LnRzIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldmVsb3BtZW50Lmpzb25cIjogMTIsXG5cdFwiLi9wcm9kdWN0aW9uLmpzb25cIjogMTMsXG5cdFwiLi9wcm9kdWN0cy5qc29uXCI6IDE0XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnIF5cXC5cXC8uKlxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo5MDAyfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXJ2ZXJcIjp7XCJQT1JUXCI6ODA4MH0sXCJtb25nb1wiOntcInVyaVwiOlwibW9uZ29kYjovL2hlcm9rdV81aHF4cjQ4MTpmazU5ZzRoNW92NHA3ZGp2aXBkazhuM2drY0BkczI0OTU2NS5tbGFiLmNvbTo0OTU2NS9oZXJva3VfNWhxeHI0ODFcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanNvblxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wicHJvZHVjdENvZGVcIjpcIkZSMVwiLFwibmFtZVwiOlwiRnJ1aXQgdGVhXCIsXCJwcmljZVwiOjMxMX0se1wicHJvZHVjdENvZGVcIjpcIlNSMVwiLFwibmFtZVwiOlwiU3RyYXdiZXJyaWVzXCIsXCJwcmljZVwiOjUwMH0se1wicHJvZHVjdENvZGVcIjpcIkNGMVwiLFwibmFtZVwiOlwiQ29mZmVlXCIsXCJwcmljZVwiOjExMjN9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9wcm9kdWN0cy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgdG8gYXV0aGVudGljYXRlIGEgdXNlclxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlcyBcbiAqIEBwYXJhbSBuZXh0IFxuICovXG5cbmV4cG9ydCBjb25zdCBWZXJpZnlVc2VyID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG5cbiAgICAvL2hlcmUgdGhlcmUgc2hvdWxkIGJlIGFuIGF1dGhlbnRpY2F0aW9uIG1lY2hhbmlzbSB0byBhdXRoZW50aWNhdGUgZWFjaCByZXF1ZXN0IGJlZm9yZSB0cmlnZ2VyIHRoZSBuZXh0XG4gICAgLy9taWRkbGV3YXJlLCBmb3IgdGhpcyBzYW1wbGUgcHJvamVjdCBpIGp1c3QgY2FsbCB0aGUgbmV4dCBtaWRkbGV3YXJlIGluIHRoZSBjaGFpbiB3aXRob3V0IGRvaW5nIGFueVxuICAgIC8vYXV0aGVudGljYXRpb25cblxuICAgIHJldHVybiBuZXh0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlcmlmeS11c2VyLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBQcm9kdWN0LmZpbmQoe30sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBpZGVhczogYW55KSA9PiB7XG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGlkZWFzKTtcbiAgICB9KVxufSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL3Byb2R1Y3RzUm91dGVzLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9wcm9kdWN0JztcbmltcG9ydCB7QmFza2V0fSBmcm9tICcuLi9zdG9yYWdlL21vZGVsL2Jhc2tldCc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKipcbiAqIGFkZCBhbiBlbGVtZW50IHRvIHRoZSBiYXNrZXRcbiAqL1xucm91dGVyLnBvc3QoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBpZighcmVxLmJvZHkuaXRlbSl7XG4gICAgICAgIHJldHVybiBuZXh0KG5ldyBFcnJvcignbm8gaXRlbSBwcm92aWRlZCcpKTtcbiAgICB9XG4gICAgbGV0IHtpdGVtfSA9IHJlcS5ib2R5O1xuXG4gICAgLy9IRVJFIGkgdXNlIG1vbmdvb3NlIHdpdGggcGxhaW4gY2FsbGJhY2tzXG4gICAgUHJvZHVjdC5maW5kT25lKHtwcm9kdWN0Q29kZTogaXRlbS5wcm9kdWN0Q29kZX0sIChlcnI6IG1vbmdvb3NlLkVycm9yLCBwcm9kX2l0ZW06IGFueSkgPT4ge1xuXG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFwcm9kX2l0ZW0pe1xuICAgICAgICAgICAgcmV0dXJuIG5leHQobmV3IEVycm9yKCdpdGVtIG5vdCBmb3VuZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgLi4uaXRlbSwgXG4gICAgICAgICAgICBuYW1lOiBwcm9kX2l0ZW0ubmFtZSwgXG4gICAgICAgICAgICBwcmljZTogcHJvZF9pdGVtLnByaWNlXG4gICAgICAgIH07IFxuXG4gICAgICAgIEJhc2tldC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgICAgICAge3Byb2R1Y3RDb2RlOiBpdGVtLnByb2R1Y3RDb2RlfSwgXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgeyB1cHNlcnQ6IHRydWUsIG5ldzogdHJ1ZSwgc2V0RGVmYXVsdHNPbkluc2VydDogdHJ1ZSwgcnVuVmFsaWRhdG9yczogdHJ1ZSB9LFxuICAgICAgICAgICAgKGVycjogbW9uZ29vc2UuRXJyb3IsIF9pdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmZXRjaEFsbEJhc2tldCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oaXRlbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihpdGVtcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9KVxuXG59KVxuXG4vKipcbiAqIGdldCB0aGUgd2hvbGUgYmFza2V0XG4gKi9cbnJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBmZXRjaEFsbEJhc2tldCgpXG4gICAgLnRoZW4oaXRlbXMgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihpdGVtcyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgbmV4dChlcnIpO1xuICAgIH0pXG59KVxuXG5cbi8qKlxuICogIGRlbGV0ZSBhIHNpbmdsZSBiYXNrZXQgaXRlbSBvciB0aGUgd2hvbGUgYmFza2V0XG4gKi9cbnJvdXRlci5kZWxldGUoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICBpZighcmVxLmJvZHkuaXRlbSl7XG4gICAgICAgIHJldHVybiBuZXh0KG5ldyBFcnJvcignbm8gaXRlbSBwcm92aWRlZCcpKTtcbiAgICB9XG5cbiAgICAvL2NvdWxkIGJlIGEgc2luZ2xlIHByb2R1Y3Qgb3IgdGhlIHdob2xlIGNhcnRcbiAgICBsZXQgdG9SZW1vdmUgPSByZXEuYm9keS5pdGVtLnByb2R1Y3RDb2RlID8ge3Byb2R1Y3RDb2RlOiByZXEuYm9keS5pdGVtLnByb2R1Y3RDb2RlfToge31cbiAgICBcbiAgICAvL21vbmdvb3NlIHdpdGggcHJvbWlzZXNcbiAgICBCYXNrZXQucmVtb3ZlKHRvUmVtb3ZlKVxuICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hBbGxCYXNrZXQoKTtcbiAgICB9KVxuICAgIC50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oaXRlbXMpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IG1vbmdvb3NlLkVycm9yKSA9PiB7XG4gICAgICAgIG5leHQoZXJyKTtcbiAgICB9KVxufSlcblxuXG5jb25zdCBmZXRjaEFsbEJhc2tldCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcbiAgICAgICAgLy9tb25nb29zZSBhbmQgUHJvbWlzZXNcbiAgICAgICAgbGV0IGJhc2tldEl0ZW1zOiBhbnk7XG4gICAgICAgIEJhc2tldC5maW5kKHt9KVxuICAgICAgICAudGhlbigoX2Jhc2tldEl0ZW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGJhc2tldEl0ZW1zID0gX2Jhc2tldEl0ZW1zO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3RDb2RlcyA9IGJhc2tldEl0ZW1zLm1hcCgoYmFza2V0X2l0ZW06YW55KSA9PiBiYXNrZXRfaXRlbS5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvZHVjdC5maW5kKHsgcHJvZHVjdENvZGU6IHtcbiAgICAgICAgICAgICAgICAkaW46IHByb2R1Y3RDb2Rlc1xuICAgICAgICAgICAgfX0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChpdGVtczogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXNBbmRRdWFudGl0eSA9IGl0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJJdGVtID0gYmFza2V0SXRlbXMuZmluZCgoYkl0ZW06YW55KSA9PiBiSXRlbS5wcm9kdWN0Q29kZSA9PT0gaXRlbS5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLnRvT2JqZWN0KCksIHF1YW50aXR5OiBiSXRlbS5xdWFudGl0eSB8fCAxfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zQW5kUXVhbnRpdHkpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycjogbW9uZ29vc2UuRXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgICAgIFxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvYmFza2V0Um91dGVzLnRzIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgYmFza2V0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgcHJvZHVjdENvZGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcXVhbnRpdHk6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICBtaW46IDFcbiAgICB9XG4gICAgXG59KVxuZXhwb3J0IGNvbnN0IEJhc2tldCA9IG1vbmdvb3NlLm1vZGVsKCdCYXNrZXQnLCBiYXNrZXRTY2hlbWEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JhZ2UvbW9kZWwvYmFza2V0LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==