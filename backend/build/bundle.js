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

module.exports = [{"title":"The Lakes Distillery","description":"Opened in 2014, The Lakes Distillery is England's largest whisky distillery, receiving over 100,000 visitors annually and has sold over 160,000 bottles of their premium gin, vodka, and blended whisky; voted one of the top 5 best new distilleries in the world by Time Out USA.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","target":1000000,"raised":681700,"equity":"2.21%","investors":841},{"title":"Movem","description":"Movem is an online property portal, allowing tenants to review their rental experiences, whilst building their own digital rental profile, known as a Movem Passport. Agents and landlords can pay to instantly download a tenant's full reference, designed to be cheaper, quicker, and less open to fraud.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/the_lakes_distillery_-_national_park_logo_-_black_square_9fc8002a1e8566b1ce470b36a59e4aac.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21588/201710/untitled_96e3411fb034cb0ff5294b955c77b2b4.jpg","target":300000,"raised":327000,"equity":"11.99%","investors":292},{"title":"SilverSurfers","description":"With one of the UK’s largest online communities for the young at heart over 50's, Silversurfers has over half a million followers. The company has achieved £860k+ revenue from advertising, social media and commission-related partnerships with major brands such as Allianz and Nestle.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cc-ss-logo_3f4131525d8d00150894943fd55123a9.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21553/201709/5db906d7296905c778d2512029f442f6.jpg","target":300000,"raised":52750,"equity":"3.61%","investors":42},{"title":"Crowdfunder","description":"The UK’s #1 rewards-based crowdfunding platform, Crowdfunder, now has grown to an online community of over 600,000, and has worked with over 80,000 projects to raise £40 million since 2014. Now EBITDA positive with plans to disrupt the £5.6bn grant giving sector.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/cf_square_b2bb538ea35a97c57479c205ef45ee64.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","target":750000,"raised":723030,"equity":"4.27%","investors":674},{"title":"Rightangled","description":"Backed by NHS England, Rightangled is a CQC registered healthcare provider for genetic testing. Having designed their Cardiac genetic test and filed a patent already, the team now seek to expand their testing and telemedicine service into new tests and markets. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201708/ra_logo-_crowdcube_cd6ed104b7534e4bcab22ea9502a2363.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21641/201709/cc_pitch_page_banner_9f37d409b9b98747b6ff99a6fb3e88bd.jpg","target":100000,"raised":263950,"equity":"14.96%","investors":495},{"title":"Shaw Academy","description":"Founded in 2014, Shaw Academy is an online education provider which teaches a variety of subjects live through their bespoke software platform. Having taught over 4,000,000 students from all over the world, they are currently growing by 250,000 new students a month and now plan to scale globally.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_inverted_blue_style_2_1d03900a484fd73084e20a49689308c6.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21672/201709/desktop_opt2_7bd86d016bd6518bc5a039cde18f12b8.jpg","target":2194000,"raised":2399130,"equity":"2.79%","investors":1686},{"title":"Loose Ends App","description":"Loose Ends is a new app designed to help people get together effortlessly. 60% of Britons want to socialise more often, but organising nights out can be complicated: many planned meetups never happen. Loose Ends is a one-stop social solution, targeting a market worth £60bn per annum in the UK alone.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201710/hi-res-logo-v2-large_34601eeb3a31625bbcf73317b0bf4597.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21686/201710/2ad35aa66c1ada81a406c5a7974c8dde.jpg","target":100000,"raised":33160,"equity":"10.00%","investors":20},{"title":"Housers","description":"Launched in 2016 and based in Madrid, Spain, Housers is a real estate crowdfunding platform that makes it easy for investors to invest in European real estate both for rental income and capital gain. They currently manage €32m in investment and now plan to expand their product offering &amp; coverage. ","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/00_perfil_crowdcube6_abc76d17bddc7bb9288fc087bb84106c.png","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21638/201709/02_cover_crowdcube_montaje_2_8cf542f62c819492f4e23eff46fd4f07.jpg","target":850000,"raised":820430,"equity":"2.22%","investors":937},{"title":"passingboxes","description":"passingboxes aims to be the world’s most comprehensive website for dealing with death. It provides services to help secure your digital legacy and pass on the things that really matter. passingboxes aims to have 500,000 members by 2022 in an industry that is worth £1.7 billion per annum.","logo":"https://images.crowdcube.com/unsafe/fit-in/100x100/filters:fill(ffffff,1)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201709/logo_for_crowdcube_505014dd986949ba29fb27493d703532.jpg","image":"https://images.crowdcube.com/unsafe/350x168/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/21612/201709/header_image_20170920_2c1b0e9c7c94db54af9d3004445f0137.jpg","target":150000,"raised":71590,"equity":"5.00%","investors":111}]

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var ideaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    raised: {
        type: Number,
        default: 0
    },
    equity: {
        type: String,
        required: true
    },
    investors: {
        type: Number,
        required: true
    },
});
exports.Idea = mongoose.model('Idea', ideaSchema);


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
server.use('/api', verify_user_1.VerifyUser, __webpack_require__(17));
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
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.init = function () {
        Server.instance = express();
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
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __webpack_require__(1);
var config_1 = __webpack_require__(2);
var populate_1 = __webpack_require__(15);
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    /**
     * populate mongo db with some mock data
     */
    Mongo.populateDB = function () {
        populate_1.populateDB(Mongo.db);
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
	"./ideas.json": 3,
	"./production.json": 14
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idea_1 = __webpack_require__(4);
var ideas = __webpack_require__(3);
var clearCollection = function (collection, clb) {
    collection.remove({}, clb);
};
exports.populateDB = function (db) {
    clearCollection(idea_1.Idea, function () { return console.log.bind(console, 'Idea collection cleared'); });
    idea_1.Idea.create(ideas, function (err, ideas) {
        if (err) {
            return console.log(err);
        }
        console.log('db populated correctly');
    });
};


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
var idea_1 = __webpack_require__(4);
var router = express.Router();
router.get('/', function (req, res, next) {
    idea_1.Idea.find({}, function (err, ideas) {
        if (err) {
            return next(err);
        }
        res.status(200).json(ideas);
    });
});
router.post('/:id', function (req, res) {
});
router.delete('/:id', function (req, res) {
});
//c
module.exports = router;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWNhMjg0NThjZTcyZDIxYzgwYmMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2lkZWFzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvbW9kZWwvaWRlYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlL21vbmdvLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBeXFwuXFwvLipcXC5qc29uJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wcm9kdWN0aW9uLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvcG9wdWxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcmlmeS11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYXBpUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FB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LENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUM7QUFFTixDQUFDOzs7Ozs7Ozs7O0FDbEJEOzs7OztHQUtHO0FBRVUsa0JBQVUsR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUU5Rix1R0FBdUc7SUFDdkcsb0dBQW9HO0lBQ3BHLGdCQUFnQjtJQUVoQixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7OztBQ2hCRCxxQ0FBbUM7QUFDbkMsb0NBQTJDO0FBRTNDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUNwRixXQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFDLEdBQW1CLEVBQUUsS0FBVTtRQUMxQyxFQUFFLEVBQUMsR0FBRyxDQUFDLEVBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7QUFFaEUsQ0FBQyxDQUFDO0FBR0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCO0FBRWxFLENBQUMsQ0FBQztBQUVGLEdBQUc7QUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWNhMjg0NThjZTcyZDIxYzgwYmMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0FQUF9FTlZ9IGZyb20gJy4vZW52JztcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoYC4vY29uZmlnLyR7QVBQX0VOVn0uanNvbmApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWcudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJ0aXRsZVwiOlwiVGhlIExha2VzIERpc3RpbGxlcnlcIixcImRlc2NyaXB0aW9uXCI6XCJPcGVuZWQgaW4gMjAxNCwgVGhlIExha2VzIERpc3RpbGxlcnkgaXMgRW5nbGFuZCdzIGxhcmdlc3Qgd2hpc2t5IGRpc3RpbGxlcnksIHJlY2VpdmluZyBvdmVyIDEwMCwwMDAgdmlzaXRvcnMgYW5udWFsbHkgYW5kIGhhcyBzb2xkIG92ZXIgMTYwLDAwMCBib3R0bGVzIG9mIHRoZWlyIHByZW1pdW0gZ2luLCB2b2RrYSwgYW5kIGJsZW5kZWQgd2hpc2t5OyB2b3RlZCBvbmUgb2YgdGhlIHRvcCA1IGJlc3QgbmV3IGRpc3RpbGxlcmllcyBpbiB0aGUgd29ybGQgYnkgVGltZSBPdXQgVVNBLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC90aGVfbGFrZXNfZGlzdGlsbGVyeV8tX25hdGlvbmFsX3BhcmtfbG9nb18tX2JsYWNrX3NxdWFyZV85ZmM4MDAyYTFlODU2NmIxY2U0NzBiMzZhNTllNGFhYy5qcGdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTU4OC8yMDE3MTAvdW50aXRsZWRfOTZlMzQxMWZiMDM0Y2IwZmY1Mjk0Yjk1NWM3N2IyYjQuanBnXCIsXCJ0YXJnZXRcIjoxMDAwMDAwLFwicmFpc2VkXCI6NjgxNzAwLFwiZXF1aXR5XCI6XCIyLjIxJVwiLFwiaW52ZXN0b3JzXCI6ODQxfSx7XCJ0aXRsZVwiOlwiTW92ZW1cIixcImRlc2NyaXB0aW9uXCI6XCJNb3ZlbSBpcyBhbiBvbmxpbmUgcHJvcGVydHkgcG9ydGFsLCBhbGxvd2luZyB0ZW5hbnRzIHRvIHJldmlldyB0aGVpciByZW50YWwgZXhwZXJpZW5jZXMsIHdoaWxzdCBidWlsZGluZyB0aGVpciBvd24gZGlnaXRhbCByZW50YWwgcHJvZmlsZSwga25vd24gYXMgYSBNb3ZlbSBQYXNzcG9ydC4gQWdlbnRzIGFuZCBsYW5kbG9yZHMgY2FuIHBheSB0byBpbnN0YW50bHkgZG93bmxvYWQgYSB0ZW5hbnQncyBmdWxsIHJlZmVyZW5jZSwgZGVzaWduZWQgdG8gYmUgY2hlYXBlciwgcXVpY2tlciwgYW5kIGxlc3Mgb3BlbiB0byBmcmF1ZC5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MTAvdGhlX2xha2VzX2Rpc3RpbGxlcnlfLV9uYXRpb25hbF9wYXJrX2xvZ29fLV9ibGFja19zcXVhcmVfOWZjODAwMmExZTg1NjZiMWNlNDcwYjM2YTU5ZTRhYWMuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1ODgvMjAxNzEwL3VudGl0bGVkXzk2ZTM0MTFmYjAzNGNiMGZmNTI5NGI5NTVjNzdiMmI0LmpwZ1wiLFwidGFyZ2V0XCI6MzAwMDAwLFwicmFpc2VkXCI6MzI3MDAwLFwiZXF1aXR5XCI6XCIxMS45OSVcIixcImludmVzdG9yc1wiOjI5Mn0se1widGl0bGVcIjpcIlNpbHZlclN1cmZlcnNcIixcImRlc2NyaXB0aW9uXCI6XCJXaXRoIG9uZSBvZiB0aGUgVUvigJlzIGxhcmdlc3Qgb25saW5lIGNvbW11bml0aWVzIGZvciB0aGUgeW91bmcgYXQgaGVhcnQgb3ZlciA1MCdzLCBTaWx2ZXJzdXJmZXJzIGhhcyBvdmVyIGhhbGYgYSBtaWxsaW9uIGZvbGxvd2Vycy4gVGhlIGNvbXBhbnkgaGFzIGFjaGlldmVkIMKjODYwaysgcmV2ZW51ZSBmcm9tIGFkdmVydGlzaW5nLCBzb2NpYWwgbWVkaWEgYW5kIGNvbW1pc3Npb24tcmVsYXRlZCBwYXJ0bmVyc2hpcHMgd2l0aCBtYWpvciBicmFuZHMgc3VjaCBhcyBBbGxpYW56IGFuZCBOZXN0bGUuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2NjLXNzLWxvZ29fM2Y0MTMxNTI1ZDhkMDAxNTA4OTQ5NDNmZDU1MTIzYTkuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE1NTMvMjAxNzA5LzVkYjkwNmQ3Mjk2OTA1Yzc3OGQyNTEyMDI5ZjQ0MmY2LmpwZ1wiLFwidGFyZ2V0XCI6MzAwMDAwLFwicmFpc2VkXCI6NTI3NTAsXCJlcXVpdHlcIjpcIjMuNjElXCIsXCJpbnZlc3RvcnNcIjo0Mn0se1widGl0bGVcIjpcIkNyb3dkZnVuZGVyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIFVL4oCZcyAjMSByZXdhcmRzLWJhc2VkIGNyb3dkZnVuZGluZyBwbGF0Zm9ybSwgQ3Jvd2RmdW5kZXIsIG5vdyBoYXMgZ3Jvd24gdG8gYW4gb25saW5lIGNvbW11bml0eSBvZiBvdmVyIDYwMCwwMDAsIGFuZCBoYXMgd29ya2VkIHdpdGggb3ZlciA4MCwwMDAgcHJvamVjdHMgdG8gcmFpc2UgwqM0MCBtaWxsaW9uIHNpbmNlIDIwMTQuIE5vdyBFQklUREEgcG9zaXRpdmUgd2l0aCBwbGFucyB0byBkaXNydXB0IHRoZSDCozUuNmJuIGdyYW50IGdpdmluZyBzZWN0b3IuXCIsXCJsb2dvXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS9maXQtaW4vMTAweDEwMC9maWx0ZXJzOmZpbGwoZmZmZmZmLDEpL2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL2ZpbGVzL3BpdGNoX3BpY3Mvb3JpZ2luYWwvMjAxNzA5L2NmX3NxdWFyZV9iMmJiNTM4ZWEzNWE5N2M1NzQ3OWMyMDVlZjQ1ZWU2NC5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY0MS8yMDE3MDkvY2NfcGl0Y2hfcGFnZV9iYW5uZXJfOWYzN2Q0MDliOWI5ODc0N2I2ZmY5OWE2ZmIzZTg4YmQuanBnXCIsXCJ0YXJnZXRcIjo3NTAwMDAsXCJyYWlzZWRcIjo3MjMwMzAsXCJlcXVpdHlcIjpcIjQuMjclXCIsXCJpbnZlc3RvcnNcIjo2NzR9LHtcInRpdGxlXCI6XCJSaWdodGFuZ2xlZFwiLFwiZGVzY3JpcHRpb25cIjpcIkJhY2tlZCBieSBOSFMgRW5nbGFuZCwgUmlnaHRhbmdsZWQgaXMgYSBDUUMgcmVnaXN0ZXJlZCBoZWFsdGhjYXJlIHByb3ZpZGVyIGZvciBnZW5ldGljIHRlc3RpbmcuIEhhdmluZyBkZXNpZ25lZCB0aGVpciBDYXJkaWFjIGdlbmV0aWMgdGVzdCBhbmQgZmlsZWQgYSBwYXRlbnQgYWxyZWFkeSwgdGhlIHRlYW0gbm93IHNlZWsgdG8gZXhwYW5kIHRoZWlyIHRlc3RpbmcgYW5kIHRlbGVtZWRpY2luZSBzZXJ2aWNlIGludG8gbmV3IHRlc3RzIGFuZCBtYXJrZXRzLiBcIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDgvcmFfbG9nby1fY3Jvd2RjdWJlX2NkNmVkMTA0Yjc1MzRlNGJjYWIyMmVhOTUwMmEyMzYzLnBuZ1wiLFwiaW1hZ2VcIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlLzM1MHgxNjgvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vb3Bwb3J0dW5pdHlfaW1hZ2VzLzIxNjQxLzIwMTcwOS9jY19waXRjaF9wYWdlX2Jhbm5lcl85ZjM3ZDQwOWI5Yjk4NzQ3YjZmZjk5YTZmYjNlODhiZC5qcGdcIixcInRhcmdldFwiOjEwMDAwMCxcInJhaXNlZFwiOjI2Mzk1MCxcImVxdWl0eVwiOlwiMTQuOTYlXCIsXCJpbnZlc3RvcnNcIjo0OTV9LHtcInRpdGxlXCI6XCJTaGF3IEFjYWRlbXlcIixcImRlc2NyaXB0aW9uXCI6XCJGb3VuZGVkIGluIDIwMTQsIFNoYXcgQWNhZGVteSBpcyBhbiBvbmxpbmUgZWR1Y2F0aW9uIHByb3ZpZGVyIHdoaWNoIHRlYWNoZXMgYSB2YXJpZXR5IG9mIHN1YmplY3RzIGxpdmUgdGhyb3VnaCB0aGVpciBiZXNwb2tlIHNvZnR3YXJlIHBsYXRmb3JtLiBIYXZpbmcgdGF1Z2h0IG92ZXIgNCwwMDAsMDAwIHN0dWRlbnRzIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLCB0aGV5IGFyZSBjdXJyZW50bHkgZ3Jvd2luZyBieSAyNTAsMDAwIG5ldyBzdHVkZW50cyBhIG1vbnRoIGFuZCBub3cgcGxhbiB0byBzY2FsZSBnbG9iYWxseS5cIixcImxvZ29cIjpcImh0dHBzOi8vaW1hZ2VzLmNyb3dkY3ViZS5jb20vdW5zYWZlL2ZpdC1pbi8xMDB4MTAwL2ZpbHRlcnM6ZmlsbChmZmZmZmYsMSkvaHR0cHM6Ly9maWxlcy1jcm93ZGN1YmUtY29tLnMzLmFtYXpvbmF3cy5jb20vZmlsZXMvcGl0Y2hfcGljcy9vcmlnaW5hbC8yMDE3MDkvbG9nb19pbnZlcnRlZF9ibHVlX3N0eWxlXzJfMWQwMzkwMGE0ODRmZDczMDg0ZTIwYTQ5Njg5MzA4YzYuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2NzIvMjAxNzA5L2Rlc2t0b3Bfb3B0Ml83YmQ4NmQwMTZiZDY1MThiYzVhMDM5Y2RlMThmMTJiOC5qcGdcIixcInRhcmdldFwiOjIxOTQwMDAsXCJyYWlzZWRcIjoyMzk5MTMwLFwiZXF1aXR5XCI6XCIyLjc5JVwiLFwiaW52ZXN0b3JzXCI6MTY4Nn0se1widGl0bGVcIjpcIkxvb3NlIEVuZHMgQXBwXCIsXCJkZXNjcmlwdGlvblwiOlwiTG9vc2UgRW5kcyBpcyBhIG5ldyBhcHAgZGVzaWduZWQgdG8gaGVscCBwZW9wbGUgZ2V0IHRvZ2V0aGVyIGVmZm9ydGxlc3NseS4gNjAlIG9mIEJyaXRvbnMgd2FudCB0byBzb2NpYWxpc2UgbW9yZSBvZnRlbiwgYnV0IG9yZ2FuaXNpbmcgbmlnaHRzIG91dCBjYW4gYmUgY29tcGxpY2F0ZWQ6IG1hbnkgcGxhbm5lZCBtZWV0dXBzIG5ldmVyIGhhcHBlbi4gTG9vc2UgRW5kcyBpcyBhIG9uZS1zdG9wIHNvY2lhbCBzb2x1dGlvbiwgdGFyZ2V0aW5nIGEgbWFya2V0IHdvcnRoIMKjNjBibiBwZXIgYW5udW0gaW4gdGhlIFVLIGFsb25lLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcxMC9oaS1yZXMtbG9nby12Mi1sYXJnZV8zNDYwMWVlYjNhMzE2MjViYmNmNzMzMTdiMGJmNDU5Ny5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTY4Ni8yMDE3MTAvMmFkMzVhYTY2YzFhZGE4MWE0MDZjNWE3OTc0YzhkZGUuanBnXCIsXCJ0YXJnZXRcIjoxMDAwMDAsXCJyYWlzZWRcIjozMzE2MCxcImVxdWl0eVwiOlwiMTAuMDAlXCIsXCJpbnZlc3RvcnNcIjoyMH0se1widGl0bGVcIjpcIkhvdXNlcnNcIixcImRlc2NyaXB0aW9uXCI6XCJMYXVuY2hlZCBpbiAyMDE2IGFuZCBiYXNlZCBpbiBNYWRyaWQsIFNwYWluLCBIb3VzZXJzIGlzIGEgcmVhbCBlc3RhdGUgY3Jvd2RmdW5kaW5nIHBsYXRmb3JtIHRoYXQgbWFrZXMgaXQgZWFzeSBmb3IgaW52ZXN0b3JzIHRvIGludmVzdCBpbiBFdXJvcGVhbiByZWFsIGVzdGF0ZSBib3RoIGZvciByZW50YWwgaW5jb21lIGFuZCBjYXBpdGFsIGdhaW4uIFRoZXkgY3VycmVudGx5IG1hbmFnZSDigqwzMm0gaW4gaW52ZXN0bWVudCBhbmQgbm93IHBsYW4gdG8gZXhwYW5kIHRoZWlyIHByb2R1Y3Qgb2ZmZXJpbmcgJmFtcDsgY292ZXJhZ2UuIFwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS8wMF9wZXJmaWxfY3Jvd2RjdWJlNl9hYmM3NmQxN2JkZGM3YmI5Mjg4ZmMwODdiYjg0MTA2Yy5wbmdcIixcImltYWdlXCI6XCJodHRwczovL2ltYWdlcy5jcm93ZGN1YmUuY29tL3Vuc2FmZS8zNTB4MTY4L2h0dHBzOi8vZmlsZXMtY3Jvd2RjdWJlLWNvbS5zMy5hbWF6b25hd3MuY29tL29wcG9ydHVuaXR5X2ltYWdlcy8yMTYzOC8yMDE3MDkvMDJfY292ZXJfY3Jvd2RjdWJlX21vbnRhamVfMl84Y2Y1NDJmNjJjODE5NDkyZjRlMjNlZmY0NmZkNGYwNy5qcGdcIixcInRhcmdldFwiOjg1MDAwMCxcInJhaXNlZFwiOjgyMDQzMCxcImVxdWl0eVwiOlwiMi4yMiVcIixcImludmVzdG9yc1wiOjkzN30se1widGl0bGVcIjpcInBhc3Npbmdib3hlc1wiLFwiZGVzY3JpcHRpb25cIjpcInBhc3Npbmdib3hlcyBhaW1zIHRvIGJlIHRoZSB3b3JsZOKAmXMgbW9zdCBjb21wcmVoZW5zaXZlIHdlYnNpdGUgZm9yIGRlYWxpbmcgd2l0aCBkZWF0aC4gSXQgcHJvdmlkZXMgc2VydmljZXMgdG8gaGVscCBzZWN1cmUgeW91ciBkaWdpdGFsIGxlZ2FjeSBhbmQgcGFzcyBvbiB0aGUgdGhpbmdzIHRoYXQgcmVhbGx5IG1hdHRlci4gcGFzc2luZ2JveGVzIGFpbXMgdG8gaGF2ZSA1MDAsMDAwIG1lbWJlcnMgYnkgMjAyMiBpbiBhbiBpbmR1c3RyeSB0aGF0IGlzIHdvcnRoIMKjMS43IGJpbGxpb24gcGVyIGFubnVtLlwiLFwibG9nb1wiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvZml0LWluLzEwMHgxMDAvZmlsdGVyczpmaWxsKGZmZmZmZiwxKS9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9maWxlcy9waXRjaF9waWNzL29yaWdpbmFsLzIwMTcwOS9sb2dvX2Zvcl9jcm93ZGN1YmVfNTA1MDE0ZGQ5ODY5NDliYTI5ZmIyNzQ5M2Q3MDM1MzIuanBnXCIsXCJpbWFnZVwiOlwiaHR0cHM6Ly9pbWFnZXMuY3Jvd2RjdWJlLmNvbS91bnNhZmUvMzUweDE2OC9odHRwczovL2ZpbGVzLWNyb3dkY3ViZS1jb20uczMuYW1hem9uYXdzLmNvbS9vcHBvcnR1bml0eV9pbWFnZXMvMjE2MTIvMjAxNzA5L2hlYWRlcl9pbWFnZV8yMDE3MDkyMF8yYzFiMGU5YzdjOTRkYjU0YWY5ZDMwMDQ0NDVmMDEzNy5qcGdcIixcInRhcmdldFwiOjE1MDAwMCxcInJhaXNlZFwiOjcxNTkwLFwiZXF1aXR5XCI6XCI1LjAwJVwiLFwiaW52ZXN0b3JzXCI6MTExfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvaWRlYXMuanNvblxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnN0IGlkZWFTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB0YXJnZXQ6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICByYWlzZWQ6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIGVxdWl0eToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGludmVzdG9yczoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY29uc3QgSWRlYSA9IG1vbmdvb3NlLm1vZGVsKCdJZGVhJywgaWRlYVNjaGVtYSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yYWdlL21vZGVsL2lkZWEudHMiLCJpbXBvcnQgU2VydmVyIGZyb20gJy4vc2VydmVyJztcclxuaW1wb3J0IE1vbmdvIGZyb20gJy4vc3RvcmFnZS9tb25nbyc7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7VmVyaWZ5VXNlcn0gZnJvbSAnLi92ZXJpZnktdXNlcic7XHJcblxyXG5sZXQgc2VydmVyID0gU2VydmVyLmdldEluc3RhbmNlKCk7XHJcbk1vbmdvLmNvbm5lY3QoKTtcclxuTW9uZ28ucG9wdWxhdGVEQigpO1xyXG5cclxuc2VydmVyLnVzZSgnL2FwaScsIFZlcmlmeVVzZXIsIHJlcXVpcmUoJy4vcm91dGVzL2FwaVJvdXRlcycpKTtcclxuXHJcblxyXG5cclxuLy9nZW5lcmljIGVycm9yIGhhbmRsZXJcclxuc2VydmVyLnVzZSgoZXJyOiBFcnJvciwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcclxuICAgICAgICBlcnJvcjogNTAwXHJcbiAgICB9KVxyXG59KSBcclxuXHJcbnNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCBjb25maWcuc2VydmVyLlBPUlQsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyggYHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAgJHtwcm9jZXNzLmVudi5QT1JUIHx8IGNvbmZpZy5zZXJ2ZXIuUE9SVH1gKTtcclxufSlcclxuXHJcblxyXG4vL3NlcnZlci5saXN0ZW4oKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlciB7XHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6IGV4cHJlc3MuRXhwcmVzcztcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIFNlcnZlci5pbnN0YW5jZSA9IGV4cHJlc3MoKTtcclxuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1vcmdhbignZGV2JykpO1xyXG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgICAgIFNlcnZlci5pbnN0YW5jZS51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogZmFsc2V9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBzZXJ2ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKCFTZXJ2ZXIuaW5zdGFuY2Upe1xyXG4gICAgICAgICAgICBTZXJ2ZXIuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2VydmVyLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVzZShtaWRkbGV3YXJlOiBleHByZXNzLlJlcXVlc3RIYW5kbGVyIHwgZXhwcmVzcy5FcnJvclJlcXVlc3RIYW5kbGVyKXtcclxuICAgICAgICBTZXJ2ZXIuaW5zdGFuY2UudXNlKG1pZGRsZXdhcmUpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtwb3B1bGF0ZURCfSBmcm9tICcuL3BvcHVsYXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmdvIHtcclxuXHJcbiAgICBzdGF0aWMgZGI6IG1vbmdvb3NlLkNvbm5lY3Rpb247XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcG9wdWxhdGUgbW9uZ28gZGIgd2l0aCBzb21lIG1vY2sgZGF0YVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcG9wdWxhdGVEQigpe1xyXG4gICAgICAgIHBvcHVsYXRlREIoTW9uZ28uZGIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgbW9uZ29vc2UuQ29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29ubmVjdCgpIDptb25nb29zZS5Db25uZWN0aW9uIHtcclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5tb25nby51cmksIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgTW9uZ28uZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG4gICAgICAgIE1vbmdvLmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcicpKTtcclxuICAgICAgICBNb25nby5kYi5vbmNlKCdvcGVuJywgY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnY29ubmVjdGVkIGNvcnJlY3RseSB0byBtb25nbyBkYicpKTtcclxuICAgICAgICByZXR1cm4gTW9uZ28uZGI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9tb25nby50cyIsImV4cG9ydCBjb25zdCBBUFBfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52LnRzIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldmVsb3BtZW50Lmpzb25cIjogMTMsXG5cdFwiLi9pZGVhcy5qc29uXCI6IDMsXG5cdFwiLi9wcm9kdWN0aW9uLmpzb25cIjogMTRcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxMjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcgXlxcLlxcLy4qXFwuanNvbiRcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wic2VydmVyXCI6e1wiUE9SVFwiOjkwMDJ9LFwibW9uZ29cIjp7XCJ1cmlcIjpcIm1vbmdvZGI6Ly9oZXJva3VfNWhxeHI0ODE6Zms1OWc0aDVvdjRwN2RqdmlwZGs4bjNna2NAZHMyNDk1NjUubWxhYi5jb206NDk1NjUvaGVyb2t1XzVocXhyNDgxXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNlcnZlclwiOntcIlBPUlRcIjo4MDgwfSxcIm1vbmdvXCI6e1widXJpXCI6XCJtb25nb2RiOi8vaGVyb2t1XzVocXhyNDgxOmZrNTlnNGg1b3Y0cDdkanZpcGRrOG4zZ2tjQGRzMjQ5NTY1Lm1sYWIuY29tOjQ5NTY1L2hlcm9rdV81aHF4cjQ4MVwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogc2NyaXB0IGZvciBpbml0aWFsIGRiIHBvcHVsYXRpb25cclxuICovXHJcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHtJZGVhfSBmcm9tICcuL21vZGVsL2lkZWEnO1xyXG5jb25zdCBpZGVhcyA9IHJlcXVpcmUoJy4uL2NvbmZpZy9pZGVhcy5qc29uJyk7XHJcblxyXG5jb25zdCBjbGVhckNvbGxlY3Rpb24gPSAoY29sbGVjdGlvbjogbW9uZ29vc2UuTW9kZWw8YW55PiwgY2xiOiBhbnkpID0+IHtcclxuICAgIGNvbGxlY3Rpb24ucmVtb3ZlKHt9LCBjbGIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9wdWxhdGVEQiA9IChkYjogbW9uZ29vc2UuQ29ubmVjdGlvbikgPT4ge1xyXG4gICAgY2xlYXJDb2xsZWN0aW9uKElkZWEsICgpID0+IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSwgJ0lkZWEgY29sbGVjdGlvbiBjbGVhcmVkJykpO1xyXG4gICAgSWRlYS5jcmVhdGUoaWRlYXMsIChlcnIsIGlkZWFzKSA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnZGIgcG9wdWxhdGVkIGNvcnJlY3RseScpO1xyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmFnZS9wb3B1bGF0ZS50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG4vKipcclxuICogTWlkZGxld2FyZSB0byBhdXRoZW50aWNhdGUgYSB1c2VyXHJcbiAqIEBwYXJhbSByZXFcclxuICogQHBhcmFtIHJlcyBcclxuICogQHBhcmFtIG5leHQgXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFZlcmlmeVVzZXIgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuXHJcbiAgICAvL2hlcmUgdGhlcmUgc2hvdWxkIGJlIGFuIGF1dGhlbnRpY2F0aW9uIG1lY2hhbmlzbSB0byBhdXRoZW50aWNhdGUgZWFjaCByZXF1ZXN0IGJlZm9yZSB0cmlnZ2VyIHRoZSBuZXh0XHJcbiAgICAvL21pZGRsZXdhcmUsIGZvciB0aGlzIHNhbXBsZSBwcm9qZWN0IGkganVzdCBjYWxsIHRoZSBuZXh0IG1pZGRsZXdhcmUgaW4gdGhlIGNoYWluIHdpdGhvdXQgZG9pbmcgYW55XHJcbiAgICAvL2F1dGhlbnRpY2F0aW9uXHJcblxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92ZXJpZnktdXNlci50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7SWRlYX0gZnJvbSAnLi4vc3RvcmFnZS9tb2RlbC9pZGVhJztcclxuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgSWRlYS5maW5kKHt9LCAoZXJyOiBtb25nb29zZS5FcnJvciwgaWRlYXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGlkZWFzKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnLzppZCcsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcblxyXG59KVxyXG5cclxuXHJcbnJvdXRlci5kZWxldGUoJy86aWQnLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xyXG5cclxufSlcclxuXHJcbi8vY1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL2FwaVJvdXRlcy50cyJdLCJzb3VyY2VSb290IjoiIn0=