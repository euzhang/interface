/**
 *
 * routerParse.js
 * 从配置文件中解析路由
 *
 */
var config = require('./config');
var map = require('./util/map');
var name = '{	"first_name" : "hi",	"last_name" : "hello"}';

/**
 * @param {json} config 配置文件中的路由json对象
 */
function routerParse(config) {

	// console.log(config);
	// console.log(config.port);
	// console.log(config.routers);

	var routerMap = new map();
	var configstr = JSON.stringify(config);
	var contact = JSON.parse(configstr);
	// console.log(configstr);

	for (var key in contact) {
		if (key == 'port') {
			// console.log('%s, %s ', key, contact[key]);
		}
		if (key == 'routers') {
			//console.log('%s, %s ', key, contact[key]);
			var routers = contact[key];
			for (var i = 0; i < routers.length; i++) {

				routerMap.put(routers[i]['surl'], routers[i]);
				// console.log(routers[i]);
				// for (var elem in routers[i]) {
				// console.log('%s, %s ', elem, routers[i][elem]);
				// }
			}
		}
	}

	// print map
	// console.log('%s, %s', '/hi', routerMap.get('/hi')["fields"]);

	return routerMap;
}

// function say(words) {
// console.log(words);
// }

// function execute(someFunction, value) {
// someFunction(value);
// }

// execute(say, "Hello");

// routerParse(config);

// console.log('hi');


module.exports = routerParse;
