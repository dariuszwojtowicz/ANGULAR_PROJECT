app.directive('search', function () {
	return {
		restrict: 'E',
		templateUrl: 'partials/search.html'
	};
});

app.directive('menu', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/menu.html'
    };
});