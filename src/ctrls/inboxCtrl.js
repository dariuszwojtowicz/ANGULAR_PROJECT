app.controller('InboxCtrl', function ($scope, $http, $location, $interval, emailService) {
	$scope.inbox = [];
	var interval;

	$scope.getEmails = function () {
		emailService.getEmails().then(function(res) {
            $scope.inbox = res.data;
        });
	};

	$scope.delete = function () {
		event.target.disabled = 'disabled';
		var id = this.mail.id;
		emailService.deleteEmail(id).then(function(res) {
            $location.path("/inbox");
        });
	};

	$scope.read = function () {
		if (event.target.id == 'delete') {
			return;
		}
		var id = this.mail.id;
		$location.path('/view/:' + id);
		if (!this.mail.read) {
			emailService.setAsRead(id);
		}
	};

	$scope.$on('$destroy', function(){
		emailService.clearIntervalAction();
	});

	$scope.getEmails();
	
	interval = $interval(function () { $scope.getEmails(); }, 1000 * emailService.getRefreshInterval());
	emailService.setIntervalAction(interval);
});
