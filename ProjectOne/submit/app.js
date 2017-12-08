var app = angular.module('myApp', []).controller('myCtrl', function ($scope) {

    $scope.names = [{ firstname: "Bimal", lastname: "Parajuli" },
    { firstname: "Julia", lastname: "Chen" }
    ];


    $scope.list = ["abc"];
    $scope.text = 'hello';
    $scope.firstName = "firstname";
    $scope.lastName = "lastname";
    $scope.submitText = function () {

        if ($scope.text) {
            $scope.list.push(this.text);
            $scope.text = '';
        }
    };


    $scope.submitName = function () {


        $scope.names.push({ firstname: this.firstName, lastname: this.lastName });
        $scope.firstName = '';
        $scope.lastName = '';


    };


});
