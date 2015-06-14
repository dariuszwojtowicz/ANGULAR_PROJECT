app.controller('InboxCtrl', function ($scope, $http, $location, emailService) {
	$scope.inbox = [];
	$scope.interval = 30;

	$scope.getEmails = function () {
		emailService.getEmails().then(function(res) {
            $scope.inbox = res.data;
        });
	};

	$scope.delete = function () {
		var id = this.mail.id;
		emailService.deleteEmail(id).then(function(res) {
            $location.path("/inbox");
        });
	}

	$scope.read = function () {
		var id = this.mail.id;
		emailService.setAsRead(id).then(function(res) {
            $scope.getEmails();
        });
	}

	$scope.getEmails();
	//setInterval(function () {$scope.getEmails()}, 1000 * $scope.interval);
});
