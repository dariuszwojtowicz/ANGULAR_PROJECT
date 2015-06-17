app = angular.module('myapp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
	.state('inbox', {
		url: "/inbox",
		templateUrl: "partials/inbox.html",
		controller: 'InboxCtrl'
	})
	.state('home', {
		url: "/",
		templateUrl: "partials/inbox.html",
		controller: 'InboxCtrl'
	})
	.state('email', {
		url: "/view/:emailId",
		templateUrl: "partials/email.html",
		controller: 'EmailCtrl'
	})
	.state('sent', {
		url: "/sent",
		templateUrl: "partials/sent.html",
		controller: 'SentCtrl'
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

app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) {
        	text = text.replace(new RegExp('('+phrase+')', 'gi'),'<span class="highlighted">$1</span>');
        }
        return $sce.trustAsHtml(text);
    };
});