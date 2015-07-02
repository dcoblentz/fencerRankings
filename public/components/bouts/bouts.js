var module = angular.module('fencerRankings');

module.controller('boutsController', ['$scope', 'Bouts', function ($scope, Bouts) {

    Bouts.get()
        .success(function (data) {
            $scope.bouts = data;
        });
    
    $scope.formatDate = function(bout) {
        return new Date(bout.date).toDateString();
    };

}]);