app.controller('ConfigCtrl', function($scope) {

    var defaultInterval = 10000;
    var defaultColor = 'white';
    var localStorage = window["localStorage"];

    $scope.setInterval = function(interval) {
        localStorage["Interval"] = parseInt(interval, 10);
    };

    $scope.setColor = function(color) {
        localStorage["color"] = color;
    };

    $scope.getColor = function() {
        if (localStorage["color"] !== null) {
            return localStorage["color"];
        } else {
            return defaultColor;
        }
    };
});
