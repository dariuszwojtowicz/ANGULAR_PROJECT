app.controller('SentCtrl', function ($scope, $http, emailService) {
	$scope.outbox = [];

	$scope.getSent = function () {
		emailService.getSent().then(function(res) {
            $scope.outbox = res.data;
        });
	};

	$scope.getSent();
});