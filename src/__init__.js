/* Bower components */
window.Hammer = require('./bower_components/hammerjs/hammer.min.js');
require('./bower_components/angular/angular.js');
require('./bower_components/angular-animate/angular-animate.min.js');
require('./bower_components/angular-aria/angular-aria.min.js');
require('./bower_components/angular-material/angular-material.min.js');
require('./bower_components/angular-material/angular-material.min.css');
require('./bower_components/angular-material/themes/blue-theme.css');
require('./bower_components/angular-material/themes/teal-theme.css');
require('./bower_components/angular-material/themes/red-theme.css');
require('./bower_components/angular-ui-router/release/angular-ui-router.min.js');

require('./js/Controllers/__init__.js');
require('./js/Services/__init__.js');
require('./css/__init__.js');

angular.module('imports', [])
	.value('sjcl', require('./bower_components/sjcl/sjcl.js'))
	.value('JSEncrypt', require('./bower_components/jsencrypt/bin/jsencrypt.min.js'))
	.value('_', require('./bower_components/underscore/underscore-min.js'));

angular.module('giptuApp', [
		'ngMaterial', 'ui.router',

		'imports',

		'controllers', 'services'
	])
	.config([
			'$stateProvider', '$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				var defaultUrl = '/';
				$urlRouterProvider.when('', defaultUrl);
				$urlRouterProvider.otherwise(defaultUrl);


				var home = {
	        name: 'base',
	        url: '/',
	        templateUrl: '/templates/base.html',
	        controller: 'BaseController'
	      };

				$stateProvider.state(home);
			}
		]);