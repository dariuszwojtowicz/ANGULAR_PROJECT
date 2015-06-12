var app = angular.module('myapp', ['ui.router']).config(function($stateProvider) {
	$stateProvider
	.state('inbox', {
		url: "/inbox",
		templateUrl: "partials/inbox.html",
		controller: 'ListCtrl'
	})
	.state('home', {
		url: "/",
		templateUrl: "partials/inbox.html",
		controller: 'ListCtrl'
	})
	.state('email', {
		url: "/view/:emailId",
		templateUrl: "partials/email.html",
		controller: 'EmailCtrl'
	})
	.state('sent', {
		url: "/sent",
		templateUrl: "partials/sent.html",
		controller: 'ListCtrl'
	})
	.state('create', {
		url: "/create",
		templateUrl: "partials/create.html",
		controller: 'CreateCtrl'
	})
	.state('reply', {
		url: "/create/:emailId",
		templateUrl: "partials/create.html",
		controller: 'CreateCtrl'
	})
	.state('config', {
		url: "/config",
		templateUrl: "partials/config.html",
		controller: 'ConfigCtrl'
	});
});
