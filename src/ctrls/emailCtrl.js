app.controller('EmailCtrl', function($scope, $http, $location, emailService) {
    var email_id = $location.path().split(":")[1];
    $scope.email = {};

    $scope.getEmail = function() {
        emailService.getEmail(email_id).then(function(email){
            $scope.email = {
                id: email.data.id,
                title: email.data.title,
                date: email.data.sent || email.data.received,
                sender: email.data.sender || "Ja",
                receiver: email.data.receiver || "Ja",
                content: email.data.content
            };
        });
    };

    $scope.callToDeleteEmail = function() {
        emailService.deleteEmail(email_id).then(function(res){
            $location.path("/inbox");
        });
    };

    $scope.respond = function(){
    	$location.path( "/create/:"+$scope.email.id);
    };
});
