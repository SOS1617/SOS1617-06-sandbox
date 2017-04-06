/* global angular */
var app = angular.module("RESTClient", []);
console.log("App initialized");
app.controller("ListCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("Controller initialized");
    //$scope.test = "petete";
    $scope.url = "https://sos161706md-sandbox-seewip.c9users.io/api/v1/contacts";
    $scope.json = "{}";
    $scope.type = "GET";
    $scope.responsecode = "";
    $scope.send = function() {
        $http({
            method: $scope.type,
            url: $scope.url,
            data: $scope.json,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function success(response) {
            $scope.responsecode = "Response code: " + response.status;
            $scope.responsecode
            $scope.data = JSON.stringify(response.data, null, 2);
        }, function error(response) {
            $scope.responsecode = "Response code: " + response.status;
            $scope.data = response.data;
        });
    }
}]);
