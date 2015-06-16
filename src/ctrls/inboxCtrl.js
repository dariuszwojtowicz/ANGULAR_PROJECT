app.controller('InboxCtrl', function ($scope, $http, $location, emailService) {
	$scope.inbox = [];

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

	$scope.getEmails();

	setInterval(function () { $scope.getEmails() }, 1000 * emailService.getRefreshInterval());
});

app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
            '<span class="highlighted">$1</span>');

        return $sce.trustAsHtml(text)
    }
});
