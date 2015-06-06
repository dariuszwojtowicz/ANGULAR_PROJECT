app.controller('ListCtrl', function ($scope, $http) {
	$scope.inbox = [];
	$scope.outbox = [];
	$scope.interval = 30;

	$scope.getEmails = function () {
		$http.get('/emails').success(function (res) {
			$scope.inbox = res;
		});
	};

	$scope.getSent = function () {
		$http.get('/sent').success(function (res) {
			$scope.outbox = res;
		});
	};

	$scope.delete = function () {
		var id = this.mail.id;
		$http.delete('/emails/' + id).success(function (res) {
			$scope.getEmails();
			$scope.getSent();
		});
	}

	$scope.read = function () {
		var id = this.mail.id;
		$http.put('/emails/' + id, { read: true }).success(function (res) {
			$scope.getEmails();
		});
	}

	$scope.getSent();
	$scope.getEmails();
	//setInterval(function () {$scope.getEmails()}, 1000 * $scope.interval);
	//setInterval(function () {$scope.getSent()}, 1000 * $scope.interval);
});
