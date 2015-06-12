app.controller('CreateCtrl', function($scope, $http, $location) {
    $scope.email = {
        id: null,
        receivers: [],
        title: null,
        content: null,
        sent: null
    }
    $scope.validEmail = true;

    $scope.sendEmail = function() {
        if ($scope.mailForm.$valid) {
            $scope.email.id = Math.floor((Math.random() * 10000000) + 10000000);
            $scope.email.sent = new Date().getTime();

            $http.post('/sent', $scope.email).success(function(res) {
                $location.path( "/sent" );
            });
        }
    };

    $scope.validateEmail = function(){
    	var receivers = $scope.email.receivers;
    	for(var i in receivers){
    		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    		console.log(receivers[i], re.test(receivers[i]))
    		if(!re.test(receivers[i])){
    			$scope.validEmail = false;
    			break;
    		} else {
    			$scope.validEmail = true;
    		}
    	}
    }
});
