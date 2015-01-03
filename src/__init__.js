/* Bower components */
window.Hammer = require('./bower_components/hammerjs/hammer.min.js');
require('./bower_components/angular/angular.js');
require('./bower_components/angular-animate/angular-animate.min.js');
require('./bower_components/angular-aria/angular-aria.min.js');
require('./bower_components/angular-material/angular-material.min.js');
require('./bower_components/angular-material/angular-material.min.css');
require('./bower_components/angular-material/themes/blue-theme.css');
require('./bower_components/angular-material/themes/teal-theme.css');
require('./bower_components/angular-ui-router/release/angular-ui-router.min.js');


require('./js/Controllers/__init__.js');
require('./css/__init__.js');

angular.module('giptuApp', [
		'ngMaterial', 'ui.router',

		'controllers'
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