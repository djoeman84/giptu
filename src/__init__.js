/* Bower components */
window.Hammer = require('./bower_components/hammerjs/hammer.min.js');
require('./bower_components/angular/angular.js');
require('./bower_components/angular-animate/angular-animate.min.js');
require('./bower_components/angular-aria/angular-aria.min.js');
require('./bower_components/angular-material/angular-material.min.js');
require('./bower_components/angular-material/angular-material.min.css');
require('./bower_components/angular-ui-router/release/angular-ui-router.min.js');

angular.module('giptuApp', [
		'ngMaterial', 'ui.router'
	])