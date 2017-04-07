/* global angular */
angular.module("ContactsManagerApp").
controller("ListCtrl", ["$scope", "$http", function($scope, $http) {
    console.log("Controller initialized");

    function refresh() {
        $http
            .get("api/v1/contacts")
            .then(function(response) {
                $scope.contacts = response.data;
                console.log("Contacts count: " + $scope.contacts.length);
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

    $scope.editContact = function(contact) {
        $http
            .put("api/v1/contacts/" + contact.name, contact)
            .then(function(response) {
                console.log("Contact " + contact.name + " edited!");
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

    $scope.delAllContacts = function() {
        $http
            .delete("api/v1/contacts")
            .then(function(response) {
                console.log("All contacts deleted!");
                refresh();
            });
    };

    $scope.loadInitialContacts = function() {
        refresh();
        if ($scope.contacts.length == 0) {
            $http
                .get("api/v1/contacts/loadInitialData")
                .then(function(response) {
                    console.log("Initial contacts loaded");
                    refresh();
                });
        }
        else {
            console.log("Contacts must be empty!");
        }
    };

    refresh();
}]);
