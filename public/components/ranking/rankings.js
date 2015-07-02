var module = angular.module('fencerRankings');

module.controller('rankingsController',['$scope', 'Fencers', function ($scope, Fencers) {

    Fencers.get()
        .success(function (data) {
            $scope.fencers = data;
        });

}]);