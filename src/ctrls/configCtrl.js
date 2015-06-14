app.controller('ConfigCtrl', function($scope, $window, emailService) {
    var defaultColor = 'white';
    var localStorage = $window["localStorage"];
    $scope.interval =  parseInt(localStorage["interval"]) || 10;

    $scope.setRefreshInterval = function() {
        localStorage["interval"] = parseInt($scope.interval, 10);
    };

    $scope.setColor = function(color) {
        localStorage["color"] = color;
    };

    $scope.getColor = function() {
        return localStorage["color"] || defaultColor;
    };
});
