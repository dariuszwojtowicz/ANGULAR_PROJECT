app.controller('ConfigCtrl', function ($scope, localStorageService) {

    var defaultInterval=10000;
    var defaultColor='#fff';

    $scope.getInterval = function() {
        if(localStorageService.get("Interval") !== null) {
            return localStorageService.get("Interval");
        } else {
            return defaultInterval;
        }
    };

    $scope.setInterval = function(interval) {
        localStorageService.set("Interval",parseInt(interval,10));
    };

    localStorageService.cookie.get("color");

    $scope.getColor = function() {
        if(localStorageService.get("color") !== null) {
            return localStorageService.get("color");
        } else {
            document.body.style.backgroundColor = ""+defaultColor+"";
        }
    };

    $scope.setColor = function(color) {
        localStorageService.set("color",color);
        localStorageService.cookie.set("color",color);
        document.body.style.backgroundColor = ""+color+"";
    };

    $scope.getColor();
    $scope.getInterval();
});
