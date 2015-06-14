app.controller('ConfigCtrl', function($scope) {

    var defaultInterval = 10000;
    var defaultColor = '#fff';
    var localStorage = window["localStorage"];

    $scope.setInterval = function(interval) {
        localStorage["Interval"] = parseInt(interval, 10);
    };
    $scope.setColor = function(color) {
        localStorage["color"] = color;
        document.body.style.backgroundColor = "" + color + "";
    };

    function getColor() {
        if (localStorage["color"] !== null) {
            document.body.style.backgroundColor = "" + localStorage["color"] + "";
        } else {
            document.body.style.backgroundColor = "" + defaultColor + "";
        }
    };

    function getInterval() {
        if (localStorage["Interval"] !== null) {
            return localStorage["Interval"];
        } else {
            return defaultInterval;
        }
    };

    getInterval();
    getColor();
});