app.controller('ConfigCtrl', function ($scope) {

    $scope.changeColor = function(color) {
        document.body.style.backgroundColor = ""+color+"";
    };

});
