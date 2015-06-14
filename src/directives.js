app.directive('search', function () {
	return {
		restrict: 'E',
		scope: {},
		controller: 'listCtrl',
		templateUrl: 'partials/search.html'
	};
});