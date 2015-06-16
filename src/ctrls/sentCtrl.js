app.controller('SentCtrl', function ($scope, $http, emailService) {
	$scope.outbox = [];

	$scope.getSent = function () {
		emailService.getSent().then(function(res) {
            $scope.outbox = res.data;
        });
	};

	$scope.getSent();
});

app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
            '<span class="highlighted">$1</span>');

        return $sce.trustAsHtml(text)
    }
});