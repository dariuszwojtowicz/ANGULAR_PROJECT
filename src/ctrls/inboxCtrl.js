app.controller('InboxCtrl', function ($scope, $http) {
	$scope.inbox = [];

	$scope.getEmails = function () {
		$http.get('/emails').success(function (res) {
			$scope.inbox = res;
		});
	};

	$scope.delete = function () {
		var id = this.mail.id;
		$http.delete('/emails/' + id).success(function (res) {
			$scope.getEmails();
		})
	}

	$scope.read = function () {
		var id = this.mail.id;
		$http.put('/emails/' + id, { read: true }).success(function (res) {
			$scope.getEmails();
		})
	}

	$scope.getEmails();
	//setInterval(function () {$scope.getEmails()}, 1000);
});
