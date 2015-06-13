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
	};

	$scope.read = function () {
		var id = this.mail.id;
		$http.put('/emails/' + id, { read: true }).success(function (res) {
			$scope.getEmails();
		});
	};

    $scope.filterFunction = function(element) {
        return element.title.match(/^Ma/) ? true : false;
    };

	$scope.getSent();
	$scope.getEmails();
	//setInterval(function () {$scope.getEmails()}, 1000 * $scope.interval);
	//setInterval(function () {$scope.getSent()}, 1000 * $scope.interval);
});

//app.filter('searchFor', function(){
//
//    // All filters must return a function. The first parameter
//    // is the data that is to be filtered, and the second is an
//    // argument that may be passed with a colon (searchFor:searchString)
//
//    return function(arr, searchString){
//
//        if(!searchString){
//            return arr;
//        }
//
//        var result = [];
//
//        searchString = searchString.toLowerCase();
//
//        // Using the forEach helper method to loop through the array
//        angular.forEach(arr, function(item){
//
//            if(item.title.toLowerCase().indexOf(searchString) !== -1){
//                result.push(item);
//            }
//
//        });
//
//        return result;
//    };
//
//});
