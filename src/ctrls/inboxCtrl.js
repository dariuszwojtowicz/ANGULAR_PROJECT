app.controller('InboxCtrl', function ($scope, $http, $location, $interval, emailService) {
	$scope.inbox = [];
	var interval;

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
	};

	$scope.read = function () {
		var id = this.mail.id;
		emailService.setAsRead(id).then(function(res) {
            $scope.getEmails();
        });
	};

	$scope.$on('$destroy', function(){
		emailService.clearIntervalAction();
	});

	$scope.getEmails();
	
	interval = $interval(function () { $scope.getEmails() }, 1000 * emailService.getRefreshInterval());
	emailService.setIntervalAction(interval);
});
