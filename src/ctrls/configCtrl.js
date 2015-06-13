app.controller('ConfigCtrl', function ($scope) {

    $scope.changeColor = function(color) {
        document.body.style.backgroundColor = ""+color+"";
    };
    

});

app.factory('userService', ['$rootScope', function ($rootScope) {

    var service = {

        model: {
            backgroundColor: ''
        },

        SaveState: function () {
            sessionStorage.userService = angular.toJson(service.model);
        },

        RestoreState: function () {
            service.model = angular.fromJson(sessionStorage.userService);
        }
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);
