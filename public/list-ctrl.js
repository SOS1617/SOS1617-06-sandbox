/* global angular */
angular.module("ContactsManagerApp").
controller("ListCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("Controller initialized");

    function refresh() {
        $http
            .get("api/v1/contacts")
            .then(function(response) {
                $scope.contacts = response.data;
            });
    }


    $scope.addContact = function() {
        $http
            .post("api/v1/contacts", $scope.newContact)
            .then(function(response) {
                console.log("Contact added!");
                refresh();
            });
    };

    $scope.delContact = function(contact) {
        $http
            .delete("api/v1/contacts/" + contact.name)
            .then(function(response) {
                console.log("Contact " + contact.name + " deleted!");
                refresh();
            });
    };


    refresh();
}]);
